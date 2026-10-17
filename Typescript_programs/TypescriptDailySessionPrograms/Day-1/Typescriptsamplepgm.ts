console.log("Hello, TypeScript!");

let ageOfPerson: number = 30;
let nameOfPerson: string = "John";
let studentId:number=1234;
console.log(`Name: ${nameOfPerson}, Age: ${ageOfPerson}`);

ageOfPerson = 31; // This is valid since ageOfPerson is of type number
ageOfPerson = "thirty"; // This will cause a type error in TypeScript since ageOfPerson is declared as a number

console.log(`Updated Age: ${ageOfPerson}`);
console.log(`Student ID: ${studentId}`);

const isStudent: boolean = true;
console.log(`Is Student: ${isStudent}`);