const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

//data file path
const dataFilePath = path.join(__dirname, '../data/expenses.json');

//load file
function loadData() {
    try{
        const data = fs.readFileSync(dataFilePath)
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function saveData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

//get all expenses
function getExpenses() {
    const data = loadData();
    const expenses = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    return expenses;
}

//get amount-expenses highest to lowest
function getAmountWiseExpenses() {
    const data = loadData();
    const expenses = data.sort((a, b) => b.amount - a.amount);
    return expenses
}


//get category-wise expenses
function getCategoryWiseExpenses(category) {
    const expenses = loadData();
    return expenses.filter(expense => expense.category === category);
}

function getmonthWiseExpenses(month) {
    const data = loadData();
    //convert date string to date object
    const expenses = data.map(exp => ({
        ...exp,
        date: new Date(exp.date)
    }))

    //fetch month number from month name
    const month_num = dayjs(`${month}`, "MMMM").month() + 1;
    
    //filter month-wise expenses
    const monthWiseExpenses = expenses.filter(exp => (exp.date.getMonth() + 1) === month_num);
    return monthWiseExpenses;
}

function getRangeWiseExpenses(startDate, endDate) {
    try{
        const {start, end} = {start: new Date(startDate), end: new Date(endDate)};
        if(isNaN(start) || isNaN(end)) {
            throw new Error("Invalid date format. Please use YYYY-MM-DD format.");
        }

        const data = loadData();
        //convert date string to date object
        const expenses = data.map(exp => ({
            ...exp, //other  properties remains same
            date: new Date(exp.date)
        }))

        //filter range-wise expenses
        const rangeWiseExpenses = expenses.filter(exp => 
        exp.date >= new Date(start) && exp.date <= new Date(end)
        )
        return {
            rangeWiseExpenses,
            success: true,
            message: 'Expenses fetched successfully'
        };
    } catch (err) {
        return { success: false, message: err.message }
    }
}

//add data
function addExpense(expense) {
    try{
        const {date, item, category, amount} = expense;
        if (!date || isNaN(new Date(date))) {
            throw new Error("Invalid or missing 'date'. Must be in YYYY-MM-DD format.");
        }
        if (!item || typeof item !== 'string') {
            throw new Error("Invalid or missing 'item'. Must be a string.");
        }
        if (!category || typeof category !== 'string') {
            throw new Error("Invalid or missing 'category'. Must be a string.");
        }
        if (amount === undefined || typeof amount !== 'number') {
            throw new Error("Invalid or missing 'amount'. Must be a number.");
        }

        const expenses = loadData();
        expenses.push(expense);
        saveData(expenses);
        return { success: true, message: 'Expense added successfully'}
    } catch (err) {
        return { success: false, message: err.message }
    }
    
}

module.exports = {
    getExpenses,
    getAmountWiseExpenses,
    getCategoryWiseExpenses,
    getmonthWiseExpenses,
    getRangeWiseExpenses,
    addExpense
}