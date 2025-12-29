/*
================================================================================
 JavaScript Regular Expressions Tutorial
 Topic: Quantifiers (+, *, ?)
================================================================================

TOPICS COVERED IN THIS FILE:
----------------------------
1) One or More (+) – Matches one or more occurrences
2) Zero or More (*) – Matches zero or more occurrences
3) Zero or One (?) – Matches zero or one occurrence

Each topic includes:
- Clear explanation
- Official practical code examples
- Well-commented steps
- Expected results as comments

================================================================================
*/


/*
================================================================================
 TOPIC 1: One or More (+)
================================================================================
 EXPLANATION:
-------------
The + quantifier matches one or more occurrences of the preceding element.
Useful to ensure at least one character exists in a pattern.

Example use case: Match emails with at least one character before @.
*/

let emailList = "alice@example.com bob123@domain.net _user@site.org";

let oneOrMoreRegex = /\w+@\w+\.\w+/g; // Match emails with at least one letter/number before @

console.log(emailList.match(oneOrMoreRegex));

/*
RESULT:
-------
["alice@example.com", "bob123@domain.net", "_user@site.org"]
================================================================================
*/


/*
================================================================================
 TOPIC 2: Zero or More (*)
================================================================================
 EXPLANATION:
-------------
The * quantifier matches zero or more occurrences of the preceding element.
Useful when a character may or may not exist multiple times.

Example use case: Match numbers starting and ending with 0, any digits in between.
*/

let numberStrings = "010 0120 0010 0 5050 060";

let zeroOrMoreRegex = /0\d*0/g; // Match strings starting and ending with 0

console.log(numberStrings.match(zeroOrMoreRegex));

/*
RESULT:
-------
["010", "0120", "0010", "060"]
================================================================================
*/


/*
================================================================================
 TOPIC 3: Zero or One (?)
================================================================================
 EXPLANATION:
-------------
The ? quantifier matches zero or one occurrence of the preceding element.
Useful for optional characters in patterns.

Example use case: Match URLs with optional "http://" or "https://" and optional "www.".
*/

let urlList = "https://google.com http://www.site.net web.com www.example.org";

let optionalRegex = /(https?:\/\/)?(www\.)?\w+\.\w+/g; // http/https and www are optional

console.log(urlList.match(optionalRegex));

/*
RESULT:
-------
["https://google.com", "http://www.site.net", "web.com", "www.example.org"]
================================================================================
 END OF QUANTIFIERS TUTORIAL
================================================================================
*/
