function add(a,b){
    return a + b
}

//module.exports = add

function subtract(a,b){
    return Math.abs(a-b)
}

//module.exports = subtract

function isEven(num){
    if(num%2===0){
        return true
    } else {
        return false            
    }
}

module.exports = isEven

