const course = {
    coursename: "js in hindi",
    price: "999",
    couseInstructor: "Hitesh"
}
// course.couseInstructor // sometimes repeating this will make 
// redundant code that calls the same thing again and again  

const {couseInstructor} = course
console.log(couseInstructor); // Hitesh

const {couseInstructor: instructor} = course
console.log(instructor); // Hitesh

/* PRops FOR REACT NOT RELATED TO JAVASCRIPT
const navbar = ({company}) => { //! here curly braces are used for destructuring}
navbar(company = "Decryptors") */

// API in json form
{
    name: "Hitesh"
    coursename: "JS in hindi"
    price: "free" 
}

// API in Array form
[
    {},
    {},
    {},
]
// read about: (random user me api) for more study
