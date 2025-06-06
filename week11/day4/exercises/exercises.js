// Exercise 1
const compareToTen = function (num) {
    return new Promise((resolve, reject) => {
        return num > 10
            ? reject(`${num} is greater then 10`)
            : resolve(`${num} is less or equal to then 10`)
    })
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.warn(error))

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.warn(error))

// Exercise 2
new Promise((resolve, reject) => {
    setTimeout(() => resolve('success'), 4000)
}).then()

// Exercise 3
Promise.resolve(3)
Promise.reject('Boo!')