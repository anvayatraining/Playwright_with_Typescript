// ============================================================
// Topic   : Arrays in TypeScript
// Example : 6 - Passing an array to a function (search an element in an array)
// ============================================================

// An array can be passed to a function like any other value.
// The parameter type is written as an array type, for example  arr: number[]
//
// Task: search for an element in an array.
//   ele -> the element we want to find
//   arr -> the array in which we search
// Return type is boolean: true if the element is found, false if it is not found.
function search(ele: number, arr: number[]): boolean
{
    // Check every element of the array, one by one
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] === ele)
        {
            return true;   // Element found, stop searching and return true
        }
    }

    return false;   // The loop finished without a match, so the element is not found
}

let numbers: number[] = [10, 20, 30, 40, 50];

console.log(search(20, numbers));    // 20 is in the array
console.log(search(100, numbers));   // 100 is not in the array

// Output:
// true
// false
