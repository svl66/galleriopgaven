const express = require('express');
const app = express();

app.use(require('./routes/index'));
app.use(require('./routes/galleri'));

app.listen(1337, function (req, res) {
    console.log("Serveren er startet på port 1337");
});