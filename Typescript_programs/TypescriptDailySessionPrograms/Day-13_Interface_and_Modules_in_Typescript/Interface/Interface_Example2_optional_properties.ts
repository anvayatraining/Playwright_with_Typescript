// =====================================================================
// TOPIC   : Interfaces in TypeScript
// EXAMPLE : 2 - Optional properties (?)
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// An OPTIONAL property is a property that an object MAY or MAY NOT have.
// We mark it by adding '?' after the property name.
// If the object does not provide it, its value is 'undefined'.
//
// SYNTAX:
//   interface InterfaceName {
//       requiredProperty: type;
//       optionalProperty?: type;    // optional
//   }

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
interface Employee {
    eid: number;
    ename: string;
    edepartment?: string;   // optional property
}

// Object WITHOUT the optional property - this is allowed
let emp: Employee = {
    eid: 101,
    ename: "john"
};

// Object WITH the optional property - also allowed
let emp1: Employee = {
    eid: 102,
    ename: "Smith",
    edepartment: "accounts"
};

console.log(emp.eid, emp.ename, emp.edepartment);     // 101 john undefined
console.log(emp1.eid, emp1.ename, emp1.edepartment);  // 102 Smith accounts

// Required properties can NOT be skipped. Uncomment to see the error.
// let emp2: Employee = { eid: 103 };  // Error: Property 'ename' is missing

// Makes this file a module so names don't clash with other files.
export {};
