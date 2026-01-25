/*
========================================================
JavaScript Operators — Summary
========================================================

MAIN TOPICS:
1) Arithmetic Operators
2) Increment & Decrement
3) Unary Operators
4) Type Coercion (Type Casting)
5) Assignment Operators
========================================================
*/


/*
========================================================
1) ARITHMETIC OPERATORS (Summary)
========================================================

Arithmetic operators are used to perform mathematical
calculations on numeric values.

--------------------------------------------------------
+ Addition
--------------------------------------------------------
- Adds numeric values together.
- When used with strings, it performs string concatenation.
- Can produce mixed results if numbers and strings are combined.

--------------------------------------------------------
- Subtraction
--------------------------------------------------------
- Subtracts one value from another.
- Always tries to convert values to numbers.
- Invalid conversions result in NaN (Not a Number).
- NaN is still considered a number type.

--------------------------------------------------------
* Multiplication
--------------------------------------------------------
- Multiplies numeric values.
- Supports negative values.
- Often used in totals and calculations.

--------------------------------------------------------
/ Division
--------------------------------------------------------
- Divides one value by another.
- Can produce decimal results.
- Floating-point precision issues may appear.

--------------------------------------------------------
** Exponentiation (ES7)
--------------------------------------------------------
- Raises a number to the power of another number.
- Equivalent to repeated multiplication.
- Modern and readable alternative to manual multiplication.

--------------------------------------------------------
% Modulus (Remainder)
--------------------------------------------------------
- Returns the remainder after division.
- Commonly used to detect even or odd numbers.
- Useful in loops and conditional logic.
========================================================
*/


/*
========================================================
2) INCREMENT & DECREMENT (Summary)
========================================================

--------------------------------------------------------
++ Increment
--------------------------------------------------------
- Increases a variable value by 1.
- Post-increment (value used first, then increased).
- Pre-increment (value increased first, then used).

--------------------------------------------------------
-- Decrement
--------------------------------------------------------
- Decreases a variable value by 1.
- Post-decrement (value used first, then decreased).
- Pre-decrement (value decreased first, then used).

--------------------------------------------------------
Key Concept
--------------------------------------------------------
- Post (x++ / x--) returns the old value.
- Pre (++x / --x) returns the updated value.
========================================================
*/


/*
========================================================
3) UNARY OPERATORS (Summary)
========================================================

Unary operators work on a single value.

--------------------------------------------------------
Unary Plus (+)
--------------------------------------------------------
- Attempts to convert a value into a number.
- Useful for quick type conversion.
- Invalid conversions result in NaN.
- Converts:
  - true → 1
  - false → 0
  - null → 0
  - numeric strings → numbers

--------------------------------------------------------
Unary Negation (-)
--------------------------------------------------------
- Converts a value to a number and negates it.
- Can flip positive to negative and vice versa.
- Works similarly to unary plus, but with sign inversion.
========================================================
*/


/*
========================================================
4) TYPE COERCION (TYPE CASTING) (Summary)
========================================================

Type coercion is JavaScript’s automatic conversion
of one data type into another when needed.

--------------------------------------------------------
Using + Operator
--------------------------------------------------------
- Can convert values to numbers when unary (+).
- With strings, may cause concatenation instead of math.
- Boolean values are converted to numbers.

--------------------------------------------------------
Using - Operator
--------------------------------------------------------
- Always forces numeric conversion.
- Strings are converted to numbers if possible.
- Invalid conversions result in NaN.

--------------------------------------------------------
Special Cases
--------------------------------------------------------
- Empty string ("") → 0
- false → 0
- true → 1
- Mixed types can lead to unexpected results.

--------------------------------------------------------
Explicit Conversion
--------------------------------------------------------
- Number() is the safest and clearest way
  to convert values to numbers.
========================================================
*/


/*
========================================================
5) ASSIGNMENT OPERATORS (Summary)
========================================================

Assignment operators are used to update variable values.

--------------------------------------------------------
Basic Assignment
--------------------------------------------------------
- = assigns a value to a variable.

--------------------------------------------------------
Combined Assignment Operators
--------------------------------------------------------
- += adds and assigns
- -= subtracts and assigns
- *= multiplies and assigns
- /= divides and assigns

--------------------------------------------------------
Benefits
--------------------------------------------------------
- Shorter syntax.
- More readable code.
- Commonly used in loops and calculations.
========================================================
*/
