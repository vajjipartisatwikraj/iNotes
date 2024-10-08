const express = require('express');
const router = express.Router();
const User = require('../models/User');  // Correctly import the User model
const { body, validationResult } = require('express-validator');

router.post('/', [

    body('name').isLength({ min : 3}),
    body('email').isEmail(),
    body('password').isLength({ min : 5})
    
],  (req, res) => {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status[400].json({ errors : errors.array()});
        }

        res.send(req.body); // Respond with the created user
});

module.exports = router;
