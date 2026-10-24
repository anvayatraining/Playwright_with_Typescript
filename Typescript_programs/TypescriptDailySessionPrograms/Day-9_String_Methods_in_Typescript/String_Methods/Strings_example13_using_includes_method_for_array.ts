// ============================================================
// Topic   : Solutions - Array Methods
// Example : 9 - includes() method
// ============================================================

// Task: Check whether the number 10 is present in the array [5, 10, 15].

// includes() checks whether an element exists in the array. It returns true or false.
// Syntax: array.includes(searchElement)
// Note: includes() needs the compiler target ES2016 or later (use: tsc --target es2016 fileName.ts).

let arr9 = [5, 10, 15];
console.log(arr9.includes(10));

// Output:
// true

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
