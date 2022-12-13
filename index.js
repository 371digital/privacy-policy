require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/photoshoot', function (req, res) {
    res.sendFile(path.join(__dirname + '/static/photoshoot.html'));
});

router.get('/arackaskodegerhesaplama', function (req, res) {
    res.sendFile(path.join(__dirname + '/static/arackaskodegerhesaplama.html'));
});

app.use(router);

const port = process.env.PORT || 3000;
app.listen(port);

console.log(`PRIVACY POLICY server start at http://localhost:${port}`)
