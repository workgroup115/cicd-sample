// @ts-check
const express = require('express');
const app = express();
const port = 8080;

app.get('/healthz', (req, res) => {
    res.send('Healthy!!');
});

app.get('/version', (req, res) => {
    res.send('1.0.0');
});

app.get('/greet/:name', (req, res) => {   
    console.log(`Let's greet ${req.params.name}!`); 
    res.send(`Hello ${req.params.name}!`);
});

app.listen(port, () => {
    console.log(`Hello App is listening on port ${port}`);
});