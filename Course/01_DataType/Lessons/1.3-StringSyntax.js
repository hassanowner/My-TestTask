/*
========================================================
String Syntax + Character Escape Sequences
Covered Topics:
- String Syntax
- Escape + Line Continue
- \n
========================================================
*/

// ======================================================
// String Syntax
// - Strings can be written using single or double quotes
// - Quotes inside strings must be handled correctly
// ======================================================

// Example: UI text message containing quotes
console.log('User says "Save changes"');
/*
Result:
User says "Save changes"
*/

// Example: UI label containing single quotes
console.log("Button label is 'Submit'");
/*
Result:
Button label is 'Submit'
*/


// ======================================================
// Character Escape Sequences
// - Backslash \ is used to escape special characters
// ======================================================

// Example: Escaping double quotes inside a string
console.log("Error message: \"Invalid input\"");
/*
Result:
Error message: "Invalid input"
*/

// Example: File path and escaped characters
console.log('File path: C:\\Program Files\\App\'s Folder');
/*
Result:
File path: C:\Program Files\App's Folder
*/


// ======================================================
// Escape + Line Continue
// - Backslash \ allows the string to continue on the next line
// ======================================================

// Example: Long log message written on multiple lines
console.log("Loading \
user \
data...");
/*
Result:
Loading user data...
*/


// ======================================================
// \n (New Line)
// - \n creates a new line inside the string
// ======================================================

// Example: Console output formatted in multiple lines
console.log("Status:\n- Connected\n- Authorized\n- Ready");
/*
Result:
Status:
- Connected
- Authorized
- Ready
*/
