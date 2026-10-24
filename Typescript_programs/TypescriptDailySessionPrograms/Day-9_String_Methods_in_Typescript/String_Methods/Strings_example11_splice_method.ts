// ============================================================
// Topic   : Solutions - Array Methods
// Example : 7 - splice() method
// ============================================================

// Task: In the array [100, 200, 300, 400], replace the element at index 2 with 350.

// splice() adds / removes elements at any position of an array. It changes the original array.
// Syntax: array.splice(start, deleteCount, item1, ..., itemN)
// Here: start at index 2, remove 1 element (300), and add 350 at the same place.

let arr7 = [100, 200, 300, 400];

arr7.splice(2, 1, 350);
console.log(arr7);

// Output:
// [ 100, 200, 350, 400 ]

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
