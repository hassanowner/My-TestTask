/*
====================================================
Function — Arrow Functions (ES6)
====================================================

This lesson explains:
- What Arrow Functions are
- Difference between Regular Functions and Arrow Functions
- Parameters handling (no params, one param, multiple params)
- Single-line vs multi-line arrow functions
- Return behavior
====================================================
*/


// ==================================================
// 1) Regular Function vs Arrow Function (No Parameters)
// ==================================================

// Regular Function
let getValueRegular = function () {
  return 10;
};

// Arrow Function
let getValueArrow = () => 10;

console.log(getValueRegular());
/*
Result:
10
*/

console.log(getValueArrow());
/*
Result:
10
*/

/*
Explanation:
- Arrow function is shorter and cleaner
- () is required when there are NO parameters
- If the function body is a single expression,
  the return keyword is optional
*/



// ==================================================
// 2) One Parameter
// ==================================================

// Regular Function
let doubleRegular = function (num) {
  return num;
};

// Arrow Function (parentheses optional with one parameter)
let doubleArrow = num => num;

console.log(doubleRegular(5));
/*
Result:
5
*/

console.log(doubleArrow(5));
/*
Result:
5
*/

/*
Explanation:
- When there is only ONE parameter:
  - Parentheses () can be omitted
- Arrow functions automatically return the expression value
*/



// ==================================================
// 3) Multiple Parameters
// ==================================================

// Regular Function
let sumRegular = function (num1, num2) {
  return num1 + num2;
};

// Arrow Function
let sumArrow = (num1, num2) => num1 + num2;

console.log(sumRegular(100, 50));
/*
Result:
150
*/

console.log(sumArrow(100, 50));
/*
Result:
150
*/

/*
Explanation:
- Parentheses are REQUIRED when using:
  - Multiple parameters
- Arrow function replaces:
  function keyword + return
*/



// ==================================================
// 4) Arrow Function With Multiple Lines
// ==================================================

let calculateTotal = (price, tax) => {
  let total = price + tax;
  return total;
};

console.log(calculateTotal(100, 20));
/*
Result:
120
*/

/*
Explanation:
- If arrow function has MORE THAN ONE line:
  - Curly braces { } are required
  - return keyword becomes REQUIRED
*/



/*
====================================================
Key Differences Summary
====================================================

Regular Function:
- Uses `function` keyword
- Can have its own `this`
- Longer syntax

Arrow Function:
- Shorter syntax
- No own `this`
- Best for:
  - Callbacks
  - Small functions
  - Clean and readable code

====================================================
When to Use Arrow Functions
====================================================

- Simple calculations
- Callbacks (map, filter, reduce)
- Cleaner and modern JavaScript
- Avoid when you need `this`

====================================================
End of Explanation
====================================================
*/
