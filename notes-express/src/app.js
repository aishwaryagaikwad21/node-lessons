const express = require('express')
const path = require('path')
const hbs = require('hbs')
const notes = require('./utils/notes')

const app = express();

//enable JSON parsin (for POST/PUT requests)
app.use(express.json());

const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath) //take path to directory of partials

//setting route to deliver handlebar and views location (templates)
app.set('view engine', 'hbs'); //npm handlebars - render dynamic templates
const viewsPath = path.join(__dirname, '../templates/views') //defines path for Express config
app.set('views', viewsPath)

app.get('', (req, res) => {
    res.render('index', {
        title:'Notes app',
        name:'Aishwarya'
    })
})

//get all notes
app.get('/notes',(req, res) => {
    res.json(notes.getNotes());
})

//get single note - http://localhost:3000/notes/Coding
app.get('/notes/:title', (req, res) => {
    const result = notes.readNote(req.params.title);
    res.json(result);
});

//Add note - POST - using Postman
app.post('/notes', (req, res) => {
    const { title, description, details } = req.body;
    const result = notes.addNote(title, description, details);
    res.json(result);
});

//delete note - using Postman
app.delete('/notes/:title', (req, res) => {
    const result = notes.deleteNote(req.params.title);
    res.json(result);
});

//UPDATE note - PUT method - using postman
app.put('/notes/:title',(req, res) => {
    const result = notes.updateNote(req.params.title, req.body);
    res.json(result);
})

app.listen(3000, () => { //process of starting server is asynchronous process
    console.log('Server is up on port 3000.')
}) 

