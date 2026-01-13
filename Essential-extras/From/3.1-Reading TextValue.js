/*
====================================================================
READING THE VALUE OF TEXT FIELDS AND PASSWORD FIELDS
====================================================================

--------------------------------------------------------------------
MAIN TOPICS COVERED IN THIS SECTION
--------------------------------------------------------------------
1. What does reading the value of text and password fields mean
2. Using the value property with standard event listeners
3. The role of the change event and execution context
4. Using this inside regular functions
5. Arrow functions and why this behaves differently
6. Accessing values using cached variables
7. Accessing values using the event object (e.target)
8. Summary

====================================================================
1. WHAT IS READING THE VALUE OF TEXT AND PASSWORD FIELDS?
====================================================================

Reading the value of text fields and password fields means retrieving
the text entered by the user into <input> elements of type "text" or
"password" using JavaScript.

This is done through the value property of the corresponding input
element, which always stores the current content of the field.

IMPORTANT CHARACTERISTICS
- The value is always stored as plain text
- Password fields are visually hidden but not encrypted
- Both text and password inputs are HTMLInputElement objects
- The value property reflects the latest user input

BENEFITS
- Enables form validation
- Allows authentication logic (login systems)
- Makes dynamic feedback possible
- Essential for handling user input correctly



====================================================================
2. READING VALUES USING REGULAR EVENT LISTENERS
====================================================================

In this approach, event listeners are attached to input fields using
regular (non-arrow) functions. When using this syntax, the keyword
this refers to the element that triggered the event.

----------------------------------------------------
HTML STRUCTURE (RELEVANT PART)
---------------------------------------------------- */

<input type="text" id="username" name="username">
<input type="password" id="password" name="password">

// JAVASCRIPT EXAMPLE

const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');

inputUsername.addEventListener('change', function (e) {
  console.log(this.value);
});

inputPassword.addEventListener('change', function (e) {
  console.log(this.value);
});
/*
----------------------------------------------------
EXPLANATION
----------------------------------------------------

- The change event fires when the input loses focus after modification
- this refers to the element on which the listener was registered
- this.value retrieves the entered text
- This behavior works because regular functions create their own
  execution context

This is the most intuitive way to access form values inside event
listeners.


  
====================================================================
3. ARROW FUNCTIONS AND THE BEHAVIOR OF this
====================================================================

Arrow functions behave differently from regular functions. They do not
have their own this value. Instead, they inherit this from the surrounding
scope.

Because of this, using this inside an arrow function does NOT refer to
the input element. */

// JAVASCRIPT EXAMPLE WITH ARROW FUNCTIONS
const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');

inputUsername.addEventListener('change', (e) => {
  console.log(inputUsername.value);
  console.log(this.value); //undefined
});

inputPassword.addEventListener('change', (e) => {
  console.log(inputPassword.value);
  console.log(this.value); //undefined
});
/*
----------------------------------------------------
EXPLANATION
----------------------------------------------------

- inputUsername.value works because the variable is explicitly referenced
- this.value is undefined because arrow functions do not bind this
- this refers to the outer lexical context, not the input element

This means arrow functions cannot rely on this for element access.


====================================================================
4. ACCESSING VALUES USING THE EVENT OBJECT
====================================================================

Another reliable method is accessing the element through the event object.
The event object contains a reference to the element that triggered the
event via e.target.

This approach works equally well with arrow functions and regular
functions. */

// JAVASCRIPT EXAMPLE

inputUsername.addEventListener('change', (e) => {
  console.log(e.target.value);
});

inputPassword.addEventListener('change', (e) => {
  console.log(e.target.value);
});
/*
----------------------------------------------------
EXPLANATION
----------------------------------------------------

- e.target refers to the element that fired the event
- e.target.value accesses the current input value
- This method avoids issues related to this
- Considered the safest and most explicit approach



====================================================================
5. SUMMARY
====================================================================

Reading values from text and password fields is a fundamental task in
JavaScript form handling.

Key points:
- Input values are accessed using the value property
- Regular functions bind this to the element that triggered the event
- Arrow functions do not bind this and require alternative access methods
- Values can be accessed safely using:
  - Cached element variables
  - The event object (e.target)

In professional JavaScript development, using e.target.value is often
preferred for clarity, predictability, and compatibility with arrow
functions.

====================================================================
END OF FILE
==================================================================== */
