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

module.exports = router;