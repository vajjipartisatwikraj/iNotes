const express = require('express');
const router = express.Router();
const User = require('../models/Notes'); //importing Notes.js File
const fetchuser = require('../middleware/fetchuser');


router.get('/fetchallnotes', fetchuser, (req, res)=>{
    

    res.json([])
})

module.exports = router