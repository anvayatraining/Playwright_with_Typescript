// ============================================================
// Topic   : Solutions - Array Methods
// Example : 4 - unshift() method
// ============================================================

// Task: Add the number 1 at the beginning of the array [2, 3, 4].

// unshift() adds one or more elements to the BEGINNING of an array.
// Syntax: array.unshift(element1, ..., elementN)

let arr4 = [2, 3, 4];
arr4.unshift(1);       // adds 1 at the beginning
console.log(arr4);

// Output:
// [ 1, 2, 3, 4 ]

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
