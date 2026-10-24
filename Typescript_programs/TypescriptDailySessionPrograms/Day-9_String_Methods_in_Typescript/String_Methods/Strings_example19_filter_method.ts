// ============================================================
// Topic   : Solutions - Array Methods
// Example : 13 - filter() method
// ============================================================

// Task: Get only the even numbers from the array [1, 2, 3, 4, 5].

// filter() returns a NEW array with only the elements that pass the condition (the function returns true).
// An even number gives remainder 0 when divided by 2 (num % 2 === 0).
// Syntax: array.filter(function(currentValue, index, array){})

let arr13 = [1, 2, 3, 4, 5];

let evens = arr13.filter(num => num % 2 === 0);
console.log(evens);

// Output:
// [ 2, 4 ]

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
