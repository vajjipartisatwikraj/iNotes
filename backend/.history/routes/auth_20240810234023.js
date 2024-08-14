const express = require('express');
const router = express.Router();
const User = require('../models/User');  // Correctly import the User model

router.post('/',(req, res) => {
    try {
        console.log(req.body);
        const new user = User(req.body); // Create a new user instance
        user.save(); // Save the user to the database
        res.status(201).send(user); // Respond with the created user
    } catch (error) {
        res.status(400).send({ error: error.message }); // Handle errors
    }
});

module.exports = router;
