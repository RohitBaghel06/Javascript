// let score = 19 --> Number
// let score = "19" --> string
// let score = "19abc"  -->NaN

// let score = null --> 0
// let score = undefined -->NaN

// let score = true --> 1  and false --> 0
let score = "Rohit" //it's a NaN

// const {score} = req.body
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// 1 --> Boolean --> true 0 =>false
// "" => false // empty string is false
let isLoggedIn = "Rohit"// =>true // string is true
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

let someNumber = 19

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************* Operations ********************

let value = 6
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

// This is the addintion of strings
let str1 = "Hello "
let str2 = "Rohit"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( 3 + 4 * 5 % 3); this is not a good approach
// speacify as ( (3+4)* (5 % 3))

// console.log(+true); --> 1 // this doesn't make sense  
// console.log(+""); -->0    // this type of work is not acccepted in the production

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // it decreases the readiability

let gameCounter = 100
gameCounter++; // prefix and postfix operator give diffent results as we know
console.log(gameCounter);  // => 101