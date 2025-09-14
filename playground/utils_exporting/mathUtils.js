const add = (a,b) => a+b;
const subtract = (a,b) => Math.abs(a-b)
const divide = (a,b) => {
    if(b === 0){
        return null
    }
    return a/b;
}

module.exports = {
    add,
    subtract,
    divide
}