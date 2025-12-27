/*
================================================================================
 JavaScript Regular Expressions Tutorial
 Topic: Word Boundaries (\b, \B) and test() Method
================================================================================

TOPICS COVERED IN THIS FILE:
----------------------------
1) Word Boundary \b – Matches start or end of a word
2) Non-Word Boundary \B – Matches NOT at start or end of a word
3) test() Method – Checks if a pattern exists in a string

Each topic includes:
- Clear explanation
- Official practical code examples
- Well-commented steps
- Expected results as comments

================================================================================
*/


/*
================================================================================
 TOPIC 1: Word Boundary \b
================================================================================
 EXPLANATION:
-------------
\b matches a position between a word character (\w) and a non-word character (\W)
or the start/end of the string. Useful to find whole words.

Example use case: Detect whole words like "cat" but not "scatter".
*/

let sentence = "cat scatter concatenate catapult cat";

let wordBoundaryRegex = /\bcat\b/g; // Match only "cat" as a full word

console.log(sentence.match(wordBoundaryRegex));

/*
RESULT:
-------
["cat","cat"]
================================================================================
*/


/*
================================================================================
 TOPIC 2: Non-Word Boundary \B
================================================================================
 EXPLANATION:
-------------
\B matches positions that are NOT at a word boundary.
Useful to detect substrings inside words, but not standalone words.

Example: Find "cat" inside longer words but ignore standalone "cat".
*/

let nonWordBoundaryRegex = /\Bcat\B/g; // Match "cat" only inside words

console.log(sentence.match(nonWordBoundaryRegex));

/*
RESULT:
-------
["cat","cat"]  // Matches 'concatenate' and 'catapult' only
================================================================================
*/


/*
================================================================================
 TOPIC 3: test() Method
================================================================================
 EXPLANATION:
-------------
The test() method is a Boolean method of RegExp objects.
- Returns true if the pattern is found in the string
- Returns false otherwise
- Useful for validations and conditional checks
*/

let usernames = "Alice 1Bob Bob123 Charlie_Bob Bob!";

let bobRegex = /\bBob\b/; // Match only 'Bob' as a standalone word

console.log(bobRegex.test(usernames));             // true, 'Bob' exists
console.log(bobRegex.test("Bob123"));              // false, not standalone
console.log(bobRegex.test("Charlie_Bob"));         // false, part of a word
console.log(bobRegex.test("Some other text"));     // false, not found

/*
RESULT:
-------
true
false
false
false
================================================================================
 END OF WORD BOUNDARIES & TEST METHOD TUTORIAL
================================================================================
*/
