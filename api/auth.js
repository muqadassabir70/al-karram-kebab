/* ==================================================
        AL KARRAM KEBAB - OWNER AUTHENTICATION API
================================================== */
const crypto = require('crypto');

function getSecret() {
    return process.env.JWT_SECRET || 'alkarram_super_secret_jwt_key_2026';
}

function getOwnerEmail() {
    const raw = process.env.OWNER_EMAIL || 'owner@alkarramkebab.com';
    return String(raw).trim().toLowerCase().replace(/^["']|["']$/g, '');
}

function getOwnerPassword() {
    const raw = process.env.OWNER_PASSWORD || 'alkarram2026';
    return String(raw).trim().replace(/^["']|["']$/g, '');
}

function createToken(payload) {
    const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
    const body = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + 86400000 * 7 })).toString('base64url');
    const signature = crypto.createHmac('sha256', getSecret()).update(header + '.' + body).digest('base64url');
    return header + '.' + body + '.' + signature;
}

function verifyToken(token) {
    if (!token || typeof token !== 'string') return null;
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [header, body, signature] = parts;
    const expected = crypto.createHmac('sha256', getSecret()).update(header + '.' + body).digest('base64url');
    if (expected !== signature) return null;
    try {
        const payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
        if (payload.exp && payload.exp < Date.now()) return null;
        return payload;
    } catch (e) {
        return null;
    }
}

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
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.end(JSON.stringify(data));
}

module.exports = async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return res.end();
    }

    if (req.method === 'POST') {
        const body = await parseJsonBody(req);
        const email = (body && body.email) ? String(body.email).trim().toLowerCase() : '';
        const password = (body && body.password) ? String(body.password).trim() : '';
        const configuredEmail = getOwnerEmail();
        const correctPassword = getOwnerPassword();

        // If OWNER_EMAIL was explicitly defined by user in env, enforce it
        if (process.env.OWNER_EMAIL && email && email !== configuredEmail) {
            return sendJson(res, 401, { success: false, message: 'Credenciales de propietario incorrectas' });
        }

        // Validate password
        if (!password || password !== correctPassword) {
            return sendJson(res, 401, { success: false, message: 'Credenciales de propietario incorrectas' });
        }

        const effectiveEmail = email || configuredEmail;
        const token = createToken({ role: 'owner', email: effectiveEmail, loginTime: Date.now() });
        return sendJson(res, 200, {
            success: true,
            token,
            email: effectiveEmail,
            message: 'Autenticación correcta'
        });
    }

    if (req.method === 'GET') {
        const authHeader = (req && req.headers && (req.headers['authorization'] || req.headers['Authorization'])) || '';
        const token = authHeader.replace(/^Bearer\s+/i, '').trim();
        const verified = verifyToken(token);

        if (!verified || verified.role !== 'owner') {
            return sendJson(res, 401, { success: false, authenticated: false });
        }

        return sendJson(res, 200, { success: true, authenticated: true });
    }

    return sendJson(res, 405, { success: false, message: 'Method not allowed' });
};

module.exports.verifyToken = verifyToken;
