/*
================================================================================
 JavaScript Regular Expressions Tutorial
 Topic: Character Classes
================================================================================

TOPICS COVERED IN THIS FILE:
----------------------------
1) Dot (.) – Matches any character except newline
2) \w – Matches word characters [a-z, A-Z, 0-9, _]
3) \W – Matches non-word characters
4) \d – Matches digits [0-9]
5) \D – Matches non-digit characters
6) \s – Matches whitespace characters
7) \S – Matches non-whitespace characters

Each topic includes:
- Clear explanation
- Official practical code examples
- Well-commented steps
- Expected results as comments

================================================================================
*/


/*
================================================================================
 TOPIC 1: Dot (.) – Matches any character except newline
================================================================================
 EXPLANATION:
-------------
The dot character matches any single character except line breaks.
Useful for general pattern matching.
*/

let sentence = "Hello World! Welcome to JS 2025.";

let dotRegex = /./g; // Match every character

console.log(sentence.match(dotRegex));

/*
RESULT:
-------
["H","e","l","l","o"," ","W","o","r","l","d","!"," ","W","e","l","c","o","m","e"," ","t","o"," ","J","S"," ","2","0","2","5","."]
================================================================================
*/


/*
================================================================================
 TOPIC 2: Word Characters \w and Non-Word Characters \W
================================================================================
 EXPLANATION:
-------------
\w  -> Matches any letter, number, or underscore
\W  -> Matches everything except letters, numbers, or underscore
*/

let codeSample = "JS_101: Learn_RegEx!";

let wordCharsRegex = /\w/g;  // Match letters, digits, underscore
let nonWordCharsRegex = /\W/g; // Match symbols, spaces, punctuation

console.log(codeSample.match(wordCharsRegex));
console.log(codeSample.match(nonWordCharsRegex));

/*
RESULT:
-------
["J","S","_","1","0","1","L","e","a","r","n","_","R","e","g","E","x"]
[":"," ","!"]
================================================================================
*/


/*
================================================================================
 TOPIC 3: Digits \d and Non-Digits \D
================================================================================
 EXPLANATION:
-------------
\d  -> Matches any digit from 0 to 9
\D  -> Matches any character that is NOT a digit
*/

let invoice = "Invoice #2025 Amount $1500";

let digitsRegex = /\d/g;
let nonDigitsRegex = /\D/g;

console.log(invoice.match(digitsRegex));
console.log(invoice.match(nonDigitsRegex));

/*
RESULT:
-------
["2","0","2","5","1","5","0","0"]
["I","n","v","o","i","c","e"," ","#"," ","A","m","o","u","n","t"," ","$"]
================================================================================
*/


/*
================================================================================
 TOPIC 4: Whitespace \s and Non-Whitespace \S
================================================================================
 EXPLANATION:
-------------
\s  -> Matches any whitespace character (spaces, tabs, line breaks)
\S  -> Matches any character that is NOT a whitespace
*/

let message = "Hello JS!\nLearn\tRegex";

let whitespaceRegex = /\s/g;
let nonWhitespaceRegex = /\S/g;

console.log(message.match(whitespaceRegex));
console.log(message.match(nonWhitespaceRegex));

/*
RESULT:
-------
[" ","\n","\t"]
["H","e","l","l","o","J","S","!","L","e","a","r","n","R","e","g","e","x"]
================================================================================
*/


/*
================================================================================
 TOPIC 5: Practical Email Matching Example
================================================================================
 EXPLANATION:
-------------
Using character classes to match simple email patterns:
- \w  -> letters, digits, underscore
- @   -> literal at symbol
- \.  -> literal dot
- (com|net|org) -> allowed TLDs
*/

let emails = "user1@example.com test.user@site.net admin123@org.org wrong-email@@com";

let simpleEmailRegex = /\w+@\w+\.(com|net|org)/g;

console.log(emails.match(simpleEmailRegex));

/*
RESULT:
-------
["user1@example.com", "test.user@site.net", "admin123@org.org"]
================================================================================
 END OF CHARACTER CLASSES TUTORIAL
================================================================================
*/
