// =====================================================================
// TOPIC   : Objects in TypeScript
// EXAMPLE : 3 - Inline Type Object
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// With an Inline Type Object we also DEFINE THE DATA TYPE of every key,
// right where the variable is declared. (TypeScript only)
//
// SYNTAX:
//   let objectName: {
//       key1: type1,
//       key2: type2,
//       methodName: () => returnType
//   } = {
//       key1: value1,
//       key2: value2,
//       methodName: function() { ... }
//   };
//
// The part between ':' and '=' is the TYPE.
// The part after '=' is the VALUE.

// ---------------------------------------------------------------------
// EXAMPLE: student object
// ---------------------------------------------------------------------
let student: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string   // a method that takes no input and returns a string
} =
{
    name: "Scott",
    age: 15,
    grade: "A",
    getSummary: function () {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
};

console.log(student.getSummary()); // Scott is 15 years old and scored grade A

// ---------------------------------------------------------------------
// PROBLEM WITH INLINE TYPE OBJECTS
// ---------------------------------------------------------------------
// We must REPEAT the whole structure for every new object.
// Look at student1 below - the type definition is copied again.
// If we had 100 students, we would copy it 100 times, and changing the
// structure later would mean editing it in 100 places!
// (Solution: type aliases - see Example 4.)

let student1: {
    name: string,
    age: number,
    grade: string,
    getSummary: () => string
} =
{
    name: "Marry",
    age: 16,
    grade: "B",
    getSummary: function () {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
};

console.log(student1.getSummary()); // Marry is 16 years old and scored grade B

// Makes this file a module so variable names don't clash with other files.
export {};
