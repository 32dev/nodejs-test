const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello session');
});

app.listen(3000);