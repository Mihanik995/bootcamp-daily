// Exercise 1
class Employee {
    private name: string
    private salary: number
    public position: string
    protected department: string

    constructor(
        name: string,
        salary: number,
        position: string,
        department: string
    ) {
        this.name = name
        this.salary = salary
        this.position = position
        this.department = department
    }

    public getEmployeeInfo(): { name: string; position: string } {
        return {name: this.name, position: this.position}
    }
}

// Exercise 2
class Product {
    readonly id: number
    public name: string
    public price: number

    constructor(
        id: number,
        name: string,
        price: number
    ) {
        this.id = id
        this.name = name
        this.price = price
    }

    public getProductInfo(): { name: string; price: number } {
        return {name: this.name, price: this.price}
    }
}

const product = new Product(1, 'iPhone', 5000)
console.log(product.getProductInfo())
try {
    product.id = 2
} catch (e) {
    console.error(e)
}

// Exercise 3
class Animal {
    public name: string

    constructor(name: string) {
        this.name = name
    }

    public makeSound(): string {
        return `Animal ${this.name} makes sound`
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    public makeSound(): string {
        return `Dog ${this.name} barks`
    }
}

const dog = new Dog('Charlie')
console.log(dog.makeSound())

// Exercise 4
class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(1, 2))
console.log(Calculator.subtract(5, 2))

// Exercise 5
interface User {
    readonly id: number
    name: string
    email: string
}

interface PremiumUser extends User {
    membershipLevel?: string
}

function printUserDetails(user: PremiumUser): void {
    console.log(`Name: ${user.name}`)
    console.log(`Email: ${user.email}`)
    console.log(`ID: ${user.id}`)
    user.membershipLevel && console.log(`Membership level: ${user.membershipLevel}`)
}

const premiumUser: PremiumUser = {
    name: 'Oleg',
    email: 'example@mail.com',
    id: 1
}
printUserDetails(premiumUser)

premiumUser.membershipLevel = 'basic'
printUserDetails(premiumUser)