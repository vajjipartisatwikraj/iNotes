const express = require('express');
const router = express.Router()
const user = require('../models/User')

router.get('/', (req, res)=>{
    console.log(req.body)
    const s = req.body
    const user = User(req.body)
    res.send(s)
})

module.exports = router