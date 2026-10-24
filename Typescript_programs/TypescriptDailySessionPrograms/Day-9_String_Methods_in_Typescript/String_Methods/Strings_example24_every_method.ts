// ============================================================
// Topic   : Solutions - Array Methods
// Example : 16 - every() method
// ============================================================

// Task: Check whether ALL the numbers in the array [2, 4, 6] are even.

// every() returns true only if ALL the elements pass the condition, otherwise false.
// Syntax: array.every(function(currentValue, index, array){})

let arr16 = [2, 4, 6];
console.log(arr16.every(num => num % 2 === 0));

// Output:
// true

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
