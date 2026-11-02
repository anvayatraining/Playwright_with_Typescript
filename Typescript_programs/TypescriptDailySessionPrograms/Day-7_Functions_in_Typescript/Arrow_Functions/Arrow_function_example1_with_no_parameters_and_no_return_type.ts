// ============================================================
// Topic   : Arrow Functions / Lambda Functions
// Example : 1 - Arrow function with NO parameters and NO return type
// ============================================================

/* Lambda refers to anonymous functions in programming.
   Lambda functions are a concise mechanism to represent anonymous functions.
   These functions are also called as Arrow functions.

   In simple words: an arrow function is a shorter way of writing an anonymous function.
   We do not write the 'function' keyword, we use the arrow symbol (=>) instead.


  There are 3 parts to a Lambda function.

  1. Parameters  - A function may optionally have parameters (the inputs of the function)
  2. The fat arrow notation / lambda notation (=>)
                 - It is also called as the "goes to operator"
                 - Read it as: "the parameters GO TO the function body"
  3. Statements  - represent the function's instruction set (the code that runs when we call it)

  Syntax:

    let variable = (parameters) =>
    {
        // block of code
    };

    variable();   // calling the function

    variable   -> the variable that stores the arrow function (we use this name to call it)
    parameters -> input values the function can receive (optional)
    =>         -> the fat arrow
    { ... }    -> the body of the function

  Comparison with an anonymous function:
    Anonymous function ->  let greet = function() { ... };
    Arrow function     ->  let greet = () => { ... };
*/


// ---------- Example 1 ----------
// 'greet' is a variable that stores an arrow function.
//   - no parameters  -> the parentheses () are empty
//   - ': void'       -> no return type, the function does not return any value
//   - '=>'           -> the fat arrow, followed by the function body
let greet = (): void =>
{
    console.log("Hello TypeScript");
};

// We call the function using the VARIABLE name followed by ()
greet();

// Output:
// Hello TypeScript
