// =====================================================================
// TOPIC   : Classes in TypeScript
// EXAMPLE : 3 - Optional properties
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// An OPTIONAL property may or may not be given a value.
// If no value is given, its value is 'undefined'.
// We mark a property as optional by adding '?' after its name.
//
// SYNTAX:
//   propertyName?: type;
//
// The same '?' can be used on constructor parameters:
//   constructor(id: number, email?: string)
//
// NOTE: An optional parameter must come AFTER all the required parameters.

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
class Student {
    readonly studentId: number;
    name: string;
    email?: string;   // Optional property (can be undefined)

    // 'email' is optional here too, so we can create a student without it
    constructor(id: number, name: string, email?: string) {
        this.studentId = id;
        this.name = name;
        this.email = email;   // will be undefined if no email is passed
    }

    displayInfo(): void {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.name);

        // Because 'email' may be undefined, we CHECK it before using it.
        // 'if (this.email)' is true only when an email value exists.
        if (this.email) {
            console.log("Email:", this.email);
        } else {
            console.log("Email is not provided.");
        }
    }
}

// ---------------------------------------------------------------------
// USAGE
// ---------------------------------------------------------------------
const s1 = new Student(101, "John");                    // no email passed
const s2 = new Student(102, "Bob", "bob@gmail.com");    // email passed

s1.displayInfo();
// Student ID: 101
// Student Name: John
// Email is not provided.

s2.displayInfo();
// Student ID: 102
// Student Name: Bob
// Email: bob@gmail.com

// Makes this file a module so class names don't clash with other files.
export {};
