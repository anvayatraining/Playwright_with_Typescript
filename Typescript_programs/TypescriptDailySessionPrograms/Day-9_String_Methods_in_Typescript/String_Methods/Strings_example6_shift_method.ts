// ============================================================
// Topic   : Solutions - Array Methods
// Example : 3 - shift() method
// ============================================================

// Task: Remove the first element from the array [5, 6, 7].

// shift() removes the FIRST element of an array.
// Syntax: array.shift()

let arr3 = [5, 6, 7];
arr3.shift();          // removes 5
console.log(arr3);

// Output:
// [ 6, 7 ]

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
