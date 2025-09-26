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

fetch('http://localhost:3000/weather?address=mumbai')
    .then((res) => {
        res.json()
            .then((data) => {
                if(data.error){
                    console.log(data.error.info)
                } else{
                console.log(data.location)
                }
            })
    })