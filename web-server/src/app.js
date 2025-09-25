const express = require('express'); //express is a function not an object
//web servers don't stop after completing the task.. it listens and process incoming request


const app = express() //express function doesn't take any argument
//app is an object to build web server

//creating routes
// app.com - root route
// app.com/help
// app.com/about
//send response when someone tries to get something at specific route

//get method to send html or json

app.get('',(req, res) => {  //2 arguments - url, function - what to do when someone visit this route
    //req is an object - contains info about incoming request
    //res - response has methods allows to customise what we send back to requester
    res.send('Hello Express')
})

/* on localhost:3000 it went to the server and the express server found the
matching route (root) and processed the request using handler
and it sends response 'Hello Express' */

app.get('/help',(req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('Learn more about us')
})

app.get('/weather', (req, res) => {
    res.send('Displaying weather')
})

//to start server
app.listen(3000, () => { //process of starting server is asynchronous process
    console.log('Server is up on port 3000.')
}) //port 3000 