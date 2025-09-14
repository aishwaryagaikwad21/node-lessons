//challenge 1
//calling individually/ one function at a time
//const add = require('./util.js')
//console.log(add(3,2))

// const subtract = require('./util.js')
// console.log(subtract(5,9))

//const isEven = require('./util.js')
//console.log(isEven(4))

//challenge 2
const data = require('./mathUtils')
console.log(data.add(3,2))
console.log(data.subtract(5,1))
console.log(data.divide(10,2))

const config = require('./config')
console.log(config.appName)
console.log(config.version)

const test = require('./testUtils')
console.log(test.sayHello())
console.log(test.sayBye())

//If re-assigning a function
/*
const test = require('./testUtils')
console.log(test.sayHello)
console.log(test.sayBye)*/

const log = require('./logger')
console.log(log("Hello Aishwarya here"))
console.log(log("How are you doing?"))