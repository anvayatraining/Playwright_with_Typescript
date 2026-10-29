//"for-of" Loop (Array Iteration)

// Used to iterate values of arrays (or iterable objects).
// Clean, simple syntax.

// Example: Printing values of an array using "for-of" loop
let x = ["Apple", "Banana", "Mango"];
for (let y of x) {
    console.log(y); // prints: Apple, Banana, Mango
}

// Example: Printing values of an array using "for-of" loop with index
let fruits = ["Apple", "Banana", "Mango"];
for (let index in fruits) {
    console.log(`Index: ${index}, Value: ${fruits[index]}`);
    // prints:
    // Index: 0, Value: Apple
    // Index: 1, Value: Banana
    // Index: 2, Value: Mango
}

// Note: The "for-of" loop is specifically designed for iterating over iterable objects, such as arrays, strings, maps, sets, etc. It provides a cleaner and more readable syntax compared to the traditional "for" loop or "for-in" loop when dealing with arrays.
