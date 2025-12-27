/*
========================================================
Template Literals (Template Strings)
========================================================
*/

// ======================================================
// Template Literals
// - Use backticks ` instead of quotes
// - Allow multi-line strings
// - Allow inserting variables using ${ }
// - Very useful for messages and HTML templates
// ======================================================


// ======================================================
// First Example
// - Comparing normal concatenation with template literals
// ======================================================

let messagePrefix = "System supports";
let frameworkName = "JavaScript";
let connector = "for";
let scopeName = "Web Development";

// Using concatenation
console.log(
  messagePrefix + " \"\" " + frameworkName +
  "\n" + connector + " " + scopeName
);

/*
Result:
System supports "" JavaScript
for Web Development
*/

// Using template literals
console.log(`${messagePrefix} "" '' \\ ${frameworkName}
${connector} ${scopeName}`);

/*
Result:
System supports "" '' \ JavaScript
for Web Development
*/


// ======================================================
// Second Example
// - Using template literals to generate HTML markup
// - Common usage in real projects and UI rendering
// ======================================================

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

/*
Result (on page):
A card section containing:
- h2 with text "Dashboard"
- paragraph with text "User Management Panel"
*/
