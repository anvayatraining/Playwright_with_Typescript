// =====================================================================
// TOPIC   : Interfaces in TypeScript
// EXAMPLE : 3 - Readonly properties and function types (methods)
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// 1) READONLY property : a value that can be set when the object is created
//    but can NOT be changed afterwards (use it to prevent modification).
//
//        readonly propertyName: type;
//
// 2) FUNCTION TYPE / METHOD : an interface can describe a method too.
//    We write only the SIGNATURE (abstract method) - the object provides the body.
//
//        methodName(): returnType;

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
interface Book {
    title: string;            // normal property - can be changed
    readonly isbn: string;    // readonly property - can NOT be changed after creation

    display(): void;          // abstract method: signature only, no implementation
}

// The object must provide the implementation of display()
let b1: Book = {
    title: "Learn Playwright",
    isbn: "123-ABC",

    display() {
        console.log(b1.isbn, b1.title);
    }
};

console.log(b1.title);  // Learn Playwright
console.log(b1.isbn);   // 123-ABC
b1.display();           // 123-ABC Learn Playwright

console.log("After changing values...");

// A normal property can be modified
b1.title = "Learn TypeScript";
console.log("After changing title:", b1.title);  // After changing title: Learn TypeScript

// A readonly property can NOT be modified. Uncomment to see the compile-time error.
// b1.isbn = "123-XYZ";  // Error: Cannot assign to 'isbn' because it is a read-only property.

// The method now shows the updated title
b1.display();           // 123-ABC Learn TypeScript

// Makes this file a module so names don't clash with other files.
export {};
