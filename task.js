
// task 1
/*
var n = 2332; 

var thousands = Math.floor(n / 1000);
var hundreds = Math.floor((n % 1000) / 100);
var tens = Math.floor((n % 100) / 10);
var ones = n % 10;


var reversed = ones * 1000 + tens * 100 + hundreds * 10 + thousands;


if (n === reversed) {
  console.log("YES");
} else {
  console.log("NO");
}


********************/

// task 2 
/*
var n = 2100; 

if (n % 3 === 0 && n % 7 ===0) {
  console.log(true);
} else {
  console.log(false);
}
*/
//task3 
//wanted to make this task different but failed
/*
var n = prompt("Enter a natural number:");
var lastDigit = n % 10;
console.log("The first digit from the right of", n, "is", lastDigit);

*/
//task 4 
/*
let num = 2853; 

let reversed = parseInt(num.toString().split('').reverse().join(''));

console.log(reversed); 

*/
//task 5
/*
let number = 123; 
let sum = 0;


sum += Math.floor(number / 100); 
sum += Math.floor(number / 10) % 10;
sum += number % 10; 

console.log(sum); 
*/
//task6
/*
var number = 123; 

if (number >= 100 && number <= 999) {
  console.log(`${number} is a 3-digit number.`);
} else {
  console.log(`${number} is not a 3-digit number.`);
}
*/
//task 7 
//???



