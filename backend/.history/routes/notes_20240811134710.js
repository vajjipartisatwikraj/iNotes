const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');


router.get('/fetchallnotes', fetchuser, (req, res)=>{
    

    res.json([])
})

module.exports = router