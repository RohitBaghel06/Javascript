const name = "Rohit"
const repoCount = 1

// console.log(name + repoCount + " value"); //Earlier way to add string
// Modern JS prefers Backticks

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to declare the string
const gameName = new String('Rohit-rb')

// console.log(gameName[0]); // it display keyvalue pair
// console.log(gameName.__proto__); // => display object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0 ,4)  // Here last value is not displayed
console.log(newString); // Rohi

const anotherString = gameName.slice(-7, 4) // it start from back
console.log(anotherString); // ohi

const newStringOne = "    Rohit    "
console.log(newStringOne);
console.log(newStringOne.trim()); // it removes unneccessary space

// %20 represent the space present in url coding
const url = "https://google.com/rohit%20baghel"

console.log(url.replace('%20', '-'));
// we can also enquiry through it

console.log(url.includes('baghel')); // true

// Coversion of string into array
console.log(gameName.split('-')); // it saparte the input to 2 string