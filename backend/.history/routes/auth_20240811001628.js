const express = require('express');
const router = express.Router();
const User = require('../models/User');  // Correctly import the User model
const { body, validationResult } = require('express-validator');

router.post('/', [
    body('name').isLength({ min : 3}),
    body('email').isEmail(),
    body('password').isLength()
],  (req, res) => {
        console.log(req.body);
        const user = User(req.body); // Create a new user instance
        user.save(); // Save the user to the database
        res.send(user); // Respond with the created user
});

module.exports = router;
