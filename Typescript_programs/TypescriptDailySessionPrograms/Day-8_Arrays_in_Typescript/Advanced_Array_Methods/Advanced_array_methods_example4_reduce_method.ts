// ============================================================
// Topic   : Advanced Array Methods in TypeScript
// Example : 4 - reduce() method
// ============================================================

// reduce() - Applies a function on every element of an array and returns a SINGLE value.

// Syntax: array.reduce(function(accumulator, currentValue, index, array){}, initialValue)

// accumulator  - The accumulated value from the previous iteration (the running result)
// currentValue - The current element being processed
// initialValue - The starting value of the accumulator (written after the function)

let numbers: number[] = [1, 2, 3, 4, 5];

// Ex1: Get the total (sum) of all the elements in an array

// Using a traditional loop
let total = 0;
for (let i = 0; i < numbers.length; i++)
{
    total = total + numbers[i];   // here 'total' is the accumulator
}
console.log("Sum of Array elements using a loop:", total);


// Using reduce()
let reducedResult = numbers.reduce((total, element) =>
{
    return total + element;
}, 0);   // Initial value of the accumulator is 0

console.log("Reduced Result (Total of an Array):", reducedResult);

// How reduce() works step by step  (the accumulator starts with 0):
//   Round 1:  total = 0   element = 1   ->  returns 0 + 1 = 1
//   Round 2:  total = 1   element = 2   ->  returns 1 + 2 = 3
//   Round 3:  total = 3   element = 3   ->  returns 3 + 3 = 6
//   Round 4:  total = 6   element = 4   ->  returns 6 + 4 = 10
//   Round 5:  total = 10  element = 5   ->  returns 10 + 5 = 15   (final result)

// Output:
// Sum of Array elements using a loop: 15
// Reduced Result (Total of an Array): 15

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
