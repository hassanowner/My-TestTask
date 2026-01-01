/*
========================================================
THE NULLISH COALESCING OPERATOR ( ?? )
========================================================

The nullish coalescing operator (??) was introduced in ES2020.

Its main purpose is to provide a DEFAULT value
ONLY when the left-hand value is:
- null
- undefined

** Important:
It does NOT treat other falsy values as empty or invalid.
*/

/*
--------------------------------------------------------
WHY ?? EXISTS
--------------------------------------------------------

Before ??, developers often used the OR operator (||)
to provide default values.

Problem with || :
- It treats ALL falsy values as invalid
- This includes: 0, "", false, NaN

The ?? operator fixes this issue.
*/

/*
--------------------------------------------------------
RULE OF ?? (VERY IMPORTANT)
--------------------------------------------------------

leftValue ?? rightValue

- If leftValue is null OR undefined → return rightValue
- Otherwise → return leftValue
*/

/*
--------------------------------------------------------
EXAMPLES WITH DIFFERENT DATA TYPES
--------------------------------------------------------
*/

// Example 1: null
const userName = null;
const finalUserName = userName ?? "Guest";

console.log(finalUserName);

/*
Explanation:
- userName is null
- null is considered "nullish"
- right value is returned

Output:
Guest
*/


// Example 2: undefined
let userAge;
const finalAge = userAge ?? 18;

console.log(finalAge);

/*
Explanation:
- userAge is undefined
- undefined is nullish
- right value is returned

Output:
18
*/


// Example 3: number (0)
const score = 0;
const finalScore = score ?? 100;

console.log(finalScore);

/*
Explanation:
- 0 is falsy BUT NOT null or undefined
- left value is returned

Output:
0
*/


// Example 4: empty string
const message = "";
const finalMessage = message ?? "No message";

console.log(finalMessage);

/*
Explanation:
- "" is falsy
- BUT it is a valid value
- left value is returned

Output:
"" (empty string)
*/


// Example 5: boolean false
const isActive = false;
const finalStatus = isActive ?? true;

console.log(finalStatus);

/*
Explanation:
- false is falsy
- BUT not null or undefined
- left value is returned

Output:
false
*/



/*
--------------------------------------------------------
COMPARISON: || VS ??
--------------------------------------------------------
*/

const value1 = 0 || 10;
const value2 = 0 ?? 10;

console.log(value1); // 10
console.log(value2); // 0

/*
Explanation:
- || treats 0 as invalid → returns 10
- ?? treats 0 as valid → returns 0
*/


/*
--------------------------------------------------------
MORE EDGE CASES
--------------------------------------------------------
*/

const x = 500;

console.log(null ?? x);        // 500
console.log(undefined ?? x);   // 500
console.log(x ?? null);        // 500
console.log(false ?? x);       // false
console.log("" ?? x);          // ""
console.log(NaN ?? x);         // NaN

/*
Explanation:
- Only null and undefined trigger the right value
- Everything else is returned as-is
*/


/*
========================================================
SUMMARY (MEMORIZE THIS)
========================================================

- ?? checks ONLY for null and undefined
- 0, "", false, NaN are VALID values
- ?? is safer for defaults than ||
- Common use cases:
  ✓ user input
  ✓ configuration values
  ✓ API responses
========================================================
*/
