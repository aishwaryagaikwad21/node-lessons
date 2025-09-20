const request = require('postman-request');

const geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=&limit=1&appid=b28ec9be3d4c68ba6aad2fa08ac12ced'

request({url:geoUrl, json:true},(error,response) => {
    
    if(error){// for low level OS iss
        console.log('Unable to connect to location service')
    } else if(!response.body[0]){
        console.log('Unable to find location, try another search')
    } else {
        const [lat,lon,name] = [response.body[0].lat,response.body[0].lon, response.body[0].name]
        //console.log(lat,lon,name)
        fetchWeather(lat,lon,name)
    }    
})

function fetchWeather(lat,lon,name){
    const url = `http://api.weatherstack.com/current?access_key=ea797f0c26e77f60ee87ae3b81fd4f49&query=${lat},${lon}&units=f`

    request({url:url, json:true},(error, response) => {
        if(error){
            console.log('Unable to connect to weather service')
        } else {
            //const data = JSON.parse(response.body) since json:true it will be automatically an object/ parsed object
            displayWeather(response.body.current,name)
        }
    })
}

function displayWeather(data,name){
    //console.log(`The temperature is ${data.temperature} degree and it feels like ${data.feelslike} degree`)
    console.log(data.weather_descriptions[0]) 
    console.log(`The temperature of ${name} is ${data.temperature} fahrenheit and it feels like ${data.feelslike} fahreinheit`)
}

