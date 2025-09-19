const request = require('postman-request');

const geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=los angeles&limit=1&appid=b28ec9be3d4c68ba6aad2fa08ac12ced'

request({url:geoUrl, json:true},(error,response) => {
    const [lat,lon] = [response.body[0].lat,response.body[0].lon]
    console.log(lat,lon)
    fetchWeather(lat,lon)
})

function fetchWeather(lat,lon){
    const url = `http://api.weatherstack.com/current?access_key=ea797f0c26e77f60ee87ae3b81fd4f49&query=${lat},${lon}&units=f`

    request({url:url, json:true},(error, response) => {
        //const data = JSON.parse(response.body) since json:true it will be automatically an object/ parsed object
        displayWeather(response.body.current)
    })
}

function displayWeather(data){
    //console.log(`The temperature is ${data.temperature} degree and it feels like ${data.feelslike} degree`)
    console.log(data.weather_descriptions[0]) 
    console.log(`The temperature is ${data.temperature} fahrenheit and it feels like ${data.feelslike} fahreinheit`)
}

