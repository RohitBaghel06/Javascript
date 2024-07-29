// If Statement
const isLoggedIn = true
const temperature = 50

// if (temperature <= 50){
//     console.log("less then 50");
// } else {
// console.log("temperature is greater then 50");
// }
// syntax:// if ( true/*!Condition*/ ){
          //     /*Arguments */
          // }
// <, >, <=, >=, ==(check), !=(not equal), ===(strict check), !==, 

// Scope related (*intresting)

// const score = 200

// if (score > 100) {
//     const power = "fly" // if we use var instead of const it will console both line#21,23
//     console.log(`User power: ${power}`); // User power: fly
// }
// console.log(`User power: ${power}`); // power is not defined

// Short Hand Notation

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // output: test...impilicit scope which executed in a single line 
//or use ',' for 2nd line(This type of code is highly unreadable and not used in the industry)

// nesting or multiple condition
// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = false

if (userLoggedIn && debitCard && 2==2) { // && act as and in which both conditions should be satisfy
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // || act as or which is used to test multiple condition i.e. only one should satisfy
    console.log("User logged in");
}