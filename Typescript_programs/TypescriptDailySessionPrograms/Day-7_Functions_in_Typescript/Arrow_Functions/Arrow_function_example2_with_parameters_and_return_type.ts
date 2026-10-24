// ============================================================
// Topic   : Arrow Functions / Lambda Functions
// Example : 2 - Arrow function with PARAMETERS and a RETURN type
// ============================================================

// An arrow function can receive parameters, just like named and anonymous functions.
// In TypeScript every parameter must be given a type (a:number means 'a' must be a number).
// The return type is written after the parentheses and BEFORE the arrow (':number =>').

// 'add' is a variable that stores an arrow function.
//   a, b    -> parameters (both numbers)
//   :number -> return type, the function must return a number
let add = (a: number, b: number): number =>
{
    // 'return' is required when we use curly braces { } in the function body
    return a + b;
};

// 10 and 20 are arguments (the actual values passed to the parameters a and b)
console.log(add(10, 20));

// Output:
// 30
