/*
================================================================================
 JavaScript Regular Expressions Tutorial
 Topic: Ranges in Regular Expressions
================================================================================

TOPICS COVERED IN THIS FILE:
----------------------------
1) Or Operator (X|Y)
2) Digit Ranges [0-9] and Negated Ranges [^0-9]
3) Letter Ranges [a-z], [A-Z] and Negated Variants
4) Specific Character Sets [abc] and Negated [^abc]

Each topic below is explained with:
- Clear definitions
- Practical, official JavaScript examples
- Well-commented code
- Expected results shown as comments

================================================================================
*/


/*
================================================================================
 TOPIC 1: Or Operator (X|Y)
================================================================================
 EXPLANATION:
-------------
The "or" operator (|) matches either the pattern on the left or the pattern on
the right. It is useful for selecting from a limited set of options.
*/

let fileExtensions = "pdf docx xls txt csv md";

let extRegex = /(pdf|txt|md)/ig; // Match pdf, txt, or md

console.log(fileExtensions.match(extRegex));

/*
RESULT:
-------
["pdf", "txt", "md"]
================================================================================
*/


/*
================================================================================
 TOPIC 2: Digit Ranges [0-9] and Negated Ranges [^0-9]
================================================================================
 EXPLANATION:
-------------
[0-9]  -> Matches any single digit from 0 to 9
[^0-9] -> Matches any character that is NOT a digit

Practical usage: Extract digits, remove non-digits, or filter text.
*/

let orderNumbers = "Order IDs: 101, 202, 303";

let digitsRegex = /[0-5]/g; // Only digits 0 to 5

console.log(orderNumbers.match(digitsRegex));

let nonDigitsRegex = /[^0-9]/g; // Any character except digits

console.log(orderNumbers.match(nonDigitsRegex));

/*
RESULT:
-------
["1", "0", "1", "2", "0", "2", "3", "0", "3"]
["O", "r", "d", "e", "r", " ", "I", "D", "s", ":", " ", ",", " ", ",", " "]
================================================================================
*/


/*
================================================================================
 TOPIC 3: Letter Ranges [a-z], [A-Z] and Negated Variants
================================================================================
 EXPLANATION:
-------------
[a-z]   -> Matches any lowercase letter
[^a-z]  -> Matches anything except lowercase letters
[A-Z]   -> Matches any uppercase letter
[^A-Z]  -> Matches anything except uppercase letters

Practical usage: Validate letters, filter text, or case-specific parsing.
*/

let names = "Alice BOB Charlie DAVID";

let lowerCaseRegex = /[a-z]/g;
let upperCaseRegex = /[A-Z]/g;

console.log(names.match(lowerCaseRegex));
console.log(names.match(upperCaseRegex));

let notLowerRegex = /[^a-z]/g;
let notUpperRegex = /[^A-Z]/g;

console.log(names.match(notLowerRegex));
console.log(names.match(notUpperRegex));

/*
RESULT:
-------
["l","i","c","e","h","a","r","l","i","e","a","v","i","d"]
["A","B","O","B","C","D","A","V","I","D"]
["A"," ","B","O","B"," ","C"," ","D","A","V","I","D"]
["l","i","c","e"," ","h","a","r","l","i","e"," "]
================================================================================
*/


/*
================================================================================
 TOPIC 4: Specific Character Sets [abc] and Negated Sets [^abc]
================================================================================
 EXPLANATION:
-------------
[abc]   -> Matches any single character "a", "b", or "c"
[^abc]  -> Matches anything except "a", "b", or "c"

Practical usage: Pattern matching for small sets or exclusions.
*/

let accessCodes = "A1B2C3D4E5";

let allowedCodesRegex = /[A-C]/g;   // Only letters A, B, C
let blockedCodesRegex = /[^A-C]/g;  // All letters except A, B, C

console.log(accessCodes.match(allowedCodesRegex));
console.log(accessCodes.match(blockedCodesRegex));

/*
RESULT:
-------
["A","B","C"]
["1","2","3","D","4","E","5"]
================================================================================
 END OF RANGES TUTORIAL
================================================================================
*/
