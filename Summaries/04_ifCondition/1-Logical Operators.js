/*
========================================================
JavaScript Comparison, Logical Operators & Control Flow
======================== SUMMARY FILE ====================
========================================================

MAIN TOPICS:
1) Comparison Operators
2) Logical Operators
3) Truthy & Falsy Values
4) Logical Assignment Operators (ES2021)
5) Control Flow (if / else if / else)
========================================================
*/


/*
========================================================
1) COMPARISON OPERATORS (Summary)
========================================================

Comparison operators are used to compare values.
They always return a Boolean result: true or false.

--------------------------------------------------------
Loose Comparison
--------------------------------------------------------
==  Equal
!=  Not Equal

- Compares values only.
- JavaScript automatically converts types (type coercion).
- Can lead to unexpected results.

--------------------------------------------------------
Strict Comparison
--------------------------------------------------------
=== Identical
!== Not Identical

- Compares both value and type.
- No type conversion.
- Recommended for safer and clearer code.

--------------------------------------------------------
Relational Comparison
--------------------------------------------------------
>   Greater Than
>=  Greater Than Or Equal
<   Smaller Than
<=  Smaller Than Or Equal

- Used mainly with numbers.
- Often combined with logical operators.

--------------------------------------------------------
Type Comparison
--------------------------------------------------------
- typeof can be used with ===
- Ensures both operands are of the same type.
========================================================
*/


/*
========================================================
2) LOGICAL OPERATORS (Summary)
========================================================

Logical operators are used to combine or modify conditions.
They work with Boolean values and also with non-Boolean values
after automatic conversion.

--------------------------------------------------------
!  NOT
--------------------------------------------------------
- Converts value to Boolean.
- Reverses the result.
- Often used to check absence or emptiness.

--------------------------------------------------------
&& AND
--------------------------------------------------------
- All conditions must be true.
- Stops at the first falsy value.
- Returns the actual value, not just true/false.

--------------------------------------------------------
|| OR
--------------------------------------------------------
- At least one condition must be true.
- Stops at the first truthy value.
- Commonly used to provide default values.
========================================================
*/


/*
========================================================
3) TRUTHY & FALSY VALUES (Summary)
========================================================

When used in logical expressions, values are converted to Boolean.

--------------------------------------------------------
Falsy Values
--------------------------------------------------------
- false
- 0
- ""
- null
- undefined
- NaN

--------------------------------------------------------
Truthy Values
--------------------------------------------------------
- Any non-empty string
- Any number except 0
- Objects, arrays, functions
- true

--------------------------------------------------------
Important Behavior
--------------------------------------------------------
- || returns the first truthy value.
- && returns the first falsy value or the last value.
- ! reverses the Boolean conversion.
========================================================
*/


/*
========================================================
4) LOGICAL ASSIGNMENT OPERATORS (ES2021) (Summary)
========================================================

Logical assignment operators combine logic + assignment.
They are shorthand forms that improve readability.

--------------------------------------------------------
||=  Logical OR Assignment
--------------------------------------------------------
- Assigns value only if variable is falsy.
- Commonly used to set default values.

--------------------------------------------------------
&&=  Logical AND Assignment
--------------------------------------------------------
- Assigns value only if variable is truthy.
- Used for conditional updates.

--------------------------------------------------------
??=  Nullish Assignment
--------------------------------------------------------
- Assigns value only if variable is null or undefined.
- Does NOT treat 0, "", or false as empty.
- Safest option for defaults.

--------------------------------------------------------
Key Difference
--------------------------------------------------------
- ||= reacts to all falsy values.
- ??= reacts only to null and undefined.
========================================================
*/


/*
========================================================
5) CONTROL FLOW (if / else if / else) (Summary)
========================================================

Control flow determines which code block executes
based on conditions.

--------------------------------------------------------
if
--------------------------------------------------------
- Executes code if condition is true.

--------------------------------------------------------
else if
--------------------------------------------------------
- Checked only if previous condition was false.
- Used for multiple branching decisions.

--------------------------------------------------------
else
--------------------------------------------------------
- Executes when all previous conditions are false.
- Acts as a fallback.

--------------------------------------------------------
Evaluation Rules
--------------------------------------------------------
- Conditions are evaluated from top to bottom.
- Only the first true condition runs.
- Remaining blocks are skipped.

--------------------------------------------------------
Best Practices
--------------------------------------------------------
- Use strict comparison (===).
- Keep conditions readable.
- Use if / else if for ranges or complex logic.
- Use switch for many fixed values.
========================================================
*/
