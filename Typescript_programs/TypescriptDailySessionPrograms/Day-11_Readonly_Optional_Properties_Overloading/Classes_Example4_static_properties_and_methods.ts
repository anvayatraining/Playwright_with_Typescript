// =====================================================================
// TOPIC   : Classes in TypeScript
// EXAMPLE : 4 - Static properties and methods
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// STATIC properties/methods belong to the CLASS itself, not to individual objects.
//
// Rules:
//   1) Static properties/methods are common (shared) across all the objects.
//      There is only ONE copy, no matter how many objects are created.
//   2) They are accessed directly through the CLASS NAME (ClassName.member),
//      not through an object.
//   3) They can be modified through the class, and every object sees the change.
//   4) We cannot use 'this' to reach a static member from an object's method.
//      Use the class name instead (Student.schoolName).
//
// SYNTAX:
//   static propertyName: type = value;
//   static methodName(): returnType { ... }

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
class Student {
    readonly studentId: number;
    name: string;

    // Static property: one value shared by ALL students
    static schoolName: string = "Greenwood High";

    constructor(id: number, name: string) {
        this.studentId = id;
        this.name = name;
    }

    displayInfo(): void {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.name);

        // Access the static property using the CLASS NAME (not 'this')
        console.log("School Name:", Student.schoolName);
    }

    // Static method: called using the class name, no object needed.
    // It changes the shared school name.
    static changeSchoolName(newName: string): void {
        Student.schoolName = newName;
    }
}

// ---------------------------------------------------------------------
// USAGE
// ---------------------------------------------------------------------
const s1 = new Student(101, "John");
const s2 = new Student(102, "Bob");

console.log("Initial student info:");
s1.displayInfo(); // ... School Name: Greenwood High
s2.displayInfo(); // ... School Name: Greenwood High

// Static members are accessed through the class name directly - no object needed
console.log("School from class:", Student.schoolName); // Greenwood High

// We cannot access a static member through an object. Uncomment to see the error.
// console.log(s1.schoolName); // Error: Property 'schoolName' does not exist on type 'Student'.
//                             // Did you mean to access the static member 'Student.schoolName' instead?

// Change the static value ONCE using the static method...
Student.changeSchoolName("Sunrise Academy");

// ...and BOTH objects see the new value, because the value is shared
console.log("After changing the school name:");
s1.displayInfo(); // ... School Name: Sunrise Academy
s2.displayInfo(); // ... School Name: Sunrise Academy

// Makes this file a module so class names don't clash with other files.
export {};
