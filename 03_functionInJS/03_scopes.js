// {} here it is scope used with function or if-else

// var case1
var c = 300 // outside the scope the vaiables are global scope

if (true) { 
    // inside the scope the variables are local/block scope 
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); // a not defined
// console.log(b); // b is not defined
console.log(c); // but here is output: 30
// here why we should not use var variable upward

// Case2
let a = 400 

if (true) { 
    let a = 10
    const b = 20
    console.log("INNER:", a); // INNER: 10
}

console.log(a); // 400
