// For-of loop
// Syntax: for (const iterator of object) {
    // scope body
// }
// this are array specific loops

// ["", "", ""]  array containing objects
// [{}, {}, {}] 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps - it is known for unique values

const map = new Map()
map.set('IN', "India")
map.set('USA', "UNited States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) { // here [] is used to hold value and kkey seperatly
    // console.log(key, ':-', value);
}

// when we have object in for-of loop

const myObject = {
    'game1': 'NFS',
    'game2': 'COD'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); // myObject is not iterable
// }
