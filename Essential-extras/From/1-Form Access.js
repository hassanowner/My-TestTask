/*
====================================================
ACCESSING FORMS IN JAVASCRIPT
====================================================

MAIN TOPIC
Accessing Forms in JavaScript

----------------------------------------------------
TOPICS THAT WILL BE STUDIED
----------------------------------------------------
1. Meaning of accessing forms
2. Accessing forms using DOM selection methods
3. Accessing forms using document.forms
4. Accessing forms using the form name as a document property
5. Comparison between methods
6. Summary

----------------------------------------------------
WHAT DOES ACCESSING FORMS MEAN?
----------------------------------------------------
Accessing forms means obtaining a reference to an HTML <form> element
using JavaScript so you can read values, validate data, submit the form,
prevent submission, or modify form elements dynamically.

====================================================
FEATURE 1: ACCESSING FORMS USING DOM SELECTION METHODS
====================================================

WHAT IS THIS FEATURE?
DOM selection methods are general JavaScript methods used to select any
HTML element, including forms. These methods are modern, flexible, and
recommended.

----------------------------------------------------
HTML FILE (index.html)
---------------------------------------------------- */
```html
<!DOCTYPE html>
<html>
<head>
  <title>Accessing Forms</title>
</head>
<body>

  <form 
  id="login"
  name="login-name"
  class="auth-form">
    <input type="text" name="username">
    <input type="password" name="password">
  </form>

  <script src="script.js"></script>
</body>
</html>
```
/* ----------------------------------------------------
JAVASCRIPT FILE (script.js)
---------------------------------------------------- */

1) getElementById()
// Selects the form using its id.

const formById = document.getElementById('login');
console.log(formById.id); // login
console.log(formByName[0]); // <input type="text" name="username">


2) getElementsByName()
//Selects elements by the name attribute. Returns a collection.

const formByName = document.getElementsByName('login-name')[0];
console.log(formByName.id); // login
console.log(formByName[0]); // <input type="text" name="username">


3) getElementsByClassName()
// Selects elements by class name.

const formByClass = document.getElementsByClassName('auth-form')[0];
console.log(formByClass.id); // login


4) getElementsByTagName()
// Selects all form elements.

const formByTag = document.getElementsByTagName('form')[0];
console.log(formByTag.id); // login
console.log(formByName[0]); // <input type="text" name="username">


5) querySelector()
// Uses CSS selectors and returns the first match.

const formBySelector = document.querySelector('form');
console.log(formBySelector.id); // login


6) querySelectorAll()
// Returns all matching form elements.

const forms = document.querySelectorAll('form');
console.log(forms[0].id); // login


/*
====================================================
FEATURE 2: ACCESSING FORMS USING document.forms
====================================================

WHAT IS THIS FEATURE?
document.forms is a built-in collection that contains all forms in the
document in the order they appear in HTML.

----------------------------------------------------
JAVASCRIPT EXAMPLES
---------------------------------------------------- */

// Access by index:
const formByFormsField = document.forms[0];
console.log(formByFormsField.id); // login

// Access by name:
const formByNameInForms = document.forms['login'];
console.log(formByNameInForms.id); // login

/*
WHEN TO USE THIS METHOD
- When working only with forms
- When the form order is known
- When shorter code is preferred



====================================================
FEATURE 3: ACCESSING FORMS USING THE FORM NAME
====================================================

WHAT IS THIS FEATURE?
If a form has a name attribute, JavaScript creates a direct property on
the document object with the same name.

----------------------------------------------------
HTML REQUIREMENT
----------------------------------------------------
<form name="login" id="login">

----------------------------------------------------
JAVASCRIPT EXAMPLE
---------------------------------------------------- */
const formByNameField = document.login;
console.log(formByNameField.id); // login

/*
LIMITATIONS
- Can conflict with other document properties
- Less clear and less safe
- Not recommended for large or modern applications

====================================================
COMPARISON BETWEEN METHODS
====================================================

DOM Selection Methods
- Modern
- Safe
- Flexible
- Recommended

document.forms
- Form-specific
- Clean and simple
- Less flexible

document.formName
- Old-style
- Risk of conflicts
- Not recommended

====================================================
SUMMARY
====================================================
Accessing forms is essential for handling user input in JavaScript.
There are three main ways to access forms:
1. DOM selection methods (best and recommended)
2. document.forms (form-focused and simple)
3. document.formName (short but outdated)

Modern JavaScript applications should primarily use:
document.getElementById()
document.querySelector()

====================================================
END OF FILE
==================================================== */
