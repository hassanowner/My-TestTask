/*
================================================================================
 JavaScript Regular Expressions Tutorial
 Topic: Advanced Ranges and Character Sets
================================================================================

TOPICS COVERED IN THIS FILE:
----------------------------
1) Lowercase Letter Ranges [a-z] and Negation [^a-z]
2) Uppercase Letter Ranges [A-Z] and Negation [^A-Z]
3) Specific Characters [abc] and Negation [^abc]
4) Combined Letter Ranges [a-zA-Z]
5) Non-Letter Characters [^a-zA-Z] and Non-Alphanumeric [^a-zA-Z0-9]

Each topic includes:
- Clear explanation
- Official practical code examples
- Well-commented steps
- Expected results as comments

================================================================================
*/


/*
================================================================================
 TOPIC 1: Lowercase Letter Ranges [a-z] and Negation [^a-z]
================================================================================
 EXPLANATION:
-------------
[a-z]     -> Matches any lowercase letter from 'a' to 'z'
[^a-z]    -> Matches anything that is NOT a lowercase letter

Practical use: Extract only lowercase letters or remove them from a string.
*/

let sampleText = "Dev2025Code!Tutorial";

let lowercaseRegex = /[a-z]/g;      // Match all lowercase letters
let notLowercaseRegex = /[^a-z]/g;  // Match everything except lowercase letters

console.log(sampleText.match(lowercaseRegex));
console.log(sampleText.match(notLowercaseRegex));

/*
RESULT:
-------
["e","v","o","d","e","c","o","d","e","u","t","o","r","i","a","l"]
["D","2","0","2","5","C","!"]
================================================================================
*/


/*
================================================================================
 TOPIC 2: Uppercase Letter Ranges [A-Z] and Negation [^A-Z]
================================================================================
 EXPLANATION:
-------------
[A-Z]     -> Matches any uppercase letter from 'A' to 'Z'
[^A-Z]    -> Matches everything except uppercase letters

Practical use: Extract uppercase letters or isolate non-uppercase text.
*/

let uppercaseRegex = /[A-Z]/g;      // Match all uppercase letters
let notUppercaseRegex = /[^A-Z]/g;  // Match everything except uppercase letters

console.log(sampleText.match(uppercaseRegex));
console.log(sampleText.match(notUppercaseRegex));

/*
RESULT:
-------
["D","C","T"]
["e","v","2","0","2","5","o","d","e","!","u","t","o","r","i","a","l"]
================================================================================
*/


/*
================================================================================
 TOPIC 3: Specific Characters [abc] and Negation [^abc]
================================================================================
 EXPLANATION:
-------------
[abc]     -> Matches only the letters 'a', 'b', or 'c'
[^abc]    -> Matches anything except 'a', 'b', or 'c'

Practical use: Select or exclude specific characters for filtering.
*/

let specificCharsRegex = /[aeiou]/g;       // Match all vowels
let notVowelsRegex = /[^aeiou]/g;         // Match everything except vowels

console.log(sampleText.match(specificCharsRegex));
console.log(sampleText.match(notVowelsRegex));

/*
RESULT:
-------
["e","o","e","o","u","o","i","a"]
["D","v","2","0","2","5","C","d","!","T","t","r","l"]
================================================================================
*/


/*
================================================================================
 TOPIC 4: Combined Letter Ranges [a-zA-Z]
================================================================================
 EXPLANATION:
-------------
[a-zA-Z]  -> Matches any letter regardless of case (both lowercase and uppercase)

Practical use: Extract all alphabetic letters from a string.
*/

let lettersOnlyRegex = /[a-zA-Z]/g;

console.log(sampleText.match(lettersOnlyRegex));

/*
RESULT:
-------
["D","e","v","C","o","d","e","T","u","t","o","r","i","a","l"]
================================================================================
*/


/*
================================================================================
 TOPIC 5: Non-Letter Characters [^a-zA-Z] and Non-Alphanumeric [^a-zA-Z0-9]
================================================================================
 EXPLANATION:
-------------
[^a-zA-Z]     -> Matches any character that is NOT a letter
[^a-zA-Z0-9]  -> Matches any character that is NOT a letter or number (special chars)

Practical use: Extract numbers and/or special characters.
*/

let nonLettersRegex = /[^a-zA-Z]/g;         // Match digits and special characters
let nonAlphanumericRegex = /[^a-zA-Z0-9]/g; // Match only special characters

console.log(sampleText.match(nonLettersRegex));
console.log(sampleText.match(nonAlphanumericRegex));

/*
RESULT:
-------
["2","0","2","5","!"]
["!"]
================================================================================
 END OF ADVANCED RANGES TUTORIAL
================================================================================
*/
