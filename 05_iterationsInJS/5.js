// for-each loop
// syntax: arrayName.forEach(element => {
    
// });

const coding = ["js", "ruby", "rust", "python", "cpp"]

// coding.forEach( function name() {})
// coding.forEach( function (val){
//     console.log(val); // values of array
// })

// Arrow function in for-each

// coding.forEach( (item) => {
//     console.log(item); // values of array
// } )

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) // only have tot give the refference...it will print printMe itself

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr); // all index has access of whole array
});

// for-each loop in array containg objects ( it is useful in database)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "JAVA",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
});