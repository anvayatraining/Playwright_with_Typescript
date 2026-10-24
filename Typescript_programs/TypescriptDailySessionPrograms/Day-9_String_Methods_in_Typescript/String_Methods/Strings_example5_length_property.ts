// ============================================================
// Topic   : Strings in TypeScript
// Example : 3 - length property
// ============================================================

// String methods are ready-made functions that TypeScript gives us to work with strings.
// Syntax to call a string method:   stringName.methodName(arguments);

// length - finds the length of a string (how many characters it has)
// It is a property, NOT a method, so we write it WITHOUT parentheses:  str.length
// Spaces, commas and symbols are also counted as characters.

let str: string = "Hello, TypeScript!";

console.log("Length of a string:", str.length);

// "Hello, TypeScript!" has 18 characters in total:
//   Hello (5) + comma (1) + space (1) + TypeScript (10) + exclamation mark (1) = 18

// Output:
// Length of a string: 18

// This empty export makes the file a "module", so the variable names used here
// (str1, str, num, ...) do not clash with the same names in other example files.
export {};
