const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/controllers');

//get all expenses
router.get('/', (req, res) => {
    const expenses = expenseController.getExpenses();
    res.json(expenses);
})

router.get('/:category', (req, res) => {
    const category = req.params.category;
    const expenses = expenseController.getCategoryWiseExpenses(category);
    res.json(expenses);
})

module.exports = router;

