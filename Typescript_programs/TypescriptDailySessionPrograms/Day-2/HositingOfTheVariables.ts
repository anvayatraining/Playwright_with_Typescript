// Hoisting (Variable Access Before Declaration)
// •	var: Hoisted but initialized as undefined.
// •	let & const: Hoisted but not initialized (cannot be used before declaration).
// Example:
// console.log(a); // undefined (var is hoisted)
// var a = 10;
 
// console.log(b); // Error (Cannot access before initialization)
// let b = 20;
 
// console.log(c); // Error (Cannot access before initialization)
// const c = 30;


// let x;
// let y;

// x=10;
// y=20;

// console.log(x+y); // Output: 30


console.log(x); // Error: Cannot access 'x' before initialization
var x = 10;
console.log(x); // Output: 10

console.log(y); // Error: Cannot access 'y' before initialization
let y = 20;
console.log(y); // Output: 20

console.log(z); // Error: Cannot access 'z' before initialization
const z = 30;
console.log(z); // Output: 30
