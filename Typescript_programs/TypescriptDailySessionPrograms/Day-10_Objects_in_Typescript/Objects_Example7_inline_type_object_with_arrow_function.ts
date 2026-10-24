// =====================================================================
// TOPIC   : Objects in TypeScript
// EXAMPLE : 7 - Inline Type Object with an Arrow Function
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// In Example 3 we wrote the method of an inline type object using a
// normal function:   getSummary: function () { ... this.name ... }
//
// A method can also be written as an ARROW FUNCTION:   () => { ... }
//
// SYNTAX OF AN ARROW FUNCTION:
//   (parameters) => expression              // single-line, value is returned automatically
//   (parameters) => { return value; }       // block body, 'return' is required
//
// In the type definition, the arrow-function type is written as:
//   methodName: () => returnType
// (this part we already used in Example 3)

// ---------------------------------------------------------------------
// IMPORTANT DIFFERENCE: 'this' DOES NOT WORK THE SAME WAY
// ---------------------------------------------------------------------
// - A normal function inside an object: 'this' refers to the object itself.
// - An arrow function: has NO 'this' of its own. It uses the 'this' of the
//   place where it was written (outside the object), so 'this.name' would
//   NOT give us the student's name.
//
// That is why, inside an arrow function, we use the OBJECT NAME directly
// (student.name) instead of 'this.name'.

// ---------------------------------------------------------------------
// Step 1: Create the object with a temporary (placeholder) method
// ---------------------------------------------------------------------
let student: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string   // method type: takes nothing, returns a string
} = {
    name: "Scott",
    age: 15,
    grade: "A",
    getSummary: () => ""       // temporary placeholder: returns an empty string for now
};

// ---------------------------------------------------------------------
// Step 2: Assign the actual arrow function
// ---------------------------------------------------------------------
// Now that 'student' already exists, we replace the placeholder with the
// real arrow function. We use 'student.name' (not 'this.name') because
// arrow functions do not have their own 'this'.
student.getSummary = () => {
    return `${student.name} is ${student.age} years old and scored grade ${student.grade}`;
};

// ---------------------------------------------------------------------
// Step 3: Call the method
// ---------------------------------------------------------------------
console.log(student.getSummary()); // Scott is 15 years old and scored grade A

// ---------------------------------------------------------------------
// NOTE FOR STUDENTS
// ---------------------------------------------------------------------
// The placeholder in Step 1 is only used to show that a method can be
// REPLACED after the object is created. We could also write the real arrow
// function directly inside the object:
//
//   getSummary: () => `${student.name} is ${student.age} years old and scored grade ${student.grade}`
//
// This works because the arrow function only runs later (when we call it),
// by which time 'student' already exists.

// Makes this file a module so variable names don't clash with other files.
export {};
