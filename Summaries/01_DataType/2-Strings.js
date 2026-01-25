/*
========================================================
JavaScript Strings — Summary
========================================================

MAIN TOPICS:
1) String Syntax
2) Character Escape Sequences
3) Escape + Line Continue
4) New Line (\n)
5) Concatenation
6) Template Literals (Template Strings)
========================================================
*/


/*
========================================================
1) STRING SYNTAX (Summary)
========================================================

- Strings represent textual data in JavaScript.
- They can be written using:
  - Single quotes ' '
  - Double quotes " "
- The opening and closing quotes must match.
- Quotes inside a string must be handled carefully to avoid syntax errors.
- Choosing single or double quotes depends on readability and content.
- Strings are commonly used for UI text, messages, labels, and output.
========================================================
*/


/*
========================================================
2) CHARACTER ESCAPE SEQUENCES (Summary)
========================================================

- Escape sequences allow special characters to be included inside strings.
- The backslash (\) is used as an escape character.
- Escaping is necessary when the string contains:
  - Quotes similar to the string delimiter
  - Backslashes
  - Special formatting characters
- Commonly used in file paths, messages, and error texts.
- Escape sequences help keep strings valid and readable.
========================================================
*/


/*
========================================================
3) ESCAPE + LINE CONTINUE (Summary)
========================================================

- A backslash (\) at the end of a line allows a string
  to continue on the next line in the source code.
- JavaScript treats the continued lines as a single string.
- Useful for long strings written across multiple lines.
- Mostly used for readability in logs or messages.
========================================================
*/


/*
========================================================
4) NEW LINE (\n) (Summary)
========================================================

- \n is a special escape sequence that inserts a new line.
- It controls formatting inside the string output.
- Commonly used in:
  - Console output
  - Logs
  - Multi-line messages
- Helps structure text clearly when displaying information.
========================================================
*/


/*
========================================================
5) CONCATENATION (Summary)
========================================================

- Concatenation means joining multiple strings together.
- The + operator is used to combine strings.
- Spaces must be added manually when needed.
- Often used to build messages dynamically.
- console.log can also use commas, which automatically
  insert spaces between values.
- Concatenation is simple but can become hard to read
  with complex strings.
========================================================
*/


/*
========================================================
6) TEMPLATE LITERALS (TEMPLATE STRINGS) (Summary)
========================================================

- Template literals use backticks ` ` instead of quotes.
- They allow:
  - Multi-line strings without escape characters
  - Variable insertion using ${ }
- Improve readability compared to traditional concatenation.
- Widely used for:
  - Dynamic messages
  - HTML generation
  - UI rendering
- Support escape characters naturally inside the string.
- Considered the modern and preferred way to build strings.
========================================================
*/
