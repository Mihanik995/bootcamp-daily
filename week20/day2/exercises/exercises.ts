// Exercise 1
let message: string
message = 'Hello World!'
console.log(message)

// Exercise 2
let age: number
let _name: string
age = 10
_name = 'John'
console.log(age, _name)

// Exercise 3
let id: number | string
id = 1
id = '1'

// Exercise 4
let number: number
const input = prompt('Enter a number')
number = input
    ? parseInt(input, 10)
    : 0
if (number < 0) console.log('Number is less than 0')
else if (number > 0) console.log('Number is more than 0')
else console.log('Number is 0')

// Exercise 5
function getDetails (age: number, name: string): [number, string, string] {
    return [age, name, `Hello, ${name}! You are ${age} years old.`]
}

const details = getDetails(25, 'Alice')
console.log(details)

// Exercise 6
type Person = {
    name: string,
    age: number
}

function createPerson (name: string, age: number): Person {
    return {name, age}
}

console.log(createPerson('Alice', 25))
console.log(createPerson('Peter', 42))

// Exercise 7
const greeting = document.getElementById('greeting') as HTMLHeadingElement
greeting.innerText = 'Hello TypeScript!'

// Exercise 8
function getAction(role: string): string {
    switch (role.toLowerCase()) {
        case 'admin':
            return 'Manage users and settings'
        case 'editor':
            return 'Edit content'
        case 'viewer':
            return 'View content'
        case 'guest':
            return 'Limited access'
        default:
            return 'Invalid role'
    }
}

console.log(getAction("admin"))
console.log(getAction("editor"))

// Exercise 9
function greet(name: any): string
function greet(name: string): string

function greet(name: any): string {
    return typeof name === 'string'
        ? `Hello, ${name}!`
        : 'Hello!'
}

console.log(greet('Alice'))
console.log(greet(25))