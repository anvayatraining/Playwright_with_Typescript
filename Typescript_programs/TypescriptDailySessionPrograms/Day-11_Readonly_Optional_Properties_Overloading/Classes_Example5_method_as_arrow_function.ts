// =====================================================================
// TOPIC   : Classes in TypeScript
// EXAMPLE : 5 - Writing a method using an arrow function
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// In the earlier examples, displayInfo() was a NAMED METHOD:
//
//   displayInfo(): void { ... }
//
// A method can also be written as an ARROW FUNCTION stored in a property:
//
//   displayInfo = (): void => { ... };
//
// Both work the same way when we call s1.displayInfo().
//
// Differences to remember:
//   - Named method   : defined once on the class and shared by all objects.
//   - Arrow function : created separately for EACH object (it is a property).
//   - In a class, an arrow function always keeps 'this' pointing to its own
//     object, even if the method is passed around or used as a callback.
//
// NOTE: An arrow-function property ends with a semicolon (;)

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
class Student {
    readonly studentId: number;
    name: string;
    email?: string;
    static schoolName: string = "Greenwood High";

    constructor(id: number, name: string, email?: string) {
        this.studentId = id;
        this.name = name;
        this.email = email;
    }

    // Method written as an arrow function (anonymous function assigned to a property)
    displayInfo = (): void => {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.name);

        if (this.email) {
            console.log("Email:", this.email);
        } else {
            console.log("Email is not provided.");
        }

        console.log("School Name:", Student.schoolName);
    };
}

// ---------------------------------------------------------------------
// USAGE - called exactly like a normal method
// ---------------------------------------------------------------------
const s1 = new Student(101, "John");
const s2 = new Student(102, "Bob", "bob@gmail.com");

s1.displayInfo();
// Student ID: 101
// Student Name: John
// Email is not provided.
// School Name: Greenwood High

s2.displayInfo();
// Student ID: 102
// Student Name: Bob
// Email: bob@gmail.com
// School Name: Greenwood High

// ---------------------------------------------------------------------
// WHY 'this' STAYS SAFE WITH AN ARROW FUNCTION
// ---------------------------------------------------------------------
// Here we copy the method into a separate variable and call it on its own.
// Because it is an arrow function, it still knows it belongs to s2 and works.
// (With a normal named method, 'this' would be lost and this call would fail.)
const show = s2.displayInfo;
show(); // Still prints Bob's details

// Makes this file a module so class names don't clash with other files.
export {};
