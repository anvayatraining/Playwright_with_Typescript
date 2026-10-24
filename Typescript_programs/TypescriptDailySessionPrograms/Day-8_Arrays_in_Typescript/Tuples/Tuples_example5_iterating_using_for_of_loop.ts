// ============================================================
// Topic   : Tuples in TypeScript
// Example : 5 - Iterating using a 'for...of' loop (value-based iteration)
// ============================================================

// The 'for...of' loop gives us the VALUES (actual elements) of the tuple, one by one.
// We do not need an index, so it is the simplest way to read all the values.
//
//   for...in  -> gives the INDEXES  (0, 1, 2, ...)
//   for...of  -> gives the VALUES   (the elements themselves)

let userRecord: [number, string, boolean, number, string] = [1, "Steve", true, 20, "Admin"];

for (let element of userRecord)
{
    console.log(element);   // 'element' represents the actual value
}

// Output:
// 1
// Steve
// true
// 20
// Admin
