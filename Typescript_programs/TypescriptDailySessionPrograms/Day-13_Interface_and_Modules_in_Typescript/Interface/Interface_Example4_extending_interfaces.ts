// =====================================================================
// TOPIC   : Interfaces in TypeScript
// EXAMPLE : 4 - Extending interfaces (inheritance between interfaces)
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// An interface can EXTEND another interface using the 'extends' keyword.
// The child interface gets ALL the members of the parent interface and
// can add its own. (Inheritance is applicable to interfaces too.)
//
// SYNTAX:
//   interface Parent {
//       a: type;
//   }
//   interface Child extends Parent {
//       b: type;        // Child now has both 'a' and 'b'
//   }
//
// REMEMBER:
//   - a class     can EXTEND another class
//   - an interface can EXTEND another interface
//   - a class     can IMPLEMENT an interface (Example 5)

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------

// Parent interface
interface Animal {
    name: string;
}

// Child interface: has 'name' (from Animal) + 'color' (its own)
interface Dog extends Animal {
    color: string;
}

// The object must provide the properties of BOTH interfaces
let mydog: Dog = {
    name: "Buddy",
    color: "Black"
};

console.log(mydog.name, mydog.color);  // Buddy Black

// Missing an inherited property gives an error. Uncomment to see it.
// let dog2: Dog = { color: "White" };  // Error: Property 'name' is missing

// Makes this file a module so names don't clash with other files.
export {};
