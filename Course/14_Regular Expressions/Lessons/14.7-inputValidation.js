/*
================================================================================
 JavaScript Regular Expressions Tutorial
 Topic: Input Validation with Regular Expressions
================================================================================

OVERVIEW:
---------
Form input validation is a key part of web development. It ensures that users
enter data in the correct format before the form is submitted. Incorrect input
can lead to errors, security vulnerabilities, or bad user experience.

Regular expressions (RegEx) are patterns used to match character combinations
in strings. They are perfect for validating inputs such as usernames, emails,
phone numbers, and passwords.

KEY CONCEPTS:
-------------
1) Patterns define what is considered valid input.
2) The test() method checks whether a string matches a pattern, returning true or false.
3) Anchors (^ and $) ensure the input starts or ends with a specific sequence.
4) Quantifiers define how many times a character or pattern can occur.
5) Character classes allow matching letters, digits, or special sets.

================================================================================
*/

/*
================================================================================
 EXAMPLE 1: Username Validation
================================================================================
Goal:
-----
Validate a username according to these rules:
- Must contain 4 to 12 characters
- Only letters, numbers, or underscores allowed
*/

let usernamePattern = /^\w{4,12}$/;

// Test examples
console.log(usernamePattern.test("user_123")); // true
console.log(usernamePattern.test("a"));        // false (too short)
console.log(usernamePattern.test("user!@#"));  // false (invalid characters)
console.log(usernamePattern.test("longusername123")); // false (too long)

/*
EXPLANATION:
-------------
^        -> start of string
\w       -> matches letters, numbers, or underscores
{4,12}  -> 4 to 12 characters
$        -> end of string
================================================================================
*/


/*
================================================================================
 EXAMPLE 2: Email Validation
================================================================================
Goal:
-----
Ensure the email follows the standard format: local@domain.tld
- Local part: letters, numbers, dots, underscores, plus, percent
- Domain: letters, numbers, dots
- TLD: at least 2 letters
*/

let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Test examples
console.log(emailPattern.test("user@example.com")); // true
console.log(emailPattern.test("user.name+1@site.net")); // true
console.log(emailPattern.test("invalid@.com")); // false
console.log(emailPattern.test("no-at-symbol.com")); // false

/*
EXPLANATION:
-------------
[a-zA-Z0-9._%+-]+ -> local part: one or more allowed characters
@                 -> literal at symbol
[a-zA-Z0-9.-]+    -> domain
\.                -> literal dot
[a-zA-Z]{2,}      -> TLD with at least 2 letters
^ and $           -> ensures full string match
================================================================================
*/


/*
================================================================================
 EXAMPLE 3: Password Strength Validation
================================================================================
Goal:
-----
Password must meet these requirements:
- At least 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- Optional special characters
*/

let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

// Test examples
console.log(passwordPattern.test("StrongPass1")); // true
console.log(passwordPattern.test("weakpass"));    // false (no uppercase, no number)
console.log(passwordPattern.test("SHORT1"));      // false (too short)
console.log(passwordPattern.test("Pass1234!"));   // true

/*
EXPLANATION:
-------------
(?=.*[A-Z]) -> at least one uppercase letter
(?=.*[a-z]) -> at least one lowercase letter
(?=.*\d)    -> at least one digit
.{8,}       -> minimum 8 characters
^ and $     -> match entire string
================================================================================
*/


/*
================================================================================
 EXAMPLE 4: Phone Number Validation
================================================================================
Goal:
-----
Match phone numbers in the format: (1234) 567-8901
*/

let phonePattern = /\(\d{4}\)\s\d{3}-\d{4}/;

// Test examples
console.log(phonePattern.test("(1234) 567-8901")); // true
console.log(phonePattern.test("1234-567-8901"));   // false
console.log(phonePattern.test("(5678) 123-4567")); // true

/*
EXPLANATION:
-------------
\(\d{4}\) -> four digits inside parentheses
\s         -> space
\d{3}-\d{4} -> three digits, dash, four digits
================================================================================
*/


/*
================================================================================
 BEST PRACTICES:
----------------
1) Always anchor patterns (^ and $) to avoid partial matches.
2) Use character classes and quantifiers to define allowed input clearly.
3) Test regex thoroughly with both valid and invalid examples.
4) Combine regex with conditional logic to prevent form submission for invalid input.
================================================================================
 END OF INPUT VALIDATION TUTORIAL
================================================================================
*/
