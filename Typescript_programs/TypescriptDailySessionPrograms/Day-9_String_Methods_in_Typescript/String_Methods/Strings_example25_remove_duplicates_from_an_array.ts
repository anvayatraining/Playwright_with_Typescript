// ============================================================
// Topic   : Solutions - Array Methods
// Example : 17 - Remove duplicates from an array
// ============================================================

// Task: Remove the duplicate values from the array [1, 2, 2, 3, 3, 4].

// We use filter() together with indexOf().
// indexOf(item) always gives the index of the FIRST occurrence of that item.
// If the current index is the same as the first index, this is the first time we see the item, so we keep it.
// If the indexes are different, the item has already appeared before (a duplicate), so we remove it.
// Example: for the second 2 -> index is 2, but indexOf(2) is 1, so it is removed.

let arr17 = [1, 2, 2, 3, 3, 4];

let unique = arr17.filter((item, index) => arr17.indexOf(item) === index);
console.log(unique);

// Output:
// [ 1, 2, 3, 4 ]

// This empty export makes the file a "module", so the variable names used here
// do not clash with the same names in other example files.
export {};
