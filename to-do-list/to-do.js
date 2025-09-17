const fs = require('fs')
const chalk = require('chalk')


const add = (title,status) => {
    const list = loadList();
    // console.log(title,status)
    // console.log('Task added!')

    const isTask = list.find((list) => list.title === title)
    if(!isTask){
        list.push({
            title: title,
            status: status
        })
        console.log(chalk.bgGreen('Task added!'))
    } else {
        console.log(chalk.bgRed('Task already exists! Add another task'))
    }
    saveList(list)

}

const done = (title) => {
    const tasks = loadList();
    tasks.find((task) => {
        if(task.title === title && task.status === 'pending'){
            task.status = 'done'
            console.log(chalk.green('Good! Task done'))
        }
    })
    saveList(tasks)
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
    add: add,
    done:done
}
