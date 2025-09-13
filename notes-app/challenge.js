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

//console.log(data.name)
//console.log(data.add(5,3)) // accessing utils.js add function

const getNotes = require('./notes.js')
const msg = getNotes()
//console.log(msg)

//installing npm packages locally
const validator =  require('validator'); // importing a third party module - read documentation to look how to use it
// console.log(validator.isEmail('aishwarya21gmail.com')) //true
// console.log(validator.isURL('https:/mead.io')) //false

// console.log(validator.isAlpha('abc1')) //false - because of 1
// console.log(validator.isAlphanumeric('abc1!')); //false - because of !

//import chalk from 'chalk'; //ES6 module import syntax
//https://www.npmjs.com/package/chalk - documentation link
const chalk = require('chalk'); //CommonJS module import syntax
console.log(chalk.bold.green('Success!'));
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'))
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));
console.log(chalk.bold('Bold text'))
console.log(chalk.italic('Italic text'))
console.log(chalk.inverse('Inverse text'));// inverts the background and foreground colors
console.log(chalk.strikethrough('Strikethrough text'));// adds a line through the text

