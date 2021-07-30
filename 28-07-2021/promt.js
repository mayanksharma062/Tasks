const ip = require('prompt-sync');
const prompt = ip();
let num1 = Number(prompt("Enter Number"));
let num2 = Number(prompt("Enter Number"));
let sum = (num1 + num2);
console.log(`the sum is: ${sum}`);