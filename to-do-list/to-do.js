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

const deleteTask = (title) => {
    const tasks = loadList();
    const newList = tasks.filter((task) => task.title !== title)
    //console.log(newList)
    console.log(chalk.red(`${title} task deleted!`));
    saveList(newList)
    
}

const pending = () => {
    const tasks = loadList();
    const pendingList = tasks.filter((task)=> task.status === 'pending')
    console.log(chalk.bgRed('Pending tasks are as follow:'))
    if(pendingList.length === 0){
        console.log(chalk.bgGreen('Congrats! All tasks done.'))
    } else {
        pendingList.forEach((pending) => {
            console.log(chalk.red(pending.title))
        })
    }
}

const completed = () => {
    const tasks = loadList();
    const completedList = tasks.filter((task) => task.status === 'done')
    console.log(chalk.bgGreen('Completed tasks are as follow:'));
    if(completedList.length === 0){
        console.log(chalk.bgRed('NO Task completed'))
    } else {
        completedList.forEach((completed) => {
            console.log(chalk.green(completed.title))
        })
    }
}

const list = () => {
    const tasks = loadList();
    console.log(chalk.bgWhite('All tasks listed'))
    tasks.forEach((task) => {
        console.log(chalk.white(task.title))
    })
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
    done:done,
    deleteTask:deleteTask,
    pending:pending,
    completed:completed,
    list:list
}
