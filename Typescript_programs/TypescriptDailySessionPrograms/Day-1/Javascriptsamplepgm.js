let age=30;
let name="John";
console.log("Name: " + name + ", Age: " + age);

age="thirthy"; // This will cause a type error in TypeScript since age is declared as a number
console.log("Updated Age: " + age);