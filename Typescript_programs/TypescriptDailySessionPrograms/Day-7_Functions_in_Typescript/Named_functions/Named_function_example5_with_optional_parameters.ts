// ============================================================
// Topic   : Named Function
// Example : 5 - Named function with OPTIONAL parameters
// ============================================================

// An optional parameter is a parameter that the caller may skip.
// We make a parameter optional by adding a question mark (?) after its name.
// Rule: optional parameters must come AFTER all the required parameters.
//
//   id      -> required
//   name    -> required
//   mailId? -> optional (if not passed, its value is 'undefined')
function displayDetails(id: number, name: string, mailId?: string): void
{
    console.log("ID:", id);
    console.log("Name:", name);

    // Since mailId may not be passed, check it before using it.
    // If the value is not undefined, then the caller has passed it.
    if (mailId !== undefined)
    {
        console.log("Email:", mailId);
    }
}

// Passing all three arguments
displayDetails(123, "Scott", "scot@gmail.com");

// Passing only the required arguments (mailId is skipped - no error)
displayDetails(123, "Scott");

// Output:
// ID: 123
// Name: Scott
// Email: scot@gmail.com
// ID: 123
// Name: Scott
