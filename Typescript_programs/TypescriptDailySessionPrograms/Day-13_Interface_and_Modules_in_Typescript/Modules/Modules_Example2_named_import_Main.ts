// =====================================================================
// TOPIC   : Modules in TypeScript
// EXAMPLE : 2 - Named imports   (this is the MAIN file)
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// A NAMED IMPORT brings in specific exported items by their names,
// written inside curly braces { }.
//
// The names inside { } must match the names exported from the module.
// The path after 'from' tells TypeScript which file to import from:
//   "./"  means "the current folder"
//   the .ts extension is NOT written.
//
// SYNTAX:
//   import { item1 } from "./FileName";
//   import { item1, item2, item3 } from "./FileName";
//
// REQUIRED FILE (same folder): Modules_Example1_export_values_Module.ts

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------

// Option A: one import statement per item
// import { appname } from "./Modules_Example1_export_values_Module";
// import { add } from "./Modules_Example1_export_values_Module";
// import { Formatter } from "./Modules_Example1_export_values_Module";

// Option B: all items in ONE import statement (cleaner - used below)
import { appname, add, Formatter } from "./Modules_Example1_export_values_Module";

console.log(appname);                      // Calculator
console.log(add(10, 20));                  // 30
console.log(Formatter.toUpper("welcome")); // WELCOME

// An item that was NOT exported cannot be imported. Uncomment to see the error.
// import { secretHelper } from "./Modules_Example1_export_values_Module";
// Error: Module has no exported member 'secretHelper'.
