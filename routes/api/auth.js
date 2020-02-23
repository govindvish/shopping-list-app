const router = require('express').Router();
const User = require('../../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const config = require('config');

// @route   POST api/auth
// @desc    Authenticate user
// @access  Public
router.post('/', (req, res) => {
    const { email, password } = req.body;

    // Simple Validation
    if (!email || !password) {
        return res.status(400).json({ message: 'Please enter all fields.' });
    }

    // Check for existing user
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ message: 'User does not exists.' });

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ message: 'Invalid Credentials.' });

                    jwt.sign(
                        { id: user.id },
                        // process.env.JWT_SECRET,
                        config.get('JWT_SECRET'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;

                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                }
                            })
                        }
                    )
                })
        })

});

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
});



module.exports = router;