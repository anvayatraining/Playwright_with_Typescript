// ============================================================
// Topic   : Strings in TypeScript
// Example : 7 - includes() method
// ============================================================

// includes() - checks whether the given text is present in the string
// It returns true or false (a boolean value).
// The check is CASE SENSITIVE: "TypeScript" and "TYPESCRIPT" are different.
// Syntax: string.includes(searchText)

let str: string = "Hello, TypeScript!";

console.log(str.includes("abc"));          // not present
console.log(str.includes("TypeScript"));   // present
console.log(str.includes("!"));            // present
console.log(str.includes("TYPESCRIPT"));   // different case, so it is not present

// Output:
// false
// true
// true
// false

// This empty export makes the file a "module", so the variable names used here
// (str1, str, num, ...) do not clash with the same names in other example files.
export {};
