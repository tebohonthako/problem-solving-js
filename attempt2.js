// difference between const + let + var 


let prompt = require('prompt-sync')();

const number1 = parseInt(prompt("Enter first number: "));
const number2 = parseInt(prompt("Enter second number: "));
let operator = prompt("Enter operator: (+ - * /)")
let results;


switch(operator) {
    case'+': 
        results = number1 + number2;
        console.log(`${number1} + ${number2} = ${results}`);
        break;

    case'-':
        results = number1 - number2;
        console.log(`${number1} - ${number2} = ${results}`);
        break;

    case'*': 
        results = number1 * number2; 
        console.log(`${number1} * ${number2} = ${results}`);
        break;

    case'/':
        results = number1 / number2; 
        console.log(`${number1} / ${number2} = ${results}`);
        break;

    default:                        
        console.log("invalid");
        break;

}
