// syntax: switch (key) {
//     case value:
        
//         break; // break is used to stop control flow

//     default:
//         break;
// }

const month = 3 // we can also take string instead of numbers 
// perhaps case number should be change according to string

switch (month) { // shortcut key = shift + alt + down key...to copy
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb.");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}