const fs = require('fs');
const path = require('path');

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

module.exports = {
    getFiles,
    getFilesByCategory
}