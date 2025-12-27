/*
================================================================================
 JavaScript Regular Expressions Tutorial
 Topic: Syntax, Modifiers (Flags), and match() Method
================================================================================

TOPICS COVERED IN THIS FILE:
----------------------------
1) Regular Expression Syntax
   - Literal Syntax
   - RegExp Constructor Syntax

2) Modifiers (Flags)
   - i : Case-Insensitive Matching
   - g : Global Matching
   - m : Multiline Matching

3) Search Method
   - match()
   - Return Values
   - Behavior When No Match Is Found

Each topic below is explained in detail with:
- Clear definitions
- Educational explanations
- Official, practical JavaScript examples
- Expected results shown as comments

================================================================================
*/


/*
================================================================================
 TOPIC 1: Regular Expression Syntax
================================================================================
 EXPLANATION:
-------------
A Regular Expression (Regex) is a pattern used to search or match text.
JavaScript provides two official ways to create a regex pattern:

1) Literal Syntax:
   /pattern/flags

2) Constructor Syntax:
   new RegExp("pattern", "flags")

Both forms are valid. The literal syntax is preferred for readability,
while the constructor syntax is useful when patterns are dynamic.
*/


// Create a Regular Expression using the literal syntax
// /online/ → searches for the word "online"
// i        → case-insensitive matching
let statusRegexLiteral = /online/i;
// Matches: "online", "Online", "ONLINE"
// Does NOT match: "offline", "server"


// ================= Constructor Regex Syntax =================

// Create a Regular Expression using the RegExp constructor
// "server" → the pattern to search for
// "i"      → case-insensitive matching
let statusRegexConstructor = new RegExp("server", "i");
// Matches: "server", "Server", "SERVER"
// Does NOT match: "online", "client"


// ================= When to use each one =================

// Literal Syntax (/pattern/flags):
// ✔ Simple and readable
// ✔ Best when the pattern is fixed and known in advance

// Constructor Syntax (new RegExp(pattern, flags)):
// ✔ Useful when the pattern is dynamic or stored in a variable
// ✔ Helpful when building regex patterns programmatically

console.log(systemMessage.match(statusRegexLiteral));
console.log(systemMessage.match(statusRegexConstructor));

/*
RESULT:
-------
["ONLINE"]
["Server"]
================================================================================
*/








/*
================================================================================
 TOPIC 2: Regular Expression Modifiers (Flags)
================================================================================
 EXPLANATION:
-------------
Modifiers (also called Flags) change how a regex pattern behaves
during the search process.

Available Flags:
----------------
i  -> Case-Insensitive (ignores uppercase/lowercase differences)
g  -> Global (returns all matches instead of stopping at the first)
m  -> Multiline (applies ^ and $ to each line, not the whole string)
*/


/*
--------------------------------
 Flag: i (Case-Insensitive)
--------------------------------
*/

let userRole = "Admin";

let roleRegex = /admin/i;

console.log(userRole.match(roleRegex));

/*
RESULT:
-------
["Admin"]
*/


/*
--------------------------------
 Flag: g (Global Search)
--------------------------------
*/

let auditLog = "login logout login login logout";

let actionRegex = /login/g;

console.log(auditLog.match(actionRegex));

/*
RESULT:
-------
["login", "login", "login"]
*/


/*
--------------------------------
 Flag: m (Multiline Search)
--------------------------------
*/

let configFile = `
PORT=3000
MODE=production
DEBUG=false
`;

// Create a Regular Expression to match lines starting with "mode="
// ^       → asserts the start of a line (line beginning)
// mode=   → literal text to match
// i       → case-insensitive matching
// m       → multiline mode (so ^ and $ match start/end of each line, not just the whole string)
let configRegex = /^mode=/im;

// Examples:
// "mode=active"         → matches (start of line)
// "Mode=Passive"        → matches (case-insensitive)
// "setting=on\nmode=off" → matches the second line because of 'm' flag
// "setting=on"          → does NOT match

console.log(configFile.match(configRegex));

/*
RESULT:
-------
["MODE="]
================================================================================
*/




/*
================================================================================
 TOPIC 3: match() Method
================================================================================
 EXPLANATION:
-------------
The match() method is a String method used with regular expressions.

Key behavior:
-------------
- It searches the string for matches
- Returns an array containing the matches
- Returns null if no match is found

Important Difference:
---------------------
- Without the global flag (g):
  Returns detailed information about the first match
- With the global flag (g):
  Returns an array of all matched values only
*/

let notificationText = "Error: Disk Full | Error: Network Timeout";

// Without Global Flag
let errorSingleRegex = /error/i;

// With Global Flag
let errorAllRegex = /error/ig;

console.log(notificationText.match(errorSingleRegex));
console.log(notificationText.match(errorAllRegex));

/*
RESULT:
-------
["Error"]
["Error", "Error"]
================================================================================
 END OF TUTORIAL
================================================================================
*/
