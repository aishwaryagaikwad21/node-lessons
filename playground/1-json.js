const fs = require('fs')

// const book = { //book is a javascript object
//     title: 'Harry Potter and philosopher\'s stone',
//     author: 'J.K. Rowling',
// }

// const bookJSON =  JSON.stringify(book) // converts the object into JSON string
// fs.writeFileSync('1-json.json', bookJSON) //creates a file named 1-json.json and writes the JSON string into it

// console.log(bookJSON) // prints the JSON string - boohJSON is a string and not an object
// console.log(bookJSON.title) // undefined - because bookJSON is a string and not an object

// const parsedData = JSON.parse(bookJSON) // converts the JSON string back to object
// console.log(parsedData) // prints the object
// console.log(parsedData.title); // prints the title of the book

//const dataBuffer = fs.readFileSync('1-json.json') // reads the file 1-json.json in binary format
//console.log(dataBuffer) // prints the buffer - raw binary data
//console.log('Pure JSON',dataBuffer.toString()); // converts the buffer to string and prints it

// const dataJSON = dataBuffer.toString(); // converts the buffer to string
// const data = JSON.parse(dataJSON) // converts the JSON string to object
// console.log('Pure OBJECT',data); //prints the object