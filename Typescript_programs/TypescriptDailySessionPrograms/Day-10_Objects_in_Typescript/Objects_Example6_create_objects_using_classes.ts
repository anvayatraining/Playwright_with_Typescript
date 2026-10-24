// =====================================================================
// TOPIC   : Objects in TypeScript
// EXAMPLE : 6 - Creating objects using Classes (JS ES6 / TS)
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// A CLASS is a blueprint (template) for creating objects.
// It defines:
//   - properties  : the data each object will hold
//   - constructor : a special method that runs automatically when an
//                   object is created, used to set the initial values
//   - methods     : the behaviour of the object
//
// An OBJECT is an instance (a real copy) created from the class using 'new'.
//
// SYNTAX:
//   class ClassName {
//       property1: type;
//       property2: type;
//
//       constructor(param1: type, param2: type) {
//           this.property1 = param1;
//           this.property2 = param2;
//       }
//
//       methodName(): returnType {
//           // code
//       }
//   }
//
//   let obj = new ClassName(value1, value2);

// ---------------------------------------------------------------------
// Step 1: Define the class
// ---------------------------------------------------------------------
class Person {
    // Properties - declared with their data types
    ssn: string;
    firstName: string;
    lastName: string;

    // Constructor - runs when we write 'new Person(...)'
    // 'this' refers to the object that is being created
    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method 1 - returns the full name
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    // Method 2 - a method can call another method using 'this'
    getDetails(): string {
        return `SSN: ${this.ssn}, Name: ${this.getFullName()}`;
    }
}

// ---------------------------------------------------------------------
// Step 2: Create objects using the 'new' keyword
// ---------------------------------------------------------------------
// Each object gets its own copy of the data.
let person1 = new Person('1121233333', 'John', 'Kenedy');
console.log(person1.getDetails()); // SSN: 1121233333, Name: John Kenedy

let person2 = new Person('22222222', 'David', 'D');
console.log(person2.getDetails()); // SSN: 22222222, Name: David D

let person3 = new Person('5555555', 'Scott', 'S');
console.log(person3.getDetails()); // SSN: 5555555, Name: Scott S

// Notice: the structure (class) is written once, and we create as many
// objects as we like - with the behaviour (methods) included automatically.

// Makes this file a module so the class name doesn't clash with other files.
export {};
