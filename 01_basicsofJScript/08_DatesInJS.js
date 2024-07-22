// Dates 

let myDate = new Date()
// console.log(myDate.toString());           // Sat Apr 13 2024 18:04:31 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());       // Sat Apr 13 2024
// console.log(myDate.toISOString());        // 2024-04-13T12:37:54.102Z
// console.log(myDate.toJSON());             // 2024-04-13T12:37:54.102Z
// console.log(myDate.toLocaleDateString()); // 4/13/2024
// console.log(typeof myDate);  // Object

// let myCreatedDate = new Date(2024, 0, 13)     // Months start with 0 in JS
// console.log(myCreatedDate.toDateString());    // 4/13/2024

// let myCreatedDate = new Date(2024, 0, 13, 8, 56, 8)  // // 1/13/2024, 8:56:08 AM
// let myCreatedDate = new Date("2023-01-15")        // yy-mm-dd
let myCreatedDate = new Date("01-16-2024")      // mm-dd-yy

// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()            
// console.log(myTimeStamp);               // 1713013602945
// console.log(myCreatedDate.getTime());   // 1705343400000
// console.log(Math.floor(Date.now()/1000));  // 1713013952

let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(`Todays date is ${newDate.getDay()} and the time is ${newDate.getTime()}`);

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));       // Saturday