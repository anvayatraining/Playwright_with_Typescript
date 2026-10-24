// ============================================================
// Topic   : Array Methods in TypeScript
// Example : 2 - push() method
// ============================================================

// push() - Adds single/multiple elements to the END of an array
// Syntax: array.push(element1, ..., elementN)
// push() changes the original array and returns the new length of the array.

let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Before push():", numbers);

// Adding two elements at the end
numbers.push(6, 7);
console.log("After push():", numbers);

// push() returns the new length of the array
let newLength: number = numbers.push(8);
console.log("New length:", newLength);

// Output:
// Before push(): [ 1, 2, 3, 4, 5 ]
// After push(): [ 1, 2, 3, 4, 5, 6, 7 ]
// New length: 8

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
