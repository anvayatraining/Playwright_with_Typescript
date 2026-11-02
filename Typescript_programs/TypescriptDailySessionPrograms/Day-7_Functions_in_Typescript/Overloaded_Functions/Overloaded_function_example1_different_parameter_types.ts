// ============================================================
// Topic   : Function Overloading
// Example : 1 - Different parameter TYPES (data types)
// ============================================================

/*
   Function Overloading: Having multiple versions (signatures) of the SAME function name,
   where each version accepts different parameters (different types or different number
   of parameters).

   In TypeScript, overloading is done in 3 steps:

     Step 1: Write the signatures of the function
             - Only the function header, no body { }, ends with a semicolon (;)
             - One signature for each way the function can be called

     Step 2: Implement the function
             - Write ONE function with the body { }
             - Its parameters must be general enough to cover ALL the signatures
               (for example, use a union type like number | string)

     Step 3: Call the function
             - TypeScript checks the arguments and picks the matching signature

   Syntax:

     function functionName(param: type1): returnType;     // signature 1
     function functionName(param: type2): returnType;     // signature 2

     function functionName(param: type1 | type2): returnType     // implementation
     {
         // block of code
     }

   IMPORTANT RULES:
     - The signatures must be written immediately before the implementation.
     - The implementation signature is NOT visible to the caller. We can call the function
       only in the ways listed in the signatures (Step 1).
*/


// ---------- Example 1 : Different parameter types ----------

// Step 1: Write the signatures
// The same function name 'getInfo' can be called with a number OR with a string.
function getInfo(id: number): string;
function getInfo(name: string): string;


// Step 2: Implement the function
// The parameter type is a union (number | string) so that it covers both signatures.
function getInfo(param: number | string): string
{
    // typeof checks the actual type of the value at run time
    if (typeof param === "number")
    {
        return (`User ID is ${param}`);      // runs when a number is passed
    }
    else
    {
        return (`User Name is ${param}`);    // runs when a string is passed
    }
}


// Step 3: Calling the function
console.log(getInfo(101));      // User ID is 101      (matches signature 1: number)
console.log(getInfo("John"));   // User Name is John   (matches signature 2: string)

// A call that matches NO signature gives a compiler error.
// (Remove the // to see the error.)
//console.log(getInfo(true));   // Compiler Error: No overload matches this call.

// Output:
// User ID is 101
// User Name is John
