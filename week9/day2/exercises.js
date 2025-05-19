// Exercise 1
// ...

// Exercise 2
const winBattle = () => true
const experiencePoints = winBattle() ? 10 : 1
console.log(experiencePoints)

// Exercise 3
const isString = value => typeof value === 'string'
console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));

// Exercise 4
const sum = (a, b) => a + b

// Exercise 5
function f1(kg) {
    return kg * 1000
}

f1(2.5)

const f2 = function (kg) {
    return kg * 1000
}
f2(2.5)

//f1 can be reassigned, f2 cannot

const f3 = kg => kg * 1000
f3(2.5);

// Exercise 6
(function (children, partner, location, title) {
    console.log(`You will be a ${title} in ${location}, and married to ${partner} with ${children} kids.`)
})(2, 'Karen', 'LA, USA', 'web developer')

// Exercise 8
const makeJuice = (size) => {
    const ingredients = []

    const addIngredients = (ing1, ing2, ing3) => {
        for (const ing of [ing1, ing2, ing3]) {
            ingredients.push(ing)
        }
    }

    const displayJuice = () => {
        const newP = document.createElement('p')
        newP.innerText = `The client wants a ${size} juice, containing ${ingredients.join(', ')}`
        document.getElementsByTagName('body')[0].appendChild(newP)
    }

    addIngredients('whisky', 'cola', 'lemon')
    addIngredients('ice', 'lime', 'mint')
    displayJuice()
}

makeJuice('medium')