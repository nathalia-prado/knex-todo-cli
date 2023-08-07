import knexfile from './knexfile.js'
import knex from 'knex'


const db = knex.default(knexfile.development)

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

