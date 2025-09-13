const fs = require('fs')

const dataBuffer = fs.readFileSync('challenge-1.json') // reads the file challenge-1.json in binary format

const dataJSON = dataBuffer.toString(); // converts the buffer to string

const data = JSON.parse(dataJSON) // converts the JSON string to object

data.name = 'Aishwarya'
data.age = 25

const newDataJSON = JSON.stringify(data) // converts the object to JSON string

fs.writeFileSync('challenge-1.json', newDataJSON) // creates/overwrites the file challenge-1.json and writes the JSON string into it


/* Steps
1. Load the JSON data from the file
2. convert the buffer data to string
3. parse the JSON string to object
4. change the name and age property using dot notation
5. convert the object back to JSON string
*/