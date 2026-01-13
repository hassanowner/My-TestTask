/*
====================================================================
CSS PSEUDOCLASSES AND THE CONSTRAINT VALIDATION API
====================================================================

--------------------------------------------------------------------
MAIN TOPICS COVERED IN THIS SECTION
--------------------------------------------------------------------
1. CSS pseudoclasses for form validation
2. Meaning of :required, :invalid, and :valid
3. Styling form elements based on validation state
4. Limitations of pure HTML5 and CSS validation
5. Need for JavaScript-based validation
6. Introduction to the Constraint Validation API
7. willValidate property
8. validity property and the ValidityState object
9. validationMessage property
10. Summary

====================================================================
1. CSS PSEUDOCLASSES FOR FORMS
====================================================================

CSS provides special pseudoclasses that allow developers to style form
elements based on their validation state. These pseudoclasses work
directly with HTML5 native validation and require no JavaScript.

The most commonly used pseudoclasses for form validation are:
- :required
- :invalid
- :valid

These pseudoclasses make it possible to give users visual feedback
depending on whether a field is required, valid, or invalid.


====================================================================
2. THE :required PSEUDOCLASS
====================================================================

The :required pseudoclass targets all form elements that have the
required attribute.

CHARACTERISTICS
- Applied only to elements marked as required
- Does not check correctness, only presence
- Useful for highlighting mandatory fields

Example: */
input:required {
  border: 2px solid blue;
}

/*
====================================================================
3. THE :invalid PSEUDOCLASS
====================================================================

The :invalid pseudoclass targets form elements whose current value does
not satisfy the validation rules defined by HTML attributes.

Examples of invalid states:
- Required field is empty
- Email format is incorrect
- Number is outside min/max range
- URL format is invalid


====================================================================
4. THE :valid PSEUDOCLASS
====================================================================

The :valid pseudoclass targets form elements whose values satisfy all
defined validation rules.

This means:
- Required fields are filled
- Input format matches the expected type
- Numeric values fall within allowed ranges


====================================================================
5. COMBINING VALIDATION PSEUDOCLASSES IN CSS
====================================================================

CSS rules can be combined to precisely control the appearance of form
elements based on validation state. */

// CSS FILE (styles.css)

input:required:invalid,
input:focus:invalid {
  border: thick solid red;
}

input:required:valid {
  border: thick solid lightgreen;
}
/*
EXPLANATION
- Required inputs with invalid values get a red border
- Invalid inputs that are currently focused also get a red border
- Required inputs with valid values get a green border
- Feedback is immediate and automatic


====================================================================
6. LIMITATIONS OF PURE HTML5 AND CSS VALIDATION
====================================================================

While native validation and CSS pseudoclasses are powerful, they are also
limited.

LIMITATIONS
- Cannot check if a username already exists in a database
- Cannot compare values between two fields (e.g., password confirmation)
- Cannot define complex business rules
- Error messages are browser-dependent
- Limited control over message appearance and content

Because of these limitations, JavaScript is often required.


====================================================================
7. CONTROLLING NATIVE VALIDATION WITH JAVASCRIPT
====================================================================

HTML5 native validation can be accessed and controlled using JavaScript.
This is made possible by the Constraint Validation API.

This API provides properties and methods for:
- Forms
- Individual form elements

These allow developers to inspect and react to validation state
programmatically.


====================================================================
8. THE willValidate PROPERTY
====================================================================

The willValidate property indicates whether validation is enabled for a
given form element.

CHARACTERISTICS
- Returns true if the element participates in validation
- Returns false if the element is disabled
- Returns undefined for non-form elements

Example interpretation:
- Enabled input field → true
- Disabled input field → false
- <div> element → undefined

This property is useful when dynamically enabling or disabling fields.


====================================================================
9. THE validity PROPERTY (ValidityState OBJECT)
====================================================================

The validity property returns an object of type ValidityState. This
object contains detailed information about why an element is valid or
invalid.

The ValidityState object includes flags such as:
- valueMissing
- typeMismatch
- rangeUnderflow
- rangeOverflow
- patternMismatch
- valid

This allows fine-grained validation logic using JavaScript.


====================================================================
10. THE validationMessage PROPERTY
====================================================================

The validationMessage property returns the browser-generated message
shown when validation fails.

IMPORTANT CHARACTERISTICS
- Message content depends on the browser
- Not standardized across browsers
- Language and tone may differ

EXAMPLES
- Chrome / Opera: "Fill in this field."
- Firefox: "Please fill in this field."
- Safari: "Value missing"

Because of these differences, many developers prefer to implement custom
error messages using JavaScript.


====================================================================
11. SUMMARY
====================================================================

CSS pseudoclasses and the Constraint Validation API extend the power of
HTML5 native form validation.

Key points:
- :required, :invalid, and :valid provide visual feedback via CSS
- Native validation is automatic but limited
- Complex validation logic requires JavaScript
- The Constraint Validation API exposes validation state programmatically
- willValidate indicates whether validation applies
- validity provides detailed validation information
- validationMessage returns browser-generated error messages

A professional validation strategy typically combines:
- HTML5 native validation
- CSS pseudoclasses for visual feedback
- JavaScript for advanced validation logic
- Server-side validation for security

====================================================================
END OF FILE
==================================================================== */
