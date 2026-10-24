// ============================================================
// Topic   : Anonymous Function (Unnamed Function / Nameless Function)
// Example : 1 - Anonymous function with NO parameters and a RETURN type
// ============================================================

/*
   An anonymous function is a function that does not have a name.
   Instead, it is assigned to a variable, which acts as its name.

   Difference from a Named function:
     Named function     ->  function display() { ... }          (the function itself has a name)
     Anonymous function ->  let display = function() { ... };   (no name after the 'function' keyword,
                                                                 the variable holds the function)

   Syntax:

   let variable = function(parameters)
   {
       // function body
   };

   variable(); // Calling the function

   variable   -> the variable that stores the function (we use this name to call it)
   function   -> keyword, but NO name is written after it
   parameters -> input values the function can receive (optional)
   { ... }    -> the body of the function
   ;          -> a semicolon is written at the end, because this is an assignment statement
*/


// ---------- Example 1 ----------
// 'msg' is a variable that stores an anonymous function.
//   - no parameters -> the parentheses () are empty
//   - ': string'    -> return type, the function must return a string value
let msg = function (): string
{
    // 'return' sends the value back to the place where the function is called
    return "Hello TypeScript";
};

// We call the function using the VARIABLE name followed by ()
// The returned value is printed by console.log
console.log(msg());

// Output:
// Hello TypeScript
