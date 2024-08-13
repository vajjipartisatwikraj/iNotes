const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const JWT_SECRET = '1234567890';


//ROUTE1:- Creating a user using: /api/auth/createuser
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Incorrect mail ID').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {

    //Checking for SignUp Details errors and returning the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    //Checking If the user already exists or not
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

        //Encrypting the User password using BCRYPT(Converting to HASH and adding SALT)
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        //Creating the user and Adding to DATABASE
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });

        //Accessing the ID of Registered USER
        const data = {
            user : {
                id : user.id
            }
        }
        //Converting the DATA into JWT
        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({authToken})

    //Handling the Error and returning the Error
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


//ROUTE2:- Creating a user using: /api/auth/login
router.post('/login', [
    body('email', 'Incorrect mail ID').isEmail(),
    body('password', 'Password not entered..').exists()
], async (req, res) => {

    //Checking for Login Details errors and returning the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //Checking If the user already exists or not
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error : "Login with correct credentials"})
        }


        const passwordCompare = await bcrypt.compare(password, user.password)
        if(!passwordCompare){
            return res.status(400).json({error : "Login with correct credentials"})
        }

        const data = {
            user : {
                id : user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({authToken})

    } catch(error){
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;
