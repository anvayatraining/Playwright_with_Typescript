// =====================================================================
// TOPIC   : Classes in TypeScript
// EXAMPLE : 2 - Read-only properties
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// A READ-ONLY property can be assigned a value only ONCE:
// either where it is declared, or inside the constructor.
// After that, it cannot be changed. Use it for values that should never
// change, such as an ID.
//
// SYNTAX:
//   readonly propertyName: type;

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
class Student {
    readonly studentId: number;  // Read-only property (assigned once, inside the constructor)
    name: string;                // Regular property (can be changed later)

    constructor(id: number, name: string) {
        this.studentId = id;     // Allowed: first and only assignment, inside the constructor
        this.name = name;
    }

    displayInfo(): void {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.name);
    }
}

// ---------------------------------------------------------------------
// USAGE
// ---------------------------------------------------------------------
const s1 = new Student(101, "John");
s1.displayInfo();
// Student ID: 101
// Student Name: John

// Regular property: we can change it
s1.name = "Johnny";

// Read-only property: we can READ it, but we cannot CHANGE it.
// Uncomment the line below to see the compile-time error.
// s1.studentId = 999; // Error: Cannot assign to 'studentId' because it is a read-only property.

console.log("ID is still:", s1.studentId); // ID is still: 101

// Makes this file a module so class names don't clash with other files.
export {};
