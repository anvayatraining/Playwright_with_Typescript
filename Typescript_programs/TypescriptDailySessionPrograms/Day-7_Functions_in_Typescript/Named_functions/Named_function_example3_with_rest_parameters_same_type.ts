// ============================================================
// Topic   : Named Function
// Example : 3 - Named function with REST parameters (same type)
// ============================================================

// Rest parameters don't restrict the number of values that you can pass to a function.
// A rest parameter is written with three dots (...) before the parameter name.
// All the values passed are collected into an ARRAY.
// Here ...nums:number[] means "any number of values, and every value must be a number".
// Rule: a rest parameter must always be the LAST parameter of a function.

// (Named 'addAllNumbers' so it does not clash with 'addNumbers' from Example 2
//  when both files are in the same folder.)
function addAllNumbers(...nums: number[])
{
    let i: number;
    let sum: number = 0;

    // 'nums' is an array, so we can loop through it using its length
    for (i = 0; i < nums.length; i++)
    {
        sum = sum + nums[i];   // add each value to sum
    }

    console.log("sum of the numbers", sum);
}

// We can call the same function with any number of arguments
addAllNumbers(1, 2);                // sum of the numbers 3
addAllNumbers(1, 2, 3);             // sum of the numbers 6
addAllNumbers(10, 20, 30, 40, 50);  // sum of the numbers 150

// Output:
// sum of the numbers 3
// sum of the numbers 6
// sum of the numbers 150
