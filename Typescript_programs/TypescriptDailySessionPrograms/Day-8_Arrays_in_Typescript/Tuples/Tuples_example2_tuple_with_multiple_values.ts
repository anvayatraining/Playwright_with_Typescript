// ============================================================
// Topic   : Tuples in TypeScript
// Example : 2 - Tuple with multiple values
// ============================================================

// A tuple can have as many values as we need, and each position can have a different type.
// Like normal variables, a tuple can be declared first and initialized later.

// Declaring a tuple variable (the types of the 5 positions are fixed here)
//   position 0 -> number   (id)
//   position 1 -> string   (name)
//   position 2 -> boolean  (active or not)
//   position 3 -> number   (age)
//   position 4 -> string   (role)
let user: [number, string, boolean, number, string];

// Initializing the tuple (values must follow the same order and types as declared)
user = [1, "Steve", true, 20, "Admin"];

console.log(user);

// Output:
// [ 1, 'Steve', true, 20, 'Admin' ]
