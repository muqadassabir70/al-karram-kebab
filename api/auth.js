/* ==================================================
        AL KARRAM KEBAB - OWNER AUTHENTICATION API
================================================== */
const crypto = require('crypto');

function getSecret() {
    const raw = process.env.JWT_SECRET || 'alkarram_super_secret_jwt_key_2026';
    return String(raw).trim().replace(/^["']|["']$/g, '');
}

function getOwnerEmail() {
    const raw = process.env.OWNER_EMAIL || 'owner@alkarramkebab.com';
    return String(raw).trim().toLowerCase().replace(/^["']|["']$/g, '');
}

function getOwnerPassword() {
    const raw = process.env.OWNER_PASSWORD;
    if (!raw) return null;
    return String(raw).trim().replace(/^["']|["']$/g, '');
}

function createToken(payload) {
    const secret = getSecret();
    if (!secret) return null;
    const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
    const body = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + 86400000 * 7 })).toString('base64url');
    const signature = crypto.createHmac('sha256', secret).update(header + '.' + body).digest('base64url');
    return header + '.' + body + '.' + signature;
}

function verifyToken(token) {
    if (!token || typeof token !== 'string') return null;
    const secret = getSecret();
    if (!secret) return null;
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [header, body, signature] = parts;
    const expected = crypto.createHmac('sha256', secret).update(header + '.' + body).digest('base64url');
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
        const configuredEmail = getOwnerEmail();
        const configuredPassword = getOwnerPassword();
        const secret = getSecret();

        const missing = [];
        if (!configuredEmail) missing.push('OWNER_EMAIL');
        if (!configuredPassword) missing.push('OWNER_PASSWORD');
        if (!secret) missing.push('JWT_SECRET');

        // If OWNER_EMAIL, OWNER_PASSWORD, or JWT_SECRET is missing, fail safely with 500
        if (missing.length > 0) {
            res.setHeader('X-Missing-Config', missing.join(','));
            return sendJson(res, 500, {
                success: false,
                message: 'Owner authentication is not configured'
            });
        }

        const body = await parseJsonBody(req);
        const email = (body && body.email) ? String(body.email).trim().toLowerCase() : '';
        const password = (body && body.password) ? String(body.password).trim() : '';

        // Validate credentials server-side with constant-time equality
        const isEmailMatch = email === configuredEmail;
        const passBuf = Buffer.from(password, 'utf8');
        const confBuf = Buffer.from(configuredPassword, 'utf8');
        const isPasswordMatch = passBuf.length === confBuf.length && crypto.timingSafeEqual(passBuf, confBuf);

        if (!isEmailMatch || !isPasswordMatch) {
            return sendJson(res, 401, {
                success: false,
                message: 'Invalid credentials'
            });
        }

        const token = createToken({ role: 'owner', email: configuredEmail, loginTime: Date.now() });
        if (!token) {
            return sendJson(res, 500, {
                success: false,
                message: 'Owner authentication is not configured'
            });
        }

        return sendJson(res, 200, {
            success: true,
            token,
            email: configuredEmail,
            message: 'Authentication successful'
        });
    }

    if (req.method === 'GET') {
        const authHeader = (req && req.headers && (req.headers['authorization'] || req.headers['Authorization'])) || '';
        const token = authHeader.replace(/^Bearer\s+/i, '').trim();
        const verified = verifyToken(token);

        if (!verified || verified.role !== 'owner') {
            return sendJson(res, 401, { success: false, authenticated: false, message: 'Invalid or expired token' });
        }

        return sendJson(res, 200, { success: true, authenticated: true, email: verified.email });
    }

    return sendJson(res, 405, { success: false, message: 'Method not allowed' });
};

module.exports.verifyToken = verifyToken;
module.exports.createToken = createToken;
module.exports.getSecret = getSecret;
module.exports.getOwnerEmail = getOwnerEmail;
module.exports.getOwnerPassword = getOwnerPassword;
