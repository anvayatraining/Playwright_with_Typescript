// ============================================================
// Topic   : Tuples in TypeScript
// Example : 3 - Iterating over a tuple using a traditional for loop
// ============================================================

// A tuple is a special kind of array, so we can loop through it just like an array.
// In the traditional for loop we use the index (i) to access each element.
//   - Start with i = 0 (the first index)
//   - Continue while i < length (the last index is length - 1)
//   - Increase i by 1 after every round (i++)

let userDetails: [number, string, boolean, number, string] = [1, "Steve", true, 20, "Admin"];

// userDetails.length gives the number of values in the tuple (here 5)
for (let i = 0; i < userDetails.length; i++)
{
    console.log(userDetails[i]);   // access the value using its index
}

// Output:
// 1
// Steve
// true
// 20
// Admin
