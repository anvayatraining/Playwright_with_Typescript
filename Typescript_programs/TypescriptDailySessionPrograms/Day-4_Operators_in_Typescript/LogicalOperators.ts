
//Logical Operators   &&  ||  !
// returns true/false (boolean)
// works between boolean variables

// b1      b2       &&           ||          !b1
//--------------------------------------------------
//true      true    true        true          false
//true      false   false       true
//false     true    false       true           true
// false    false   false       false

console.log("****************  Logical Operators ***************")

let b1:boolean=true;
let b2:boolean=false;

console.log(b1 && b2);  //false
console.log(b1 || b2);  //true
console.log(!b1);  //false
console.log(!b2);  //true

//combination of logical & Relational operators

console.log("******** Mixing of Logical & Relational operators **********")

console.log(20>10 && 10>5); // true
console.log(10<20 || 5>10);  //true
console.log(10 > 5 && 5 > 10 || 3 < 4); // true first condition is true so it will not check the second condition