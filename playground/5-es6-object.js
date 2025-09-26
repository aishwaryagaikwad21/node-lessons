//Object property shorthand

const name = 'Aishwarya'
const userAge = 25

const user = {
    //name:name, - property and value are same so only name
    name, //value from name variable - shorthand syntax of Es6
    age:userAge, //can't write just age as value of 'age' is from userAge variable
    location:'Thane'
}

console.log(user)

//Object destructuring

const product = {
    label:'Red notebook',
    price:3,
    stock:201,
    salePrice:undefined
}
// have to write lot of code to extract values of properties
// const label1 = product.label
// const stock1 = product.stock
// console.log(label1)
// console.log(stock1)

// //destructuring is accessing only property and store its value in variable
// const {label, stock, price:productPrice, rating = 5} = product //label and stock are variables which store property values of product object
// console.log(label)
// console.log(stock)
// console.log(productPrice)
// console.log(rating) //rating = 5 is default value if no value/property exists in object

// const transaction = (type, myProduct) => {
//     const {label} = myProduct
// }
//OR
 //also setting default object ( ={}) --> destructures empty object
const transaction = (type, { label, stock = 0} = {}) => { //can directly destructure here
    console.log(type, label, stock)    
}
//transaction('order', product)
transaction('order')