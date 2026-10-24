// ============================================================
// Topic   : Array Methods in TypeScript
// Example : 9 - indexOf() method
// ============================================================

// indexOf() - Finds the index of an element. If the element is not found, it returns -1.
// Syntax: array.indexOf(searchElement)
//    (or) array.indexOf(searchElement, startingIndex)
// indexOf() checks from left to right and returns the index of the FIRST match.

//   Index:   0       1        2         3         4
let fruits: string[] = ["kiwi", "mango", "cherry", "banana", "orange"];

// Ex1: element is present
let bananaIndex = fruits.indexOf("banana");
console.log("Index of banana:", bananaIndex);

// Ex2: element is NOT present, so the result is -1
let papayaIndex = fruits.indexOf("papaya");
console.log("Index of papaya:", papayaIndex);

// Ex3: search starts from index 2, so banana (at index 3) is found
bananaIndex = fruits.indexOf("banana", 2);
console.log("Index of banana (searching from index 2):", bananaIndex);

// Ex4: search starts from index 4, banana is before this index, so it is not found
bananaIndex = fruits.indexOf("banana", 4);
console.log("Index of banana (searching from index 4):", bananaIndex);

// Output:
// Index of banana: 3
// Index of papaya: -1
// Index of banana (searching from index 2): 3
// Index of banana (searching from index 4): -1

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
