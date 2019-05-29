const express = require('express');
const app = express();
const db = require('./queries')
const port = 3002;

app.listen(port, () => {
    console.log("Server erreichbar auf Port " + port)
});

app.get('/finishes/:type/:score', db.getFinishes);
