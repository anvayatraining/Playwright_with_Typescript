// ============================================================
// Topic   : Advanced Array Methods in TypeScript
// Example : 5 - some() method
// ============================================================

// some() - Checks if ANY element satisfies a condition
// Returns true if at least ONE element passes the condition, else false.
// It stops checking as soon as it finds the first element that passes.

// Syntax: array.some(function(currentValue, index, array){})

let numbers: number[] = [1, 2, 3, 4, 5];

// Ex1: Is there at least one negative number?
let hasNegative = numbers.some((element) => element < 0);
console.log("Does numbers have any negative numbers?", hasNegative);

// Ex2: Is there at least one positive number?
let hasPositive = numbers.some((element) => element > 0);
console.log("Does numbers have any positive numbers?", hasPositive);

// Output:
// Does numbers have any negative numbers? false
// Does numbers have any positive numbers? true

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
