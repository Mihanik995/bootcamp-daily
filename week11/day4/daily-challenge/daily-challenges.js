// Challenge 1
const makeAllCaps = function (arr) {
    return new Promise((resolve, reject) => {
        return arr.some(elem => !(typeof elem === 'string'))
            ? reject(`invalid data: ${arr.find(elem => !(typeof elem === 'string'))}`)
            : resolve(arr.map(elem => elem.toUpperCase()))
    })
}

const sortWords = function (arr) {
    return new Promise((resolve, reject) => {
        return arr.length >= 4
            ? resolve(arr.sort((a, b) => a.localeCompare(b)))
            : reject('array is too short')
    })
}

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error))

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))

// Challenge 2
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

const toJS = function () {
    return new Promise((resolve, reject) => {
        return morse
            ? resolve(JSON.parse(morse))
            : reject('morse is empty')
    })
}

const toMorse = function (morseJS) {
    return new Promise((resolve, reject) => {
        const arr = prompt('Give me a sentence: ').toLowerCase().split('')
        const anomaly = arr.find(elem => !Object.keys(morseJS).includes(elem))
        return anomaly
            ? reject(`"${anomaly}" doesn't exist in the morse javascript object`)
            : resolve(arr.map(elem => morseJS[elem]))
    })
}

const joinWords = function(morseTranslation) {
    document.getElementsByTagName('h1')[0].innerText = morseTranslation.join('\n')
}

toJS().then(result => toMorse(result))
    .then(result => joinWords(result))
    .catch(error => console.warn(error))