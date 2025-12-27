/*
====================================================
Function — Rest Parameters (Complete Educational Guide)
====================================================

Topic:
- Rest Parameters (...param)
- Why they exist
- Rules and restrictions
- Practical usage
- Difference from regular parameters

Rest Parameters allow a function to receive
ANY NUMBER of arguments and treat them as an array.
====================================================
*/


// ==================================================
// Problem Without Rest Parameters
// ==================================================

function addThreeNumbers(a, b, c) {
  return a + b + c;
}

console.log(addThreeNumbers(10, 20, 30));

/*
Output:
60

Explanation:
- This function ONLY works with exactly 3 values.
- If we want more numbers, we must rewrite the function.
*/


// ==================================================
// Solution: Using Rest Parameters
// ==================================================

function sumAllNumbers(...values) {
  let total = 0;

  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }

  return total;
}

console.log(sumAllNumbers(10, 20));
console.log(sumAllNumbers(10, 20, 30, 40));
console.log(sumAllNumbers(5, 5, 5, 5, 5));

/*
Output:
30
100
25

Explanation:
- `...values` collects all arguments into an array.
- We can loop over them like a normal array.
- The function is now flexible and reusable.
*/


// ==================================================
// Proof: Rest Parameter Is an Array
// ==================================================

function checkType(...items) {
  return Array.isArray(items);
}

console.log(checkType(1, 2, 3));

/*
Output:
true

Explanation:
- Rest parameters always create an ARRAY.
*/


// ==================================================
// Important Rule #1: Only ONE Rest Parameter Allowed
// ==================================================

// ** Invalid (Do NOT do this)
// function example(...a, ...b) {}

// ** Valid
function validExample(a, ...rest) {
  return rest;
}


// ==================================================
// Important Rule #2: Rest Parameter MUST Be Last
// ==================================================

// ** Invalid
// function wrongOrder(...items, x) {}

// ** Valid
function correctOrder(x, y, ...items) {
  return items;
}

console.log(correctOrder(1, 2, 3, 4, 5));

/*
Output:
[3, 4, 5]

Explanation:
- First parameters get assigned normally.
- Remaining values go into the rest parameter.
*/


// ==================================================
// Real Practical Example (Programming Context)
// ==================================================

function calculateInvoiceTotal(taxRate, ...prices) {
  let subtotal = 0;

  for (let i = 0; i < prices.length; i++) {
    subtotal += prices[i];
  }

  let total = subtotal + (subtotal * taxRate);
  return total;
}

console.log(calculateInvoiceTotal(0.1, 100, 200, 50));

/*
Output:
385

Explanation:
- taxRate is a normal parameter.
- prices are collected using rest parameter.
- Useful for carts, invoices, APIs, and calculations.
*/


/*
====================================================
Key Takeaways:
====================================================

1) Rest parameters collect multiple arguments into an array
2) They replace the old `arguments` object
3) Only ONE rest parameter is allowed per function
4) Rest parameter MUST be the last parameter
5) Ideal for flexible and scalable functions

Modern JavaScript BEST PRACTICE
====================================================
*/
