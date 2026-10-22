//4. NULL & UNDEFINED
// Special types for absence of value

let emptyValue:null=null;
let notAssigend: undefined=undefined;

console.log(emptyValue) // null
console.log(notAssigend) // undefined

let prices:number;
console.log(prices); //undefined

// Note: In TypeScript, null and undefined are subtypes of all other types. 
// That means you can assign null and undefined to something like number. 
// If we declare a variable and try to print it without assigning a value, it will be undefined.
