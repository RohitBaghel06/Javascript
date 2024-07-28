function one(){
    const username = "Rohit"

    function two(){
        const website = " Youtube"
        console.log(username);
    }
    // console.log(website); // error website not defined cause it could not access two

    two() // if it is commented one will not executed
}
// one() // Rohit

if (true) {
    const username = "Rohit"
    if (username === "Rohit") {
        const website = " youtube"
        console.log(username + website); // Rohit youtube
    }
    // console.log(website); // error website is out of the 2nd if scope
}
// console.log(username); // error username is out of the 1st if scope

// ******************** Intresting ***************

// console.log(addOne(5)); // Output:6 

// this is a function and in this case we are able to access early declaration due to hoisting in JS
function addOne(num){
    return num + 1
}
console.log(addOne(5)); // Output:6 

// addTwo(5) // Error cause the variables were created after and called before

//this another way to declare the function but in this case we aren't able to access early declaration
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5)); // here it works output:7
