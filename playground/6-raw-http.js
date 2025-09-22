const http = require('http')
const url = `http://api.weatherstack.com/current?access_key=ea797f0c26e77f60ee87ae3b81fd4f49&query=45,-75&units=f`


const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => { //chunk is the response
        //console.log(chunk)// BUffer data
        data = data + chunk.toString()
    })
    //request.on() is an event listner
    response.on('end', () => {
        const body = JSON.parse(data) //return an OBJECT - about weather data
        console.log(body)
    })

})
request.on('error',(error) => {
    console.log('An error', error)
})

request.end()