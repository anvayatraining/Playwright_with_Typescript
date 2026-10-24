// ============================================================
// Topic   : Array Methods in TypeScript
// Example : 11 - toString() method
// ============================================================

// toString() - Converts an array to a string
// Syntax: array.toString()
// The elements are joined into one string, separated by commas.
// The original array is not changed.

let numbers: number[] = [2, 3, 4, 5, 6, 7];

console.log(numbers);   // printed as an array

let numbersString: string = numbers.toString();
console.log("Converted Array To String:", numbersString);   // printed as a string


// Example with a string array
let myArray: string[] = ["w", "e", "l", "c", "o", "m", "e"];
console.log("Original myArray:", myArray);

let str: string = myArray.toString();
console.log("Converted string:", str);

// Output:
// [ 2, 3, 4, 5, 6, 7 ]
// Converted Array To String: 2,3,4,5,6,7
// Original myArray: [ 'w', 'e', 'l', 'c', 'o', 'm', 'e' ]
// Converted string: w,e,l,c,o,m,e

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
