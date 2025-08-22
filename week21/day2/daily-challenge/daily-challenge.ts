type User = { type: 'user', name: string, age: number }
type Product = { type: 'product', id: number, price: number }
type Order = { type: 'order', orderId: string, amount: number };

function handleData(data: (User | Product | Order)[]): string[] {
    return data.map(elem => {
        switch (elem.type) {
            case 'user':
                return `Greetings, ${elem.name} (${elem.age})`
            case 'product':
                return `Product #${elem.id} - $${elem.price}`
            case 'order':
                return `Order #${elem.orderId} - $${elem.amount}`
        }
    })
}

console.log(handleData([
    {type: 'user', name: 'Oleg', age: 10},
    {type: 'product', id: 1, price: 10},
    {type: 'order', orderId: '123', amount: 100}
]))