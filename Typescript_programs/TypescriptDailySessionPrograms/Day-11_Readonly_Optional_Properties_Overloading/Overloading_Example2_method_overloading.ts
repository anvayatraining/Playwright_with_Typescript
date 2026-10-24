// =====================================================================
// TOPIC   : Overloading in TypeScript
// EXAMPLE : 2 - Method Overloading
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// Method Overloading = the SAME method name used with DIFFERENT
// parameters (a different number of parameters or different types).
//
// Just like constructor overloading (Example 1), we write:
//   1. OVERLOAD SIGNATURES - declarations only, NO body
//   2. ONE IMPLEMENTATION  - a single body that handles every version
//                            (extra parameters are optional using '?')

// ---------------------------------------------------------------------
// SYNTAX
// ---------------------------------------------------------------------
//   methodName(a: type, b: type): returnType;              // signature 1
//   methodName(a: type, b: type, c: type): returnType;     // signature 2
//
//   methodName(a: type, b: type, c?: type): returnType {   // implementation
//       // code
//   }

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
class Calculator {

    // Overload signatures - add two numbers OR add three numbers
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    // Implementation - 'c' is optional because the 2-number version doesn't pass it
    add(a: number, b: number, c?: number): number {
        // If the third number was passed, add all three
        if (c !== undefined) {
            return a + b + c;
        }
        // Otherwise add only two
        return a + b;
    }
}

// ---------------------------------------------------------------------
// USAGE
// ---------------------------------------------------------------------
let calc = new Calculator();

console.log("Adding 2 numbers:", calc.add(10, 20));     // Adding 2 numbers: 30
console.log("Adding 3 numbers:", calc.add(10, 20, 30)); // Adding 3 numbers: 60

// Only the versions listed in the overload signatures can be called.
// The line below gives a compile-time error because no signature takes 4 numbers.
// console.log(calc.add(10, 20, 30, 40));  // Error: Expected 2-3 arguments, but got 4

// Makes this file a module so class names don't clash with other files.
export {};
