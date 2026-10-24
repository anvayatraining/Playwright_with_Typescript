// =====================================================================
// TOPIC   : Access Modifiers in TypeScript
// EXAMPLE : 1 - public, protected and private
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// ACCESS MODIFIERS decide WHO can access the properties and methods of a class.
// TypeScript has three access modifiers:
//
//   public     - accessible ANYWHERE (inside the class, in child classes, and outside).
//                This is the DEFAULT: if we write no modifier, the member is public.
//   protected  - accessible inside the class and its CHILD classes (subclasses),
//                but NOT from outside.
//   private    - accessible ONLY inside the class where it is declared.
//
//   Where can we access it?    Same class | Child class | Outside the class
//   public                        Yes          Yes            Yes
//   protected                     Yes          Yes            No
//   private                       Yes          No             No
//
// SYNTAX:
//   class ClassName {
//       public    propertyName: type;
//       protected propertyName: type;
//       private   propertyName: type;
//
//       public methodName(): returnType { ... }
//   }
//
// This example shows access from the SAME class and from OUTSIDE the class.
// Example 2 shows access from a CHILD class.

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
class Person {
    public name: string;     // public property - accessible anywhere
    protected age: number;   // protected property - accessible within the class and its subclasses
    private ssn: number;     // private property - accessible only within this class

    constructor(name: string, age: number, ssn: number) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    // public method - can be called from anywhere.
    // Inside the class we can read ALL three properties (public, protected, private).
    public displayInfo() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("SSN:", this.ssn);
    }
}

// ---------------------------------------------------------------------
// USAGE (outside the class)
// ---------------------------------------------------------------------
let person = new Person("John", 30, 212312312);

// public method: allowed. It prints all three values because it is written INSIDE the class.
person.displayInfo();
// Name: John
// Age: 30
// SSN: 212312312

// public property: accessible from outside
console.log(person.name); // John

// protected property: NOT accessible from outside the class. Uncomment to see the error.
// console.log(person.age); // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses.

// private property: NOT accessible from outside the class. Uncomment to see the error.
// console.log(person.ssn); // Error: Property 'ssn' is private and only accessible within class 'Person'.

// Makes this file a module so class names don't clash with other files.
export {};
