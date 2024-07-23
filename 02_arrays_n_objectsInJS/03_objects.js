// Singleton
// this means when ever you make an object using a constructor 
// that will result in creation of a singleton object 
// means that it will be only one object of its type 

// Singleton creations 
// Object.create // this is called from constructor method

// But when we make it using other methods the objects will not be Singleton

// Object literals
// Not like Array that we have only one way to ge the elements using the indexing 
// But we can use the keys in the object so retrieve the elements
// Symbol Question
// How can you deploy the Symbol as a key in the Object?

const mySym = Symbol("key1")
// we can't directly use it like mySym: "myKey1" this will return error.

const JsUser1 = {
    name: "Rohit", // name here behind the scene is traked as string
    "full name": "Rohit Baghel", 
    age: 21,
    mySym: "mykey1",
    location: "Delhi",
    email: "rohit@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // here the object should be in sq.braces in form of string
// console.log(JsUser["full name"]); // we can't access this value from dot method
// console.log(JsUser.mySym); // Although this will return the value defined in mySym in the Object 
// // But When we check it's datatype it will not be symbol
// console.log(typeof (JsUser.mySym)); // string

//! To use Symbol as a key in object let's see 
const JsUser2 = {
    name: "Rohit",
    age: 21,
    [mySym] : "mykey1", // to use it as a Symbol we will Add SQUARE BRACKETS AROUND IT
    location: "Delhi",
    email: "rohit@googel.xom",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser2[mySym]); // return myKey1
console.log(typeof(JsUser2[mySym])); // returns  Strings

JsUser2.email = "rohit@chatgpt.com" // this is how we can make changes in objects
// Object.freeze(JsUser2) // this is how we can make data(object) unchangeable
JsUser2.email = "rohit@microsoft.com"
console.log(JsUser2);

// IN js function are like Type1 citizens who are not discriminated we can treat them as variable

JsUser2.greeting = function(){
    console.log("Hello JS user");
}

JsUser2.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser2.greeting()); // Hello JS user
console.log(JsUser2.greetingTwo()); // Hello JS user, Rohit