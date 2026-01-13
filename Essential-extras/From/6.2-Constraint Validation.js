/*
====================================================================
CONSTRAINT VALIDATION API – VALIDATION METHODS
====================================================================

--------------------------------------------------------------------
MAIN TOPIC
--------------------------------------------------------------------
Using validation-related methods provided by the HTML5 Constraint
Validation API to programmatically validate forms and form elements.

--------------------------------------------------------------------
TOPICS COVERED
-------------------------------------------------------------------- */
1. checkValidity() method
2. reportValidity() method
3. setCustomValidity() method
4. Real-world example: validating matching email fields
5. Summary

/*
====================================================================
1. checkValidity() METHOD
====================================================================

WHAT IT IS
The checkValidity() method checks whether a form element or an entire
form is valid according to HTML5 validation rules.

KEY CHARACTERISTICS
- Can be called on:
  - A single form element
  - An entire form
- Returns a Boolean value:
  - true → valid
  - false → invalid
- Does NOT display validation error messages

EXAMPLE USAGE */
// HTML
``` <input type="email" id="email" required> ```

// JavaScript
const email = document.getElementById('email');
const isValid = email.checkValidity();
console.log(isValid);

/*
RESULT
- true if the email is valid
- false if the email is missing or incorrectly formatted

====================================================================
2. reportValidity() METHOD
====================================================================

WHAT IT IS
The reportValidity() method works like checkValidity(), but also
displays the browser’s default validation error messages.

KEY CHARACTERISTICS
- Can be called on:
  - A single form element
  - An entire form
- Returns a Boolean value
- Automatically shows validation messages

EXAMPLE USAGE */
// HTML
```
<form id="myForm">
  <input type="email" required>
  <button type="submit">Submit</button>
</form>
```

// JavaScript
const form = document.getElementById('myForm');
form.reportValidity();

/*
RESULT
- If invalid, the browser displays validation messages
- If valid, the method returns true

====================================================================
3. setCustomValidity() METHOD
====================================================================

WHAT IT IS
The setCustomValidity() method allows developers to define custom
validation error messages.

KEY CHARACTERISTICS
- Accepts a string argument
- Non-empty string → validation error
- Empty string → validation passes
- Overrides native validation messages

EXAMPLE USAGE */
// HTML
``` <input type="text" id="username" required> ```

// JavaScript
const username = document.getElementById('username');
username.setCustomValidity('Username already exists.');

/*
RESULT
- Field becomes invalid
- Custom message is displayed

Clearing the error:
username.setCustomValidity('');

====================================================================
4. REAL-WORLD EXAMPLE: MATCHING EMAIL FIELDS
====================================================================

SCENARIO
A registration form asks the user to enter their email address twice to
avoid typing mistakes.

GOAL
- Ensure both email fields contain the same value
- Show a custom validation message if they do not match

--------------------------------------------------------------------
HTML STRUCTURE
-------------------------------------------------------------------- */
```
<input type="email" id="email" required>
<input type="email" id="email2" required>

<div id="email-error" style="display:none">
  <span class="error-message"></span>
</div>
```
/*
--------------------------------------------------------------------
JAVASCRIPT LOGIC
-------------------------------------------------------------------- */
function init() {
  const emailElement = document.getElementById('email');
  const emailElement2 = document.getElementById('email2');

  emailElement.addEventListener('change', validateEmail);
  emailElement2.addEventListener('change', validateEmail);
}

function validateEmail(e) {
  const emailElement = document.getElementById('email');
  const emailElement2 = document.getElementById('email2');

  if (emailElement.value !== emailElement2.value) {
    emailElement.setCustomValidity('E-mails must match.');
    emailElement2.setCustomValidity('E-mails must match.');
  } else {
    emailElement.setCustomValidity('');
    emailElement2.setCustomValidity('');
  }

  const errorContainer = document.getElementById('email-error');
  const messageContainer = errorContainer.querySelector('.error-message');

  if (!emailElement.validity.valid) {
    messageContainer.textContent = emailElement.validationMessage;
    errorContainer.style.display = 'block';
  } else {
    messageContainer.textContent = '';
    errorContainer.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', init);

/*
--------------------------------------------------------------------
STEP-BY-STEP EXPLANATION
--------------------------------------------------------------------
1. Both email inputs register the same validation function.
2. On change, their values are compared.
3. If values differ:
   - setCustomValidity() sets a custom error message.
4. If values match:
   - setCustomValidity('') clears the error.
5. validationMessage is displayed manually in a custom error container.

====================================================================
5. SUMMARY
====================================================================

- checkValidity() checks validity silently.
- reportValidity() checks validity and displays browser messages.
- setCustomValidity() enables custom validation logic and messages.
- Validation methods allow complex rules that HTML alone cannot handle.
- Combining native validation with JavaScript results in powerful,
  flexible, and user-friendly forms.

====================================================================
END OF FILE
==================================================================== */
