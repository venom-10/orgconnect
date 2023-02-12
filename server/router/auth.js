const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send(`Hello World from router.js`);
});

router.post('/register', (req,res) => {
    console.log(req.body);
    res.json({Message:req.body});
});

module.exports = router;
