const request = require('postman-request');
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js')

const address = process.argv[2]
if(!address){
    console.log('Please provide an address')
} else {
        geoCode(address,(err, data) => { //callback chaining
        if(err){
            return console.log('Error', err)
        } 
            //console.log('Data', data)
        forecast(data,(err,forecast) => {
            if(err){
                console.log(err)
            } else {
                console.log(data.name,data.state,data.country)
                console.log(`The temperature of ${forecast.name} is ${forecast.temp.temperature} and feels like ${forecast.temp.feelslike}`)
            }
        }) 
    })
}

//console.log('Hello app completed') //will print before printing temperature

