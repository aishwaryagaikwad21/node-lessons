const request = require('postman-request');
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js')

const address = process.argv[2]
if(!address){
    console.log('Please provide an address')
} else {
        geoCode(address,(err,{lat, lon, name, state, country} = {}) => { //callback chaining
        //console.log(data)
        if(err){
            return console.log('Error', err)
        } 
            //console.log('Data', data)
        forecast({lat, lon, name},(err,{name:location, temp, feelsLike} = {}) => {
            if(err){
                console.log(err)
            } else {
                console.log(name, state, country)
               // console.log(forecast)
                console.log(`The temperature of ${location} is ${temp} and feels like ${feelsLike}`)
            }
        }) 
    })
}

//console.log('Hello app completed') //will print before printing temperature

