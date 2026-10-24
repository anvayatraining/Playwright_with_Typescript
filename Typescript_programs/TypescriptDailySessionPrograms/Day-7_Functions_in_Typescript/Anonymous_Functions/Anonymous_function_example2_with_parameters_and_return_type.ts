// ============================================================
// Topic   : Anonymous Function (Unnamed Function / Nameless Function)
// Example : 2 - Anonymous function with PARAMETERS and RETURN type
// ============================================================

// Like named functions, an anonymous function can also receive parameters.
// In TypeScript every parameter must be given a type (a:number means 'a' must be a number).
// The return type is written after the parentheses (':number' means the function returns a number).

// 'multiply' is a variable that stores an anonymous function.
//   a, b    -> parameters (both numbers)
//   :number -> return type
let multiply = function (a: number, b: number): number
{
    return a * b;   // multiply the two values and send the result back
};

// 10 and 20 are arguments (the actual values passed to the parameters a and b)
// The function is called using the variable name 'multiply'
console.log(multiply(10, 20));

// Output:
// 200
