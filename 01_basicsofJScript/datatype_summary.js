// Primitive datatypes - call by value
// It has 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId); // => false values are not same

const bigNumber = 100n

// Reference type (Non primitive)

// Array, Objects, Functions

// Arrays
const heros = ["Ironman", "Spiderman", "Shaktiman"]

//Objects in curly braces
let myObj = {
    name: "Rohit",
    age: 21,
}

// Functions 
// we can also use Fnctions as an Variable type in JS

const myFunction = function(){     
       console.log("Hello world");
}                              

console.log(typeof id)