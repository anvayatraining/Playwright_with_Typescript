// ============================================================
// Topic   : Function Overloading
// Example : 4 - Overloading with string, number and boolean parameters
// ============================================================

// A function can have any number of overloads.
// Here 'greet' can be called with a name (string), an age (number) or a marital status (boolean).
// The parameter name in each signature can be different, to make the meaning clear.

// Step 1: Write the signatures
function greet(name: string): string;
function greet(age: number): string;
function greet(isMarried: boolean): string;


// Step 2: Implement the function
// The union type covers all three types: string | number | boolean
function greet(value: string | number | boolean): string
{
    if (typeof value === "string")
    {
        return `Hello ${value}`;               // runs when a string is passed
    }
    else if (typeof value === "number")
    {
        return `You are ${value} years old`;   // runs when a number is passed
    }
    else
    {
        // The only type left is boolean (true or false)
        // Conditional (ternary) operator:  condition ? valueIfTrue : valueIfFalse
        let res: string = value ? "married" : "single";
        return res;
    }
}


// Step 3: Calling the function
console.log(greet("John"));   // Hello John
console.log(greet(30));       // You are 30 years old
console.log(greet(true));     // married
console.log(greet(false));    // single

// Output:
// Hello John
// You are 30 years old
// married
// single
