/*
====================================================================
NATIVE FORM VALIDATION IN HTML5
====================================================================

--------------------------------------------------------------------
MAIN TOPICS COVERED IN THIS SECTION
--------------------------------------------------------------------
1. What form validation means
2. Difference between JavaScript validation and native HTML5 validation
3. Meaning of the term “native” in HTML5
4. HTML5 validation attributes
5. Practical example of a form using native validation
6. How each validation attribute works
7. Benefits and limitations of native validation
8. Summary

====================================================================
1. WHAT IS FORM VALIDATION?
====================================================================

Form validation is the process of ensuring that data entered by the user
meets specific rules before it is submitted to the server.

Examples of validation rules:
- Required fields must not be empty
- Email addresses must follow a valid format
- Numbers must fall within a certain range
- URLs must be valid

Validation helps prevent incorrect, incomplete, or harmful data from
being processed.


====================================================================
2. NATIVE VS JAVASCRIPT VALIDATION
====================================================================

Traditionally, form validation was implemented using JavaScript. This
required writing custom logic to check every input field.

HTML5 introduced native validation, which allows browsers to perform
many validation tasks automatically without JavaScript.

NATIVE VALIDATION
- Built into HTML5
- Triggered automatically by the browser
- Requires no JavaScript code
- Uses HTML attributes

JAVASCRIPT VALIDATION
- Fully customizable
- Requires additional code
- More complex to implement


====================================================================
3. WHAT DOES “NATIVE” MEAN?
====================================================================

In programming, the term native refers to features that are built directly
into a language or platform.

In the context of HTML5:
- Native validation means validation features are part of HTML itself
- No external libraries or JavaScript are required
- The browser handles validation automatically


====================================================================
4. HTML5 VALIDATION ATTRIBUTES
====================================================================

HTML5 provides several attributes that trigger native validation.

COMMON ATTRIBUTES
- required
- type
- min
- max
- pattern
- minlength
- maxlength

In this example, the focus is on:
- required
- type (text, email, url, number)
- min and max


====================================================================
5. HTML FORM USING NATIVE VALIDATION
==================================================================== */

// HTML FILE (index.html)
``` html
<form id="register" name="register" method="post" action="register.html">

  <div class="form-group">
    <label for="username">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      required
      class="form-control">
  </div>

  <div class="form-group">
    <label for="email">E-mail:</label>
    <input
      type="email"
      id="email"
      name="email"
      required
      class="form-control">
  </div>

  <div class="form-group">
    <label for="url">Website:</label>
    <input
      type="url"
      id="website"
      name="website"
      class="form-control">
  </div>

  <div class="form-group">
    <label for="age">Age:</label>
    <input
      type="number"
      id="age"
      name="age"
      min="18"
      max="99"
      value="18"
      class="form-control">
  </div>

  <button
    type="submit"
    id="submit"
    name="submit"
    class="btn btn-primary btn-block">
    Login
  </button>

</form>
```

/*
====================================================================
6. HOW EACH VALIDATION RULE WORKS
====================================================================

USERNAME FIELD
- type="text"
- required
The browser prevents submission if the field is empty.

EMAIL FIELD
- type="email"
- required
The browser checks:
- The field is not empty
- The value matches a valid email format

WEBSITE FIELD
- type="url"
The browser only accepts valid URLs (e.g., https://example.com).

AGE FIELD
- type="number"
- min="18"
- max="99"
The browser only allows numeric input within the specified range.


====================================================================
7. HOW NATIVE VALIDATION BEHAVES
====================================================================

When the user clicks the submit button:
1. The browser checks all validation rules
2. If a rule fails, submission is blocked
3. The browser shows an error message automatically
4. Focus moves to the invalid field

No JavaScript is required for this behavior.


====================================================================
8. BENEFITS AND LIMITATIONS
====================================================================

BENEFITS
- Easy to implement
- No JavaScript required
- Consistent basic validation
- Better user experience with instant feedback

LIMITATIONS
- Error messages are browser-dependent
- Limited customization
- Not sufficient for complex business rules
- Should be complemented by server-side validation


====================================================================
9. SUMMARY
====================================================================

HTML5 native validation provides a powerful and simple way to validate
user input.

Key points:
- Native validation is built into HTML5
- Validation is triggered using HTML attributes
- Browsers automatically block invalid submissions
- Common rules include required fields, format checking, and ranges
- Native validation simplifies form handling
- JavaScript validation is still useful for advanced scenarios

Native HTML5 validation should be used as the first layer of form
validation, always combined with server-side checks for security.

====================================================================
END OF FILE
==================================================================== */
