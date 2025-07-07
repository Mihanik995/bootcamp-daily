const express = require('express');
const app = express();
app.use(express.json());

const db = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'mihanik95',
        database: 'bootcamp',
        port: 5432,
    },
});

app.get('/posts', (req, res) => {
    db.select().from('posts')
        .then(result => {
            res.send(result)
        })
        .catch(err => res.sendStatus(500));
})

app.get('/posts/:id', (req, res) => {
    db.select().from('posts').where('id', req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => res.sendStatus(500))
})

app.post('/posts', (req, res) => {
    const {title, content} = req.body;
    db.insert({title, content}, ['id', 'title', 'content']).into('posts')
        .then(result => res.send(result))
        .catch(err => res.sendStatus(500));
})

app.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    const {title, content} = req.body;
    db('posts').where('id', id).update({title, content})
        .then(result => res.send(result))
        .catch(err => res.sendStatus(500))
})

app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    db('posts').where('id', id).delete()
        .then(() => res.sendStatus(202))
        .catch(err => res.sendStatus(500))
})

app.listen(8080);