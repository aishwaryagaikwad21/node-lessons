const express = require('express'); //express is a function not an object
//web servers don't stop after completing the task.. it listens and process incoming request

const path = require('path') //core node module
 
const app = express() //express function doesn't take any argument
//app is an object to build web server

const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory)) //to serve that directory (index.html, about.html, help.html)
//customise web server

//get method to send html or json
app.get('',(req, res) => {  
    res.send('<h1>Weather</h1>')
})

app.get('/weather', (req, res) => { //frontend app will get data from backend using this
    res.send([
        {
            location:'Mumbai',
            temperature:34,
            forecast:'Hot and Humid'
        },
        {
            location:'Thane',
            temperature:30,
            forecast:'Humid'
        }
    ])
})

//to start server
app.listen(3000, () => { //process of starting server is asynchronous process
    console.log('Server is up on port 3000.')
}) 