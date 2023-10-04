import * as db from './db.js'
import {describe, it, expect, beforeAll, beforeEach, afterAll} from 'vitest'

import connection from './connections.js'

beforeAll(() => {
    return connection.migrate.latest()
})
  
beforeEach(() => {
    return connection.seed.run()
})

describe('getTodos', () => {
    it('gets the complete list of todos', async() => {
        const list = await db.getTodos()
        expect(list).toHaveLength(3)
    })
})

describe('deleteTodo', () => {
    it('tests deleting a single todo', async() => {
        await db.deleteTodo(3)
        const list = await db.getTodos()
        expect(list).toHaveLength(2)
    })
})

describe('addTodo', () => {
    it('tests adding a new todo', async() => {
        await db.addTodo({task: 'Adding another task'})
        const list = await db.getTodos()
        expect(list).toHaveLength(4)
    })
})

describe('updatedTodo', () => {
    it('tests updating a todo', async() => {
        const updatedTodo = {id: 2, completed: true}
        await db.updateTodo(updatedTodo)
        const todo = await db.searchTodoById(2)
        expect(todo.completed).equals(1)
    })
})

describe('searchTodo', () => {
    it('tests searching a todo', async() => {
        const todos = await db.searchTodo('Doing laundry')
        expect(todos).toHaveLength(1)
    })
})

afterAll(() => {
    connection.destroy()
})