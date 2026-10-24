// ============================================================
// Topic   : Solutions - Array Methods
// Example : 6 - slice() method
// ============================================================

// Task: Extract the elements from index 1 up to index 3 from the array [10, 20, 30, 40, 50].

// slice() extracts a part of an array and returns a NEW array.
// The starting index is included, the ending index is EXCLUSIVE (not included).
// Syntax: array.slice(start, end)

let arr6 = [10, 20, 30, 40, 50];

let sliced = arr6.slice(1, 4);   // index 1, 2, 3 (index 4 is not included)
console.log(sliced);

// Output:
// [ 20, 30, 40 ]

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
