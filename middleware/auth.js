const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    // Check for token
    if (!token) return res.status(401).json({ message: 'No token, Authorization denied.' });

    try {
        // Verify token
        // const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const decoded = jwt.verify(token, config.get('JWT_SECRET'));

        // Add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ message: 'Invalid token.' });
    }
}

module.exports = auth;