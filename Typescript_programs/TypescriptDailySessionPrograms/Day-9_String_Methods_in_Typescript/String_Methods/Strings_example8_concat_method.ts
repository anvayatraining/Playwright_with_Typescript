// ============================================================
// Topic   : Solutions - Array Methods
// Example : 5 - concat() method
// ============================================================

// Task: Combine the arrays [1, 2] and [3, 4] into a new array.

// concat() joins two or more arrays and returns a NEW array.
// The original arrays are not changed.
// Syntax: array.concat(array1, ..., arrayN)

let arr5a = [1, 2];
let arr5b = [3, 4];

let combined = arr5a.concat(arr5b);   // new array with the elements of both arrays
console.log(combined);

// Output:
// [ 1, 2, 3, 4 ]

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
