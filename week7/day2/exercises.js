// Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];

people.shift()
people[people.indexOf('James')] = 'Jason'
people.push('Mikhail')
console.log(people.indexOf('Mary'))
let peopleCopy = people.slice()
console.log(peopleCopy.indexOf('Foo'))
let last = people[people.length - 1]

for (let person of people) {
    console.log(person)
}
for (let person of people) {
    console.log(person)
    if (person === 'Devon') {
        break
    }
}

// Exercise 2
const colors = ['red', 'green', 'blue', 'yellow', 'magenta']
for (let [index, value] of colors.entries()) {
    console.log(`My #${index} choice is ${value}`)
}

// Exercise 3
let userNumber
do {
    userNumber = parseInt(prompt('Enter a number:'))
} while (userNumber < 10)

// Exercise 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)
let tenant = building.nameOfTenants[1].toLowerCase()
console.log(tenant, building.numberOfRoomsAndRent[tenant.toLowerCase()])
if (building.numberOfRoomsAndRent['sarah'][1] + building.numberOfRoomsAndRent['david'][1] > building.numberOfRoomsAndRent['dan'][1]) {
    building.numberOfRoomsAndRent['dan'][1] = 1200
}

// Exercise 5
const family = {
    dad: 'Mark',
    mom: 'Eva',
    uncle: 'Oliver'
}
for (let value of Object.values(family)){
    console.log(value)
}
for (const key of Object.keys(family)) {
    console.log(key)
}

// Exercise 6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let result
for (let [key, value] of Object.entries(details)){
    result += key + ' ' + value + ' '
}
console.log(result)

// Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

console.log(names.map(n => n[0]).sort((a, b) => a.localeCompare(b)).join(''))