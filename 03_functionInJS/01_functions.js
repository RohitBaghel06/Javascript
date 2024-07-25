//? ****************** Functions **************************
//! A js function is a block of code designed to perform a particular task.
//! A js function is executed when "something" invokes it (calls it).

// Functions invocation
//! the code inside the function will execute when "something" Invokes (calls the fun)
//!    - When an event occurs(When a use clicks a button)
//!    - When it is invoked (called) from js code
//!    - Automatically (self Invoked)

// Function Return 
//! When js reaches a **return** statement, the function will stop executing.
//! If a function was invoked from a statement, JS will "return" to execute the code after the invoke statement
//! Functions often compute a return value. The return value is "returned" back to the "caller".

// Syntax
// function "nameOfFunction(or keyword){
// code to execute the keyword or parameters }   "

function sayMyName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}
// sayMyName is reference.. () paranthises denotes the execution of program
// sayMyName() // function calling or execution of function

// function addToNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addToNumbers()       // NaN
// addToNumbers(3, 4)   // 7 "This a is an ideal case"
// // but as we know, what will happen if we introduce numbers in string format
// addToNumbers(3, "4") // 34
// addToNumbers(3, "A") // 3A

// Parameters and Arguments 
// function somefun(num1, num2) "This is an parameter"  
// addTwoNumbers(3 , null) "This is an Argument"

// const result = addToNumbers(3, 5)
// console.log("Result: ", result); // Result:  undefined

function addToNumbers(num1, num2){
    // let result = num1 + num2
    // console.log("Rohit"); // executed before return
    // return result
    // console.log("Rohit"); // but not executed after return

    return num1 + num2 // another way to return.. it takes less space
    // when we return a value then only we can store it in variable form
}
const result = addToNumbers(5, 5) 
// console.log("Result: ", result); // 10
// console.log(typeof result); // number

// Another way to take values in function
function loginUserMessage1(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage1("Rohit")); // Rohit just logged in
console.log(loginUserMessage1()); // undefined just logged in

function loginUserMessage2(username = "sam" ) { // here the value is predefined
    if (!username){ // Another way of write the same thing.. !mark change true to false or vice versa
        console.log("Please enter a Username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2()); // sam just logged in
console.log(loginUserMessage2("Rohit")); //Rohit just logged in