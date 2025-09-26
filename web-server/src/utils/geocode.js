const request = require('postman-request');

const geoCode = (address, callback) => {
    console.log(address)
    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(address)}&limit=1&appid=b28ec9be3d4c68ba6aad2fa08ac12ced`
    //encodeURIComponent if location has special character - this makes url safe
    request({url:geoUrl, json:true},(error, response) => {
    
    if(error){// for low level OS 
        callback('Unable to connect to location services', undefined) //
    } else if(!response.body[0]){
        callback('Unable to find location, try another search', undefined)
    } else {
        const data = {
            lat:response.body[0].lat,
            lon:response.body[0].lon,
            name:response.body[0].name,
            state:response.body[0].state,
            country:response.body[0].country
        }
        callback(undefined, data) //error = undefined; data = lat, lon, name
    }    
})
}

module.exports = geoCode