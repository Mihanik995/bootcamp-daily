const {products} = require('./products')

function searchByName(name) {
    const theProduct = products.find(elem => elem.name === name)
    return theProduct
        ? theProduct
        : {message: 'Product not found'}
}

console.log(searchByName('apple'))
console.log(searchByName('cucumber'))
console.log(searchByName('iphone'))