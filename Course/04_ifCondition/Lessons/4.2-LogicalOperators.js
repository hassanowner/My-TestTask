/*
========================================================
Logical Operators
========================================================
Covered Topics:
- ! Not
- && And
- || Or
========================================================
*/

// ======================================================
// ! Not
// - Reverses boolean value
// ======================================================

console.log(true);
/*
Result:
true
*/

console.log(!true);
/*
Result:
false
*/


// ======================================================
// NOT with Comparison
// ======================================================

console.log(!(20 == "20"));
/*
Result:
false
*/


// ======================================================
// && And
// - All conditions must be true
// ======================================================

console.log(20 == "20" && 20 > 10 && 20 > 30);
/*
Result:
false
*/


// ======================================================
// || Or
// - At least one condition must be true
// ======================================================

console.log(20 == "20" || 20 > 50 || 20 > 30);
/*
Result:
true
*/



/*
==========================================================
** DETAILED EXPLANATION: LOGICAL OPERATORS WITH STRINGS **
==========================================================

!! Note: In JavaScript, every value is internally converted to a Boolean
when used with logical operators.

--------------------------------------------------------
TRUTHY & FALSY VALUES (Strings)
--------------------------------------------------------

1) Non-empty string  → true   (Truthy)
2) Empty string ""   → false  (Falsy)


--------------------------------------------------------
OR OPERATOR ( || )
--------------------------------------------------------
- Returns the FIRST truthy value
- If the first value is truthy, the second one is ignored
- If the first value is falsy, it moves to the next value
*/

const firstName = "John";      // non-empty string → true
const nickName = "Johnny";    // non-empty string → true

const chosenName = firstName || nickName;

console.log(chosenName);

/*
How it was evaluated:
1) firstName = "John" → true
2) OR stops at the first true value
3) The result is the value itself: "John"

Output:
John
*/


console.log("" || "John");

/*
How it was evaluated:
1) "" → false
2) OR moves to the next value
3) "John" → true (not empty)
4) The result is "John"

Output:
John
*/


/*
--------------------------------------------------------
NOT OPERATOR ( ! )
--------------------------------------------------------
- Converts the value to Boolean
- Then reverses it
*/

const fullName = "John Doe";   // true
const emptyString = "";       // false

console.log(!fullName);

/*
How it was evaluated:
1) "John Doe" → true
2) !true → false

Output:
false
*/


console.log(!emptyString);

/*
How it was evaluated:
1) "" → false
2) !false → true

Output:
true
*/


const title = "Developer";    // true
const noTitle = "";           // false

console.log(!title);

/*
How it was evaluated:
1) "Developer" → true
2) !true → false

Output:
false
*/


console.log(!noTitle);

/*
How it was evaluated:
1) "" → false
2) !false → true

Output:
true
*/


/*
** SUMMARY :

- Non-empty string  → true
- Empty string ""   → false
- || returns the first truthy value
- ! reverses the boolean value
----------------------------------------------------
*/


/*
==========================================================
** DETAILED EXPLANATION: LOGICAL OPERATORS WITH NUMBERS **
==========================================================

!! Nite: In JavaScript, numbers are also converted to Boolean values
when used with logical operators.

--------------------------------------------------------
TRUTHY & FALSY VALUES (Numbers)
--------------------------------------------------------

1) Any number except 0 → true   (Truthy)
2) 0                   → false  (Falsy)
3) -1, 1, 100, etc.     → true

--------------------------------------------------------
OR OPERATOR ( || )
--------------------------------------------------------
- Returns the FIRST truthy value
- If the first value is truthy, the second one is ignored
- If the first value is falsy, it moves to the next value
*/

const amount = 0;       // 0 → false
const price = 150;     // non-zero number → true

const finalValue = amount || price;

console.log(finalValue);

/*
How it was evaluated:
1) amount = 0 → false
2) OR moves to the next value
3) price = 150 → true
4) The result is 150

Output:
150
*/


console.log(0 || 25);

/*
How it was evaluated:
1) 0 → false
2) OR moves to the next value
3) 25 → true
4) The result is 25

Output:
25
*/


/*
--------------------------------------------------------
NOT OPERATOR ( ! )
--------------------------------------------------------
- Converts the number to Boolean
- Then reverses it
*/

const total = 100;     // true
const zeroValue = 0;  // false

console.log(!total);

/*
How it was evaluated:
1) 100 → true
2) !true → false

Output:
false
*/


console.log(!zeroValue);

/*
How it was evaluated:
1) 0 → false
2) !false → true

Output:
true
*/


const negative = -5;  // non-zero number → true
const none = 0;       // false

console.log(!negative);

/*
How it was evaluated:
1) -5 → true
2) !true → false

Output:
false
*/


console.log(!none);

/*
How it was evaluated:
1) 0 → false
2) !false → true

Output:
true
*/


/*
** SUMMARY:

- Any number ≠ 0 → true
- 0 → false
- || returns the first truthy value
- ! reverses the boolean value
========================================================
*/
