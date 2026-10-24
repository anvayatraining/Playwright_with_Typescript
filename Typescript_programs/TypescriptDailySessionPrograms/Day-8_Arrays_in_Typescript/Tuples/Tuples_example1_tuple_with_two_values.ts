// ============================================================
// Topic   : Tuples in TypeScript
// Example : 1 - Tuple with two values
// ============================================================

/**
 * Tuples in TypeScript:
 * A tuple is a fixed-length array where each element has a specific type.
 * It helps in storing multiple fields of different data types together.
 *
 * Difference between an Array and a Tuple:
 *   Array -> any number of values, usually all of the SAME type      e.g. string[]
 *   Tuple -> FIXED number of values, each position has its OWN type  e.g. [string, number]
 *
 * Syntax:
 *   let tupleName: [type1, type2, type3] = [value1, value2, value3];
 *
 *   [type1, type2, type3] -> the types are written inside square brackets, in order
 *   [value1, value2, ...] -> the values must be in the SAME order and of the SAME types
 *
 * Index (position) of each element:
 *   "Alice"   25
 *     0        1      <- indexes start from 0, just like arrays
 */


// ---------- Example 1 ----------
// 'person' is a tuple with 2 values:
//   position 0 -> string  (name)
//   position 1 -> number  (age)
let person: [string, number] = ["Alice", 25];

// Accessing the values by using the index
console.log(person[0]);   // value at index 0
console.log(person[1]);   // value at index 1

// Printing the whole tuple
console.log(person);

// TypeScript checks the order, the types and the length of the values.
// (Remove the // to see the errors.)
//let wrongOrder: [string, number] = [25, "Alice"];        // Compiler Error: types are in the wrong order
//let wrongLength: [string, number] = ["Alice", 25, true]; // Compiler Error: Source has 3 element(s) but target allows only 2

// Output:
// Alice
// 25
// [ 'Alice', 25 ]
