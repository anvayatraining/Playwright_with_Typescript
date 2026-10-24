// ============================================================
// Topic   : Array Methods in TypeScript
// Example : 7 - slice() method
// ============================================================

// slice() - Extracts a section of an array
// Syntax: array.slice(start, end)
//   - The starting index starts from zero and it is INCLUDED.
//   - The ending index is EXCLUSIVE (not included).
//     Ex: if the ending index is 3, elements up to index 2 are taken (3 - 1 = 2).
// slice() does NOT change the original array. It returns a NEW array with the extracted elements.

//   Index:   0       1       2        3         4
let fruits: string[] = ["kiwi", "pear", "apple", "banana", "orange"];

// Elements from index 1 up to index 2 (index 3 is not included)
let extractedArray1 = fruits.slice(1, 3);
console.log("After slice(1, 3):", extractedArray1);

// Elements from index 2 up to index 4 (index 5 does not exist, so it goes up to the last element)
let extractedArray2 = fruits.slice(2, 5);
console.log("After slice(2, 5):", extractedArray2);

console.log("Original array:", fruits);   // the original array is not changed

// Output:
// After slice(1, 3): [ 'pear', 'apple' ]
// After slice(2, 5): [ 'apple', 'banana', 'orange' ]
// Original array: [ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
