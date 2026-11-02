// ============================================================
// Topic   : Named Function
// Example : 6 - Named function with DEFAULT parameters
// ============================================================

// A default parameter has a value assigned to it in the function definition.
// If the caller does not pass a value for that parameter, the default value is used.
// If the caller passes a value, the passed value replaces the default.
//
//   price -> required parameter
//   rate  -> default parameter (default value is 0.50 i.e. 50% discount)
function calculateDiscount(price: number, rate: number = 0.50): void
{
    let discount: number = price * rate;
    console.log("Discount Amount:", discount);
}

// rate is passed (0.30), so the default value 0.50 is ignored
calculateDiscount(1000, 0.30);   // 1000 * 0.30 = 300

// rate is NOT passed, so the default value 0.50 is used
calculateDiscount(1000);         // 1000 * 0.50 = 500

// Output:
// Discount Amount: 300
// Discount Amount: 500
