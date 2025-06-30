const express = require('express')
const app = express()
app.use(express.json())

const data = []

app.get('/posts', (req, res) => {
    res.send(JSON.stringify(data))
})

app.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = data.find(post => post.id === id)
    if (post) {
        res.send(JSON.stringify(post))
    } else {
        res.sendStatus(404)
    }
})

app.post('/posts', (req, res) => {
    const {title, content} = req.body
    if (title && content) {
        const id = Math.max(...data.map((post) => post.id)) + 1
        data.push({id, title, content})
        res.send(JSON.stringify({id, title, content}))
    } else {
        res.sendStatus(400)
    }
})

app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = data.find(post => post.id === id)
    if (post) {
        const {title, content} = req.body
        if (title && content) {
            post.title = title
            post.content = content
            res.send(JSON.stringify(post))
        } else {
            res.sendStatus(400)
        }
    } else {
        res.sendStatus(404)
    }
})

app.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = data.find(post => post.id === id)
    if (post) {
        data.splice(data.indexOf(post), 1)
        res.sendStatus(200)
    } else {
        res.sendStatus(404)
    }
})

app.all('*', (req, res) => {
    res.sendStatus(404)
})

app.listen(3000)