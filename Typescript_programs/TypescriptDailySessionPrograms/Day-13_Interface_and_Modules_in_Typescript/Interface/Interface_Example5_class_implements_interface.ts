// =====================================================================
// TOPIC   : Interfaces in TypeScript
// EXAMPLE : 5 - A class implements an interface
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// A class uses the 'implements' keyword to follow an interface.
// The interface is the CONTRACT: the class MUST declare every property
// and write the body of every method listed in the interface.
// The class can also have extra members of its own.
//
//   class extends class          -> inherits code from the parent class
//   interface extends interface  -> child interface gets the parent's members
//   class implements interface   -> class promises to provide the interface's members
//
// SYNTAX:
//   interface InterfaceName {
//       property: type;
//       method(): returnType;
//   }
//
//   class ClassName implements InterfaceName {
//       property: type;
//       method(): returnType { ... }   // implementation
//   }
//
// A class can implement MORE THAN ONE interface:
//   class ClassName implements Interface1, Interface2 { ... }

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
interface Animal {
    name: string;
    sound(): void;   // abstract method: no body here
}

class Dog implements Animal {
    name: string;    // required by the Animal interface (the class must declare it itself)
    color: string;   // extra property that belongs only to Dog

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    // The class provides the implementation of the abstract method
    sound() {
        console.log("bark...");
    }
}

// ---------------------------------------------------------------------
// USAGE
// ---------------------------------------------------------------------
let pet = new Dog("Tommy", "Black");

console.log(pet.name);   // Tommy
console.log(pet.color);  // Black
pet.sound();             // bark...

// If the class forgets a member of the interface (for example sound()),
// TypeScript shows an error:
//   "Class 'Dog' incorrectly implements interface 'Animal'."

// Makes this file a module so names don't clash with other files.
export {};
