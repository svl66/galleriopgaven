const express = require('express');
const router = express.Router();

router.get('/galleri', function (req, res) {
    res.end("Forside til galleri");
});

module.exports = router;