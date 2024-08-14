const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Use POST instead of GET for creating a user
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body); // Correct instantiation of the User model
        await user.save(); // Save the user to the database
        res.status(201).send(user); // Respond with the created user and a 201 status
    } catch (error) {
        res.status(400).send({ error: error.message }); // Handle errors properly
    }
});

module.exports = mongoose.model('user', UserSchema);
