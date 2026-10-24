// ============================================================
// Topic   : Strings in TypeScript
// Example : 14 - Multiline string using backtick (``)
// ============================================================

// A string written with single or double quotes must be on ONE line.
// A backtick string can be written over MULTIPLE lines, and the line breaks are kept.
// IMPORTANT: Even the spaces used for indentation inside the backticks become part of the string.

let multiline: string = `welcome
                      to typescript`;

console.log(multiline);

// To avoid the extra spaces, start the next line at the beginning of the line:
let multiline2: string = `welcome
to typescript`;

console.log(multiline2);

// Another way: use \n (new line character) inside a normal string
console.log("welcome\nto typescript");

// Output:
// welcome
//                       to typescript
// welcome
// to typescript
// welcome
// to typescript

// This empty export makes the file a "module", so the variable names used here
// (str1, str, num, ...) do not clash with the same names in other example files.
export {};
