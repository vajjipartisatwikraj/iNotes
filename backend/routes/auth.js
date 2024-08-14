const express = require('express'); // Importing Express
const router = express.Router(); // Importing Express Router
const { body, validationResult } = require('express-validator'); // Importing Express Validator
const User = require('../models/User'); // Importing User model
const bcrypt = require('bcryptjs'); // Importing BCRYPT
var jwt = require('jsonwebtoken'); // Importing JSON Web Token
const fetchuser = require('../middleware/fetchuser'); // Importing Middleware
const JWT_SECRET = '123456789'; // JWT Secret

// ROUTE1: Create a user using endpoint: /api/auth/createuser
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Incorrect mail ID').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {
    let success = false;

    // Validating the SignUp Credentials
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    // Checking if the user already exists
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "User already exists" });
        }

        // Encrypting the user password using BCRYPT
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Creating the user and adding to database
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });

        // Generating JWT token
        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });

        success = true;
        res.json({ success, authToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// ROUTE2: Login user using endpoint: /api/auth/login
router.post('/login', [
    body('email', 'Incorrect mail ID').isEmail(),
    body('password', 'Password not entered..').exists()
], async (req, res) => {
    let success = false;

    // Validating the Login Credentials
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    // Checking if the user exists
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success, error: "Login with correct credentials" });
        }

        // Comparing the registered user password with provided password
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "Login with correct credentials" });
        }

        // Generating JWT token
        const data = {
            user: {
                id: user.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' });

        success = true;
        res.json({ success, authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

// ROUTE3: Get logged-in user details using endpoint: /api/auth/getuser
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(401).send('Internal server Error');
    }
});

module.exports = router;
