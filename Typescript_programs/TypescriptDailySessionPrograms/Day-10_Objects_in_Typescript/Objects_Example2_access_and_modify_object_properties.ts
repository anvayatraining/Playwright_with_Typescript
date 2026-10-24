// =====================================================================
// TOPIC   : Objects in TypeScript
// EXAMPLE : 2 - Accessing and modifying object properties
// =====================================================================

// There are TWO ways to access the properties/methods of an object:
//   Approach 1 -> Dot notation      : objectName.key
//   Approach 2 -> Bracket notation  : objectName["key"]
//
// Both give the same result. Bracket notation is useful when the key name
// is stored in a variable or contains special characters (like spaces).

let employee = {
    name: "John",
    salary: 50000,
    job: "Engineer",
    getDetails: function (): string {
        return `${this.name} is a ${this.job} earning ${this.salary}`;
    }
};

// ---------------------------------------------------------------------
// Approach 1: Dot notation
// ---------------------------------------------------------------------
console.log(employee.name, employee.salary, employee.job); // John 50000 Engineer
console.log(employee.getDetails()); // John is a Engineer earning 50000

// ---------------------------------------------------------------------
// Approach 2: Bracket notation
// ---------------------------------------------------------------------
console.log(employee["name"], employee["salary"], employee["job"]); // John 50000 Engineer

// A method can also be called using bracket notation.
// Note the extra () at the end - that is what actually calls the method.
console.log(employee["getDetails"]()); // John is a Engineer earning 50000

// ---------------------------------------------------------------------
// Modifying the value of a property
// ---------------------------------------------------------------------
// Use the assignment operator (=) with either notation.
employee.job = "Manager";          // same as: employee["job"] = "Manager";
console.log("Modified job is:", employee.job); // Modified job is: Manager

// The method now uses the updated value as well
console.log(employee.getDetails()); // John is a Manager earning 50000

// Type safety: TypeScript remembers 'salary' is a number, so the line below
// would give a compile-time error. Uncomment it to see.
// employee.salary = "high";   // Error: Type 'string' is not assignable to type 'number'

// Makes this file a module so variable names don't clash with other files.
export {};
