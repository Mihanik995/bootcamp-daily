// Not Bad
let sentence = "The movie is not that bad, I like it"

let wordNot = sentence.indexOf('not')
let wordBad = sentence.indexOf('bad')

if (wordNot < wordBad && wordBad >= 0 && wordNot >= 0) {
    sentence = sentence.slice(0, wordNot) + 'good' + sentence.slice(wordBad + 3)
}
console.log(sentence)

// Stars
for (let i = 1; i <= 6; i++) {
    console.log('* '.repeat(i))
}
for (let i = 1; i <= 6; i++) {
    let result = ''
    for (let j = 0; j < i; j++) {
        result += '* '
    }
    console.log(result)
}