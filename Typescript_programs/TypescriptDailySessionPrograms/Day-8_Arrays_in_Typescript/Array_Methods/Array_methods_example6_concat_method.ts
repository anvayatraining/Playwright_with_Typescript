// ============================================================
// Topic   : Array Methods in TypeScript
// Example : 6 - concat() method
// ============================================================

// concat() - Combines two or more arrays of the same type
// Syntax: array.concat(array1, ..., arrayN)
// concat() does NOT change the original array. It returns a NEW combined array.

let numbers: number[] = [2, 3, 4, 5, 6, 7];

// Combining the original array with two more arrays
let combinedArray = numbers.concat([8, 9], [10]);

console.log("Concatenated array:", combinedArray);
console.log("Original array:", numbers);   // the original array is not changed

// Output:
// Concatenated array: [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// Original array: [ 2, 3, 4, 5, 6, 7 ]

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
