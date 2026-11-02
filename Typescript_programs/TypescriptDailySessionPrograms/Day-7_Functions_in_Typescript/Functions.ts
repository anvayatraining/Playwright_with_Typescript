// Functions in Typescript

// Syntax of Function in Typescript
/*
function functionName(parameter1: type, parameter2: type, ...): returnType {
    // function body
}
*/


//Function Declaration without return type
function add(a: number, b: number)
{
    console.log(a + b);
}

add(10, 20); // Output: 30

// Function Declaration with void as return type
function add1(a: number, b: number,c:number): void
{
    console.log(a + b + c);
}

add1(10, 20, 30); // Output: 60


// Function Declaration with return type
function add2(a: number, b: number): number
{
    //console.log(a + b);
    return a + b;
}

add2(10, 20); // Output: 30

// Example : Use add2 function to add two numbers and store the result in a variable
//way-1
let result = add2(10, 20);
console.log(result); // Output: 30

//way-2
let result1: number = add2(10, 20);
console.log(result1); // Output: 30

//way-3 : use add2 function output in other operations
let result2: number = add2(10, 20) * 2;
console.log(result2); // Output: 60

function add3(a: number): number
{
    let b: number = 20;
    return a + b;
}

add3(10); // Output: 30


// Different types of functions in Typescript

/*
1. Named Function
2. Anonymous Function
3. Arrow Function
4. Function Constructor 
5. Async Function
*/


// Definition of Named Function
// A named function is a function that has a name. The name of the function is used to call the function.
// Syntax of Named Function in Typescript

// Different ways of developing functions in Typescript

/*
1. Named function without return type
2. Named function without return type but with parameters
3. Named function with return type
4. Named function with return type and parameters
5. Named function with return type and rest parameters with Same type
6. Named function with return type and rest parameters with multiple types
7. Named function with return type and default parameters
8. Named function with return type and optional parameters
9. Named function without return type and rest parameters with Same type
10. Named function without return type and rest parameters with multiple types
11. Named function without return type and default parameters
12. Named function without return type and optional parameters
13. Named function with return type and rest parameters and optional parameters and default parameters
*/
