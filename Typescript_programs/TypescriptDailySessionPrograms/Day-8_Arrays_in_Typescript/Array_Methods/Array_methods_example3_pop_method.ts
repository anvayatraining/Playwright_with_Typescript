// ============================================================
// Topic   : Array Methods in TypeScript
// Example : 3 - pop() method
// ============================================================

// pop() - Removes the LAST element from an array
// Syntax: array.pop()
// pop() changes the original array and returns the removed element.

let fruits: string[] = ["apple", "banana", "orange", "mango"];
console.log("Before pop():", fruits);

// The removed element is stored in a variable
let lastFruit = fruits.pop();

console.log("After pop():", fruits);
console.log("Removed Fruit is:", lastFruit);

// If the array is empty, pop() returns undefined.

// Output:
// Before pop(): [ 'apple', 'banana', 'orange', 'mango' ]
// After pop(): [ 'apple', 'banana', 'orange' ]
// Removed Fruit is: mango

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
