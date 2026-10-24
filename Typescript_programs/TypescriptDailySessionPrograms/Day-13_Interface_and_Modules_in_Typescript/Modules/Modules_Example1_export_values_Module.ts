// =====================================================================
// TOPIC   : Modules in TypeScript
// EXAMPLE : 1 - Exporting from a module   (this is the MODULE file)
// =====================================================================

// ---------------------------------------------------------------------
// DEFINITION
// ---------------------------------------------------------------------
// A MODULE is a .ts file that has at least one 'export' or 'import'.
// Modules let us split code into separate files and share it between them.
//
//   export  - makes a variable, function or class available to OTHER files.
//   import  - brings the exported items into the file where we want to use them.
//
// Anything that is NOT exported stays private to this file.
//
// This topic uses TWO files working together:
//   1. Modules_Example1_export_values_Module.ts   -> exports things   (this file)
//   2. Modules_Example2_named_import_Main.ts      -> imports using named imports
//      Modules_Example3_namespace_import_Main.ts  -> imports using a namespace import
// Keep all three files in the SAME folder.
//
// SYNTAX (export):
//   export let variableName = value;
//   export function functionName() { ... }
//   export class ClassName { ... }

// ---------------------------------------------------------------------
// EXPORTED ITEMS
// ---------------------------------------------------------------------

// Exported variable
export let appname = "Calculator";

// Exported function
export function add(a: number, b: number): number {
    return a + b;
}

// Exported class (with a static method, so we can call it without creating an object)
export class Formatter {
    static toUpper(str: string): string {
        return str.toUpperCase();
    }
}

// This function is NOT exported, so other files cannot use it.
function secretHelper(): void {
    console.log("Only this file can use me.");
}
