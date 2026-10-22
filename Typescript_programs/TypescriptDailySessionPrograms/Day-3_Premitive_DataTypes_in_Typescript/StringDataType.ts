// 2. STRING TYPE
// Represents textual data

/*
1. SingleQuote ('') 
2. DoubleQuote (" ")
3. Backtick(``)
*/

let firstName:string="John";
let lastName:string='Kenedy';

console.log("Hello",firstName,lastName);  // Hello John Kenedy.

let greeting:string=`Hello ${firstName} ${lastName}`;
let greeting1:string=`Hello firstName lastName`;
let greeting2:string='Hello ${firstName} ${lastName}';
let greeting3:string="Hello ${firstName} ${lastName}";

console.log(greeting); // Hello John Kenedy
console.log(greeting1); // Hello firstName lastName which is wrong because we are not using ${} to access the variable value. It will print the variable name as it is.
console.log(greeting2); // Hello ${firstName} ${lastName} which is wrong becuase we are not using backtick(``) to access the variable value. It will print the variable name as it is.
console.log(greeting3); // Hello ${firstName} ${lastName} which is wrong becuase we are not using backtick(``) to access the variable value. It will print the variable name as it is.

