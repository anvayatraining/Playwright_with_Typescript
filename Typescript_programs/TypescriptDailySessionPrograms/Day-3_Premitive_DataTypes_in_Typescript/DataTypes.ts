/*
1) Premitive Data Types(Built-in)
Number
String
Boolean
Null
Undefined
Any
Union Type
Void


2) Non-Premitive Data Types(Objects)
Array
Class
Function
Interface
Tuple etc..


TypeScript Types, Annotations & Type Inference
1. TypeScript Types(Data Types)
 Definition: Built-in or custom categoriesfor variables (e.g., number,string, boolean).
 Example:
let isDone: boolean = true; // `boolean` is a TypeScript type
let score: number = 100; // `number` is a TypeScript type


2. Type Annotations
 Definition: Explicitly telling TypeScript the type of a variable using : type.
 Example:
let name: string = "Alice"; // `: string` is a type annotation
let age: number = 30; // `: number` is a type annotation


3. Type Inference
 Definition: TypeScript automatically guesses the type if you don’t annotate it.
 Example:
let message = "Hello"; // TypeScript infers`message` as `string`
let count = 42; // TypeScript infers `count` as `number`
// message = 123; + Error (TypeScript knows `message` must stay a string)


*/
