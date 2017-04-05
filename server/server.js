const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(3000, () => {
    console.log('Started listening on port 3000');
});