// Reduce method in array

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, curval) {
//     console.log(`acc: ${accumulator} and curval: ${curval}`);
//     return accumulator + curval
// }, 0) // 0 act here as a initial value
// console.log(myTotal); // 6

// Reduce method in Arrow function
// const myTotal = myNums.reduce( (acc, curval) => acc + curval, 0)
// console.log(myTotal);

// Add the shoppingCart item prices
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 6999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const PriceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(PriceToPay);