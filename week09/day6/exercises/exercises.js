// Exercise 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//Exercise 2
function displayStudentInfo(objUser) {
    const {first, last} = objUser
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last: 'Schoppik'});

// Exercise 3
const users = {user1: 18273, user2: 92833, user3: 90315}

const usersArray = Object.entries(users)
console.log(usersArray)

const usersArrayModif = Object.entries(users)
    .map(elem => [elem[0], elem[1] * 2])
console.log(usersArrayModif)

// Exercise 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); // Person

// Exercise 5 - the answer is 2

// Exercise 6
// [2] === [2] - False
// {} === {} - False

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5

class Animal {
    constructor(name, type, color) {
        this.name = name
        this.type = type
        this.color = color
    }
}

class Mammal extends Animal{
    constructor(name, type, color) {
        super(name, type, color);
    }

    sound(sound) {
        return `The ${this.color} ${this.type} named ${this.name} does ${sound}!`
    }
}

class farmerCow extends Mammal {
    constructor(name, type, color) {
        super(name, type, color);
    }

    sound() {
        return super.sound('Moooo');
    }
}

const cow = new farmerCow('Lily', 'cow', 'brown and white')
console.log(cow.sound())