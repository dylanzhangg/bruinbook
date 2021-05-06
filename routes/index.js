const express = require('express');
const router = express.Router();

const accounts = require('./accounts');

router.get('/', (req, res) =>{
    res.send("Connected");
});

router.use('/accounts', accounts);

module.exports = router;