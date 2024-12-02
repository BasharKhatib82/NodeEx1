// Bashar Khatib    ID : 066043167
// Tareq Shaltaf    ID : 315483032

"use strict";
// Define the number we want to check.
const num = 123;

// Check how many of the numbers 2, 3, and 5 divide `num` without remainder.
// If `num` is divisible, the check returns true (1). If not, it returns false (0).
// Add up the results to get the total number of divisors.
let result = Number(num % 2 == 0) + Number(num % 3 == 0) + Number(num % 5 == 0);

// Outputs the result to the console.
// The result represents how many of the numbers 2, 3, and 5 divide `num` without a remainder.
console.log(result);
