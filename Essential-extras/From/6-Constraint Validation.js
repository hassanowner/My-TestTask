/*
====================================================================
CONSTRAINT VALIDATION API – DETAILED VALIDITY CHECKING
====================================================================

--------------------------------------------------------------------
TOPIC OVERVIEW
--------------------------------------------------------------------
This section explains how HTML5 native validation can be inspected and
controlled using JavaScript through the Constraint Validation API.

We focus on three core properties:*/
- willValidate
- validity
- validationMessage

/*
And especially on the ValidityState object and its Boolean properties.

====================================================================
1. willValidate PROPERTY
====================================================================

The willValidate property indicates whether a form element is subject to
validation or not.

CHARACTERISTICS
- Returns true if validation is enabled for the element
- Returns false if the element is disabled
- Returns undefined for elements that are not form controls (e.g. <div>)

Example interpretation:
- Enabled <input> field → true
- Disabled <input> field → false
- Non-form element → undefined

This property is useful when forms are dynamically modified using
JavaScript.


====================================================================
2. validationMessage PROPERTY
====================================================================

The validationMessage property returns the browser-generated error
message when an input field is invalid.

IMPORTANT NOTES
- Message depends on the browser
- Message text is not standardized
- Language and wording differ across browsers

Typical examples:
- Chrome / Opera: "Fill in this field."
- Firefox: "Please fill in this field."
- Safari: "Value missing"

Because of these differences, developers often replace native messages
with custom ones.


====================================================================
3. validity PROPERTY (ValidityState OBJECT)
====================================================================

The validity property returns an object of type ValidityState.

This object contains multiple Boolean properties that describe exactly
why an input field is invalid or valid.

Each property answers a specific validation question.


====================================================================
4. ValidityState PROPERTIES (TABLE 7.3 EXPLAINED)
==================================================================== */

Property: valid
Description:
- true → the input contains no validation errors
- false → the input contains at least one validation error

--------------------------------------------------

Property: valueMissing
Description:
- true → required field is empty
- false → value is present or field is not required

--------------------------------------------------

Property: typeMismatch
Description:
- true → value does not match the required type
  (e.g. invalid email format)
- false → value matches the required type

--------------------------------------------------

Property: patternMismatch
Description:
- true → value does not match the pattern attribute
- false → value matches the defined pattern

--------------------------------------------------

Property: tooLong
Description:
- true → value exceeds the maximum allowed length
- false → value length is acceptable

--------------------------------------------------

Property: tooShort
Description:
- true → value is shorter than the minimum length
- false → value length is acceptable

--------------------------------------------------

Property: rangeUnderflow
Description:
- true → value is below the minimum allowed range
- false → value is within range

--------------------------------------------------

Property: rangeOverflow
Description:
- true → value is above the maximum allowed range
- false → value is within range

--------------------------------------------------

Property: stepMismatch
Description:
- true → value does not match the step increment
- false → value matches the step definition

--------------------------------------------------

Property: badInput
Description:
- true → value is syntactically invalid
  (e.g. letters in a number field)
- false → value format is acceptable

--------------------------------------------------

Property: customError
Description:
- true → validation error was set manually using JavaScript
- false → no custom error exists


/*
====================================================================
5. PRACTICAL JAVASCRIPT EXAMPLE
====================================================================

The following example demonstrates how to read validation information
from an email input field using JavaScript.

--------------------------------------------------
JAVASCRIPT CODE
-------------------------------------------------- */

function init() {
  const emailElement = document.getElementById('email');
  emailElement.addEventListener('change', validateEmail);
}

function validateEmail(e) {
  const event = (e ? e : window.event);

  const emailElement = (
    event.target ? event.target : event.srcElement
  );

  console.log(emailElement.willValidate);
  console.log(emailElement.validity);
  console.log(emailElement.validity.valueMissing);
  console.log(emailElement.validity.valid);
  console.log(emailElement.validationMessage);
}

document.addEventListener('DOMContentLoaded', init);

/*
--------------------------------------------------
STEP-BY-STEP EXPLANATION
--------------------------------------------------

1. The init function runs after the page is fully loaded.
2. The email input field is selected by its ID.
3. A change event listener is registered.
4. When the value changes:
   - willValidate indicates whether validation is active
   - validity returns the ValidityState object
   - valueMissing checks if the field is empty
   - valid indicates overall validity
   - validationMessage outputs the browser error message


====================================================================
6. WHY THIS APPROACH IS IMPORTANT
====================================================================

Using the Constraint Validation API allows:
- Precise error detection
- Custom validation logic
- Custom error messages
- Better user experience
- Integration with server-side validation

Native HTML validation provides the foundation, but JavaScript gives full
control.

====================================================================
END OF FILE
==================================================================== */
