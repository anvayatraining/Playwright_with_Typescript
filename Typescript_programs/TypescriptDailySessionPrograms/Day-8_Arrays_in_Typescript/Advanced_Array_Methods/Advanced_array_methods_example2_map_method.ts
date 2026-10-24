// ============================================================
// Topic   : Advanced Array Methods in TypeScript
// Example : 2 - map() method
// ============================================================

// map() - Creates a NEW array with the result of calling the function on every element of an array
// It takes a function as a parameter.
// It returns the same number of elements that we have in the original array.
// The original array is not changed.

// Syntax: array.map(function(currentValue, index, array){})

// forEach() vs map():
//   forEach() -> just does something with each element, returns nothing
//   map()     -> transforms each element and gives back a NEW array of the results

let numbers: number[] = [1, 2, 3, 4, 5];

// Ex1: Requirement: get the square of all the numbers in an array.
//      Ex: [1,2,3] then the result should be [1,4,9]
// For every element 'num', the function returns num * num, and map() collects all the results.
let squaredNumbers = numbers.map((num) =>
{
    return (num * num);
});

// Another approach: with a single expression, we can remove { } and 'return' (implicit return)
//squaredNumbers = numbers.map((num) => num * num);

console.log("Squared numbers:", squaredNumbers);


// Ex2: Double each number  [1,2,3,4,5]  --->  [2,4,6,8,10]
let doubleNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers:", doubleNumbers);

console.log("Original numbers:", numbers);   // the original array is not changed

// Output:
// Squared numbers: [ 1, 4, 9, 16, 25 ]
// Doubled numbers: [ 2, 4, 6, 8, 10 ]
// Original numbers: [ 1, 2, 3, 4, 5 ]

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
