const express = require('express')
const router = express.Router()
// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items
router.get('/', (req, res) => {
    res.send(todos)
})

// Add a new to-do item
router.post('/', (req, res) => {
    const todo = req.body
    todos.push(todo)
    res.sendStatus(201)
})
// Update a to-do item by ID
router.put('/:id', (req, res) => {
    const id = req.params.id
    if (id < todos.length) {
        todos[id] = req.body
        res.send(todos[i])
    } else {
        res.sendStatus(400)
    }
})

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
    const id = req.params.id
    if (id < todos.length) {
        todos.splice(id, 1)
        res.sendStatus(200)
    } else {
        res.sendStatus(400)
    }
})

module.exports = router