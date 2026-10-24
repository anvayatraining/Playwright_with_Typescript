// ============================================================
// Topic   : Strings in TypeScript
// Example : 13 - Concept of string immutability
// ============================================================

/*
   Immutable means "cannot be changed".
   Strings are immutable: once a string is created, its characters cannot be changed.
   Every string method (concat, toUpperCase, replace, ...) gives back a NEW string
   and the original string stays the same.

   If we want to keep the changed value, we must store the returned value in a variable.
*/

// Similar idea with a number: calculating with a variable does not change the variable
let num: number = 10;
let res = num + 5;
console.log(res);   // 15  (the new result)
console.log(num);   // 10  (num is not changed)


// The same happens with strings
let str1: string = "welcome";
let modifiedString = str1.concat(" to typescript");

console.log(str1);              // the original string is not changed
console.log(modifiedString);    // the new string has the changed value


// Methods like toUpperCase() also do not change the original string
str1.toUpperCase();             // the returned value is thrown away, so nothing is saved
console.log(str1);              // still "welcome"

str1 = str1.toUpperCase();      // storing the returned value in the same variable
console.log(str1);              // now the variable holds the new string


// We also cannot change a single character using its index.
// (Remove the // to see the error.)
//let city: string = "Delhi";
//city[0] = "B";   // Compiler Error: Cannot assign to '0' because it is a read-only property.

// Output:
// 15
// 10
// welcome
// welcome to typescript
// welcome
// WELCOME

// This empty export makes the file a "module", so the variable names used here
// (str1, str, num, ...) do not clash with the same names in other example files.
export {};
