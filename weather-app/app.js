const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=ea797f0c26e77f60ee87ae3b81fd4f49&query=37.8267,-122.4233'

request({url:url},(error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})