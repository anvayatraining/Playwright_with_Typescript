// ============================================================
// Topic   : Solutions - Array Methods
// Example : 12 - map() method
// ============================================================

// Task: Create a new array in which every element of [1, 2, 3] is doubled.

// map() runs a function on every element and returns a NEW array with the results.
// The new array has the same number of elements as the original array.
// Syntax: array.map(function(currentValue, index, array){})

let arr12 = [1, 2, 3];

let doubled = arr12.map(num => num * 2);
console.log(doubled);

// Output:
// [ 2, 4, 6 ]

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
