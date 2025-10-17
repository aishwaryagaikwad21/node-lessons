//simply enable ES modules in a Node.js package by changing the file extensions from .js to .mjs

import {add, subtract} from './util.mjs'

console.log(add(5, 5)) // 10
console.log(subtract(10, 5)) // 5