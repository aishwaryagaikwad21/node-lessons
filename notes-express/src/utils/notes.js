const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname,'./notes.json')

// Load notes
function loadNotes() {
    try {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

// Save notes
function saveNotes(notes) {
    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
}

// Add note
function addNote(title, description, details) {
    const notes = loadNotes();
    const duplicate = notes.find(note => note.title === title);

    if (duplicate) {
        return { error: 'Title already exists!' };
    }

    notes.push({ title, description, details });
    saveNotes(notes);
    return { success: 'Note added successfully!' };
}

// Delete note
function deleteNote(title) {
    const notes = loadNotes();
    const filtered = notes.filter(note => note.title !== title);

    if (filtered.length === notes.length) {
        return { error: 'Note not found!' };
    }

    saveNotes(filtered);
    return { success: 'Note deleted successfully!' };
}

function readNote(title){
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if (!note) {
        return { error: 'Note not found!' };
    }

    return note; // return the found note object

}

//All notes
function getNotes(){
    return loadNotes();
}

//Update notes

function updateNote(title, newDetails){
    const notes = loadNotes();
    const index = notes.findIndex(note => note.title === title);

    if (index === -1) {
        return { error: 'Note not found!' };
    }

    notes[index] = { ...notes[index], ...newDetails };
    saveNotes(notes);
    return { success: 'Note updated successfully!' };
}


module.exports = {
    addNote,
    deleteNote,
    readNote,
    getNotes,
    updateNote
}