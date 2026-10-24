// ============================================================
// Topic   : Advanced Array Methods in TypeScript
// Example : 1 - forEach() method
// ============================================================

/*
   The advanced array methods take a FUNCTION as a parameter and run that function
   on the elements of the array. (The function passed is called a callback function.)

   In the next examples we will learn these methods:
     forEach(), map(), filter(), reduce(), some(), every()
*/

// forEach() - Executes a function once for each array element
// It takes a function as a parameter.
// forEach() does NOT return anything (the result is undefined). It is used to "do something"
// with every element, like printing it.

// Syntax: array.forEach(function(currentValue, index, array){})

// currentValue     - The current element being processed in the array
// index (optional) - The index of the current element being processed in the array
// array (optional) - The array the current element belongs to.

let fruits: string[] = ["apple", "banana", "orange", "mango", "kiwi"];


// Ex 1: Get index of all the fruits along with the value.

// Using the for-in loop (the way we learnt earlier)
console.log("Printing fruits along with Index using for-in:");
for (let i in fruits)
{
    console.log(i, fruits[i]);
}

// Using forEach()
// The function receives 2 values for every element: the element itself and its index.
console.log("Printing fruits along with Index using forEach():");
fruits.forEach(function (element, index)
{
    console.log(`${index}. ${element}`);
});

// Using an arrow function (shorter way of writing the same thing)
console.log("Printing fruits along with Index using forEach() and an arrow function:");
fruits.forEach((element, index) =>
{
    console.log(`${index} , ${element}`);   // prints the values as a string
    //console.log(index, element);            // printing the values directly
});


// Ex 2: Print all fruit names in uppercase
// If we do not need the index, we can write only the first parameter.
console.log("All fruits in UPPERCASE:");
fruits.forEach((element) =>
{
    console.log(element.toUpperCase());
});

// Output:
// Printing fruits along with Index using for-in:
// 0 apple
// 1 banana
// 2 orange
// 3 mango
// 4 kiwi
// Printing fruits along with Index using forEach():
// 0. apple
// 1. banana
// 2. orange
// 3. mango
// 4. kiwi
// Printing fruits along with Index using forEach() and an arrow function:
// 0 , apple
// 1 , banana
// 2 , orange
// 3 , mango
// 4 , kiwi
// All fruits in UPPERCASE:
// APPLE
// BANANA
// ORANGE
// MANGO
// KIWI

// This empty export makes the file a "module", so the variable names used here
// (numbers, fruits, ...) do not clash with the same names in other example files.
export {};
