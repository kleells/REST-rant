require('dotenv').config();

// installed npm init -y and npm install express to create package.json, node_modules and package-lock.json

const express = require('express');
const app = express();

// only homepage and wildcard routes here, the rest need to be in the controllers folder
// imports contorllers routes here

app.use('/places', require('./controllers/places'))

//HOMEPAGE
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//WILDCARD Route(keep at the bottom to avoid override) with call of .status(404)
app.get('*', (req,res) =>
{
    res.status(404).send('<h1>404 Error. Please go back to previous page</h1>');
})

//PORT address in .env
app.listen(process.env.PORT);