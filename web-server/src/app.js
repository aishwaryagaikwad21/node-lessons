const express = require('express'); //express is a function not an object
//web servers don't stop after completing the task.. it listens and process incoming request
const path = require('path') //core node module
const hbs = require('hbs')
 
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