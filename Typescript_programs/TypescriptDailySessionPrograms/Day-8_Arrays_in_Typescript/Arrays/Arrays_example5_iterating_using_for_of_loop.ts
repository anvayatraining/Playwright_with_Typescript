// ============================================================
// Topic   : Arrays in TypeScript
// Example : 5 - Iterating using the 'for...of' loop (values)
// ============================================================

// The 'for...of' loop gives us the VALUES (actual elements) of the array, one by one.
// We do not need an index, so it is the simplest way to read all the elements.
//
//   for...in  -> gives the INDEXES  (0, 1, 2, ...)
//   for...of  -> gives the VALUES   (the elements themselves)

// Union type array: it stores both strings and numbers
let mixedValues: Array<string | number> = ["John", "Smith", 101, 102];

console.log("Mixed Data:");

for (let value of mixedValues)
{
    console.log(value);   // 'value' represents the actual array element
}

// Output:
// Mixed Data:
// John
// Smith
// 101
// 102
