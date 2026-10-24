// ============================================================
// Topic   : Solutions - Array Methods
// Example : 15 - some() method
// ============================================================

// Task: Check whether the array [1, 3, 5, 6] has at least one even number.

// some() returns true if AT LEAST ONE element passes the condition, otherwise false.
// Syntax: array.some(function(currentValue, index, array){})

let arr15 = [1, 3, 5, 6];
console.log(arr15.some(num => num % 2 === 0));   // 6 is even, so the result is true

// Output:
// true

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
