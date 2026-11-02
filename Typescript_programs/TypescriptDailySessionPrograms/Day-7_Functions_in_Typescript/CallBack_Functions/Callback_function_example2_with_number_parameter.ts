// ============================================================
// Topic   : Callback Function
// Example : 2 - Callback function that receives a NUMBER (result of a calculation)
// ============================================================

// A callback is often used to handle the RESULT of some work.
// The main function does the calculation, and the callback decides what to do with the result
// (print it, store it, show it on screen, etc.).
// This keeps the calculation and the result handling separate, so the same 'sum' function
// can be reused with different callbacks.

// Function that takes a callback function as a parameter
//   a, b     -> normal number parameters
//   callback -> a function that takes a number (the result) and returns nothing (void)
function sum(a: number, b: number, callback: (result: number) => void)
{
    let result = a + b;   // do the calculation
    callback(result);     // executing the callback function with the result
}


// Callback function
// It receives the result and displays it.
function displayResult(result: number): void
{
    console.log(result);
}


// Calling the function by passing the callback function
// 'displayResult' is passed WITHOUT parentheses
sum(10, 20, displayResult);

// Flow of execution:
//   1. sum(10, 20, displayResult) is called
//   2. result = 10 + 20           -> 30
//   3. callback(result)           -> this actually calls displayResult(30)
//   4. displayResult prints       -> 30

// Output:
// 30
