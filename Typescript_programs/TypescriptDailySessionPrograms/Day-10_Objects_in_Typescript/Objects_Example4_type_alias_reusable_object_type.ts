// =====================================================================
// TOPIC   : Objects in TypeScript
// EXAMPLE : 4 - Using 'type' aliases
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// A 'type' alias allows us to create a NEW NAME for an existing type.
// We define the structure ONCE and reuse it for as many objects as we want.
// This solves the "repeat the structure" problem of Inline Type Objects.
//
// SYNTAX:
//   type TypeName = {
//       key1: type1,
//       key2: type2,
//       methodName: () => returnType
//   };
//
//   let objectName: TypeName = { ...values... };
//
// Convention: type names start with a CAPITAL letter (Product, Student...).

// ---------------------------------------------------------------------
// Step 1: Define the type ONCE
// ---------------------------------------------------------------------
type Product = {
    name: string,
    price: number,
    getInfo: () => string
};

// ---------------------------------------------------------------------
// Step 2: Create as many objects as needed using the type name
// ---------------------------------------------------------------------
let book1: Product =
{
    name: "Learn java",
    price: 300,
    getInfo: function () {
        return `${this.name} costs ${this.price}`;
    }
};

let book2: Product =
{
    name: "Learn Python",
    price: 500,
    getInfo: function () {
        return `${this.name} costs ${this.price}`;
    }
};

let book3: Product =
{
    name: "Learn JS",
    price: 600,
    getInfo: function () {
        return `${this.name} costs ${this.price}`;
    }
};

// ---------------------------------------------------------------------
// Step 3: Use the objects
// ---------------------------------------------------------------------
console.log(book1.getInfo()); // Learn java costs 300
console.log(book2.getInfo()); // Learn Python costs 500
console.log(book3.getInfo()); // Learn JS costs 600

// Notice: we wrote ': Product' instead of repeating the whole structure.
// If the structure changes, we edit it in ONE place (the type alias).

// Makes this file a module so variable names don't clash with other files.
export {};
