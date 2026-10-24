// ============================================================
// Topic   : Strings in TypeScript
// Example : 11 - trim(), trimStart() and trimEnd() methods
// ============================================================

// trim()      - removes the spaces from BOTH the start and the end of a string
// trimStart() - removes the spaces from the START of a string only
// trimEnd()   - removes the spaces from the END of a string only
// The spaces in the middle of the string are not removed.
// They return a NEW string. The original string is not changed.
// Syntax: string.trim()     string.trimStart()     string.trimEnd()
//
// Note: trimStart() and trimEnd() need the compiler target ES2019 or later.
//       If you get an error while compiling a single file, use:  tsc --target es2019 fileName.ts

let myString: string = "   welcome to typescript   ";

// The text is printed inside [ ] so that the spaces can be seen clearly
console.log(`Original string:   [${myString}]`);
console.log(`trim string:       [${myString.trim()}]`);
console.log(`trimStart string:  [${myString.trimStart()}]`);
console.log(`trimEnd string:    [${myString.trimEnd()}]`);

// Output:
// Original string:   [   welcome to typescript   ]
// trim string:       [welcome to typescript]
// trimStart string:  [welcome to typescript   ]
// trimEnd string:    [   welcome to typescript]

// This empty export makes the file a "module", so the variable names used here
// (str1, str, num, ...) do not clash with the same names in other example files.
export {};
