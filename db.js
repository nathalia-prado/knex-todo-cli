import db from './connections.js'

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export function close() {
  db.destroy()
}

export function deleteTodo(id) {
  return db('todos').delete().where({id})
}

export function addTodo(task) {
  const newTodo = {task: task}
  return db('todos').insert(newTodo)
}

export function updateTodo(todo) {
  return db('todos').update(todo).where('id', todo.id)
}

export function searchTodo(task) {
  return db('todos').select().where('task', task)
}

export function searchTodoById(id) {
  return db('todos').select().where('id', id).first()
}