try{
    const data = JSON.parse('invalid-json')
    console.log(data)
} catch(err){
    console.log('Failed to parse JSON', err.message)
}

console.log('Program continues...')

//App doesn't crash and you handle error cleanly
//Always wrap potentially unsafe operations in try-catch (like file reading, JSON parsing, network requests).