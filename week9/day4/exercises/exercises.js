// Exercise 1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((elem, index) => console.log(`#${index + 1} choice is ${elem}.`))
colors.includes('Violet') ? console.log('Yeah') : console.log('No...')

// Exercise 2
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((elem, index) => {
    let counter
    [1, 2, 3].includes(index + 1)
        ? counter = `${index + 1}${ordinal[index + 1]}`
        : counter = `${index + 1}${ordinal[0]}`
    console.log(`${counter} choice is ${elem}.`)
})

// Exercise 3
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // [bread, carrot, potato, chicken, apple, orange]

// ------2------
const country = "USA";
console.log([...country]); //[U, S, A]

// ------Bonus------
let newArray = [...[, ,]];
console.log(newArray); // [,,]

// Exercise 4
const users = [{firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident'},
    {firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident'},
    {firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor'},
    {firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor'},
    {firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident'},
    {firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    {firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map(n => `Hello ${n.firstName}`)
console.log(welcomeStudents)
const fullStackers = users.filter(n => n.role === 'Full Stack Resident')
console.log(fullStackers)
const lastNames = users.filter(n => n.role === 'Full Stack Resident')
    .map(n => n.lastName)
console.log(lastNames)

// Exercise 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const epicStr = epic.reduce((sum, elem) => sum + elem + ' ', '')
console.log(epicStr)
