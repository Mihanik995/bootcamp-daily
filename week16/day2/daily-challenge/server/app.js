const express = require('express');
const app = express();
app.use(express.json());

const allowedOrigins = ['http://localhost:5173'];

app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});

app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello from Express!'});
})

app.post('/api/world', (req, res) => {
    res.send({message: `I received your POST request. This is what you sent me: ${req.body.message}`});
})

app.listen(3000, () => {
    console.log('Express server listening on port 3000!');
})