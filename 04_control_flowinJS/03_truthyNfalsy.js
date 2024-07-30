const userEmail = []

if (userEmail) {
    console.log("Got the user Email");
} else {
    console.log("Don't have user Email");
}

/* falsy values 
   false, 0, -0, BigInt(0n), null, "", undefined, NaN

   truthy values
   [], "0", 'false', " space", {}, function(){}, 
*/

// how to detect array is empty or not
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

// how to detect object is empty or not
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// basics: false == 0 -> true , false == ''-> true , 0== ''-> true

// Nullish Coalescing Operator (??): Null undefined
// (??)operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.
let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10  // 10
// val1 = undefined ?? 15  // 15
val1 = null ?? 10 ?? 20  // 10

console.log(val1); 

// Ternary Operator (?)

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); // output:more than 80
