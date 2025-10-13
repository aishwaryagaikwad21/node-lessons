const path = require('path');
const express = require('express');
const expenseRouter = require('./routes/expense_route');

const app = express();

// Enable JSON parsing (for POST/PUT requests)
app.use(express.json());

//Mount the route module
app.use('/expenses', expenseRouter);

//default route
app.get('/', (req, res) => {
    res.send('Welcome to Expense Tracker App');
})    

const port = 3000
app.listen(port, () => {
    console.log('Server is up on port 3000.')
})