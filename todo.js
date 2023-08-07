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
    
  default:
    console.log(`I don't understand that command: ${cmd}`)
}

