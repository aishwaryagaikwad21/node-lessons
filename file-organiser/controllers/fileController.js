const fs = require('fs');
const path = require('path');
const categorize = require('./categorise');
const assignId = require('./assign-id');
const { v4: uuidv4 } = require('uuid');

// Define the path to the JSON file
const filePath = path.join(__dirname, '../data/files.json');

// Load files from the JSON file
function loadFiles() {
    try {
        const data = fs.readFileSync(filePath)
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function saveFiles(files) {
    fs.writeFileSync(filePath, JSON.stringify(files, null, 2));
}

//get all files
function getFiles() {
    return loadFiles();
}

//get files by category
function getFilesByCategory(category) {
    const files = loadFiles();
    //console.log(files);
    const cat = files.filter((file) => file.category === category);
    if(cat.length === 0){
        return {message: "No files found in this category"}
    }
    return cat;
}
//console.log(getFilesByCategory('docs'))

function getFileById(id) {
    const files = loadFiles();
    const file = files.find((file) => file.id === id)
    if(!file){
        return {message: "File not found"}
    }
    return file;
}
//console.log(getFileById('2'))


// POST /files - add a new file
function addFile(fileName, size){
    if (!fileName || typeof fileName !== 'string') {
    return res.status(400).json({ error: 'filename required' });
  }

  const files = loadFiles();

  const file = {
    id: assignId(),
    filename: fileName.trim(),
    ext: path.extname(fileName).toLowerCase(),
    category: categorize(fileName),
    size: size || null,
    uploadedAt: new Date().toISOString()
  }

  files.push(file);
  saveFiles(files)
  return {
    message: 'File added successfully',
    file
  }
}

//DELETE /files/:id - delete a file by id
function deleteFile(id){
    const files = loadFiles();
    const index = files.findIndex((file) => file.id === id);
    if(index === -1){
        return {message: "File not found"}
    }
    const deletedFile = files.splice(index, 1);
    saveFiles(files);
    return {
        message: "File deleted successfully",
        deletedFile
    }
}

module.exports = {
    getFiles,
    getFilesByCategory,
    getFileById,
    addFile,
    deleteFile
}