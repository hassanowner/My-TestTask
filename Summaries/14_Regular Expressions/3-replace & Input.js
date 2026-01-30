/*
================================================================================
 JAVASCRIPT REGULAR EXPRESSIONS — COMPLETE GUIDE
 Topics:
 1) replace() and replaceAll()
 2) Input Validation with Regular Expressions
================================================================================

THIS FILE CONTAINS:
-------------------
• Clear explanations inside comments
• Practical, runnable examples
• Correct and consistent regex usage
• Expected results documented as comments

NOTE:
-----
This is a single, self-contained reference file.
Nothing is split. Nothing is omitted.
================================================================================
*/


/*
================================================================================
 SECTION 1: replace() and replaceAll()
================================================================================
*/

/*
----------------------------------------
TOPIC 1: replace()
----------------------------------------
EXPLANATION:
------------
replace() replaces ONLY the FIRST match found in a string.
It accepts either:
• a string
• a regular expression (without the global flag)

Use case:
Replace only the first hashtag in a post.
*/

let post = "I love #coding and #JavaScript and #Regex";

let firstHashtagReplaced = post.replace("#", "##");

console.log(firstHashtagReplaced);

/*
EXPECTED RESULT:
----------------
"I love ##coding and #JavaScript and #Regex"
*/


/*
----------------------------------------
TOPIC 2: replaceAll()
----------------------------------------
EXPLANATION:
------------
replaceAll() replaces ALL matches in a string.
It accepts:
• a string
• a regex WITH the global (g) flag

Use case:
Replace every hashtag.
*/

let allHashtagsReplaced = post.replaceAll("#", "##");

console.log(allHashtagsReplaced);

/*
EXPECTED RESULT:
----------------
"I love ##coding and ##JavaScript and ##Regex"
*/


/*
----------------------------------------
TOPIC 3: Regex with replaceAll()
----------------------------------------
EXPLANATION:
------------
Regular expressions allow flexible matching.
Flags:
• g → global (all matches)
• i → ignore case

Use case:
Replace hashtags regardless of letter case.
*/

let mixedPost = "I love #Coding and #coding and #CODING";

let regexReplaceAll = mixedPost.replaceAll(/#coding/ig, "##JS");

console.log(regexReplaceAll);

/*
EXPECTED RESULT:
----------------
"I love ##JS and ##JS and ##JS"
*/


/*
================================================================================
 SECTION 2: INPUT VALIDATION WITH REGULAR EXPRESSIONS
================================================================================

OVERVIEW:
---------
Input validation ensures data is:
• correctly formatted
• secure
• predictable

RegEx is ideal for validating:
• usernames
• emails
• passwords
• phone numbers
================================================================================
*/


/*
----------------------------------------
EXAMPLE 1: Username Validation
----------------------------------------
RULES:
------
• 4–12 characters
• Letters, numbers, underscores only
*/

let usernamePattern = /^\w{4,12}$/;

console.log(usernamePattern.test("user_123"));        // true
console.log(usernamePattern.test("a"));               // false
console.log(usernamePattern.test("user!@#"));         // false
console.log(usernamePattern.test("longusername123")); // false

/*
PATTERN BREAKDOWN:
------------------
^        start of string
\w       letters, digits, underscore
{4,12}   length constraint
$        end of string
*/


/*
----------------------------------------
EXAMPLE 2: Email Validation
----------------------------------------
FORMAT:
-------
local@domain.tld
*/

let emailPattern =
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(emailPattern.test("user@example.com"));        // true
console.log(emailPattern.test("user.name+1@site.net"));   // true
console.log(emailPattern.test("invalid@.com"));           // false
console.log(emailPattern.test("no-at-symbol.com"));       // false

/*
PATTERN BREAKDOWN:
------------------
local part   → allowed characters
@            → separator
domain       → letters, numbers, dots
TLD          → minimum 2 letters
^ $          → full string match
*/


/*
----------------------------------------
EXAMPLE 3: Password Strength Validation
----------------------------------------
REQUIREMENTS:
-------------
• Minimum 8 characters
• At least one uppercase letter
• At least one lowercase letter
• At least one number
*/

let passwordPattern =
/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

console.log(passwordPattern.test("StrongPass1")); // true
console.log(passwordPattern.test("weakpass"));    // false
console.log(passwordPattern.test("SHORT1"));      // false
console.log(passwordPattern.test("Pass1234!"));   // true

/*
LOOKAHEADS:
-----------
(?=.*[A-Z]) → uppercase required
(?=.*[a-z]) → lowercase required
(?=.*\d)    → digit required
*/


/*
----------------------------------------
EXAMPLE 4: Phone Number Validation
----------------------------------------
FORMAT:
-------
(1234) 567-8901
*/

let phonePattern = /^\(\d{4}\)\s\d{3}-\d{4}$/;

console.log(phonePattern.test("(1234) 567-8901")); // true
console.log(phonePattern.test("1234-567-8901"));   // false
console.log(phonePattern.test("(5678) 123-4567")); // true

/*
PATTERN BREAKDOWN:
------------------
\(\d{4}\)  → area code
\s         → space
\d{3}-\d{4} → number
^ $        → full match
*/


/*
================================================================================
 BEST PRACTICES
================================================================================
• Always use ^ and $ for validation
• Prefer replaceAll() or /g for multiple replacements
• Test both valid and invalid cases
• Keep regex readable and documented
================================================================================
 END OF FILE
================================================================================
*/
