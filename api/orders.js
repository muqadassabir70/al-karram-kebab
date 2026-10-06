/* ==================================================
        AL KARRAM KEBAB - ORDERS API
================================================== */
const db = require('../lib/db');
const { verifyToken } = require('./auth');
const { sendNewOrderNotification } = require('../lib/push');

function parseJsonBody(req) {
    return new Promise((resolve) => {
        if (req.body && typeof req.body === 'object') {
            return resolve(req.body);
        }
        let data = '';
        req.on('data', chunk => { data += chunk; });
        req.on('end', () => {
            try {
                resolve(data ? JSON.parse(data) : {});
            } catch (e) {
                resolve({});
            }
        });
    });
}

function sendJson(res, statusCode, data) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.end(JSON.stringify(data));
}

function checkOwnerAuth(req) {
    const authHeader = (req && req.headers && (req.headers['authorization'] || req.headers['Authorization'])) || '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    const verified = verifyToken(token);
    return Boolean(verified && verified.role === 'owner');
}

module.exports = async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return res.end();
    }

    // 1. GET Orders (single by id, or list for owner)
    if (req.method === 'GET') {
        let orderId = (req.query && req.query.id) || null;
        if (!orderId && req.url) {
            try {
                const urlObj = new URL(req.url, 'http://localhost');
                orderId = urlObj.searchParams.get('id');
            } catch (e) {}
        }

        if (orderId) {
            // Public customer tracking endpoint
            try {
                const order = await db.getOrderById(orderId);
                if (!order) {
                    return sendJson(res, 404, { success: false, message: 'Pedido no encontrado' });
                }
                return sendJson(res, 200, { success: true, order });
            } catch (err) {
                return sendJson(res, 500, { success: false, message: err.message });
            }
        }

        // List all orders (requires owner authorization)
        if (!checkOwnerAuth(req)) {
            return sendJson(res, 401, { success: false, message: 'No autorizado. Se requiere acceso de propietario.' });
        }

        try {
            const orders = await db.getAllOrders();
            return sendJson(res, 200, { success: true, orders });
        } catch (err) {
            return sendJson(res, 500, { success: false, message: err.message });
        }
    }

    // 2. POST: Create New Order
    if (req.method === 'POST') {
        try {
            const body = await parseJsonBody(req);

            const customerName = String(body.customerName || '').trim();
            const customerSurname = String(body.customerSurname || '').trim();
            const customerPhone = String(body.customerPhone || body.phone || '').trim();
            const orderType = (body.orderType === 'pickup' || String(body.orderType || '').toLowerCase().includes('recog')) ? 'pickup' : 'delivery';
            const deliveryAddress = String(body.deliveryAddress || body.address || '').trim();
            const deliveryInstructions = String(body.deliveryInstructions || body.notes || '').trim();
            const paymentMethod = body.paymentMethod === 'card' ? 'card' : 'cash';
            const latitude = body.latitude !== undefined && body.latitude !== null ? Number(body.latitude) : (body.location && body.location.lat ? Number(body.location.lat) : null);
            const longitude = body.longitude !== undefined && body.longitude !== null ? Number(body.longitude) : (body.location && body.location.lng ? Number(body.location.lng) : null);
            const locationConfirmed = Boolean(body.locationConfirmed || (body.location && body.location.confirmed));

            // Validation
            if (!customerName) {
                return sendJson(res, 400, { success: false, message: 'El nombre es obligatorio.' });
            }
            if (!customerPhone || customerPhone.replace(/\D/g, '').length < 9) {
                return sendJson(res, 400, { success: false, message: 'El teléfono es obligatorio y debe tener al menos 9 dígitos.' });
            }
            if (orderType === 'delivery' && !deliveryAddress) {
                return sendJson(res, 400, { success: false, message: 'La dirección de entrega es obligatoria para pedidos a domicilio.' });
            }

            const rawItems = Array.isArray(body.items) ? body.items : [];
            if (rawItems.length === 0) {
                return sendJson(res, 400, { success: false, message: 'El pedido debe contener al menos un producto.' });
            }

            // Server-side financial recalculation (prevent tampering)
            let subtotal = 0;
            const items = rawItems.map(item => {
                const qty = Math.max(1, parseInt(item.quantity, 10) || 1);
                const price = parseFloat(item.unitPrice) || 0;
                subtotal += price * qty;

                return {
                    productId: item.productId || 'item',
                    name: item.name || 'Producto',
                    unitPrice: price,
                    quantity: qty,
                    variantName: item.variantName || null,
                    meatName: item.meatName || null,
                    drinkName: item.drinkName || null,
                    extras: Array.isArray(item.extras) ? item.extras : []
                };
            });

            subtotal = Math.round(subtotal * 100) / 100;
            const deliveryFee = (orderType === 'delivery') ? 1.50 : 0.00;
            const total = Math.round((subtotal + deliveryFee) * 100) / 100;

            const orderId = body.orderId || ('AK-' + Math.floor(10000 + Math.random() * 90000));
            const now = new Date().toISOString();

            const order = {
                id: orderId,
                orderId,
                orderNumber: orderId,
                createdAt: now,
                updatedAt: now,
                orderType,
                customerName,
                customerSurname,
                customerPhone,
                phone: customerPhone,
                deliveryAddress: orderType === 'delivery' ? deliveryAddress : 'Recogida en local (Calle Corredera 46)',
                address: orderType === 'delivery' ? deliveryAddress : 'Recogida en local (Calle Corredera 46)',
                latitude,
                longitude,
                locationConfirmed,
                deliveryInstructions,
                notes: deliveryInstructions,
                paymentMethod,
                items,
                subtotal,
                deliveryFee,
                deliveryCost: deliveryFee,
                total,
                orderStatus: 'new',
                status: 'submitted'
            };

            const savedOrder = await db.createOrder(order);
            // Trigger push notification to registered owner devices
            sendNewOrderNotification(savedOrder).catch(err => console.warn('Push dispatch error:', err));
            return sendJson(res, 201, { success: true, order: savedOrder });
        } catch (err) {
            console.error('Error creating order:', err);
            return sendJson(res, 500, { success: false, message: 'Error procesando el pedido en el servidor: ' + err.message });
        }
    }

    // 3. PATCH: Update Order Status (Owner Only)
    if (req.method === 'PATCH') {
        if (!checkOwnerAuth(req)) {
            return sendJson(res, 401, { success: false, message: 'No autorizado. Se requiere acceso de propietario.' });
        }

        try {
            const body = await parseJsonBody(req);
            const orderId = body.orderId || body.id;
            const orderStatus = body.orderStatus || body.status;

            const validStatuses = [
                'new',
                'accepted',
                'preparing',
                'ready',
                'out_for_delivery',
                'ready_for_pickup',
                'completed',
                'rejected'
            ];

            if (!orderId || !validStatuses.includes(orderStatus)) {
                return sendJson(res, 400, { success: false, message: 'Datos de actualización inválidos.' });
            }

            const updated = await db.updateOrderStatus(orderId, orderStatus);
            if (!updated) {
                return sendJson(res, 404, { success: false, message: 'Pedido no encontrado para actualizar.' });
            }

            return sendJson(res, 200, { success: true, order: updated });
        } catch (err) {
            return sendJson(res, 500, { success: false, message: err.message });
        }
    }

    return sendJson(res, 405, { success: false, message: 'Method not allowed' });
};
