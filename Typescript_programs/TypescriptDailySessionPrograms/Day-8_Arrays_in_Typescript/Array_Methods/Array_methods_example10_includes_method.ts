// ============================================================
// Topic   : Array Methods in TypeScript
// Example : 10 - includes() method
// ============================================================

// includes() - Checks whether an element exists in the array
// It returns true or false (a boolean value).
// Syntax: array.includes(searchElement, fromIndex)   (fromIndex is optional)
//
// Note: includes() needs the compiler target ES2016 or later. A project created with
//       'tsc --init' already has this. If you compile a single file with an old default
//       target and get an error, use:  tsc --target es2016 fileName.ts
//
// indexOf()  -> returns the INDEX of the element (or -1)
// includes() -> returns only true / false, so it is easier to use in an if condition

let fruits: string[] = ["kiwi", "mango", "cherry", "banana", "orange"];

let isAppleExist = fruits.includes("apple");
console.log("Does fruits include apple?", isAppleExist);

let isBananaExist: boolean = fruits.includes("banana");
console.log("Does fruits include banana?", isBananaExist);

// Using includes() in an if condition
if (fruits.includes("kiwi"))
{
    console.log("kiwi is available");
}

// Output:
// Does fruits include apple? false
// Does fruits include banana? true
// kiwi is available

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
