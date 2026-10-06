/* ==================================================
        AL KARRAM KEBAB - DATABASE ACCESS LAYER
        Supports MongoDB Atlas with local file fallback
================================================== */
const fs = require('fs');
const path = require('path');

let MongoClient;
try {
    MongoClient = require('mongodb').MongoClient;
} catch (e) {
    MongoClient = null;
}

let cachedClient = null;
let cachedDb = null;

const LOCAL_DATA_DIR = path.resolve(__dirname, '../data');
const LOCAL_DATA_FILE = path.join(LOCAL_DATA_DIR, 'orders.json');

globalThis.__alkarram_orders_cache = globalThis.__alkarram_orders_cache || null;

let _resolvedStorageFile = null;

function getStorageFilePath() {
    if (_resolvedStorageFile) return _resolvedStorageFile;

    try {
        if (!fs.existsSync(LOCAL_DATA_DIR)) {
            fs.mkdirSync(LOCAL_DATA_DIR, { recursive: true });
        }
        const testFile = path.join(LOCAL_DATA_DIR, '.write_test');
        fs.writeFileSync(testFile, '1');
        fs.unlinkSync(testFile);
        _resolvedStorageFile = LOCAL_DATA_FILE;
    } catch (e) {
        const os = require('os');
        _resolvedStorageFile = path.join(os.tmpdir(), 'alkarram_orders.json');
    }
    return _resolvedStorageFile;
}

function readLocalOrders() {
    try {
        const filePath = getStorageFilePath();
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            const parsed = JSON.parse(data) || [];
            globalThis.__alkarram_orders_cache = parsed;
            return parsed;
        }
        if (globalThis.__alkarram_orders_cache) {
            return globalThis.__alkarram_orders_cache;
        }
        return [];
    } catch (e) {
        return globalThis.__alkarram_orders_cache || [];
    }
}

function writeLocalOrders(orders) {
    globalThis.__alkarram_orders_cache = orders;
    try {
        const filePath = getStorageFilePath();
        fs.writeFileSync(filePath, JSON.stringify(orders, null, 2), 'utf8');
    } catch (e) {
        console.warn('Local storage write notice:', e.message);
    }
}

async function connectToMongo() {
    const uri = process.env.MONGODB_URI;
    if (!uri || !MongoClient) return null;

    if (cachedClient && cachedDb) {
        return cachedDb;
    }

    try {
        const client = new MongoClient(uri, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000
        });
        await client.connect();
        const dbName = process.env.MONGODB_DB_NAME || 'alkarram_kebab';
        const db = client.db(dbName);

        cachedClient = client;
        cachedDb = db;
        console.log(' connected to MongoDB Atlas (' + dbName + ')');
        return db;
    } catch (err) {
        console.warn(' MongoDB Atlas connection error, using local fallback:', err.message);
        return null;
    }
}

async function createOrder(orderData) {
    const mongoDb = await connectToMongo();
    if (mongoDb) {
        const collection = mongoDb.collection('orders');
        await collection.insertOne({ ...orderData });
        return orderData;
    } else {
        const orders = readLocalOrders();
        orders.unshift(orderData);
        writeLocalOrders(orders);
        return orderData;
    }
}

async function getOrderById(orderId) {
    const mongoDb = await connectToMongo();
    if (mongoDb) {
        const collection = mongoDb.collection('orders');
        const order = await collection.findOne({ $or: [{ orderId: orderId }, { id: orderId }] });
        if (order) {
            delete order._id;
            order.id = order.id || order.orderId;
            order.orderId = order.orderId || order.id;
            order.orderNumber = order.orderNumber || order.orderId;
            order.status = order.status || order.orderStatus;
            order.orderStatus = order.orderStatus || order.status;
            order.deliveryCost = order.deliveryCost !== undefined ? order.deliveryCost : order.deliveryFee;
            order.deliveryFee = order.deliveryFee !== undefined ? order.deliveryFee : order.deliveryCost;
            return order;
        }
        return null;
    } else {
        const orders = readLocalOrders();
        const order = orders.find(o => o.orderId === orderId || o.id === orderId) || null;
        if (order) {
            order.id = order.id || order.orderId;
            order.orderId = order.orderId || order.id;
            order.orderNumber = order.orderNumber || order.orderId;
            order.status = order.status || order.orderStatus;
            order.orderStatus = order.orderStatus || order.status;
            order.deliveryCost = order.deliveryCost !== undefined ? order.deliveryCost : order.deliveryFee;
            order.deliveryFee = order.deliveryFee !== undefined ? order.deliveryFee : order.deliveryCost;
        }
        return order;
    }
}

async function getAllOrders() {
    const mongoDb = await connectToMongo();
    if (mongoDb) {
        const collection = mongoDb.collection('orders');
        const list = await collection.find({}).sort({ createdAt: -1 }).toArray();
        return list.map(item => {
            const copy = { ...item };
            delete copy._id;
            copy.id = copy.id || copy.orderId;
            copy.orderId = copy.orderId || copy.id;
            copy.orderNumber = copy.orderNumber || copy.orderId;
            copy.status = copy.status || copy.orderStatus;
            copy.orderStatus = copy.orderStatus || copy.status;
            copy.deliveryCost = copy.deliveryCost !== undefined ? copy.deliveryCost : copy.deliveryFee;
            copy.deliveryFee = copy.deliveryFee !== undefined ? copy.deliveryFee : copy.deliveryCost;
            return copy;
        });
    } else {
        const list = readLocalOrders();
        return list.map(item => {
            const copy = { ...item };
            copy.id = copy.id || copy.orderId;
            copy.orderId = copy.orderId || copy.id;
            copy.orderNumber = copy.orderNumber || copy.orderId;
            copy.status = copy.status || copy.orderStatus;
            copy.orderStatus = copy.orderStatus || copy.status;
            copy.deliveryCost = copy.deliveryCost !== undefined ? copy.deliveryCost : copy.deliveryFee;
            copy.deliveryFee = copy.deliveryFee !== undefined ? copy.deliveryFee : copy.deliveryCost;
            return copy;
        });
    }
}

async function updateOrderStatus(orderId, newStatus) {
    const now = new Date().toISOString();
    const mongoDb = await connectToMongo();
    if (mongoDb) {
        const collection = mongoDb.collection('orders');
        const result = await collection.findOneAndUpdate(
            { $or: [{ orderId: orderId }, { id: orderId }] },
            { $set: { orderStatus: newStatus, status: newStatus, updatedAt: now } },
            { returnDocument: 'after' }
        );
        if (result && result.value) {
            delete result.value._id;
            const updated = result.value;
            updated.status = newStatus;
            updated.orderStatus = newStatus;
            return updated;
        }
        return await getOrderById(orderId);
    } else {
        const orders = readLocalOrders();
        const idx = orders.findIndex(o => o.orderId === orderId || o.id === orderId);
        if (idx !== -1) {
            orders[idx].orderStatus = newStatus;
            orders[idx].status = newStatus;
            orders[idx].updatedAt = now;
            writeLocalOrders(orders);
            return orders[idx];
        }
        return null;
    }
}

module.exports = {
    connectToMongo,
    createOrder,
    getOrderById,
    getAllOrders,
    updateOrderStatus
};
