/*
//task 1
let number = 43192;
let largestNumber = 0;

while (number > 0) {
  let digit = number % 10; 
  if (digit > largestNumber) {
    largestNumber = digit;
  }
  number = Math.floor(number / 10); 
}

console.log("The largest number is: " + largestNumber); 
*/
//task2?
//task 3 
/*
let number = 16;

if (number === 0) {
  console.log(number + " is not a power of 2"); 
} else if ((number & (number - 1)) === 0) {
  console.log(number + " is a power of 2");
} else {
  console.log(number + " is not a power of 2");
}
*/
//task 4 
/*
let number = 23;
let isPrime = true;

if (number === 1) {
  isPrime = false; 
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false; 
    }
  }
}

if (isPrime) {
  console.log(number + " is a prime number");
} else {
  console.log(number + " is a composite number");
}
*/
//task5
/*
let M = 100;
let count = 0;

for (let i = 1; i <= M; i++) {
  if (i % 15 === 0) {
    count++; 
}

console.log("numbers from 1 to " + M + "  are divisible by 15 is " + count);

}
//i dont know what is wrong but it keeps samme number many times. :(
*/