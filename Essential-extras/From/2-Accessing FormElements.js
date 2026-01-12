/*
====================================================================
ACCESSING FORM ELEMENTS IN JAVASCRIPT
====================================================================

MAIN TOPIC
Accessing Individual Form Elements in JavaScript

--------------------------------------------------------------------
TOPICS COVERED
--------------------------------------------------------------------
1. What are form elements?
2. Structure of the example form
3. Accessing form elements using DOM selection methods
4. Accessing form elements using the form.elements property
5. How indexing inside form.elements works
6. Practical comparison between the two approaches
7. Summary

  
====================================================================
1. WHAT ARE FORM ELEMENTS?
====================================================================

Form elements are all interactive controls contained inside a <form>
element. These include:
- text inputs
- password inputs
- checkboxes
- radio buttons
- select boxes
- buttons

In JavaScript, each of these elements is represented as an object that
can be accessed, inspected, and manipulated.

  
====================================================================
2. FORM STRUCTURE (HTML ANALYSIS)
==================================================================== */

// HTML FILE (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Form example</title>
  <link rel="stylesheet" href="styles/main.css">
</head>

<body>

<form id="login" name="login" method="post" action="login.html"
      class="form col-xs-4 center-block">

  <div class="form-group">
    <label for="username">Username:</label>
    <input type="text"
           id="username"
           name="username"
           class="form-control"
           placeholder="Username">
  </div>

  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password"
           id="password"
           name="password"
           class="form-control"
           placeholder="Password">
  </div>

  <div class="checkbox">
    <label>
      <input type="checkbox"
             id="remember"
             name="remember"
             value="on">
      Remember login on this computer
    </label>
  </div>

  <button type="submit"
          id="submit"
          name="submit"
          class="btn btn-primary btn-block">
    Login
  </button>

</form>

<script src="scripts/main.js"></script>
</body>
</html>
```
/*
This form contains exactly four form controls:
1. Username input
2. Password input
3. Remember checkbox
4. Submit button


  
====================================================================
3. ACCESSING FORM ELEMENTS USING DOM SELECTION METHODS
====================================================================

DESCRIPTION
DOM selection methods allow you to access form elements directly from
the document object. These methods are not form-specific and work for
any element in the DOM tree.    */

// JAVASCRIPT FILE (main.js)

// Access By Id

const fieldUserNameById = document.getElementById('username');
const fieldPasswordById = document.getElementById('password');
const fieldRememberById = document.getElementById('remember');
const buttonSubmitById = document.getElementById('submit');

console.log(fieldUserNameById); //  ﻿<input type="text" id="username" name="username" class="form-control" placeholder="Username">
console.log(fieldUserNameById.id); // "username"
console.log(fieldPasswordById.id); // "password"
console.log(fieldRememberById.id); // "remember"
console.log(buttonSubmitById.id);  // "submit"

/*
EXPLANATION
- Each element is accessed independently
- The search starts from the document root
- This approach is explicit and very reliable
- Best suited when element IDs are known and unique


====================================================================
4. ACCESSING FORM ELEMENTS USING form.elements
====================================================================

DESCRIPTION
Every form object provides an elements property. This property contains
a live collection of all form controls inside that form.

This approach is form-centric rather than document-centric.

----------------------------------------------------
STEP 1: ACCESS THE FORM
---------------------------------------------------- */

const form = document.getElementById('login');

/* form :
▼<form id="login" name="login" method="post" action="login.html" class="form col-xs-4 center-block">
  ►<div class="form-group"> </div>
  ►<div class="form-group"> </div>
  ►<div class="checkbox"> </div>
    <button type="submit" id="submit" name="submit" class="btn btn-primary btn-block"> Login </button>
 </form>

/*----------------------------------------------------
STEP 2: ACCESS THE ELEMENTS COLLECTION
----------------------------------------------------*/

const formElements = form.elements;

/* formElements:
<input> </input>
<input> </input>
<input> </input>
<button> </button>
*/
console.log(formElements.length); // 4

/*
EXPLANATION
- form.elements returns an HTMLFormControlsCollection
- Only elements belonging to the form are included
- The order matches the order in the HTML source

----------------------------------------------------
STEP 3: ACCESS ELEMENTS BY INDEX
---------------------------------------------------- */

const fieldUserName = formElements[0];
const fieldPassword = formElements[1];
const fieldRemember = formElements[2];
const buttonSubmit = formElements[3];

console.log(fieldUserName); // ﻿<input type="text" id="username" name="username" class="form-control" placeholder="Username">
console.log(fieldUserName.id); // "username"
console.log(fieldPassword.id); // "password"
console.log(fieldRemember.id); // "remember"
console.log(buttonSubmit.id);  // "submit"


/*
====================================================================
5. HOW INDEXING IN form.elements WORKS
====================================================================

The index of each element is determined by:
- Its position inside the <form>
- The order in which it appears in the HTML

IMPORTANT NOTES
- Adding or removing elements changes the index order
- Hidden inputs are also included
- Text nodes and labels are ignored

Because of this, index-based access is powerful but requires care.

====================================================================
6. COMPARISON OF BOTH APPROACHES
====================================================================

DOM SELECTION METHODS
- Access elements globally
- Explicit and readable
- Safer for large applications
- Independent of form structure

form.elements
- Access elements relative to the form
- Compact and structured
- Sensitive to HTML order changes
- Ideal for form processing logic

====================================================================
7. SUMMARY
====================================================================

JavaScript provides two primary ways to access form elements:

1. DOM selection methods
   - document.getElementById()
   - document.querySelector()
   - Best for clarity and maintainability

2. form.elements
   - Access elements as a grouped collection
   - Best for structured form handling

Professional JavaScript code often combines both approaches depending on
context and complexity.

====================================================================
END OF FILE
==================================================================== */
