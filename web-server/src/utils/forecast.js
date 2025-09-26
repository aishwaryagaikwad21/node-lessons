const request = require('postman-request')

const forecast = (data, callback) => {
    const lat = data.lat
    const lon = data.lon
    const name = data.name
    const url = `http://api.weatherstack.com/current?access_key=ea797f0c26e77f60ee87ae3b81fd4f49&query=${lat},${lon}&units=f`
    
        request({url, json:true},(error, response) => { //url - shorthand syntax
            if(error){
                console.log('Unable to connect to weather service')
                callback('Unable to connect to weather service',undefined)
            } else {
                //const data = JSON.parse(response.body) since json:true it will be automatically an object/ parsed object
                //console.log(response)
                const data = {
                    temp:response.body.current.temperature,
                    feelsLike: response.body.current.feelslike,
                    location:name
                }
                callback(undefined,data)
            }
        })
}

module.exports = forecast