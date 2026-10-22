// Re-assignment
// Keyword	    | Allows Re-assignment?
// var	        | Yes
// let	        | Yes
// const	    | No

// //Examples:
// var age = 25;
// age = 30; // Allowed
 
// let score = 50;
// score = 60; // Allowed
 
// const pi = 3.14;
// // pi = 3.14159; // Error (Cannot change a constant)

var student_age = 25;
student_age = 30;
console.log(student_age); // Output: 30

let student_score = 50;
student_score = 60;
console.log(student_score); // Output: 60

const pi_value = 3.14;
// pi_value = 3.14159; // Error: Cannot assign to 'pi_value' because it is a constant
console.log(pi_value); // Output: 3.14
