//*************Stack and Heap Memory Allocation***********/
// Stack (Primitive)  --> call by value
// VAlue is not accessed directly we will get a copy from
// the memory of the value and then we can use that


// Heap (Non-Primitive)  --> call by reference
// Here we will get the location of the memory of original value saved there
// here wwe will get same value as saved earlier

let myYoutubeName = "rohitbaghel.com"

let anotherName = myYoutubeName;
anotherName = "coffee or code";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rohitbaghel.com"

console.log(userOne.email);
console.log(userTwo.email);