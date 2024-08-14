const express = require('express');
const router = express.Router()

router.get('/', (req, res)=>{
    console.log(req.body)
    const s = req.body
    res.send(s)
})

module.exports = router