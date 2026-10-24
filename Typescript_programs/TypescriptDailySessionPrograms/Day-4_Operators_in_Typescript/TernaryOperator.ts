// Ternary/conditional operator

//  ?:

//  exp ?  res1 : res2;

//Example 1
let a:number=100, b:number=200;

let res1:number= (a>b) ? a: b;
console.log(res1);//200

//Example 2:

let personAge:number=30;
let res2:string= (personAge>=18)? "Adult": "Minor";
//let res:string= (personAge<18)? "Minor": "Adult";
console.log(res2);  // Adult

//Example 3:
let personAge1:number=30;
let res3:boolean= (personAge1>=18)? true: false;
//let res:string= (personAge<18)? "Minor": "Adult";
console.log(res3);  // true
