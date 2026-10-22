// 5. ANY TYPE
//loses TypeScript benefits

let value:any="Welcome";
console.log(typeof(value))

value=100;
console.log(typeof(value))

value=true;
console.log(typeof(value))

console.log(value);

// let value1:number=10;
// console.log(value1);
// value1="Hello"; // Error: Type 'string' is not assignable to type 'number'.