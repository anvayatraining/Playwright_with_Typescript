// ============================================================
// Topic   : Named Function
// Example : 1 - Named function with NO parameters and NO return type
// ============================================================

// Named Function: A function that is declared with a name.
// Because it has a name, we can call (invoke) it again and again wherever we need it.

/* ---------------- Syntax ----------------

function functionName(parameter): returnType
{
    // block of code
}

functionName();    // calling the function / invoking the function

   functionName -> the name we give to the function
   parameter    -> input values the function can receive (optional)
   returnType   -> the type of value the function gives back (optional)
   { ... }      -> the body of the function (the code that runs when we call it)

------------------------------------------ */


// ---------- Example 1 ----------
// 'display' has:
//   - no parameters  -> the parentheses () are empty, it does not need any input
//   - no return type -> 'void' means the function does not return any value
function display(): void
{
    console.log("Welcome to typescript");
}

// A function does NOT run when it is defined.
// It runs only when we call it by its name followed by ().
display();   // calling function

// Output:
// Welcome to typescript
