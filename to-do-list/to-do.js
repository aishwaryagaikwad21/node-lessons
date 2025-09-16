const fs = require('fs')
const chalk = require('chalk')

const add = (title,status) => {
    const list = loadList();
    console.log(title,status)
    console.log('Task added!')

    list.push({
        title: title,
        status: status
    })

    saveList(list)

}


const loadList = () =>{
    try{
        const listBuffer = fs.readFileSync('tasks.json')
        const listJSON = listBuffer.toString(); //converts buffer data to string
        return JSON.parse(listJSON);//converts to object
    } 
    catch(e){
        return []
    }
}

const saveList = (list) => {
    const listJSON = JSON.stringify(list, null, 4) //makes look preetier of json data in json file
    fs.writeFileSync('tasks.json',listJSON)
}

module.exports = {
    add: add
}
