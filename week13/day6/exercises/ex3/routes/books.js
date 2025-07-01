const express = require('express')
const router = express.Router()

// Sample in-memory database for storing books
const books = [];

// Get all books
router.get('/', (req, res) => {
    res.send(books);
})

// Add a new book
router.post('/', (req, res) => {
    const newBook = req.body;
    books.unshift(newBook);
    res.send(books[0]);
})

// Update a book by ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    if (id < books.length) {
        books[id] = req.body;
        res.send(books[id]);
    } else {
        res.sendStatus(400)
    }
})

// Delete a book by ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    if (id < books.length) {
        books.splice(id, 1);
        res.sendStatus(200)
    } else {
        res.sendStatus(400)
    }
})

module.exports = router