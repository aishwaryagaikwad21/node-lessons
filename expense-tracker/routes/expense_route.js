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

//get month-wise expenses
router.get('/month/:month', (req, res) => { //http://localhost:3000/expenses/month/March
    const month = req.params.month;
    //console.log(month) - January, February, March, etc
    const expenses = expenseController.getmonthWiseExpenses(month);
    res.json(expenses);
})

module.exports = router;

