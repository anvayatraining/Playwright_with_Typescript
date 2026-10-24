// ============================================================
// Topic   : Array Methods in TypeScript
// Example : 4 - shift() method
// ============================================================

// shift() - Removes the FIRST element from an array
// Syntax: array.shift()
// shift() changes the original array and returns the removed element.
// All the remaining elements move one position to the left (index 1 becomes index 0, etc.)

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log("Before shift():", numbers);

let firstNumber = numbers.shift();

console.log("After shift():", numbers);
console.log("Removed Number:", firstNumber);

// Compare:  pop() removes from the END,  shift() removes from the BEGINNING.

// Output:
// Before shift(): [ 1, 2, 3, 4, 5, 6, 7 ]
// After shift(): [ 2, 3, 4, 5, 6, 7 ]
// Removed Number: 1

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
