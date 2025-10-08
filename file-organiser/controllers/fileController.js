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


module.exports = {
    getFiles
}