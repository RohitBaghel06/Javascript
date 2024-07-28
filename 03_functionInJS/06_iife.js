// Immediately Invoked Function Expressions (IIFE)
// 1* We create a new scope different from the global scope 
//   SO THAT WE DON'T GET POLLUTION FROM GLOBAL SCOPE So WE MAKE OUR OWN SCOPE
// 2* Also It should be immediately executed 
// This is why we write  IIFE for such Functions

(function chai(){
    // this is a named IIFE 
    console.log(`DB CONNECTED`);
})(); // it works cause we addded a ';' explicitly

// (function aurcode()  {
//     console.log(`DB CONNECTED TWO`);
// })() // here it doesn't work cause we need to end a IIFE function with a ';' after ()

// Variables in iife and how to give it to functions
// this is a unnamed IIFE
( (name) => { // here parameter passes as '(name)'
    console.log(`DB CONNECTED TWO ${name}`);
})('rohit') // it works
// here how? we added 2 IIFE functions upward