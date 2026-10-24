// ============================================================
// Topic   : Array Methods in TypeScript
// Example : 8 - splice() method
// ============================================================

// splice() - Adds / removes elements in an array (from anywhere)
// Syntax: array.splice(start, deleteCount, item1, ..., itemN)
//   start       -> the index from where to start
//   deleteCount -> how many elements to remove (0 means remove nothing)
//   item1..N    -> the new elements to add at the start index (optional)
// splice() CHANGES the original array and returns an array of the removed elements.
//
// Difference:  slice()  -> does NOT change the original array
//              splice() -> CHANGES the original array

let fruits: string[] = ["kiwi", "pear", "apple", "banana", "orange"];
console.log("Current elements in fruits array:", fruits);


// Ex1: only removing
// 1 is the starting index, 2 is how many elements to be removed
let removedElements = fruits.splice(1, 2);
console.log("After splice(1, 2):", fruits);
console.log("Removed Elements:", removedElements);


// Ex2: nothing removed, only added
// deleteCount is 0, so nothing is removed. The new elements are added at index 1.
fruits.splice(1, 0, "pineapple", "grape");
console.log("After splice(1, 0, 'pineapple', 'grape'):", fruits);


// Ex3: both remove and add
// 2 elements are removed from index 1 and 2 new elements are added at the same place.
fruits.splice(1, 2, "mango", "cherry");
console.log("After splice(1, 2, 'mango', 'cherry'):", fruits);

// Output:
// Current elements in fruits array: [ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]
// After splice(1, 2): [ 'kiwi', 'banana', 'orange' ]
// Removed Elements: [ 'pear', 'apple' ]
// After splice(1, 0, 'pineapple', 'grape'): [ 'kiwi', 'pineapple', 'grape', 'banana', 'orange' ]
// After splice(1, 2, 'mango', 'cherry'): [ 'kiwi', 'mango', 'cherry', 'banana', 'orange' ]

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
