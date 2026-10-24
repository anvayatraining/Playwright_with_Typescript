// =====================================================================
// TOPIC   : Objects in TypeScript
// EXAMPLE : 5 - Intersection Types (combining type aliases)
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// An Intersection Type combines TWO OR MORE types into ONE type using
// the '&' operator. The new type has ALL the properties of every type
// that was combined.
//
// SYNTAX:
//   type C = A & B;
//   type D = A & B & { extraKey: type };   // we can also add extra members
//
// Think of it as "A AND B": the object must satisfy both.

// ---------------------------------------------------------------------
// Step 1: Define small, focused types
// ---------------------------------------------------------------------
type Personal = {
    name: string,
    age: number
};

type Contact = {
    email: string,
    phone: number
};

// ---------------------------------------------------------------------
// Step 2: Combine them with '&' and add an extra method
// ---------------------------------------------------------------------
// Candidate has: name, age (from Personal)
//                email, phone (from Contact)
//                getContactInfo (added here)
type Candidate = Personal & Contact &
{
    getContactInfo: () => string
};

// ---------------------------------------------------------------------
// Step 3: Create an object - it MUST provide every property
// ---------------------------------------------------------------------
let cand: Candidate = {
    name: "Scott",
    age: 25,
    email: "abc@gmail.com",
    phone: 1234567890,
    getContactInfo: function () {
        return `${this.name} can be contacted at ${this.email} or ${this.phone}`;
    }
};

console.log(cand.getContactInfo()); // Scott can be contacted at abc@gmail.com or 1234567890

// If we forget any property (for example 'email'), TypeScript shows an error.
// This is how TypeScript helps us catch mistakes before running the code.

// Makes this file a module so type/variable names don't clash with other files.
export {};
