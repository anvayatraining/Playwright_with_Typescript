// ============================================================
// Topic   : Arrays in TypeScript
// Example : 2 - Declaring and initializing an array using the generic Array<T> type
// ============================================================

// Approach 2: Use the generic type  Array<T>
// Array<string> is the same as string[]. T is the type of the values stored in the array.
//   Array<string>  -> the same as  string[]
//   Array<number>  -> the same as  number[]

// Only strings are allowed
let empNames: Array<string> = ["John", "Smith", "Peter", "Scott"];

// Only numbers are allowed
let empIds: Array<number> = [101, 102, 103, 104];

// Union type: both strings and numbers are allowed (| means "or")
let data: Array<string | number> = ["John", "Smith", 101, 102];

// any type: any kind of value is allowed (multi-type array)
// 'any' turns off type checking, so use it only when really needed.
let mixedData: Array<any> = [1, "John", true, null];

console.log(empNames);
console.log(empIds);
console.log(data);
console.log(mixedData);

// If we try to store a wrong type, TypeScript gives a compiler error.
//empIds.push("abc");   // Compiler Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Output:
// [ 'John', 'Smith', 'Peter', 'Scott' ]
// [ 101, 102, 103, 104 ]
// [ 'John', 'Smith', 101, 102 ]
// [ 1, 'John', true, null ]
