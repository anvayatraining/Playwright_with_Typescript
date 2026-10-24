// ============================================================
// Topic   : Array Methods in TypeScript
// Example : 5 - unshift() method
// ============================================================

// unshift() - Adds single/multiple elements to the BEGINNING of an array
// Syntax: array.unshift(element1, ..., elementN)
// unshift() changes the original array and returns the new length of the array.

let fruits: string[] = ["apple", "banana", "orange"];
console.log("Before unshift():", fruits);

// Adding two elements at the beginning (they keep the same order: kiwi first, then pear)
fruits.unshift("kiwi", "pear");
console.log("After unshift():", fruits);

// Compare:  push() adds at the END,  unshift() adds at the BEGINNING.

// Output:
// Before unshift(): [ 'apple', 'banana', 'orange' ]
// After unshift(): [ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
