const express = require('express');
const router = express.Router();

router.get('/galleri/:id', function (req, res, next) {
    var id = req.params.id;
    res.render('galleri', {
        "pageTitle": "Galleriet",
        "pageId": "galleri",
        "id": id
    });
});

module.exports = router;