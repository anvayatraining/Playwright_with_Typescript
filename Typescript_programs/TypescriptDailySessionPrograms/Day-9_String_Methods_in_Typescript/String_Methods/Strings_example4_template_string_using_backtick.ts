// ============================================================
// Topic   : Strings in TypeScript
// Example : 2 - Template string using backtick (``)
// ============================================================

// When to use a backtick ``
// A backtick string (template string) lets us place a variable or an expression inside the text.
// We write the variable inside  ${ }  and the value of the variable is put in the text.
//
// IMPORTANT: ${ } works ONLY inside backticks. Inside single or double quotes it is
// treated as normal text and printed as it is.

let num: number = 10;

// Way 1: pass the text and the variable separately (a comma between them)
console.log("Number is:", num);        // Valid

// Way 2: ${num} inside double quotes -> NOT replaced, the text is printed as it is
console.log("Number is: ${num}");      // Not working

// Way 3: ${num} inside single quotes -> NOT replaced, the text is printed as it is
console.log('Number is: ${num}');      // Not working

// Way 4: ${num} inside backticks -> replaced with the value of num
console.log(`Number is: ${num}`);      // Valid

// We can also write expressions inside ${ }
console.log(`Number plus 5 is: ${num + 5}`);

// Output:
// Number is: 10
// Number is: ${num}
// Number is: ${num}
// Number is: 10
// Number plus 5 is: 15

// This empty export makes the file a "module", so the variable names used here
// (str1, str, num, ...) do not clash with the same names in other example files.
export {};
