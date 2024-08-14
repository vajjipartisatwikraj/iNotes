const express = require('express');
const router = express.Router();
const Note = require('../models/Notes'); //importing Notes.js File
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator'); //importing Express Validator


router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Enter a valid description').isLength({ min: 5 }),
], async (req, res) => {
    const { title, description, tag } = req.body;
    
    // Validating the request and returning errors if any
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ status: 'error', errors: errors.array() });
    }

    try {
        // Check if req.user is set
        if (!req.user) {
            return res.status(401).send({ status: 'error', message: 'User not authenticated' });
        }

        // Creating a new note
        const note = new Note({
            title,
            description,
            tag,
            user: req.user.id
        });

        const savedNote = await note.save();
        res.json({ status: 'success', data: savedNote });

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ status: 'error', message: 'Internal Server Error' });
    }
});


router.get('/fetchallnotes', fetchuser, async (req, res)=>{
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);  // Corrected: Sending response only once
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


router.post('./updatenote/:id', fetchuser, async (req, res) =>{
    const {title, description, tag} = req.body

    const newNote = {};
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag}
})

module.exports = router