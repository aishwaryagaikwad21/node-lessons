const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

//API routes

//GET /files - get all files
router.get('/', (req, res) => { //localhost:3000/files
    res.json(fileController.getFiles());
});

//GET /files/:category - get files by category
router.get('/:category', (req, res) => {
    const category = req.params.category;
    res.json(fileController.getFilesByCategory(category));
})

//GET /files/id/:id - get file by id
router.get('/id/:id', (req, res) => {
    const id = req.params.id;
    res.json(fileController.getFileById(id));
})

//POST /files - add a new file
router.post('/add', (req, res) => {
    const { filename, size } = req.body;
    res.json(fileController.addFile(filename, size));
})

module.exports = router;