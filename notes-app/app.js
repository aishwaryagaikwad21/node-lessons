//first load the fs module
//const fs = require('fs'); // load the fs module - inside a string pass the module name

//fs.writeFileSync('notes.txt', 'My name is Aishwarya')
//this is writing to a file 

//fs.appendFileSync('notes.txt', ' and I am learning Node.js')

//load the utils module --> taking advantage of multiple files
const data = require('./utils.js') // ./ means current directory
//importing the variable from utils.js file

//const name = 'Aishwarya'
//cannot access 'name' variable from utils.js because it is in the different scope so it needs to exported

console.log(data.name)
console.log(data.add(5,3)) // accessing utils.js add function

const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)