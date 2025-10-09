const fs = require('fs');
const path = require('path');
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

function assignId() {
    const files = loadFiles();
    const lastId = files.length ? Number(files[files.length - 1].id) : 0;
    const newId = lastId + 1;
    return newId
}

module.exports = assignId;