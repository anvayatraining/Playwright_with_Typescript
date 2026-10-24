// =====================================================================
// TOPIC   : Interfaces in TypeScript
// EXAMPLE : 1 - Basic interface
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// 1. An INTERFACE in TypeScript is a way to define the STRUCTURE of an object.
// 2. It tells the compiler what properties (and their types) an object should have.
// 3. It is like a BLUEPRINT for objects.
//
// An interface can contain:
//   - properties
//   - abstract methods: only the SIGNATURE of the method (name, parameters,
//     return type). There is NO implementation (no body).
//
// WHAT WE WILL LEARN IN THIS TOPIC (Examples 1 to 5)
//   1. Regular properties                      <- this file
//   2. Optional properties
//   3. Readonly properties and function types (methods)
//   4. Extending interfaces
//   5. Class implements interface
//
// SYNTAX:
//   interface InterfaceName {
//       propertyName: type;
//       methodName(): returnType;     // abstract method (signature only)
//   }
//
//   let variableName: InterfaceName = { ...values... };
//
// NOTE: Interfaces exist only at COMPILE time (for type checking).
// They do not appear in the JavaScript code produced by the compiler.

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
interface Person {
    name: string;
    age: number;
}

// The object MUST have every property of the interface, with the correct types.
let student: Person = {
    name: "john",
    age: 30
};

console.log(student.name);  // john
console.log(student.age);   // 30
console.log(student);       // { name: 'john', age: 30 }

// TypeScript checks the object against the interface. Uncomment to see the errors.
// let p1: Person = { name: "Smith" };              // Error: Property 'age' is missing
// let p2: Person = { name: "Smith", age: "forty" }; // Error: Type 'string' is not assignable to type 'number'

// Makes this file a module so names don't clash with other files.
export {};
