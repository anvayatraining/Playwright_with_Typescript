// ============================================================
// Topic   : Tuples in TypeScript
// Example : 4 - Iterating using a 'for...in' loop (index-based iteration)
// ============================================================

// The 'for...in' loop gives us the INDEXES (positions) of the tuple, one by one.
// We use each index to get the value:  tupleName[index]
// (Note: the index given by for...in is a string such as "0", "1", "2", not a number.)

let userInfo: [number, string, boolean, number, string] = [1, "Steve", true, 20, "Admin"];

for (let i in userInfo)
{
    // 'i' represents the index of the tuple: 0, 1, 2, 3, 4
    console.log(userInfo[i]);   // use the index to get the value
}

// Output:
// 1
// Steve
// true
// 20
// Admin
