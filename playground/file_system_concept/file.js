const fs = require('fs')

/*fs.writeFileSync() method is a synchronous function used to write data to a file.*/
// Synchronous means blocks the execution of code until the file writing operation is complete/
// it means no other code will execute until the file is fully written
//If the file specified by path does not exist, it will automatically create a new file
/*If the file specified by path does not exist, 
fs.writeFileSync() will create it. If the file exists and 
the flag option is set to 'w' (the default), 
the existing content will be overwritten. 
If flag is set to 'a', data will be appended to the end of the existing file*/

/* Error handling - errors thrown during the file write operation must be handled using a try...catch block.*/

try{
    fs.writeFileSync('myFile.txt','Hello World');
    console.log('File written successfully')

    fs.writeFileSync('myFile.txt',' + Appended Content',{flag:'a'})
    console.log('Content appended successfully')
}
catch (err){
    console.error('Error writing file',err)
}

//fs.writeFileSync is synchronous version - execution is Line by line → waits until writing completes → moves to next line

//fs.writeFile - Asynchronous version - non-blocking
/* Node.js initiates the write operation and 
moves to the next line immediately without waiting for 
the file to be written. The callback is executed later 
when writing finishes (or fails).*/