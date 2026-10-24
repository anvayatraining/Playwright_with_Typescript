// ============================================================
// Topic   : Callback Function
// Example : 1 - Callback function that receives a STRING
// ============================================================

/*
   A callback function: A function passed as an argument to another function
   and executed later.

   In JavaScript/TypeScript, functions are values, so we can pass a function
   to another function just like we pass a number or a string.

   There are 2 functions involved:
     1. The function that RECEIVES the callback   -> (here: greet)
        It takes the callback as a parameter and decides WHEN to run it.
     2. The callback function itself              -> (here: showMessage)
        It is the function that is passed as an argument and runs later.

   Syntax of a callback parameter:

     function functionName(callback: (parameter: type) => returnType)
     {
         callback(value);    // executing the callback function
     }

     callback: (message:string) => void
       callback          -> the name of the parameter
       (message:string)  -> the callback must accept ONE string parameter
       => void           -> the callback does not return any value

   IMPORTANT: While passing the callback, write only the function name (showMessage),
   do NOT write parentheses showMessage(). With () the function would run immediately
   instead of being passed as an argument.
*/


// ---------- Example 1 ----------

// Function that takes a callback function as a parameter
//   name     -> a normal string parameter
//   callback -> a function that takes a string and returns nothing (void)
function greet(name: string, callback: (message: string) => void)
{
    console.log(name);
    callback("Hello");   // executing the callback function (we pass "Hello" to it)
}


// Callback function
// It matches the type expected by 'greet': takes a string, returns nothing.
function showMessage(message: string)
{
    console.log(message);
}


// Calling the function by passing the callback function
// 'showMessage' is passed WITHOUT parentheses
greet("John", showMessage);

// Flow of execution:
//   1. greet("John", showMessage) is called
//   2. console.log(name)          -> prints John
//   3. callback("Hello")          -> this actually calls showMessage("Hello")
//   4. showMessage prints         -> Hello

// Output:
// John
// Hello
