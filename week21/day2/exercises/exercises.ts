// Exercise 1
type Person = { name: string, age: number }
type Address = { street: string, city: string }

type PersonWithAddress = { person: Person, address: Address }

// Exercise 2
function describeValue(value: string | number): string {
    switch (typeof value) {
        case 'number':
            return 'This is a number'
        case 'string':
            return 'This is a string'
    }
}

// Exercise 3
const someValue: any = 'string'
const stringCast = <string>someValue
console.log(stringCast.toUpperCase())
console.log(typeof stringCast)

// Exercise 4
function getFirstElement(array: number[] | string[]) {
    return array[0] as string
}

console.log(getFirstElement([1, 2, 3]))
console.log(getFirstElement(['a', 'b', 'c']))

// Exercise 5
function logLength<T extends { length: number }>(value: T): void {
    console.log(value.length)
}

logLength('hello')
logLength('world'.split('') as string[])
// logLength(123) - won't work

// Exercise 6
// type Person - described above
type Job = {
    position: 'Manager' | 'Developer',
    department: string
}
type Employee = {
    person: Person,
    job: Job,
}

function describeEmployee (employee: Employee) {
    switch (employee.job.position) {
        case 'Manager':
            console.log(`${employee.person.name}'s job is to maintain team's progress`)
            break
        case 'Developer':
            console.log(`${employee.person.name}'s job is to create scalable applications`)
            break
    }
}

// Exercise 7
function formatInput <T extends { toString(): string }> (input: T): string {
    return input.toString() as string
}