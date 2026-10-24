// =====================================================================
// TOPIC   : super in TypeScript
// EXAMPLE : 2 - super.method() : calling the parent class method
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// When a child class OVERRIDES a method, the parent's version is hidden.
// Using 'super.methodName()' inside the child lets us still call the
// PARENT's version of that method.
//
// This is useful when we want to ADD to the parent's behaviour instead of
// completely replacing it.
//
// SYNTAX:
//   class Child extends Parent {
//       methodName() {
//           // child code
//           super.methodName();   // call the parent's version of the method
//       }
//   }

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
class Parent {
    display() {
        console.log("This is display() method from Parent class...");
    }
}

class Child extends Parent {
    // Overridden method
    display() {
        console.log("This is display() method from child class....");
        super.display();   // this will invoke the parent class method
    }

    // Method that exists only in the child class
    show() {
        console.log("This is show() method from the child class...");
    }
}

// ---------------------------------------------------------------------
// USAGE
// ---------------------------------------------------------------------
let c1 = new Child();

c1.show();
// This is show() method from the child class...

c1.display();
// This is display() method from child class....
// This is display() method from Parent class...
//
// The child's display() runs first, and then it calls the parent's display() using super.display().
// Without the super.display() line, only the first message would be printed.

// Makes this file a module so class names don't clash with other files.
export {};
