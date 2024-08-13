const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes'); //importing Notes.js File
const fetchuser = require('../middleware/fetchuser');

router.get('/fetchallnotes', fetchuser, async (req, res)=>{
    const notes = await Notes.find({user : req.user.id})
    res.json(notes)
})

module.exports = router