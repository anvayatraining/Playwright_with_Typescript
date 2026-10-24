// ============================================================
// Topic   : Named Function
// Example : 2 - Named function with PARAMETERS and RETURN type
// ============================================================

// Parameters are the inputs of a function.
// In TypeScript every parameter must be given a type (x:number means x must be a number).
// The return type (written after the parentheses) tells what type of value the function gives back.

// 'x' and 'y' are parameters (both numbers).
// ':number' after the parentheses is the return type -> the function must return a number.
function addNumbers(x: number, y: number): number
{
    // 'return' sends the result back to the place where the function was called
    return x + y;
}

// Way 1: store the returned value in a variable, then print it
let res: number = addNumbers(2, 3);
console.log(res);

// Way 2: directly print the returned value
// 2 and 3 are arguments (the actual values passed to the parameters)
console.log(addNumbers(2, 3));  // 5

// TypeScript checks the number of arguments at compile time.
// Passing more or fewer arguments than the parameters gives a compiler error.
// (These lines are commented so that the file compiles. Remove the // to see the error.)

//console.log(addNumbers(1, 2, 3)); // Compiler Error: Expected 2 arguments, but got 3.
//console.log(addNumbers(1));       // Compiler Error: Expected 2 arguments, but got 1.

// Output:
// 5
