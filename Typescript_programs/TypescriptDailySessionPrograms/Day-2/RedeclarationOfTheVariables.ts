// Re-declaration
// Keyword	 | Allows Re-declaration?
// var	     | Yes
// let	     | No
// const	 | No

// //Examples:
// var city = "New York";
// var city = "Los Angeles"; // Allowed (Problem: Can cause bugs!)
 
// let country = "USA";
// // let country = "Canada"; // Error (Safer!)
 
// const planet = "Earth";
// // const planet = "Mars"; // Error (Safer!)

var city = "New York";
var city = "Los Angeles";
console.log(city); // Output: Los Angeles (Re-declared successfully)

let country = "USA";
// let country = "Canada"; // Error: Cannot redeclare block-scoped variable 'country'
console.log(country); // Output: USA

const planet = "Earth";
//const planet = "Mars"; // Error: Cannot redeclare block-scoped variable 'planet'
console.log(planet); // Output: Earth
