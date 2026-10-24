// ============================================================
// Topic   : Arrays in TypeScript
// Example : 3 - Iterating over an array using a traditional for loop
// ============================================================

// Iterating means visiting every element of the array one by one.
// In the traditional for loop we use the index (i) to access each element.
//   - Start with i = 0 (the first index)
//   - Continue while i < length (the last index is length - 1)
//   - Increase i by 1 after every round (i++)

let employeeNames: Array<string> = ["John", "Smith", "Peter", "Scott"];

console.log("Employee Names:");

// employeeNames.length gives the number of elements in the array (here 4)
for (let i = 0; i < employeeNames.length; i++)
{
    console.log(employeeNames[i]);   // access the element using its index
}

// Output:
// Employee Names:
// John
// Smith
// Peter
// Scott
