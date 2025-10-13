const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/controllers');

//get all expenses
router.get('/', (req, res) => {
    const expenses = expenseController.getExpenses();
    res.json(expenses);
})

module.exports = router;

