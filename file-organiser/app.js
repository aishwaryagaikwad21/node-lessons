const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fileController = require('./controllers/fileController');

const app = express();

// Enable JSON parsing (for POST/PUT requests)
app.use(express.json());

app.get('/files', (req, res) => {
    res.json(fileController.getFiles());
});


app.listen(3000, () => { //process of starting server is asynchronous process
    console.log('Server is up on port 3000.')
}) 