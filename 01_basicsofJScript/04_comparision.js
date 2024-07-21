// console.log(2 > 1); // basic conversions
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);

// console.log("2" > 1);   //here, automatically js coverted to into number
// console.log("02" > 1);  // remember when we compair any value..the datatype should be same

//compairision which become problem sometimes
//in most cases this type of conversions are avoided

// console.log(null > 0); --> NaN
// console.log(null == 0); --> NaN
// console.log(null >= 0); // both == and comapiarision works differently
// compairion convert null to a number, treat it as 0.
// that's why null >= 0 is true and null > 0 is false


console.log(undefined == 0);

// === or Strict check

console.log("2" === 2); // here it strictly checks the string