const accountId = 144553
let accountEmail ="rohit@gmail.com"

/*
Prefer not to use var 
because of the issue in block scope and fuctional scope
*/

var accountPassword = "12345"
//not to be use but we can use like this

accountCity = "Jaipur"

let accountState 
//In js if we define any variable and don't assign a value
//then it will be saved as undefined


// accountId = 2 // Not allowed

accountEmail = "hc@hc.com"
accountPassword = "21213"
accountCity = "Delhi"

console.log(accountId);
//better way to print too many variable's value
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);