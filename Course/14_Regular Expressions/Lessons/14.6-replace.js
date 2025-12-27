/*
================================================================================
 JavaScript Regular Expressions Tutorial
 Topic: replace() and replaceAll() Methods
================================================================================

TOPICS COVERED IN THIS FILE:
----------------------------
1) replace() – Replaces the first match of a pattern
2) replaceAll() – Replaces all matches of a pattern
3) Using Regex with replace() and replaceAll()

Each topic includes:
- Clear explanation
- Official practical code examples
- Well-commented steps
- Expected results as comments

================================================================================
*/


/*
================================================================================
 TOPIC 1: replace()
================================================================================
 EXPLANATION:
-------------
The replace() method replaces the first occurrence of a pattern in a string.
It can use a string or a regular expression as the pattern.

Example use case: Replace the first hashtag in a social media post.
*/

let post = "I love #coding and #JavaScript and #Regex";

let firstHashtagReplaced = post.replace("#", "##");

console.log(firstHashtagReplaced);

/*
RESULT:
-------
"I love ##coding and #JavaScript and #Regex"
================================================================================
*/


/*
================================================================================
 TOPIC 2: replaceAll()
================================================================================
 EXPLANATION:
-------------
The replaceAll() method replaces all occurrences of a pattern in a string.
It can use a string or a global regular expression (with g flag).

Example use case: Replace all hashtags with double hashtags.
*/

let allHashtagsReplaced = post.replaceAll("#", "##");

console.log(allHashtagsReplaced);

/*
RESULT:
-------
"I love ##coding and ##JavaScript and ##Regex"
================================================================================
*/


/*
================================================================================
 TOPIC 3: Using Regex with replace() and replaceAll()
================================================================================
 EXPLANATION:
-------------
Regular expressions allow dynamic and flexible replacement.
- Without 'g', replace() changes only the first match
- With 'g', replaceAll or replace with /pattern/g changes all matches

Example: Replace all hashtags ignoring case.
*/

let mixedPost = "I love #Coding and #coding and #CODING";

let regexReplaceAll = mixedPost.replaceAll(/#coding/ig, "##JS");

console.log(regexReplaceAll);

/*
RESULT:
-------
"I love ##JS and ##JS and ##JS"
================================================================================
 END OF REPLACE & REPLACEALL TUTORIAL
================================================================================
*/
