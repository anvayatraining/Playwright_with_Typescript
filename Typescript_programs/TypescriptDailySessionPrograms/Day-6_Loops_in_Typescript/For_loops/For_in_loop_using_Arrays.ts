//"for-in" Loop (Arrays or Object Iteration)

// Used to iterate keys of an object.
// With arrays, it returns indexes; with objects, it returns keys.
// Array Example: Printing index and value of an array using "for-in" loop
let x: string[] = ["Nag", "Kalam"];
for (let y in x) {
    console.log(y + ": " + x[y]);
}
