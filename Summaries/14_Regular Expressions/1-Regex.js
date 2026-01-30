/*
===============================================================================
JavaScript Regular Expressions (Regex) — Complete Foundation Tutorial
===============================================================================

INTRODUCTION
------------

A Regular Expression (Regex) is a pattern used to search, match, extract,
replace, or validate text. Regex allows developers to describe complex text
rules using a compact and powerful syntax instead of long conditional logic.

Regex is built into JavaScript and many other programming languages, making it
an essential and universal developer tool.

SYNTAX OVERVIEW
---------------

Regex pattern format:

/pattern/flags

Example:
--------
/abc/i

PURPOSE OF REGEX
----------------

Regex is used to:
- Validate user input (email, password, phone number)
- Search text efficiently
- Extract specific parts of strings
- Replace matching text
- Enforce formatting rules

===============================================================================
REGEX CREATION IN JAVASCRIPT
===============================================================================

JavaScript provides two ways to create regex:

1) Literal Syntax
-----------------
/pattern/flags

2) Constructor Syntax
---------------------
new RegExp("pattern", "flags")

===============================================================================
TOPIC 1: REGEX SYNTAX
===============================================================================
*/

// Literal Syntax
let statusRegexLiteral = /online/i;

// Constructor Syntax
let statusRegexConstructor = new RegExp("server", "i");

// Test string
let systemMessage = "ONLINE Server is running";

console.log(systemMessage.match(statusRegexLiteral));
console.log(systemMessage.match(statusRegexConstructor));

/*
RESULT:
["ONLINE"]
["Server"]
*/

/*
===============================================================================
TOPIC 2: REGEX MODIFIERS (FLAGS)
===============================================================================

i → Case-insensitive
g → Global matching
m → Multiline matching
*/

// Flag: i
let userRole = "Admin";
let roleRegex = /admin/i;
console.log(userRole.match(roleRegex));

// Flag: g
let auditLog = "login logout login login logout";
let actionRegex = /login/g;
console.log(auditLog.match(actionRegex));

// Flag: m
let configFile = `PORT=3000
MODE=production
DEBUG=false`;

let configRegex = /^mode=/im;
console.log(configFile.match(configRegex));

/*
RESULT:
["Admin"]
["login","login","login"]
["MODE="]
*/

/*
===============================================================================
TOPIC 3: match() METHOD
===============================================================================

- Returns array of matches
- Returns null if no match
- With 'g' → all matches
- Without 'g' → first match only
*/

let notificationText = "Error: Disk Full | Error: Network Timeout";

let errorSingleRegex = /error/i;
let errorAllRegex = /error/ig;

console.log(notificationText.match(errorSingleRegex));
console.log(notificationText.match(errorAllRegex));

/*
RESULT:
["Error"]
["Error","Error"]
*/

/*
===============================================================================
TOPIC 4: OR OPERATOR (X|Y)
===============================================================================
*/

let fileExtensions = "pdf docx xls txt csv md";
let extRegex = /(pdf|txt|md)/ig;

console.log(fileExtensions.match(extRegex));

/*
RESULT:
["pdf","txt","md"]
*/

/*
===============================================================================
TOPIC 5: DIGIT RANGES
===============================================================================
*/

let orderNumbers = "Order IDs: 101, 202, 303";

let digitsRegex = /[0-9]/g;
let nonDigitsRegex = /[^0-9]/g;

console.log(orderNumbers.match(digitsRegex));
console.log(orderNumbers.match(nonDigitsRegex));

/*
===============================================================================
TOPIC 6: LETTER RANGES
===============================================================================
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
===============================================================================
TOPIC 7: SPECIFIC CHARACTER SETS
===============================================================================
*/

let accessCodes = "A1B2C3D4E5";

let allowedCodesRegex = /[A-C]/g;
let blockedCodesRegex = /[^A-C]/g;

console.log(accessCodes.match(allowedCodesRegex));
console.log(accessCodes.match(blockedCodesRegex));

/*
===============================================================================
TOPIC 8: ADVANCED COMBINED RANGES
===============================================================================
*/

let sampleText = "Dev2025Code!Tutorial";

let lowercase = /[a-z]/g;
let uppercase = /[A-Z]/g;
let lettersOnly = /[a-zA-Z]/g;
let nonLetters = /[^a-zA-Z]/g;
let nonAlphanumeric = /[^a-zA-Z0-9]/g;

console.log(sampleText.match(lowercase));
console.log(sampleText.match(uppercase));
console.log(sampleText.match(lettersOnly));
console.log(sampleText.match(nonLetters));
console.log(sampleText.match(nonAlphanumeric));

/*
===============================================================================
KEY TAKEAWAYS
===============================================================================

- Regex defines patterns, not logic
- Flags control matching behavior
- match() returns arrays or null
- Ranges allow precise character control
- Negation (^) is critical for exclusions

===============================================================================
END OF REGEX FOUNDATION FILE
===============================================================================
*/
