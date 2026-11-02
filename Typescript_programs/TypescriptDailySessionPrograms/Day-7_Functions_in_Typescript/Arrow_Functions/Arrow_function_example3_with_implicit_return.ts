// ============================================================
// Topic   : Arrow Functions / Lambda Functions
// Example : 3 - Arrow function with IMPLICIT return
// ============================================================

// If the function body is only ONE expression, we can make the arrow function even shorter:
//   - remove the curly braces { }
//   - remove the 'return' keyword
// The value of the expression is returned automatically. This is called an implicit return.
//
//   With braces    ->  let add = (a:number, b:number):number => { return a + b; };
//   Implicit return->  let add = (a:number, b:number):number => a + b;

// (Named 'addValues' and 'multiplyValues' so they do not clash with 'add' from Example 2
//  when both files are in the same folder.)
let addValues = (a: number, b: number): number => a + b;        // a + b is returned automatically
let multiplyValues = (a: number, b: number): number => a * b;   // a * b is returned automatically

console.log(addValues(10, 20));
console.log(multiplyValues(10, 20));

// Output:
// 30
// 200
