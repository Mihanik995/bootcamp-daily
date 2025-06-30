const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', './public');

const emojis = [
    {emoji: '😀', name: 'Smile'},
    {emoji: '🐶', name: 'Dog'},
    {emoji: '🌮', name: 'Taco'},
];

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/emojis', (req, res) => {
    res.send(emojis);
})

app.listen(3000, () => {
})