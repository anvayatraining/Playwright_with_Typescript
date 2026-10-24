// ============================================================
// Topic   : Arrays in TypeScript
// Example : 4 - Iterating using the 'for...in' loop (indexes)
// ============================================================

// The 'for...in' loop gives us the INDEXES (positions) of the array, one by one.
// We use each index to get the element:  arrayName[index]
// (Note: the index given by for...in is a string such as "0", "1", "2", not a number.)

let employeeIds: Array<number> = [101, 102, 103, 104];

console.log("Employee IDs:");

for (let index in employeeIds)
{
    // 'index' represents the array indexes: 0, 1, 2, 3
    console.log(employeeIds[index]);   // use the index to get the element
}

// To see the indexes themselves, print 'index':
// for (let index in employeeIds) { console.log(index); }   // 0 1 2 3

// Output:
// Employee IDs:
// 101
// 102
// 103
// 104
