// Increment   ++
// Decrement  --



// Post Increment  x++
let x_post_increment:number=10;
x_post_increment++;    //post increment    //x=x+1;
console.log(x_post_increment); //11

// Pre Increment  ++x
let x_pre_increment:number=10;
++x_pre_increment;   // pre-increment
console.log(x_pre_increment); //11

// Post Increment  x++ with 2 variables
let x_res_post_increment:number=10;
let res_post_increment:number=x_res_post_increment++;
console.log(res_post_increment); //10
console.log(x_res_post_increment); //11

// Pre Increment  ++x with 2 variables
let x_res_pre_increment:number=10;
let res_pre_increment:number=++x_res_pre_increment;
console.log(res_pre_increment); //11
console.log(x_res_pre_increment); //11

// Post Decrement  x--
let x_post_decrement:number=10;
x_post_decrement--;  // post decrement
console.log(x_post_decrement); //9

// Pre Decrement  --x
let x_pre_decrement:number=10;
--x_pre_decrement;  // pre decrement
console.log(x_pre_decrement); //9

// Post Decrement  x-- with 2 variables
let res_post_decrement:number=x_post_decrement--;
console.log(res_post_decrement); //10
console.log(x_post_decrement); //9

// Pre Decrement  --x with 2 variables
let res_pre_decrement:number=--x_pre_decrement;
console.log(res_pre_decrement); //9
console.log(x_pre_decrement); //9

let x: number = 5;
let y: number = x++ + ++x;
console.log(x,y); // x=7, y=12

