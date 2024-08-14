const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes'); //importing Notes.js File
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator'); //importing Express Validator


router.post('/addnotes', [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({min : 5}),
], async (req,res)=>{

    const { title, description, tag } = req.body;
    
    // Validating the request and returning errors if any
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Creating a new note
        const note = new Notes({
            title, 
            description, 
            tag, 
            user: req.user.id
        });

        const savedNote = await note.save();
        res.json(savedNote);  // Send the saved note as the response

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
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