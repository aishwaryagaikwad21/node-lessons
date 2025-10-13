const fs = require('fs');
const path = require('path');

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

module.exports = {
    getExpenses,
    getCategoryWiseExpenses
}