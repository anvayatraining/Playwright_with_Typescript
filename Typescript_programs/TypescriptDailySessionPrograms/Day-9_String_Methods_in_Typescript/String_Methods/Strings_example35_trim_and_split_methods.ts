// ============================================================
// Topic   : Solutions - String Methods
// Example : 28 - trim() and split() methods together
// ============================================================

// Task: Remove the extra spaces from the string "   Hello World from TypeScript   " and split it into words.

// trim() removes the spaces from the start and the end of the string.
// split(" ") breaks the string into an array of words, using a space as the delimiter.
// Method chaining: the result of trim() is a string, so we can call split() on it immediately.
// Without trim(), the extra spaces would produce empty strings in the array.

let str28 = "   Hello World from TypeScript   ";

let words = str28.trim().split(" ");   // first trim(), then split()
console.log(words);

// Output:
// [ 'Hello', 'World', 'from', 'TypeScript' ]

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
