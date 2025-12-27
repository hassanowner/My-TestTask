/*
================================================================================
 JavaScript Regular Expressions Tutorial
 Topic: Anchors ($, ^) and Lookahead (?=, ?!)
================================================================================

TOPICS COVERED IN THIS FILE:
----------------------------
1) $ – Matches the end of a string or line
2) ^ – Matches the start of a string or line
3) Positive Lookahead (?=) – Matches only if followed by a pattern
4) Negative Lookahead (?! ) – Matches only if NOT followed by a pattern

Each topic includes:
- Clear explanation
- Official practical code examples
- Well-commented steps
- Expected results as comments

================================================================================
*/


/*
================================================================================
 TOPIC 1: End of String ($)
================================================================================
 EXPLANATION:
-------------
The $ anchor asserts that the match must occur at the end of the string.
Useful to check file extensions, sentence endings, or string suffixes.
*/

let fileNames = "report.pdf summary.docx notes.txt presentation.pptx";

let endWithTxtRegex = /\.txt$/g; // Match strings ending with ".txt"

console.log(fileNames.match(endWithTxtRegex));

/*
RESULT:
-------
[".txt"]
================================================================================
*/


/*
================================================================================
 TOPIC 2: Start of String (^)
================================================================================
 EXPLANATION:
-------------
The ^ anchor asserts that the match must occur at the beginning of the string.
Useful to validate prefixes, IDs, or string starts.
*/

let codes = "A123 B456 C789 D012";

let startsWithARegex = /^A\d+/; // Match strings starting with 'A' followed by digits

console.log(codes.match(startsWithARegex));

/*
RESULT:
-------
["A123"]
================================================================================
*/


/*
================================================================================
 TOPIC 3: Positive Lookahead (?=)
================================================================================
 EXPLANATION:
-------------
(?=...) asserts that what follows the current position must match the pattern.
The matched characters are included in the match only if the lookahead succeeds.

Example use case: Match IDs followed by 'X' without consuming 'X'.
*/

let ids = "1AlexX 2Brian 3CathyX 4David 5EveX";

let followedByXRegex = /\d\w+(?=X)/g; // Match digits + letters only if followed by 'X'

console.log(ids.match(followedByXRegex));

/*
RESULT:
-------
["1Alex", "3Cathy", "5Eve"]
================================================================================
*/


/*
================================================================================
 TOPIC 4: Negative Lookahead (?!)
================================================================================
 EXPLANATION:
-------------
(?!...) asserts that what follows the current position must NOT match the pattern.
Useful for excluding patterns while still matching the preceding part.

Example use case: Match IDs not followed by 'X'.
*/

let notFollowedByXRegex = /\d\w+(?!X)/g; // Match digits + letters only if NOT followed by 'X'

console.log(ids.match(notFollowedByXRegex));

/*
RESULT:
-------
["2Brian", "4David"]
================================================================================
 END OF ANCHORS AND LOOKAHEAD TUTORIAL
================================================================================
*/
