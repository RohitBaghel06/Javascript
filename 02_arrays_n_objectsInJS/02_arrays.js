const marvel_heros = ["Dr.Strange", "Thor", "Ironman" ]
const dc_heros = ["Superman", "Flash", "Batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros); // [ 'Dr.Strange', 'Thor', 'Ironman', [ 'Superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros[3][2]);  // Batman

// method #1
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // [ 'Dr.Strange', 'Thor', 'Ironman', 'Superman', 'Flash', 'Batman' ]

// method #2 -- most people prefer this method
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // output same as above

// Array in array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
 /* [
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ] */

console.log(Array.isArray("Rohit")); // false
console.log(Array.from("Rohit")); // [ 'R', 'o', 'h', 'i', 't' ]
console.log(Array.from({name:"Rohit"})) // intersting.. it will display a empty array

let score1 = 100
let score2 = 200
let score3 = 300 

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]