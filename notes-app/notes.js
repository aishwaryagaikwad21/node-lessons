//const validator =  require('validator'); // importing a third party module - read documentation to look how to use it
const fs = require('fs') 
const getNotes = () => {
    return "Your notes...";
}


const addNote = (title,body) => {
    const notes = loadNotes()
    //console.log(notes)
    //checking for duplicate titles
    const duplicateNote = notes.filter((note) => {
        return note.title === title
    })

    if(duplicateNote.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes) // converting object to string
    fs.writeFileSync('notes.json',dataJSON) // writing string to a file
}


const loadNotes = () => {
    try{
        //fetching existing notes
        const dataBuffer = fs.readFileSync('notes.json') //reading the file 
        const dataJSON = dataBuffer.toString() //converting buffer data to string
    return JSON.parse(dataJSON) //converting string to object
    } catch(e){
        return [] //starts with empty error -  if file doesn't exist return empty array and then next time a new note is added it will create the file
    }
    
}

module.exports = { // exporting an object with getNotes property and getNotes function as its value
    getNotes: getNotes, // exporting the function so that it can be used in other files
    addNote : addNote
}