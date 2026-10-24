// ============================================================
// Topic   : Solutions - Array Methods
// Example : 14 - reduce() method
// ============================================================

// Task: Find the sum of all the elements of the array [10, 20, 30].

// reduce() applies a function on every element and returns a SINGLE value.
// acc (accumulator) = the running result,  val = the current element,  0 = the initial value of acc.
// Syntax: array.reduce(function(accumulator, currentValue){}, initialValue)

let arr14 = [10, 20, 30];

let sum = arr14.reduce((acc, val) => acc + val, 0);   // 0+10=10, 10+20=30, 30+30=60
console.log(sum);

// Output:
// 60

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
