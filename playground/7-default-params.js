const greet = (name = 'xyz', age = 25) => {
    console.log('Hello ' + name)
    console.log(`My age is ${age}`)
}

greet('Aishwarya', 21)
greet() // Hello xyz
//default parameters setting
