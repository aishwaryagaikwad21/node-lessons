const chalk = require('chalk')
const yargs = require('yargs')
const td = require('./to-do.js')

//yargs.version('1.1.0')

//add tasks to-do
yargs.command({
    command: 'add',
    describe: 'add task',
    builder:{
        title:{
            describe:'task title',
            demandOption:true,
            type:'string'
        },
        status:{
            describe:'done or pending',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        console.log('Adding the task...')
        td.add(argv.title,argv.status)
    }
}) 
yargs.parse()