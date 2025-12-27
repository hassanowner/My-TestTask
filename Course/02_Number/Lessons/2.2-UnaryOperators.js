/*
========================================================
Unary Operators
========================================================
- + Unary Plus
  [Converts value to Number if possible]

- - Unary Negation
  [Converts value to Number and negates it]

Tests:
- Normal Number
- String Number
- String Negative Number
- String Text
- Float
- Hexadecimal Numeral System => 0xFF
- null
- false
- true
========================================================
*/

// ======================================================
// Unary Plus (+)
// ======================================================

// Normal Number
console.log(+100);
/*
Result:
100
*/

// String Number
console.log(+"200");
/*
Result:
200
*/

// String Negative Number
console.log(+"-300");
/*
Result:
-300
*/

// String Text
console.log(+"Invalid");
/*
Result:
NaN
*/

// Float
console.log(+"15.75");
/*
Result:
15.75
*/

// Hexadecimal Number
console.log(+0xff);
/*
Result:
255
*/

// null
console.log(+null);
/*
Result:
0
*/

// false
console.log(+false);
/*
Result:
0
*/

// true
console.log(+true);
/*
Result:
1
*/


// ======================================================
// Unary Negation (-)
// ======================================================

// Normal Number
console.log(-100);
/*
Result:
-100
*/

// String Number
console.log(-"200");
/*
Result:
-200
*/

// String Negative Number
console.log(-"-300");
/*
Result:
300
*/

// String Text
console.log(-"Invalid");
/*
Result:
NaN
*/

// Float
console.log(-"15.75");
/*
Result:
-15.75
*/

// Hexadecimal Number
console.log(-0xff);
/*
Result:
-255
*/

// null
console.log(-null);
/*
Result:
-0
*/

// false
console.log(-false);
/*
Result:
-0
*/

// true
console.log(-true);
/*
Result:
-1
*/


// ======================================================
// Using Number() for Conversion
// - Explicit way to convert values to numbers
// ======================================================

console.log(Number("500"));

/*
Result:
500
*/
