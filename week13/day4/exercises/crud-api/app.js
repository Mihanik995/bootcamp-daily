const express = require('express')
const fetchPosts = require('./data/dataService')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    fetchPosts().then((posts) => {
        console.log('Posts were successfully retrieved')
        res.status(200).send(posts)
    })
})

app.listen(5000, () => {
    console.log('Server is running on port 5000...')
})