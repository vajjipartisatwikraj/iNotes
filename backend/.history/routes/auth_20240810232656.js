//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()
const User = require('../models/User')

router.get('/', (req, res)=>{
    console.log(req.body)
    const s = req.body
    const user = User(req.body)
    user.save()
    res.send(s)
})

module.exports = router