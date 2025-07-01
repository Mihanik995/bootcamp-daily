const express = require('express')
const app = express()
app.use(express.json())

const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
];
let correctAnswers = 0

app.get("/quiz/:id", (req, res) => {
    const id = parseInt(req.params.id) || 0
    res.send(triviaQuestions[id])
})

app.post("/quiz", (req, res) => {
    let {id, answer} = req.body
    if (answer.toLowerCase() === triviaQuestions[id].answer.toLowerCase()) {
        correctAnswers += 1;
    }
    if (id === triviaQuestions.length - 1) {
        res.redirect(`/quiz/score`)
    } else {
        res.redirect(`/quiz/${+id + 1}`)
    }
})

app.get('/quiz/score', (req, res) => {
    res.send({correctAnswers})
})

app.listen(3000)