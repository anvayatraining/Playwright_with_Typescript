//Relational/Comparison Operators
//Returns boolean- true/ false
//   >  <  >=  <=  ==  !=  ===(Strict equality)

console.log("********** Relational Operators ********")
a=10;
b=20

console.log(a>b);  //false
console.log(a<b); // true
console.log(a<=b); //true
console.log(a>=b); //false
console.log(a==b); //false
console.log(a!=b); //true

//Difference between ==(equaltiy)       ===(strict equality)

console.log("******** Difference between ==  === *********")
let num1:any=10;   //number type
let num2:any="10"   // string

console.log(num1==num2); //true ( only comapres values)
console.log(num1===num2); //false(comapres the values & type)
