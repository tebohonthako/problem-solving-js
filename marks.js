// PROMPT USER TO INPUT 3 MARKS 

// CALCULATE SUM AND AVERAGE OF THE RESULT 

// IDENTIFY THE STATUS FROM THE FINAL-MARK 

// average < 50    ----->  F A I L 
// average > 50    ----->  P A S S 
// average >= 75   ----->  D I S T I N C T I O N 
// average > 100   ----->  C H E C K    U R    I N P U T S 

let prompt = require("prompt-sync")();

// let mark1 = parseInt(prompt("enter 1st mark..."));
// let mark2 = parseInt(prompt("enter 2nd mark..."));
// let mark3 = parseInt(prompt("enter 3rd mark..."));

// var status = ''; //empty string
// let sum = mark1 + mark2 + mark3;
// let average = parseInt(sum / 3);

// if(average < 50 ){
//    status = "That was an epic fail!"; // store the message inside an empty string 
// } else if( average >= 50 && average < 75){
//     status = "You passed! Good job! ✅";
// } else if(average >= 75 && average <= 100) {
//    status = "Excellent work! You got a distinction! 🌟💯"
// }else {
//     console.log("error")
// }



// loop to do the same process 3 times 

    for (let i = 0; i <3; i++){

let personName = prompt("enter your name...")   // person name 
let mark1 = parseInt(prompt("enter 1st mark..."));
let mark2 = parseInt(prompt("enter 2nd mark..."));
let mark3 = parseInt(prompt("enter 3rd mark..."));

var status = ''; //empty string
let sum = mark1 + mark2 + mark3;
let average = parseInt(sum / 3);

if(average < 50 ){
   status = "That was an epic fail!"; // store the message inside an empty string 
} else if( average >= 50 && average < 75){
    status = "You passed! Good job! ✅";
} else if(average >= 75 && average <= 100) {
   status = "Excellent work! You got a distinction! 🌟💯"
}else {
    console.log("error")
}
console.log(` ${personName} Your final mark is ${average}, ${status}`)

    }
