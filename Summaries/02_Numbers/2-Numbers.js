/*
========================================================
JavaScript Numbers — Summary (One File)
========================================================

MAIN TOPICS:
1) Number Representation & Limits
2) Numeric Notation & Syntax Variations
3) Number Safe Values & Infinity
4) Number Methods
5) Math Object
========================================================
*/


/*
========================================================
1) NUMBER REPRESENTATION & LIMITS (Summary)
========================================================

- JavaScript uses a single number type for all numeric values.
- Numbers are stored using double-precision (64-bit floating point).
- This allows very large and very small values, but with precision limits.
- Floating-point representation may cause small rounding inaccuracies.
- Integers and decimals are treated as the same type.
========================================================
*/


/*
========================================================
2) NUMERIC NOTATION & SYNTAX VARIATIONS (Summary)
========================================================

JavaScript provides multiple ways to write and represent numbers.

--------------------------------------------------------
Standard Numbers
--------------------------------------------------------
- Normal numeric literals are written directly.
- Decimal values are also treated as numbers.

--------------------------------------------------------
Syntactic Sugar (_)
--------------------------------------------------------
- Underscore (_) improves readability of large numbers.
- It has no effect on the actual value.
- Used only for visual clarity.

--------------------------------------------------------
Scientific Notation (e)
--------------------------------------------------------
- Used to represent very large or very small numbers.
- Common in calculations and scientific contexts.

--------------------------------------------------------
Exponentiation (**)
--------------------------------------------------------
- Raises a number to the power of another number.
- Modern alternative to Math.pow().

--------------------------------------------------------
Repeated Multiplication
--------------------------------------------------------
- Manual way to calculate powers.
- Less readable than exponentiation.
========================================================
*/


/*
========================================================
3) NUMBER SAFE VALUES & INFINITY (Summary)
========================================================

--------------------------------------------------------
MAX_SAFE_INTEGER
--------------------------------------------------------
- Represents the largest integer that can be safely represented.
- Beyond this value, precision is not guaranteed.

--------------------------------------------------------
MAX_VALUE
--------------------------------------------------------
- Represents the largest possible numeric value.
- Exceeding this value results in Infinity.

--------------------------------------------------------
Infinity
--------------------------------------------------------
- Appears when a number exceeds JavaScript’s maximum range.
- Indicates overflow rather than an error.
========================================================
*/


/*
========================================================
4) NUMBER METHODS (Summary)
========================================================

Number methods are used to convert, format, and validate numbers.

--------------------------------------------------------
Calling Methods on Numbers
--------------------------------------------------------
- Numbers use two dots or parentheses to access methods.
- Prevents syntax ambiguity with decimals.

--------------------------------------------------------
toString()
--------------------------------------------------------
- Converts a number into a string.
- Useful for display and text operations.

--------------------------------------------------------
toFixed()
--------------------------------------------------------
- Formats a number with a fixed number of decimal places.
- Returns a string, not a number.
- Common in financial calculations.

--------------------------------------------------------
Number()
--------------------------------------------------------
- Explicitly converts a value to a number.
- Returns NaN if conversion fails.

--------------------------------------------------------
parseInt()
--------------------------------------------------------
- Extracts an integer from the beginning of a string.
- Stops reading at the first invalid character.
- Ignores decimal part.

--------------------------------------------------------
parseFloat()
--------------------------------------------------------
- Extracts a floating-point number from a string.
- Supports decimal values.

--------------------------------------------------------
Number.isInteger() [ES6]
--------------------------------------------------------
- Checks if a value is an integer.
- Does not perform type coercion.

--------------------------------------------------------
Number.isNaN() [ES6]
--------------------------------------------------------
- Checks specifically for NaN.
- Safer than global isNaN().
========================================================
*/


/*
========================================================
5) MATH OBJECT (Summary)
========================================================

The Math object provides built-in mathematical utilities.
It is static and does not require instantiation.

--------------------------------------------------------
Math.round()
--------------------------------------------------------
- Rounds to the nearest integer.

--------------------------------------------------------
Math.ceil()
--------------------------------------------------------
- Rounds a number up to the next integer.

--------------------------------------------------------
Math.floor()
--------------------------------------------------------
- Rounds a number down to the previous integer.

--------------------------------------------------------
Math.min()
--------------------------------------------------------
- Returns the smallest value from a list of numbers.

--------------------------------------------------------
Math.max()
--------------------------------------------------------
- Returns the largest value from a list of numbers.

--------------------------------------------------------
Math.pow()
--------------------------------------------------------
- Calculates power values.
- Older alternative to the ** operator.

--------------------------------------------------------
Math.random()
--------------------------------------------------------
- Generates a random number between 0 (inclusive) and 1 (exclusive).
- Commonly used in games and random logic.

--------------------------------------------------------
Math.trunc() [ES6]
--------------------------------------------------------
- Removes the decimal part of a number.
- Does not perform rounding.
========================================================
*/
