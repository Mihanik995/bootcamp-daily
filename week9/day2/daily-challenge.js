let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => groceries.fruits.forEach(n => console.log(n))

const cloneGroceries = () => {
    let user = client
    const shopping = {...groceries}
}

cloneGroceries()