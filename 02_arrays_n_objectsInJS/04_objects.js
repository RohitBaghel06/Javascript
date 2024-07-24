// const tinderUser = new Object() // this is a singleton object
const tinderUser = {} // Non-singleton objrct
// both are same internally but has different key

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // .. both declares {} empty object

const regularUser = {
    email: "someone@google.com",
    fullname: {
        userfullname: {
            firstname: "Rohit",
            lastname: "Baghel"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// Optional Chaining 
// console.log(regularUser.fullName?.userFullName.firstName); 
// you can see here is a extra ? from the before statement
// this is because we have put a condition to check that it it's correct then only move ahead else return false

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3); 
// this will have a same problem as array.. it return an object containing an object
// Like this--> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4':'b' } }

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// otherwise use spread method
const obj4 = {...obj1, ...obj2}
// console.log(obj4); // same output as above

// Values from database with objects, Suppose
const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
]
console.log(users[1].email);
console.log(tinderUser);

// Sometimes we will need to use some methods like
// Objects. --> This means that you want to run Object Methods on some Object that you have Defined
// In simple words Objects. is used to access methods of Objects
console.log(Object.keys(tinderUser)); // Notice output datatype is array [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Sam', false ]
console.log(Object.entries(tinderUser)); // we get an array in an array which consist keys with there values
// output of above console: [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

// When we are Retriving values sometimes we can't find values for some reason let's assume it's empty 
// Then we can ask the Object too or Check Manually
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // returns True
console.log(tinderUser.hasOwnProperty('isLogged')); // returns False
