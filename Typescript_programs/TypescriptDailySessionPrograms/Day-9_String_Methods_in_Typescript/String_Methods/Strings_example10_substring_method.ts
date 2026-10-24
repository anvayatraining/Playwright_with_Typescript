// ============================================================
// Topic   : Strings in TypeScript
// Example : 6 - substring() method
// ============================================================

// substring(startingIndex, endingIndex) - extracts a part of a string
//   - The starting index is INCLUDED.
//   - The ending index is EXCLUSIVE (not included).
//   - If the ending index is not given, it extracts up to the end of the string.
// It returns a NEW string. The original string is not changed.

//   Index:  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
//   Value:  H e l l o ,   T y p e  S  c  r  i  p  t  !
let str: string = "Hello, TypeScript!";

console.log(str.substring(0, 5));   // from index 0 up to index 4
console.log(str.substring(7));      // from index 7 up to the end

// Output:
// Hello
// TypeScript!

// This empty export makes the file a "module", so the variable names used here
// (str1, str, num, ...) do not clash with the same names in other example files.
export {};
