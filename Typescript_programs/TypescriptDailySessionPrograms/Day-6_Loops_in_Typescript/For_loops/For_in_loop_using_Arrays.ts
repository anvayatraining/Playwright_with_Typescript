//"for-in" Loop (Arrays or Object Iteration)

// Used to iterate keys of an object.
// With arrays, it returns indexes; with objects, it returns keys.
// Array Example: Printing index and value of an array using "for-in" loop
let x: string[] = ["Nag", "Kalam"];
for (let y in x) {
    console.log(y + ": " + x[y]);
}

// Object Example: Printing key and value of an object using "for-in" loop
let obj: { [key: string]: string } = { name: "Nag", city: "Kalam" };
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

// Note: The "for-in" loop is primarily used for iterating over the keys of an object. When used with arrays, it returns the index of each element, which can then be used to access the corresponding value. However, it is generally recommended to use "for-of" loops for array iteration to avoid potential issues with inherited properties and to maintain cleaner code.
