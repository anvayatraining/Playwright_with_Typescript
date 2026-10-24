// ============================================================
// Topic   : Solutions - Array Methods
// Example : 11 - forEach() method
// ============================================================

// Task: Print every element of the array ['a', 'b', 'c'].

// forEach() runs a function once for each element of the array.
// Syntax: array.forEach(function(currentValue, index, array){})

let arr11 = ['a', 'b', 'c'];
arr11.forEach(item => console.log(item));   // 'item' is the current element

// Output:
// a
// b
// c

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
