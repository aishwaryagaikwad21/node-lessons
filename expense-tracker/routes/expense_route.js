const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/controllers');

//get all expenses
router.get('/', (req, res) => {
    const expenses = expenseController.getExpenses();

    const {sort} = req.query;
    if(sort === 'amount'){
        return res.json(expenseController.getAmountWiseExpenses());
    }
    res.json(expenses);
})

//get amount-expenses highest to lowest

router.get('/category/:category', (req, res) => {
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

//get range-wise expenses
router.get('/range/:startDate/:endDate', (req, res) => {
    const {startDate, endDate} = req.params;
    //console.log(startDate, endDate) 
    const expenses = expenseController.getRangeWiseExpenses(startDate, endDate);
    res.json(expenses);
})

//add expense
router.post('/add', (req, res) => {
    const expense = req.body;
    expenseController.addExpense(expense);
    res.status(201).send('Expense added successfully');
})


module.exports = router;

