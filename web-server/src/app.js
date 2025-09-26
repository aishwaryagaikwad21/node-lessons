const express = require('express'); //express is a function not an object
//web servers don't stop after completing the task.. it listens and process incoming request
const path = require('path') //core node module
const hbs = require('hbs')
const geoCode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
 
const app = express() //express function doesn't take any argument
//app is an object to build web server

//define paths for Express config - sends static html pages
const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory)) //to serve that directory static html (index.html, about.html, help.html)
//customise web server

const partialsPath = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partialsPath) //take path to directory of partials

//setting route to deliver handlebar and views location (templates)
app.set('view engine', 'hbs'); //npm handlebars - render dynamic templates
const viewsPath = path.join(__dirname, '../templates/views') //defines path for Express config
app.set('views', viewsPath)

// const data = {
//     title:'Weather App',
//     name:'Aishwarya',
//     message:'This is a weather app',
//     about:'About Us',
//     help: 'Help'
// }

//get method to send html or json
// app.get('',(req, res) => {  
//     res.render('index', { //2nd argument is object
//         title:'weather App',
//         name:'Aishwarya'
//     }) //express renders views - index.hbs file --> converts it into html
// })

//shortcut
app.get('', (req, res) => {
    res.render('index', {
        title:'Weather App',
        name:'Aishwarya'
    })
})

app.get('/about',(req,res)=>{
    res.render('about', {
        title:'About me',
        name:'Aishwarya'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title:'Help',
        name:'Aishwarya',
        message:'This is a weather app'
    })
})

app.get('/weather', (req, res) => { //frontend app will get data from backend using this
    const address = req.query.address //grabs the query string 
    if(!address){
        return res.send({
            error: 'Please provide an address'
        })
    }
    geoCode(address, (err, data) => {
        if(err){
            return res.send({
                error: err
            })
        }
       //console.log(data)
        forecast(data,(err, temp) => {
            if(err){
                return res.send({
                    error:err
                })
            }
            res.send([temp])
        })
    })
})

//creating endpoint to pass query string (/product?key=value&key=value) - products?search='game'&rating=4.5
app.get('/products', (req, res) => {
    // console.log(req.query) //query is an object --> { search: "'game'", rating: '4.5' } --> query string passed along with request has been parsed by Express
    // console.log(req.query.search)//game - grabbing individual key
    if(!req.query.search){
       return res.send({
            error: 'You must provide a search term'
        })
    } 
    //error in terminal if no return in 'if block' Cannot set headers after they are sent to the client
    //as we can only send http request and respond once only - you cannot send 2 responses so just add return in 'if block'
    res.send({
        products:[]
    })
})

//specific 404 page (help/data)
app.get('/help/*', (req, res) => { //handle specific errors
    //res.send('Help article not found!')
    res.render('helpError',{
        title:'404',
        name:'Aishwarya',
        errorMsg:'Help article not found'
    })
})

//generic 404 page
app.get('*',(req, res) => { //has to come last - No page exists
    //res.send('My 404 page')
    res.render('genericError', {
        title:'404',
        name:'Aishwarya',
        errorMsg: 'Page not found'
    })
})

//to start server
app.listen(3000, () => { //process of starting server is asynchronous process
    console.log('Server is up on port 3000.')
}) 