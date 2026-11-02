// ============================================================
// Topic   : Named Function
// Example : 4 - Named function with REST parameters (multiple types)
// ============================================================

// A rest parameter can also accept values of different types.
// We use a UNION type with the pipe symbol |
//   (number | string)   -> each value can be either a number OR a string
//   (number | string)[] -> an array of such values
// The return type is number, because we return how many values were passed.
function findElements(...elements: (number | string)[]): number
{
    // 'elements' is an array, so .length gives the count of values received
    return elements.length;
}

console.log(findElements(3, "john", 2, 1, "scott")); // 5  (mix of numbers and strings)
console.log(findElements(10, 20, 30, 40, 50, 60, 70)); // 7  (only numbers)
console.log(findElements("abc", "xyz")); // 2  (only strings)

// Output:
// 5
// 7
// 2
