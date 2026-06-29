/* const num = require('./numbers');

let n = 17;

console.log("Number =", n);

console.log("Even :", num.isEven(n));
console.log("Odd :", num.isOdd(n));
console.log("Prime :", num.isPrime(n));
*/

// Install prompt-sync
// npm install prompt-sync
// Import prompt-sync
const prompt = require('prompt-sync')();

// Import module
const num = require('./numbers');

// Accept input from user
let n = Number(prompt("Enter a number: "));

// Call functions
console.log("Number =", n);

console.log("Even  :", num.isEven(n));
console.log("Odd   :", num.isOdd(n));
console.log("Prime :", num.isPrime(n));