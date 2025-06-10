// Exercise 1
function displayNumbersDivisible(divisor) {
    let outcome = []
    let sum = 0
    for (i = 1; i <= 500; i++) {
        if (i % divisor === 0) {
            outcome.push(i)
            sum += i
        }
    }
    console.log(`Outcome : ${outcome.join(' ')}`)
    console.log(`Sum : ${sum}`)
}

// Exercise 2
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

shoppingList = ['banana', 'orange', 'apple']

function myBill() {
    let bill = 0
    for (let item of shoppingList) {
        if (stock[item] > 0) {
            stock[item]--
            bill += prices[item]
        }
    }
    return bill
}

console.log(myBill())

// Exercise 3
function changeEnough(itemPrice, amountOfChange) {
    let totalAmount = amountOfChange[0] * .25 + amountOfChange[1] * .1 + amountOfChange[2] * .05 + amountOfChange[3] * .01
    return totalAmount >= itemPrice
}

// Exercise 4
function hotelCost() {
    let nights
    do {
        nights = parseInt(prompt('Input number of nights you would like to stay: '))
    } while (!nights)
    return `$${nights * 140}`
}

function planeRideCost() {
    let destination
    do {
        destination = String(prompt('Input your destination: '))
    } while (!destination)
    if (destination.toLowerCase() === 'london') {
        return '$183'
    }
    if (destination.toLowerCase() === 'paris') {
        return '$220'
    }
    return '$300'
}

function rentalCarCost() {
    let days
    do {
        days = parseInt(prompt('Input number of days you want to rent a car for: '))
    } while (!days)
    let cost = days * 40
    if (days > 10) {
        cost *= .95
    }
    return `$${cost}`
}

function totalVacationCost() {
    return `The car cost: ${rentalCarCost()}, the hotel cost: ${hotelCost()}, the plane tickets cost: ${planeRideCost()}.`
}

totalVacationCost()


