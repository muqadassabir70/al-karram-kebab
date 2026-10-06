/* ==================================================
        AL KARRAM KEBAB - LOCAL DEVELOPMENT SERVER
        Serves static files and routes /api/* endpoints
================================================== */
const http = require('http');
const fs = require('fs');
const path = require('path');
const ordersHandler = require('./api/orders');
const authHandler = require('./api/auth');

// Simple .env parser for local dev
const envPath = path.resolve(__dirname, '.env');
if (fs.existsSync(envPath)) {
    try {
        const envContent = fs.readFileSync(envPath, 'utf8');
        envContent.split('\n').forEach(line => {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith('#')) {
                const eqIdx = trimmed.indexOf('=');
                if (eqIdx !== -1) {
                    const key = trimmed.substring(0, eqIdx).trim();
                    const val = trimmed.substring(eqIdx + 1).trim();
                    if (!process.env[key]) {
                        process.env[key] = val;
                    }
                }
            }
        });
        console.log('📄 Loaded environment variables from .env');
    } catch (e) {}
}

const MIME_TYPES = {
    '.html': 'text/html; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.js': 'application/javascript; charset=UTF-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.xml': 'application/xml',
    '.txt': 'text/plain'
};

const PORT = parseInt(process.env.PORT, 10) || 3000;

const server = http.createServer(async (req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = urlObj.pathname;

    // Route API endpoints
    if (pathname === '/api/orders' || pathname.startsWith('/api/orders/')) {
        return ordersHandler(req, res);
    }
    if (pathname === '/api/auth' || pathname.startsWith('/api/auth/')) {
        return authHandler(req, res);
    }

    // Serve static files
    let safePath = pathname === '/' ? '/index.html' : pathname;
    if (safePath === '/owner') safePath = '/owner.html';

    const filePath = path.join(__dirname, safePath);

    // Prevent directory traversal
    if (!filePath.startsWith(__dirname)) {
        res.statusCode = 403;
        return res.end('Access Denied');
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html; charset=UTF-8');
            return res.end('<h1>404 Not Found</h1>');
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        fs.createReadStream(filePath).pipe(res);
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Al Karram Kebab Server running at http://localhost:${PORT}`);
    console.log(`📱 Customer Website:  http://localhost:${PORT}/`);
    console.log(`🛡️ Owner Dashboard:   http://localhost:${PORT}/owner.html`);
    console.log(`⚙️ MongoDB Status:     ${process.env.MONGODB_URI ? 'Configured' : 'Using persistent local disk fallback (data/orders.json)'}`);
});
