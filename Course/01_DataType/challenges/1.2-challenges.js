/* ======================================================
   JAVASCRIPT STRING CHALLENGES
   Topics Covered:
   - String Syntax
   - Escape Sequences
   - Concatenation
   - Template Literals
======================================================== */

// ======================================================
// CHALLENGE 1: String Syntax
// ======================================================

/*
QUESTION:
Create two string messages:
1. A message using single quotes that says: User says "Save changes"
2. A message using double quotes that says: Button label is 'Submit'
Print both messages.
*/

let message1 = 'User says "Save changes"';
let message2 = "Button label is 'Submit'";

console.log(message1);
console.log(message2);

/* ANSWER:
User says "Save changes"
Button label is 'Submit'
*/

// ======================================================
// CHALLENGE 2: Escape Sequences
// ======================================================

/*
QUESTION:
1. Print: Error message: "Invalid input"
2. Print file path with escaped backslash and single quote: C:\Program Files\App's Folder
*/

let errorMessage = "Error message: \"Invalid input\"";
let filePath = 'File path: C:\\Program Files\\App\'s Folder';

console.log(errorMessage);
console.log(filePath);

/* ANSWER:
Error message: "Invalid input"
File path: C:\Program Files\App's Folder
*/

// ======================================================
// CHALLENGE 3: Line Continue and New Line (\n)
// ======================================================

/*
QUESTION:
1. Print a long message split into multiple lines using backslash:
"Loading user data..."
2. Print status messages each on a new line:
Status:
- Connected
- Authorized
- Ready
*/

console.log("Loading \
user \
data...");

console.log("Status:\n- Connected\n- Authorized\n- Ready");

/* ANSWER:
Loading user data...
Status:
- Connected
- Authorized
- Ready
*/

// ======================================================
// CHALLENGE 4: Concatenation
// ======================================================

/*
QUESTION:
1. Combine two string variables: "Welcome" and "User" using +
2. Combine two other strings: "Loading" and "Data" using +
3. Use comma in console.log to print: "Welcome" and "User"
*/

let partOne = "Welcome";
let partTwo = "User";

console.log(partOne + " " + partTwo);

let action = "Loading";
let resource = "Data";

console.log(action + " " + resource);

console.log(partOne, partTwo);

/* ANSWER:
Welcome User
Loading Data
Welcome User
*/

// ======================================================
// CHALLENGE 5: Template Literals
// ======================================================

/*
QUESTION:
1. Use template literals to print:
System supports "" '' \ JavaScript
for Web Development
2. Create a simple HTML snippet using template literals:
<section class="card">
  <div class="card-body">
    <h2>Dashboard</h2>
    <p>User Management Panel</p>
  </div>
</section>
*/

let messagePrefix = "System supports";
let frameworkName = "JavaScript";
let connector = "for";
let scopeName = "Web Development";

console.log(`${messagePrefix} "" '' \\ ${frameworkName}
${connector} ${scopeName}`);

let pageTitle = "Dashboard";
let pageDescription = "User Management Panel";

let markup = `
<section class="card">
  <div class="card-body">
    <h2>${pageTitle}</h2>
    <p>${pageDescription}</p>
  </div>
</section>
`;

document.write(markup);

/* ANSWER:
System supports "" '' \ JavaScript
for Web Development

A card section containing:
- h2 with text "Dashboard"
- paragraph with text "User Management Panel"
*/
