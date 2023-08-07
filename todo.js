#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
console.log(userInputs)
switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'done':
    await commands.deleteTodoById(userInputs[3])
    break
  case 'add':
    await commands.add(userInputs[3])    
    break
  case 'update': {
    const updatedTodo = {id: userInputs[3], task: userInputs[4]}
    await commands.update(updatedTodo)
    break
  }  
  default:
    console.log(`I don't understand that command: ${cmd}`)
}

