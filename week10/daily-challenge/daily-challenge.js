const isAnagram = function (strOne, strTwo) {
    strOne = strOne.toLowerCase().replace(/ /g, '').split('')
    strTwo = strTwo.toLowerCase().replace(/ /g, '').split('')
    let isAnagram = true
    strOne.forEach(elem => {
        strTwo.includes(elem)
            ? strTwo.splice(strTwo.indexOf(elem), 1)
            : isAnagram = false
    })
    return isAnagram
}

console.log(isAnagram('Astronomer', 'Moon starer'))
console.log(isAnagram('School master', 'The classroom'))
console.log(isAnagram('The Morse Code', 'Here come dots'))
console.log(isAnagram('School', 'Card'))
