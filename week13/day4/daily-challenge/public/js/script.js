let userScore = 0
let currentOption
const emojis = []
const scoreView = document.getElementById('user-score')
const choiceLabel = document.getElementById('choiceLabel')
const choice = document.getElementById('choice')

fetch('/emojis')
    .then(res => res.json())
    .then(data => {
        for (const emoji of data) {
            emojis.push(emoji)
            const newOption = document.createElement('option');
            newOption.text = `${emoji.name}`;
            newOption.value = emoji.name;
            choice.appendChild(newOption);
        }

        currentOption = emojis[Math.floor(Math.random() * emojis.length)];
        choiceLabel.innerText = `${currentOption.emoji}: `
        scoreView.innerText = `Current score: ${userScore}`;
    }).catch(err => console.error(err));

function play(event) {
    event.preventDefault()

    const result = document.getElementById('result')
    if (event.target.choice.value === currentOption.name) {
        result.innerText = 'Congrats!';
        result.style.color = 'green'
        userScore += 1
    } else {
        result.innerText = 'Wrong!'
        result.style.color = 'red'
    }
    setTimeout(() => {
        result.innerText = ''
    }, 2000)

    currentOption = emojis[Math.floor(Math.random() * emojis.length)];
    choiceLabel.innerText = `${currentOption.emoji}: `
    scoreView.innerText = `Current score: ${userScore}`;
}
