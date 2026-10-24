// =====================================================================
// TOPIC   : super in TypeScript
// EXAMPLE : 1 - super() : calling the parent class constructor
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// The 'super' keyword is used in a CHILD class to reach its immediate PARENT class.
//
//   super()        - invokes the immediate parent class CONSTRUCTOR
//   super.method() - invokes a method of the immediate parent class (Example 2)
//
// RULES for super():
//   1) If the child class has a constructor, it MUST call super() - otherwise
//      TypeScript gives an error.
//   2) super() must be called BEFORE we use 'this' in the child constructor.
//   3) The parent constructor runs FIRST, then the rest of the child constructor.
//
// SYNTAX:
//   class Child extends Parent {
//       constructor() {
//           super();      // calls the Parent constructor
//           // child code
//       }
//   }

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
class Parent {
    constructor() {
        console.log("This is Parent class constructor..");
    }
}

class Child extends Parent {
    constructor() {
        super();   // this will call the parent class constructor (must be called)
        console.log("This is child class constructor...");
    }
}

// ---------------------------------------------------------------------
// USAGE
// ---------------------------------------------------------------------
// Creating a Child object runs BOTH constructors: the parent first, then the child.
let c1 = new Child();
// This is Parent class constructor..
// This is child class constructor...

// If we remove super() from the Child constructor, TypeScript shows an error:
//   "Constructors for derived classes must contain a 'super' call."

// Makes this file a module so class names don't clash with other files.
export {};
