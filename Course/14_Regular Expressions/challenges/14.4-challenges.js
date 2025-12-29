/* =========================================================================
REGEX CHALLENGES — replace(), replaceAll(), and Input Validation
Advanced Practice Tasks
=========================================================================
Each challenge:
1) Starts with a QUESTION (real-world scenario)
2) Then the ANSWER (regex + code)
3) Result shown as a comment
=========================================================================
*/

/* =========================================================================
CHALLENGE 1 — Replace All Hashtags with Custom Text
============================================================================
QUESTION:
You have a social media post: "Post #fun #coding #2025". 
Replace all hashtags (#) with "[TAG]" using replaceAll and a regex.
============================================================================
*/

let socialPost = "Post #fun #coding #2025";

// ANSWER
let replacedHashtags = socialPost.replaceAll(/#/g, "[TAG]");

console.log(replacedHashtags);
// RESULT:
// "Post [TAG]fun [TAG]coding [TAG]2025"



/* =========================================================================
CHALLENGE 2 — Validate Complex Passwords
============================================================================
QUESTION:
You want to validate passwords with these rules:
- Minimum 10 characters
- At least one uppercase, one lowercase, one number, and one special character
Check if "StrongPass1!" and "weakpass123" are valid.
============================================================================
*/

let complexPasswordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{10,}$/;

console.log(complexPasswordPattern.test("StrongPass1!")); // true
console.log(complexPasswordPattern.test("weakpass123"));  // false



/* =========================================================================
CHALLENGE 3 — Mask Email Addresses
============================================================================
QUESTION:
You have a string: "Contact: alice@example.com, bob@site.net". 
Mask the emails so that only the first letter and domain remain, e.g., "a****@example.com".
============================================================================
*/

let contacts = "Contact: alice@example.com, bob@site.net";

// ANSWER
let maskedEmails = contacts.replaceAll(/\b(\w)\w+@(\w+\.\w+)\b/g, "$1****@$2");

console.log(maskedEmails);
// RESULT:
// "Contact: a****@example.com, b****@site.net"
