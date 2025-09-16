//const validator =  require('validator'); // importing a third party module - read documentation to look how to use it
const fs = require('fs') 
const chalk = require('chalk')
// const getNotes = () => {
//     return "Your notes...";
// }


const addNote = (title,body) => {
    const notes = loadNotes()
    //console.log(notes)
    //checking for duplicate titles
    // const duplicateNote = notes.filter((note) => { //this will check for each item even if we have found duplicate
    //     return note.title === title
    // })
    const duplicateNote = notes.find((note) => note.title === title); //will return boolean undefined if not found --> more efficient way

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else {
        console.log(chalk.bgRed('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    //notesToKeep is an array which contains all notes except the one with the title to be removed
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })
    console.log(notesToKeep)
    if (notes.length === notesToKeep.length){
        console.log(chalk.bgRed('No note found!'))
    } else {
        console.log(chalk.bgGreen('Note removed!'))
    }
    saveNotes(notesToKeep)
}

const listNotes = () => {
    const listNotes = loadNotes();
    //console.log(listNotes)
    listNotes.forEach((listNote) => console.log(listNote.title))
}

const readNotes = (title) => {
    const readNotes = loadNotes();
    const note = readNotes.find((note) => note.title === title)
    if(note){
        console.log(chalk.bgGreen(note.body))
    }
    else{
        console.log(chalk.bgRed("Note not found!"))
    }
    // return readNotes.filter((readNote) => {
    //     if(readNote.title === title){
    //         return readNote.body
    //     } else {
    //        return console.log(chalk.bgRed('Note not found'))
           
    //     }
    // })
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes) // converting object to string
    fs.writeFileSync('notes.json',dataJSON) // writing string to a file
}


const loadNotes = () => {
    try{
        //fetching existing notes
        const dataBuffer = fs.readFileSync('notes.json') //reading the file which is in binary format 
        const dataJSON = dataBuffer.toString() //converting buffer data to string
    return JSON.parse(dataJSON) //converting JSON string to object
    } catch(e){
        return [] //starts with empty error -  if file doesn't exist return empty array and then next time a new note is added it will create the file
    }  
}

module.exports = { // exporting an object with getNotes property and getNotes function as its value
  //  getNotes: getNotes, // exporting the function so that it can be used in other files
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes : readNotes
}