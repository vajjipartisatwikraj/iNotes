const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes'); //importing Notes.js File
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator'); //importing Express Validator


router.post('./addnotes', [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({min : 5}),
], async (req,res)=>{

    const [ title, description, tag] = req.user.id;
    //Validating the SignUp Credentials and returning the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const note = new Notes({

    })

    res.json(notes)
})


router.get('/fetchallnotes', fetchuser, async (req, res)=>{
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);  // Corrected: Sending response only once
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router