// This keyword - it reffer the current context
const user = {
    username: "Rohit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welocme to website`);
        console.log(this); // // this will print the current context(inside the function)
    }
}

// user.welcomeMessage() // current username
// user.username = "sam" // current context changed/updated here
// user.welcomeMessage()
// if the above three loc commented we will get different output
// console.log(this); // output:empty parnthsis{}, cause there is no context in global variable(run outside the function)
// but when it(this) run in browser console...it return a window output there cause in the browser engine it is a global object

// function chai(){
//     let username = "Rohit"
//     console.log(this); // output is a global variable or object
// }
// chai();

// function chai(){
//     let username = "Rohit" 
//     console.log(this); // undefined 
// }
// chai();

// Arrow function?
// Syntax of Arrow Function
// () => {}

const chai = () => {
    let username = "Rohit"
  //  console.log(this.username);  // undefined
    console.log(this); // {}
}
// chai();

// Basic Arrow
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));

// Implicit return
// here we implicity don't need to write return
// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3, 4));

// if warped in () these it's also Implicit return Arrow Function
// const addTwo = (num1, num2) =>  (num1 + num2)
// const addTwo = (num1, num2) =>  {username: "rohit"} // undefined
const addTwo = (num1, num2) =>  ({username: "rohit"}) // after() introduce...output:{ username: 'rohit' }
console.log(addTwo(3, 4));