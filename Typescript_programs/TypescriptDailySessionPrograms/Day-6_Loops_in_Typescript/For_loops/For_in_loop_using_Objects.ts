// For in loop using Objects

let x = { name: "Nag", age: 25, course: "Playwright" };
for (let y in x) {
    // Cast 'y' as a key of the object type
    console.log(y + ": " + x[y as keyof typeof x]);
}


// Note : Difference between for in and for of loop 
// for in loop is used to iterate over the keys of an object
// while for of loop is used to iterate over the values of an iterable object (like an array or a string).
