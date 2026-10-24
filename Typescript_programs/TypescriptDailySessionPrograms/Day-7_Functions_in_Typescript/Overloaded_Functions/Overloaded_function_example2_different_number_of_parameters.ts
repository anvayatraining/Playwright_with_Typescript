// ============================================================
// Topic   : Function Overloading
// Example : 2 - Different NUMBER of parameters
// ============================================================

// Step 1: Write the signatures
// 'add' can be called with 2 numbers OR with 3 numbers.
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;


// Step 2: Implement the function
// The extra parameter 'c' is made OPTIONAL (c?) so that the implementation
// works for both signatures (2 arguments and 3 arguments).
function add(a: number, b: number, c?: number): number
{
    // If 'c' is not undefined, the caller has passed 3 values
    if (c !== undefined)
    {
        return a + b + c;
    }

    // Otherwise only 2 values were passed
    return a + b;
}


// Step 3: Calling the function
console.log(add(10, 20));       // 30   (matches signature 1: 2 parameters)
console.log(add(10, 20, 30));   // 60   (matches signature 2: 3 parameters)

// Passing 1 or 4 arguments matches no signature, so it gives a compiler error.
//console.log(add(10));              // Compiler Error: No overload expects 1 arguments.
//console.log(add(10, 20, 30, 40));  // Compiler Error: No overload expects 4 arguments.

// Output:
// 30
// 60
