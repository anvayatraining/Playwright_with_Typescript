// ============================================================
// Topic   : Function Overloading
// Example : 3 - Different RETURN types
// ============================================================

// With overloading, the return type can also change depending on the type of the argument.
//   string passed -> string is returned
//   number passed -> number is returned
// This helps TypeScript know the exact return type at the place where the function is called.

// Step 1: Write the signatures
function processInput(input: string): string;
function processInput(input: number): number;


// Step 2: Implement the function
// The parameter and the return type are both unions (string | number)
// so that the implementation covers both signatures.
function processInput(input: string | number): string | number
{
    if (typeof input === "string")
    {
        return input.toUpperCase();   // string  -> converted to UPPER CASE
    }
    else
    {
        return input * 2;             // number  -> multiplied by 2
    }
}


// Step 3: Calling the function
console.log(processInput("welcome"));   // WELCOME  (TypeScript knows the result is a string)
console.log(processInput(5));           // 10       (TypeScript knows the result is a number)

// Output:
// WELCOME
// 10
