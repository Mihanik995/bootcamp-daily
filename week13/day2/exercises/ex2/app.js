import { data } from './data.js'

function averageAge () {
    return data
        ? (data.reduce((acc, elem) => acc + elem.age, 0) / data.length).toFixed(1)
        : 0
}

console.log(averageAge())