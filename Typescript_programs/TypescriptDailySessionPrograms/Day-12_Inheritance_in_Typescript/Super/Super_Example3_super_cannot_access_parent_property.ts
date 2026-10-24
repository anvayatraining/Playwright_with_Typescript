// =====================================================================
// TOPIC   : super in TypeScript
// EXAMPLE : 3 - super cannot be used to access a parent class property
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// 'super' can be used for:
//   super()        -> the parent CONSTRUCTOR
//   super.method() -> a parent class METHOD
//
// 'super' CANNOT be used to access a parent class PROPERTY.
// (In Java, super.propertyName is possible - in TypeScript it is NOT.)
//
// In TypeScript, a property is stored on the object itself (there is only
// ONE 'num' per object). If the child declares a property with the same name,
// it OVERRIDES (replaces) the parent's value, and 'this.num' gives the
// child's value.

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
class Parent {
    num: number = 10;
}

class Child extends Parent {
    num: number = 20;   // overridden: same property name as the parent, new value

    show() {
        // console.log(super.num);
        // Error: Only public and protected methods of the base class are accessible via the 'super' keyword.
        // TypeScript does not support super.num to access a parent class property like Java does.

        console.log(this.num);   // 20 -> the child's value
        console.log("This is show() method from the child class...");
    }
}

// ---------------------------------------------------------------------
// USAGE
// ---------------------------------------------------------------------
let c1 = new Child();

c1.show();
// 20
// This is show() method from the child class...

// Makes this file a module so class names don't clash with other files.
export {};
