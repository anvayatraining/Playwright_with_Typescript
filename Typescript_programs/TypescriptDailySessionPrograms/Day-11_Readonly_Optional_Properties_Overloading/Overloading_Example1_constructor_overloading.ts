// =====================================================================
// TOPIC   : Overloading in TypeScript
// EXAMPLE : 1 - Constructor Overloading
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// OVERLOADING means having the SAME NAME with DIFFERENT PARAMETER LISTS,
// so the same constructor/method can be called in more than one way.
//
// - Constructor Overloading : one constructor that can be called in different ways
// - Method Overloading      : one method that can be called in different ways
//                             (see Example 2)
//
// IMPORTANT: TypeScript is different from Java/C#.
// In Java we write a separate body for every version.
// In TypeScript we write:
//   1. OVERLOAD SIGNATURES   - only the declaration, NO body (these are what callers see)
//   2. ONE IMPLEMENTATION    - a single body that handles all the versions
//                              (its parameters must be compatible with every signature,
//                               so the extra parameters are marked optional using '?')

// ---------------------------------------------------------------------
// SYNTAX (constructor overloading)
// ---------------------------------------------------------------------
//   class ClassName {
//       constructor();                          // signature 1 (no body)
//       constructor(a: number, b: number);      // signature 2 (no body)
//
//       constructor(a?: number, b?: number) {   // implementation (has the body)
//           // code that handles both cases
//       }
//   }

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
class Calculator {

    // Overload signatures: these are the ONLY ways a caller is allowed to use 'new Calculator(...)'
    constructor();                      // default constructor (no arguments)
    constructor(a: number, b: number);  // parameterized constructor (two arguments)

    // Implementation: 'a' and 'b' are optional (?) because the default version passes nothing.
    // NOTE: This implementation signature is NOT visible to callers.
    constructor(a?: number, b?: number) {
        // If both values were passed, we know the parameterized version was used
        if (a !== undefined && b !== undefined) {
            console.log("Sum of a & b: ", (a + b));
        }
        else {
            console.log("Default constructor called...");
        }
    }
}

// ---------------------------------------------------------------------
// USAGE
// ---------------------------------------------------------------------
let calc1 = new Calculator();         // Default constructor called...
let calc2 = new Calculator(10, 20);   // Sum of a & b:  30

// TypeScript only allows the versions listed in the overload signatures.
// The line below gives a compile-time error because no signature takes ONE number.
// let calc3 = new Calculator(10);    // Error: No overload expects 1 arguments

// Makes this file a module so class names don't clash with other files.
export {};
