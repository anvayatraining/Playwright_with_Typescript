// =====================================================================
// TOPIC   : Classes in TypeScript
// EXAMPLE : 1 - Class with properties, constructor and a method
// =====================================================================

// ---------------------------------------------------------------------
// WHAT WE WILL LEARN IN THIS TOPIC (Examples 1 to 5)
// ---------------------------------------------------------------------
// 1. Class (properties, constructor, methods)   <- this file
// 2. Read-only properties
// 3. Optional properties
// 4. Static properties and methods
// 5. Method written as an arrow function

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// A CLASS is a blueprint for creating objects. It contains:
//   - properties  : the data of the object
//   - constructor : runs automatically when an object is created ('new')
//   - methods     : the behaviour of the object
//
// SYNTAX:
//   class ClassName {
//       property1: type;
//
//       constructor(param1: type) {
//           this.property1 = param1;
//       }
//
//       methodName(): returnType {
//           // code
//       }
//   }
//
//   const obj = new ClassName(value);

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
class Student {
    // Regular property - can be read and changed any time
    name: string;

    // Constructor - sets the initial value of the property
    constructor(name: string) {
        this.name = name;
    }

    // Method - a named function that displays the student information
    // 'void' means the method does not return any value
    displayInfo(): void {
        console.log("Student Name:", this.name);
    }
}

// ---------------------------------------------------------------------
// USAGE - create objects using the 'new' keyword
// ---------------------------------------------------------------------
const s1 = new Student("John");
const s2 = new Student("Bob");

s1.displayInfo(); // Student Name: John
s2.displayInfo(); // Student Name: Bob

// A regular property can be changed after the object is created
s1.name = "Johnny";
s1.displayInfo(); // Student Name: Johnny

// Makes this file a module so class names don't clash with other files.
export {};
