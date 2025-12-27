/*
================================================================================
 JavaScript Regular Expressions (Regex)
================================================================================

INTRODUCTION:
-------------
A Regular Expression (often called "Regex") is a special pattern used to search,
match, extract, and validate text. Instead of writing long logical conditions or
loops, regex allows us to describe complex text rules using a short and powerful
syntax.

Regular Expressions are built into JavaScript and many other programming
languages, making them a universal and essential tool for developers.


WHAT IS A REGULAR EXPRESSION?
-----------------------------
A Regular Expression is a sequence of characters that defines a search pattern.
This pattern is used to check whether a string matches specific rules, contains
certain characters, or follows a required format.

In JavaScript, regex is commonly written between two slashes:
    /pattern/flags

Example (syntax only, no execution here):
    /abc/g


PURPOSE OF REGULAR EXPRESSIONS:
-------------------------------
Regular Expressions are used to:
- Validate user input (emails, passwords, phone numbers)
- Search for specific text inside large strings
- Extract parts of a string
- Replace text that matches a pattern
- Enforce formatting rules


WHEN DO WE USE REGEX?
--------------------
We use Regular Expressions when:
- Simple string methods are not enough
- We need pattern-based searching
- The text structure follows rules
- Validation must be strict and accurate

Examples of real-world usage:
- Checking if an email address is valid
- Validating IP addresses
- Matching URLs
- Filtering phone numbers
- Parsing log files


WHY USE REGEX INSTEAD OF LOOPS OR CONDITIONS?
---------------------------------------------
Without regex, we would often need:
- Multiple if-statements
- Nested loops
- Long and hard-to-read logic

Regex provides:
- Cleaner code
- Better readability once understood
- Higher performance for pattern matching
- Reusable and scalable solutions


REGEX IN JAVASCRIPT:
-------------------
JavaScript provides built-in support for Regular Expressions through:
- RegExp object
- String methods such as:
  - match()
  - test()
  - replace()
  - search()
  - split()

Regex can be created in two ways:
1) Literal Syntax:
   /pattern/flags

2) Constructor Syntax:
   new RegExp("pattern", "flags")


IMPORTANT NOTE:
---------------
⚠️ All practical examples, patterns, flags, and real use cases
   (Email, IP, URL, Numbers, Words, etc.)
   will be fully explained step-by-step in the NEXT TOPIC.

================================================================================
 END OF INTRODUCTION
================================================================================
*/
