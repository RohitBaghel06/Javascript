// when we have object in for-in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    java: "JAVA"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// when we have array in for-in loop

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // we get numbers as key
    // console.log(programming[key]); // output: key
}

// when we have map in for-in loop

// const map = new Map() // her the map is not iterable then we can't write it in loops in this way
// map.set('IN', "India")
// map.set('USA', "UNited States of America")
// map.set('FR', "France")

// for (const key in map) {
//    console.log(key); // not possible or no output
// }

