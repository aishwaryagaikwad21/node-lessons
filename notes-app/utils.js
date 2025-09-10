console.log('utils.js is running')

const name = 'Aishwarya Gaikwad'

//exporting the variable so that it can be used in other files

const add = (a,b) => {
    return a + b
}

module.exports = {name,add}