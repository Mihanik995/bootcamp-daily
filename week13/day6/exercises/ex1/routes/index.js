const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    res.sendStatus(200)
})

router.get('/about', (req, res) => {
    res.sendStatus(200)
})