// const event = {
//     name: "Birthday Party",
//     guestList: ['Anna', 'Jenna', 'Elena'],
//     printGuestList(){ //ES6 function to define as a property within the object
//         console.log('Guest list for ' + this.name);

//         this.guestList.forEach((guest) => { //can't use normal function
//             console.log(guest + ' is attending ' + this.name)
//         })
//     }
// }

// event.printGuestList()

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){ //using standard normal ES6 function
       const notCompleted = this.tasks.filter((task) => {
            if(task.completed === false){
                return task.text
            }
        })
        return notCompleted;
    }
}

console.log(tasks.getTasksToDo())