// another method using map

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10) 
// console.log(newNums);

// Chaining

const newNums = myNumbers
                .map( (num) => num * 10) // indent shortcut = ctrl+]
                .map( (num) => num + 1) // first map value are passed in this as num
                .filter( (num) => num >=40 )

console.log(newNums);