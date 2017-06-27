const express = require('express');
const router = express.Router();

router.get('/kontakt', function (req, res) {
    //res.end("Forside til galleri");
    res.render('kontakt', {
        "pageTitle": "Kontaktsiden",
        "pageId": "kontakt"
    });
});

module.exports = router;