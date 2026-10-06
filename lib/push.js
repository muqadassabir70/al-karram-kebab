/* ==================================================
        AL KARRAM KEBAB - WEB PUSH NOTIFICATIONS
================================================== */
const webPush = require('web-push');
const db = require('./db');

function getVapidPublicKey() {
    return (process.env.VAPID_PUBLIC_KEY || 'BPDRXLXtLlpCUYMBObD3M0KEYux8CwsH4tsyh3amg7fpeMULunFDf3JoXBPHOI5OQC8M-O92HfrhSnJDOGft4oA').trim();
}

function getVapidPrivateKey() {
    return (process.env.VAPID_PRIVATE_KEY || '6Jg0rn517kdVIgcOBM0SlqrcW9NiSOFZgIcsgoKMT2U').trim();
}

function getVapidSubject() {
    return (process.env.VAPID_SUBJECT || 'mailto:owner@alkarramkebab.com').trim();
}

let vapidConfigured = false;

function initWebPush() {
    if (vapidConfigured) return true;
    try {
        const pubKey = getVapidPublicKey();
        const privKey = getVapidPrivateKey();
        const subject = getVapidSubject();

        webPush.setVapidDetails(subject, pubKey, privKey);
        vapidConfigured = true;
        return true;
    } catch (e) {
        console.warn('VAPID initialization error:', e.message);
        return false;
    }
}

async function sendNewOrderNotification(order) {
    if (!order) return;
    if (!initWebPush()) return;

    let subscriptions = [];
    try {
        subscriptions = await db.getAllPushSubscriptions();
    } catch (e) {
        console.warn('Could not retrieve push subscriptions:', e);
        return;
    }

    if (!Array.isArray(subscriptions) || subscriptions.length === 0) {
        return;
    }

    const orderNum = order.orderNumber || order.orderId || order.id || 'Nuevo';
    const totalEuro = (parseFloat(order.total) || 0).toFixed(2).replace('.', ',') + '€';
    const custName = (order.customerName || 'Cliente').trim();
    const typeLabel = (order.orderType === 'pickup') ? 'Recogida' : 'Domicilio';

    const payload = JSON.stringify({
        title: '🍢 ¡Nuevo Pedido Recibido!',
        body: `Pedido #${orderNum} • ${totalEuro}\n${custName} (${typeLabel})`,
        icon: '/assets/images/logo.png',
        badge: '/assets/images/logo.png',
        tag: `order-${orderNum}`,
        orderId: order.orderId || order.id,
        url: '/owner.html',
        timestamp: Date.now()
    });

    const pushOptions = {
        TTL: 86400, // 24 hours
        urgency: 'high'
    };

    // Filter duplicate endpoints in case any exist
    const seenEndpoints = new Set();
    const uniqueSubs = subscriptions.filter(sub => {
        if (!sub || !sub.endpoint || seenEndpoints.has(sub.endpoint)) return false;
        seenEndpoints.add(sub.endpoint);
        return true;
    });

    const promises = uniqueSubs.map(async (sub) => {
        try {
            await webPush.sendNotification(sub, payload, pushOptions);
        } catch (err) {
            // Expired or unregistered subscription (410 Gone / 404 Not Found)
            if (err && (err.statusCode === 410 || err.statusCode === 404)) {
                if (sub.endpoint) {
                    try {
                        await db.deletePushSubscription(sub.endpoint);
                    } catch (delErr) {
                        console.warn('Error deleting expired push subscription:', delErr);
                    }
                }
            } else {
                console.warn('Push delivery warning for subscription:', err && (err.message || err.statusCode));
            }
        }
    });

    await Promise.allSettled(promises);
}

module.exports = {
    getVapidPublicKey,
    getVapidPrivateKey,
    getVapidSubject,
    initWebPush,
    sendNewOrderNotification
};
