/*
================================================================================
 JavaScript Regular Expressions Tutorial
 Topic: Quantifiers with Exact Numbers and Ranges ({x}, {x,y}, {x,})
================================================================================

TOPICS COVERED IN THIS FILE:
----------------------------
1) Exact Number {x} – Matches exactly x occurrences
2) Range {x,y} – Matches between x and y occurrences
3) At Least {x,} – Matches x or more occurrences

Each topic includes:
- Clear explanation
- Official practical code examples
- Well-commented steps
- Expected results as comments

================================================================================
*/


/*
================================================================================
 TOPIC 1: Exact Number {x}
================================================================================
 EXPLANATION:
-------------
The {x} quantifier matches exactly x occurrences of the preceding character or group.

Example use case: Match serial codes with exactly 3 digits between letters.
*/

let serialCodes = "P123Q P4567Q P89Q P000Q P9999Q";

let exactThreeDigits = /P\d{3}Q/g; // Match exactly 3 digits between P and Q

console.log(serialCodes.match(exactThreeDigits));

/*
RESULT:
-------
["P123Q", "P000Q"]
================================================================================
*/


/*
================================================================================
 TOPIC 2: Range {x,y}
================================================================================
 EXPLANATION:
-------------
The {x,y} quantifier matches between x and y occurrences of the preceding element.

Example use case: Match serial codes with 2 to 4 digits between letters.
*/

let twoToFourDigits = /P\d{2,4}Q/g; // Match 2 to 4 digits between P and Q

console.log(serialCodes.match(twoToFourDigits));

/*
RESULT:
-------
["P123Q", "P4567Q", "P89Q", "P000Q", "P9999Q"]
================================================================================
*/


/*
================================================================================
 TOPIC 3: At Least {x,}
================================================================================
 EXPLANATION:
-------------
The {x,} quantifier matches x or more occurrences of the preceding element.

Example use case: Match serial codes with at least 3 digits between letters.
*/

let atLeastThreeDigits = /P\d{3,}Q/g; // Match 3 or more digits between P and Q

console.log(serialCodes.match(atLeastThreeDigits));

/*
RESULT:
-------
["P123Q", "P4567Q", "P000Q", "P9999Q"]
================================================================================
 END OF QUANTIFIERS WITH RANGE TUTORIAL
================================================================================
*/
