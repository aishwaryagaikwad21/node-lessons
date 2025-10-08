const express = require('express');
const path = require('path');
const hbs = require('hbs');
//const fileController = require('./controllers/fileController');
const filesRouter = require('./routes/files');

const app = express();

// Enable JSON parsing (for POST/PUT requests)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Mount the route module
app.use('/files', filesRouter);

//default route
app.get('/', (req, res) => {
    res.send('Welcome to File Organiser App');
})

// app.get('/files', (req, res) => {
//     res.json(fileController.getFiles());
// });

const port = 3000
app.listen(port, () => { //process of starting server is asynchronous process
    console.log('Server is up on port 3000.')
}) 