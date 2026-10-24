// ============================================================
// Topic   : Strings in TypeScript
// Example : 1 - Declaring strings using single quotes, double quotes and backticks
// ============================================================

/*
   string - A text value or a combination of characters.

   A string can be written in 3 ways:
     1. Single quote   - String literal    ('SingleQuote')
     2. Double quote   - String literal    ("DoubleQuote")
     3. Backtick (``)  - Template string   (`Backtick`)
        A template string lets us use a variable inside a string value: `text ${variable}`
        (we will see this in the next example)

   Index in a string starts with 0 (just like arrays):

       Character:  H  e  l  l  o
       Index:      0  1  2  3  4

   Syntax:
      let variableName: string = "value";
*/


// ---------- Example 1 : Declaration of strings ----------
let str1: string = 'This is a string with single quote';
let str2: string = "This is a string with double quote";
let str3: string = `This is a string with back tick`;

console.log(str1);
console.log(str2);
console.log(str3);

// Single quote and double quote work in the same way.
// A common practice is to pick one style and use it everywhere in the project.

// Output:
// This is a string with single quote
// This is a string with double quote
// This is a string with back tick

// This empty export makes the file a "module", so the variable names used here
// (str1, str, num, ...) do not clash with the same names in other example files.
export {};
