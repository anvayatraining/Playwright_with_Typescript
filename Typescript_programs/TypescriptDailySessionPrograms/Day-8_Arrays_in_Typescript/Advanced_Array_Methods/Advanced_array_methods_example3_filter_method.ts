// ============================================================
// Topic   : Advanced Array Methods in TypeScript
// Example : 3 - filter() method
// ============================================================

// filter() - Creates a NEW array with all the elements that pass (satisfy) the function
// It takes a function as a parameter. The function must return true or false:
//   true  -> the element is kept in the new array
//   false -> the element is left out
// It returns either the same number or fewer elements compared to the original array.
// The original array is not changed.

// Syntax: array.filter(function(currentValue, index, array){})

// map() vs filter():
//   map()    -> same number of elements, but the values are changed
//   filter() -> same values, but only the matching elements are kept

let numbers: number[] = [1, 2, 3, 4, 5];

// Ex1: Get only the even numbers from an array
// An even number gives remainder 0 when divided by 2 (num % 2 === 0)
let evenNumbers = numbers.filter((num) =>
{
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers);


// Ex2: Get only the numbers greater than 3 from an array
let filteredNumbers = numbers.filter((num) => num > 3);
console.log("Elements greater than 3:", filteredNumbers);

// Output:
// Even numbers: [ 2, 4 ]
// Elements greater than 3: [ 4, 5 ]

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
