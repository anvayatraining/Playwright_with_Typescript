// ============================================================
// Topic   : Arrow Functions / Lambda Functions
// Example : 6 - Arrow function with REST parameters
// ============================================================

// Rest parameters don't restrict the number of values that you can pass to a function.
// A rest parameter is written with three dots (...) before the parameter name.
// All the values passed are collected into an ARRAY.
// Rule: a rest parameter must always be the LAST parameter of a function.
//
// Here ...elements:(number | string)[] means:
//   (number | string) -> a UNION type, each value can be a number OR a string
//   []                -> the values are collected into an array
// The return type is number, because we return how many values were passed.
let findElements = (...elements: (number | string)[]): number =>
{
    // 'elements' is an array, so .length gives the count of values received
    return elements.length;
};

console.log(findElements(3, "john", 2, 1, "scott"));     // 5  (mix of numbers and strings)
console.log(findElements(10, 20, 30, 40, 50, 60, 70));   // 7  (only numbers)
console.log(findElements("abc", "xyz"));                 // 2  (only strings)

// Output:
// 5
// 7
// 2
