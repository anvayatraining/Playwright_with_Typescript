// ============================================================
// Topic   : Array Methods in TypeScript
// Example : 1 - length attribute (NOT a method)
// ============================================================

/*
   Array methods are ready-made functions that TypeScript gives us to work with arrays,
   for example: adding elements, removing elements, searching and converting.

   Syntax to call an array method:   arrayName.methodName(arguments);

   In the next examples we will learn these methods:
     push(), pop(), shift(), unshift(), concat(), slice(), splice(), indexOf(), includes(), toString()

   Before that, let us learn the 'length' attribute.
*/

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange", "mango"];

console.log("Numbers array:", numbers);
console.log("Fruits array:", fruits);

// length - it is an attribute (property) of the array, NOT a method.
// So we write it WITHOUT parentheses:  array.length   (not array.length())
// It gives the number of elements present in the array.
console.log("Size of numbers array:", numbers.length);
console.log("Size of fruits array:", fruits.length);

// Output:
// Numbers array: [ 1, 2, 3, 4, 5 ]
// Fruits array: [ 'apple', 'banana', 'orange', 'mango' ]
// Size of numbers array: 5
// Size of fruits array: 4

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
