// ============================================================
// Topic   : Advanced Array Methods in TypeScript
// Example : 6 - every() method
// ============================================================

// every() - Checks if ALL elements satisfy a condition
// Returns true if ALL the elements pass the condition, else false.
// It stops checking as soon as it finds one element that fails.

// Syntax: array.every(function(currentValue, index, array){})

// some() vs every():
//   some()  -> true if AT LEAST ONE element passes
//   every() -> true only if ALL elements pass

let numbers: number[] = [1, 2, 3, 4, 5];

// Ex1: Are all the numbers even?
let allEven = numbers.every((element) => element % 2 === 0);
console.log("Are all numbers even?", allEven);

// Ex2: Are all the numbers greater than one?  (1 is not greater than 1, so the answer is false)
let allGreaterThanOne = numbers.every((element) => element > 1);
console.log("Are all numbers greater than one?", allGreaterThanOne);

// Ex3: Are all the numbers positive?
let allPositive = numbers.every((num) => num > 0);
console.log("Are all numbers positive?", allPositive);

// Output:
// Are all numbers even? false
// Are all numbers greater than one? false
// Are all numbers positive? true

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
