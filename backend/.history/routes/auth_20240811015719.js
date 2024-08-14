const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const JWT_SECRET = '1234567890';

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Incorrect mail ID').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check if the user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        // Create the user if they don't exist
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });

        const data = {
            user : {
                id : user.id
            }
        }

        const jwtData = jwt.sign(data, JWT_SECRET)
        console.log(jwtData)

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
