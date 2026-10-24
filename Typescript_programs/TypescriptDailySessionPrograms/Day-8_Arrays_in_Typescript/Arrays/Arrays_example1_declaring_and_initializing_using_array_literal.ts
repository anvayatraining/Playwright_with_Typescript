// ============================================================
// Topic   : Arrays in TypeScript
// Example : 1 - Declaring and initializing an array using an array literal
// ============================================================

/*
  Arrays in TypeScript
  --------------------
  - An array is a special type of variable that stores multiple values.
  - The values can be of the same data type or different data types.
  - Arrays are declared using `[]` or the generic `Array<T>` type.
  - Indexing starts from 0.
  - Arrays are an ordered collection of elements.

  Syntax:
     let arrayName: dataType[] = [value1, value2, value3];

     arrayName  -> name of the array variable
     dataType[] -> type of the values the array can store (string[] means an array of strings)
     [ ... ]    -> array literal, the values are written inside square brackets, separated by commas

  Index (position) of each element:
     "John"  "Smith"  "Peter"  "Scott"
       0        1        2        3       <- indexes start from 0
*/


// ---------- Example 1 ----------
// Approach 1: Declare an empty array first, then add the values one by one

// Declaration: 'names' is an array that can store only strings. [] means it is empty for now.
let names: string[] = [];

// Initializing values into the array by using the index
names[0] = "John";   // or names.push("John");   (push() adds a value at the end of the array)
names[1] = "Smith";
names[2] = "Peter";
names[3] = "Scott";

// Alternative way: declare and initialize the array in a single statement
// let names: string[] = ["John", "Smith", "Peter", "Scott"];

// Printing the array
console.log(names);      // prints the whole array
console.log(names[1]);   // prints the element at index 1
console.log(names[4]);   // index 4 does not exist, so the value is undefined (index out of range)

// Output:
// [ 'John', 'Smith', 'Peter', 'Scott' ]
// Smith
// undefined
