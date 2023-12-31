import { getTodos, close, deleteTodo, addTodo, updateTodo, searchTodo } from './db.js'

export async function list() {
  try {
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task} - ${todo.completed ? 'completed' : 'to do'}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

export async function deleteTodoById(id) {
  try {
    await deleteTodo(id)
  } catch (err){
    logError(err)
  } finally {
    close()
  }
}

export async function add(task) {
  try {
    await addTodo(task)
  } catch (err){
    logError(err)
  } finally {
    close()
  }
}

export async function update(todo) {
  try {
    await updateTodo(todo)
  } catch (err){
    logError(err)
  } finally {
    close()
  }
}

export async function search(task) {
  try {
    const searchTask = await searchTodo(task)
    printTodos(searchTask)
  } catch (err){
    logError(err)
  } finally {
    close()
  }
}