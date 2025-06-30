const express = require('express')
const app = express()
app.use(express.json())

const books = [
    {id: 1, author: "Max Frei", title: "The Stranger", publishedYear: 1996},
    {id: 2, author: "john Tolkien", title: "The Hobbit", publishedYear: 1937},
]

app.get('/api/books', (req, res) => {
    res.send(books)
})

app.get('/api/books/:id', (req, res) => {
    const id = req.params.id
    const book = books.find(book => book.id === id)
    if (!book) {
        return res.status(404).send('Book not found')
    } else {
        return res.status(200).send(book)
    }
})

app.post('/api/books', (req, res) => {
    const { author, title, publishedYear } = req.body
    if (!title || !publishedYear || !author) {
        return res.status(400).send('Please enter title, author and published year')
    }
    const id = Math.max(...books.map(book => book.id)) + 1
    const book = {id, author, title, publishedYear}
    books.push(book)
    res.status(201).send(book)
})

app.listen(5000, () => {
    console.log('Server is running on port 5000...')
})