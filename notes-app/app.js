const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
const msg = getNotes()
//console.log(msg)

//console.log(process.argv[2]) // to see all the arguments passed in command line
// above line will print an array which contains all the arguments passed in command line

// const command = process.argv[2] // to get the third argument passed in command line

// if(command === 'add'){
//     console.log('Adding note!')
// }else if(command === 'remove'){
//     console.log('Removing note!')
// }else{
//     console.log('Command not recognized!')
// }
//console.log(process.argv); // to see all the arguments passed in command line

//console.log(yargs.argv); // to see all the arguments passed in command line using yargs
// underscore property and also title property which has string as value

//current version of yargs 1.0.0
yargs.version('1.1.0')
// Yargs is a library that helps you build command line interface (CLI) applications

//add, remove, read, list

//create add command
yargs.command({ //command is a method of yargs which takes an object as argument - command method is used to create a new command
    command: 'add', //name of the command - When the user runs add, use this command configuration.
    describe: 'Add a new note', // when user runs --help, this description will show up
    builder:{ //builder is itself an object and a property used to provide options to the  - builder is property whose value is object - // builder is an object within an object
        // builder object defines the options that can be passed to the command
        title: {
            describe: 'Note title',
            demandOption: true, // title is required - yargs checks if --title is provided
            type: 'string' // title should be string
        },
        body: {
            describe: 'Note body',
            demandOption: true, // body is required
            type: 'string' // body should be string
        }
    },
    handler: function(argv){ //argv is used to access the options provided in command line
        //handler runs wuth argv
        console.log('Title is: ' + argv.title) //argv contains all command-line arguments parsed by yargs
        console.log('Body is: ' + argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note!')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){ //argv is used to access the options provided in command line
        console.log('Listing out all notes!')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading the note!')
    }
})

//console.log(yargs.argv); // parses the arguments but not ideal way

yargs.parse() // ideal way to parse the arguments with all the configuration details you provide


/* Why to use Yargs?
1.Parses command-line arguments into easy-to-use objects
2. Automatically generates help documentation

3. Supports commands, options, and argument validation

4. Handles flags like --title "My Note"

5. Makes writing complex CLI tools easy and structured
*/

