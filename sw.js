/* ==================================================
        AL KARRAM KEBAB - SERVICE WORKER
        Web Push Notifications for Owner Panel
================================================== */

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
    let data = {};
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data = { title: 'Al Karram Kebab', body: event.data.text() };
        }
    }

    const title = data.title || '🍢 ¡Nuevo Pedido Recibido!';
    const options = {
        body: data.body || 'Nuevo pedido de cliente recibido en Al Karram Kebab',
        icon: data.icon || '/assets/images/combo.png',
        badge: data.badge || '/assets/images/combo.png',
        tag: data.tag || ('order-' + (data.orderId || Date.now())),
        data: {
            url: data.url || '/owner.html',
            orderId: data.orderId || null,
            timestamp: data.timestamp || Date.now()
        },
        vibrate: [300, 100, 300, 100, 400],
        requireInteraction: true,
        renotify: true,
        actions: [
            { action: 'open_order', title: '👀 Ver Pedidos' }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    const targetUrl = (event.notification.data && event.notification.data.url) ? event.notification.data.url : '/owner.html';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
            // Check if Owner Panel is already open
            for (let i = 0; i < windowClients.length; i++) {
                const client = windowClients[i];
                if (client.url && (client.url.includes('/owner.html') || client.url.includes('/owner')) && 'focus' in client) {
                    return client.focus();
                }
            }
            // Otherwise open a new window
            if (clients.openWindow) {
                return clients.openWindow(targetUrl);
            }
        })
    );
});
