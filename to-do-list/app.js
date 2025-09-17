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
        td.add(argv.title,argv.status)
    }
}) 

yargs.command({
    command:'done',
    description:'marks done',
    builder: {
        title:{
            describe:'task title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        td.done(argv.title)
    }
})
yargs.parse()