// variable : which can be changed in future and used to store data in memory

let age: number = 25;
var student_name: string = "John Doe";
const isStudent: boolean = true;

// scope of variable : where the variable can be accessed in the program

// var → Function Scope
// •	Variables declared with var are accessible anywhere inside the function.
// •	Can lead to unexpected behaviour because they are not limited to blocks (if, for, etc.).


function exampleVar() {
  if (true) {
    var message = "Hello, World!";
  }
  console.log(message); // Works! (function-scoped)
}
exampleVar(); // Output: "Hello, World!"

//console.log(message); // Error: message is not defined (outside the function)

// let & const → Block Scope
// •	Variables are only accessible inside the block {} where they are declared.
// •	Safer and more predictable than var.

function exampleLetConst() {
  if (true) {
    let message = "Hello, let!";
    const greeting = "Hello, const!";
    console.log(message); // Works! (block-scoped)
    console.log(greeting); // Works! (block-scoped)
  }
//   console.log(message); // Error: Not accessible outside block
//   console.log(greeting); // Error: Not accessible outside block
}
exampleLetConst();





