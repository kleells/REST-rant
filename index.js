// installed npm init -y and npm install express to create package.json, node_modules and package-lock.json

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000);