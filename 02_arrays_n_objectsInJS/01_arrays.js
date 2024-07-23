// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Ironman", "Dr.Strange"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]); // 0

// #Array methods

// myArr.push(6)     // push will add a new value in an array
// myArr.push(7)
// myArr.pop()       // pop will elliminate last array element

// myArr.unshift(9)  // unshift will add a element at start of an array
// myArr.shift()     // simply remove the starting array element

// console.log(myArr.includes(9)); // false(boolean type)
// console.log(myArr.indexOf(9));  // if not included ans will be -1
// console.log(myArr.indexOf(3));  // if included ans will be same as array element

// const newArr = myArr.join()

// console.log(myArr);  // array format
// console.log(typeof newArr); // array is bind and converted into string

/* #1 Slice - last element is not printed
   #2 Splice- it manipulate orginal array and display the input array value
*/

console.log("A", myArr); // A [ 0, 1, 2, 3, 4, 5 ]

const myNew1 = myArr.slice(1, 3)

console.log(myNew1);  // [ 1, 2 ]
console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myNew2 = myArr.splice(1, 3)
console.log(myNew2); // [ 1, 2, 3 ]
console.log("C", myArr); // C [ 0, 4, 5 ]
