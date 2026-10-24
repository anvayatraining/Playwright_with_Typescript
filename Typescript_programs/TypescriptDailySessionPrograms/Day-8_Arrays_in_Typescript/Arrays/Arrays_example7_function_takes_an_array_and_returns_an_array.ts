// ============================================================
// Topic   : Arrays in TypeScript
// Example : 7 - A function that takes an array and returns an array
// ============================================================

// A function can receive an array as a parameter AND return an array as its result.
//   arr: string[]  -> the parameter is an array of strings
//   : string[]     -> the return type is also an array of strings
//
// Task: convert every word of the array to UPPER CASE and return a new array.
function capitalizeWords(arr: string[]): string[]
{
    let result: string[] = [];   // empty array to store the converted words

    for (let i = 0; i < arr.length; i++)
    {
        // toUpperCase() converts a string to upper case
        result[i] = arr[i].toUpperCase();
    }

    return result;   // return the new array
}

// Example usage
let words: string[] = ["hello", "world", "typescript"];
console.log(capitalizeWords(words));

// The original array is not changed, because we stored the converted words in a new array.
console.log(words);

// Output:
// [ 'HELLO', 'WORLD', 'TYPESCRIPT' ]
// [ 'hello', 'world', 'typescript' ]
