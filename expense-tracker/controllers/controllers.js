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
    return loadData();
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
    const data = loadData();
    //convert date string to date object
    const expenses = data.map(exp => ({
        ...exp, //other  properties remains same
        date: new Date(exp.date)
    }))

    const start = new Date(startDate);
    const end = new Date(endDate);
    //filter range-wise expenses
    const rangeWiseExpenses = expenses.filter(exp => 
     exp.date >= new Date(start) && exp.date <= new Date(end)
    )
    return rangeWiseExpenses;
}

//add data
function addExpense(expense) {
    const expenses = loadData();
    expenses.push(expense);
    saveData(expenses);
}

module.exports = {
    getExpenses,
    getCategoryWiseExpenses,
    getmonthWiseExpenses,
    getRangeWiseExpenses,
    addExpense
}