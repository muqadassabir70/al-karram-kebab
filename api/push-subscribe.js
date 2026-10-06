/* ==================================================
        AL KARRAM KEBAB - PUSH SUBSCRIPTION API
================================================== */
const db = require('../lib/db');
const { getVapidPublicKey } = require('../lib/push');
const { verifyToken } = require('./auth');

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
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
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
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return res.end();
    }

    // GET: Return VAPID Public Key for subscription registration
    if (req.method === 'GET') {
        try {
            const publicKey = getVapidPublicKey();
            return sendJson(res, 200, { success: true, publicKey });
        } catch (err) {
            return sendJson(res, 500, { success: false, message: err.message });
        }
    }

    // POST: Register or update push subscription (Owner Only)
    if (req.method === 'POST') {
        if (!checkOwnerAuth(req)) {
            return sendJson(res, 401, { success: false, message: 'No autorizado. Se requiere acceso de propietario.' });
        }

        try {
            const body = await parseJsonBody(req);
            const sub = body.subscription || body;

            if (!sub || !sub.endpoint || !sub.keys || !sub.keys.p256dh || !sub.keys.auth) {
                return sendJson(res, 400, { success: false, message: 'Datos de suscripción push inválidos.' });
            }

            const subscriptionRecord = {
                endpoint: sub.endpoint,
                expirationTime: sub.expirationTime || null,
                keys: {
                    p256dh: sub.keys.p256dh,
                    auth: sub.keys.auth
                },
                role: 'owner',
                platform: (req.headers && req.headers['user-agent'] && /iphone|ipad|ipod/i.test(req.headers['user-agent'])) ? 'ios' : 'android_or_desktop',
                userAgent: (req.headers && req.headers['user-agent']) || 'Unknown',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            await db.savePushSubscription(subscriptionRecord);
            return sendJson(res, 200, { success: true, message: 'Dispositivo registrado para notificaciones push.' });
        } catch (err) {
            console.error('Error saving push subscription:', err);
            return sendJson(res, 500, { success: false, message: err.message });
        }
    }

    // DELETE: Unsubscribe device (Owner Only)
    if (req.method === 'DELETE') {
        if (!checkOwnerAuth(req)) {
            return sendJson(res, 401, { success: false, message: 'No autorizado.' });
        }

        try {
            const body = await parseJsonBody(req);
            const endpoint = body.endpoint || (req.query && req.query.endpoint);
            if (endpoint) {
                await db.deletePushSubscription(endpoint);
            }
            return sendJson(res, 200, { success: true, message: 'Suscripción eliminada.' });
        } catch (err) {
            return sendJson(res, 500, { success: false, message: err.message });
        }
    }

    return sendJson(res, 405, { success: false, message: 'Method not allowed' });
};
