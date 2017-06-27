const express = require('express');
const router = express.Router();

router.get('/galleri', function (req, res) {
    //res.end("Forside til galleri");
    res.render('galleri', {
        "pageTitle": "Galleriet",
        "pageId": "galleri",
    });
});

module.exports = router;