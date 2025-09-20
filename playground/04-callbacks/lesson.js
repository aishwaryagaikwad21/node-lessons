setTimeout(() => { //callback function (node.js api) - provided as argument to setTimeout()
   // console.log('Two seconds are up')
},2000)

//filter is callback --> BUT Synchronous
const names = ['Anna', 'Elena', 'Jenna']
const shortNames = names.filter((name) => {
    return name.len<=3
})

//custom callback
const geoCode = (address, callback) => {
    setTimeout(()=>{
        const data = {
        latitude:0,
        longitude:0
    }
    //return data --> can't send data hence use callback parameter
    callback(data) //sending data back
    }, 2000)
}

geoCode('Philadelphia',(data) => { //here the function is called again
    //console.log(data)
})

// const add = (a, b, sumCallback) => {
//     setTimeout(() => {
//         let sum = a + b;
//         return sum
//     }, 2000)
// }

// const sum = add(1,5)
// console.log(sum) --> will give undefined

const add = (a, b, sumCallback) => {
    setTimeout(() => {
        let sum = a + b;
        sumCallback(sum)
    }, 2000)
}

 add(1,5,(sum) => {
    console.log(`Sum is ${sum}`)
 })

