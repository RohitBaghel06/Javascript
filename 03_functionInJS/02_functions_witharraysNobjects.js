function calculateCartPrice(val1, val2, ...num1){ // here ...operator is act as rest not spread
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 1000 )); // output of num value is in array

const user = {
    username: " Rohit",
    price: 199 
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}

handleObject(user) // // Username is  Rohit and price is 199
handleObject({
    username: "sam",
    price: 299
})  // Username is sam and price is 299

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([300, 500, 800, 100])); // 500