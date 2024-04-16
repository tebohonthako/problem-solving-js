const prompt = require('prompt-sync')();

// 1. PROMPT USER INPUT 2 VALUES 
// const is a constant 
// var can reassingn 
// let cannot be redeclared BUT can reassing value
const prompt1 = parseInt(prompt ("Enter 1st number: ")); // we use parseint cause we expect a number
const prompt2 = parseInt(prompt("Enter 2nd number: "));
const operator = prompt("Enter operator: either(+, -, /, *: ");
let results;

// 2. AFTER INPUT (+, -, *, /) OPERATOR
switch (operator)
{
    //adding two numbers
    case '+': 
        results = prompt1 + prompt2;
        console.log(`${prompt1} + ${prompt2} = ${results}`);
        break;
    case '-':
        console.log(`${prompt1} - ${prompt2} = ${results}`);
        break;
    case '*':
        console.log(`${prompt1} * ${prompt2} = ${results}`);
        break;
    case '/':
        console.log(`${prompt1} / ${prompt2} = ${results}`);
        break;
    default:
       console.log("invalid")
       break;
}
// 3. OUTPUT SHOULD BE:
