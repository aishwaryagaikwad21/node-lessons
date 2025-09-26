console.log('Client side javascript file loaded')

/* fetch api
fetch() is not javascript, it is browser api
and not accessible in node.js
*/

fetch('https://puzzle.mead.io/puzzle')
    .then((res) => {
        res.json()
            .then((data) => { //parsed data
                console.log(data)
            })
    })

// fetch('http://localhost:3000/weather?address=mumbai')
//     .then((res) => {
//         res.json()
//             .then((data) => {
//                 if(data.error){
//                     console.log(data.error.info)
//                 } else{
//                 console.log(data.location)
//                 }
//             })
//     })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const location = search.value
    console.log(location)
    fetch(`http://localhost:3000/weather?address=${location}`)
    .then((res) => {
        res.json()
            .then((data) => {
                if(data.error){
                    console.log(data.error.info)
                } else{
                msg1 = data.location
                msg2 = data.forecast
                }
            })
    })

    console.log('Testing!')
})