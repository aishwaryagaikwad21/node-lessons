function log(message){
    return (`[${new Date().toISOString()}] - ${message}`)
}

module.exports = log