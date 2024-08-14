const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes'); //importing Notes.js File
const fetchuser = require('../middleware/fetchuser');

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