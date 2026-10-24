// =====================================================================
// TOPIC   : Modules in TypeScript
// EXAMPLE : 3 - Namespace import (import everything)   (this is the MAIN file)
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// A NAMESPACE IMPORT brings in EVERYTHING that a module exports and groups
// it under ONE name (an alias) that we choose.
//
// This is useful when:
//   - we want to group everything from a module together, or
//   - we want to avoid listing every exported item one by one.
//
// SYNTAX:
//   import * as aliasName from "./FileName";
//   aliasName.exportedItem
//
// Compare with Example 2:
//   Named import     : import { add } from "./File";   ->  add(10, 20)
//   Namespace import : import * as utils from "./File"; ->  utils.add(10, 20)
//
// REQUIRED FILE (same folder): Modules_Example1_export_values_Module.ts

// ---------------------------------------------------------------------
// EXAMPLE
// ---------------------------------------------------------------------
import * as utils from "./Modules_Example1_export_values_Module";

// Every exported item is accessed using the alias: utils.itemName
console.log(utils.appname);                      // Calculator
console.log(utils.add(10, 20));                  // 30
console.log(utils.Formatter.toUpper("welcome")); // WELCOME
