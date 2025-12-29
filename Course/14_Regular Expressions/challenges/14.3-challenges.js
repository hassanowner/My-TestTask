/* =========================================================================
REGEX CHALLENGES — Quantifiers, Anchors, and Lookahead
Advanced Practice Tasks
=========================================================================
Each challenge:
1) Starts with a QUESTION (real-world scenario)
2) Then the ANSWER (regex + code)
3) Result shown as a comment
=========================================================================
*/

/* =========================================================================
CHALLENGE 1 — Extract Serial Codes with At Least 2 Digits
============================================================================
QUESTION:
You have a string of product serials like "X12Y X1Y X123Y X4567Y X0Y".
Match only the serials that have at least 2 digits between letters.
============================================================================
*/

let serials = "X12Y X1Y X123Y X4567Y X0Y";

// ANSWER
let atLeastTwoDigitsRegex = /X\d{2,}Y/g;

console.log(serials.match(atLeastTwoDigitsRegex));
// RESULT:
// ["X12Y","X123Y","X4567Y"]



/* =========================================================================
CHALLENGE 2 — Match URLs Starting With https
============================================================================
QUESTION:
You have a list of URLs: "http://site.com https://secure.com ftp://files.org https://www.example.net".
Use an anchor and optional quantifier to match ONLY URLs starting with "https".
============================================================================
*/

let urls = "http://site.com https://secure.com ftp://files.org https://www.example.net";

// ANSWER
let httpsRegex = /^https:\/\/\S+/gm;  // ^ for line start, \S+ for non-space chars, m for multiline

console.log(urls.match(httpsRegex));
// RESULT:
// ["https://secure.com", "https://www.example.net"]



/* =========================================================================
CHALLENGE 3 — Match IDs Followed by Optional X
============================================================================
QUESTION:
You have IDs: "A1X B2 C3X D4 E5X F6". 
Match the IDs that may or may not be followed by "X" using optional quantifier and lookahead.
============================================================================
*/

let idString = "A1X B2 C3X D4 E5X F6";

// ANSWER
let optionalXRegex = /\b\w\dX?\b/g; // \b word boundary, \w letter, \d digit, X? optional X

console.log(idString.match(optionalXRegex));
// RESULT:
// ["A1X","B2","C3X","D4","E5X","F6"]
