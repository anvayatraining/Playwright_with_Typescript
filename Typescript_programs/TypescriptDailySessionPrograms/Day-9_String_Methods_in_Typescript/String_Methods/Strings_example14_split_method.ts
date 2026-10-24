// ============================================================
// Topic   : Strings in TypeScript
// Example : 10 - split() method
// ============================================================

// split(delimiter) - breaks the string into multiple parts based on the delimiter
// The delimiter is the character (or text) where the string is cut, for example a space or a comma.
// It returns an ARRAY of strings. The delimiter itself is not part of the result.
// Syntax: string.split(delimiter)


// Ex1: Splitting a sentence using a space
let str: string = "Hello, TypeScript!";

let words: string[] = str.split(" ");
console.log("After splitting string:", words);


// Ex2: Splitting a string using a comma
// The result is an array, so we can read each part using its index.
let myString: string = "abc@gmail.com,xyzabc";

let arr = myString.split(",");
console.log("email:", arr[0]);
console.log("password:", arr[1]);

// Output:
// After splitting string: [ 'Hello,', 'TypeScript!' ]
// email: abc@gmail.com
// password: xyzabc

// This empty export makes the file a "module", so the variable names used here
// (str1, str, num, ...) do not clash with the same names in other example files.
export {};
