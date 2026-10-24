// =====================================================================
// TOPIC   : Objects in TypeScript
// EXAMPLE : 1 - Creating an object using an object literal
// =====================================================================

// ---------------------------------------------------------------------
// WHAT IS AN OBJECT?
// ---------------------------------------------------------------------
// - An object contains PROPERTIES (data) and BEHAVIOUR (functions).
// - In other words, an object contains variables and methods.
// - An object is a collection of KEY and VALUE pairs.
//
// Real-world examples:
//   employee -> properties: name, desig, sal, dep
//               methods   : bonus(), getEmpDetails(), setDetails()
//
//   student  -> properties: name, sid, grade
//               methods   : getDetails(), setDetails()

// ---------------------------------------------------------------------
// DIFFERENT WAYS TO CREATE AN OBJECT IN JS/TS
// ---------------------------------------------------------------------
// 1. Using the 'object' type / object literal  - directly assign values (JS/TS)
// 2. Inline Type Object                        - also define the datatype of each key (TS)
// 3. Using type aliases                        - reusable custom type (TS)
// 4. Using classes                             - blueprint for objects (JS ES6/TS)

// ---------------------------------------------------------------------
// SYNTAX (object literal)
// ---------------------------------------------------------------------
//   let objectName = {
//       key1: value1,
//       key2: value2,
//       methodName: function(): returnType {
//           // code
//       }
//   };

// ---------------------------------------------------------------------
// NOTE ON THE 'object' TYPE
// ---------------------------------------------------------------------
// The TypeScript 'object' type represents all values that are NOT primitive
// types (i.e. not string, number, boolean, etc.).
//
// If we explicitly write ': object', TypeScript only knows "this is some
// object" - it does NOT know the keys inside it, so we cannot access
// employee.name later. That is why we normally let TypeScript INFER the type.
/*
let employee: object = {
    name: "John",
    age: 30,
    salary: 50000,
    job: "Engineer"
}
*/

// ---------------------------------------------------------------------
// EXAMPLE: employee object
// ---------------------------------------------------------------------
// TypeScript automatically infers the type of every key from its value:
//   name   -> string
//   salary -> number
//   job    -> string
//   getDetails -> function that returns a string
let employee = {
    name: "John",
    salary: 50000,
    job: "Engineer",

    // A function inside an object is called a METHOD.
    // 'this' refers to the current object (employee).
    getDetails: function (): string {
        return `${this.name} is a ${this.job} earning ${this.salary}`;
    }
};

// typeof tells us the data type of a variable
console.log(typeof employee); // object

// Calling the method of the object
console.log(employee.getDetails()); // John is a Engineer earning 50000

// 'export {}' makes this file a module so its variable names (employee, etc.)
// do not clash with the same names used in the other example files.
export {};
