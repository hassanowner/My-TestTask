/*
====================================================================
READING THE VALUE OF CHECKBOXES IN JAVASCRIPT
====================================================================

--------------------------------------------------------------------
MAIN TOPICS COVERED IN THIS SECTION
--------------------------------------------------------------------
1. What checkboxes represent in HTML forms
2. The value property of checkbox elements
3. The checked property and its Boolean behavior
4. Using the change event with checkboxes
5. Practical example and execution flow
6. Summary

====================================================================
1. WHAT ARE CHECKBOXES IN HTML FORMS?
====================================================================

A checkbox is a form control that allows the user to select or deselect
a specific option. Unlike text inputs, checkboxes do not primarily store
user-entered text; instead, they represent a binary choice.

A checkbox can be either:
- checked (selected)
- unchecked (not selected)

In JavaScript, checkboxes are represented as HTMLInputElement objects,
just like text and password fields.


====================================================================
2. THE value PROPERTY OF CHECKBOXES
====================================================================

Checkboxes also have a value property. By default, if no value attribute
is explicitly set in HTML, this property contains the string "on".

IMPORTANT NOTES
- The value property does not indicate whether the checkbox is selected
- It only represents the value submitted when the checkbox is checked
- The value remains the same whether the checkbox is checked or not

Example: */
```
<input type="checkbox" id="remember" name="remember">
```
checkbox.value  -> "on"

/*
====================================================================
3. THE checked PROPERTY
====================================================================

To determine whether a checkbox is selected, JavaScript provides the
checked property.

CHARACTERISTICS
- Returns true if the checkbox is checked
- Returns false if the checkbox is not checked
- The value is of Boolean type
- This is the correct way to test checkbox state


====================================================================
4. READING CHECKBOX VALUES USING THE change EVENT
====================================================================

The change event is triggered whenever the checked state of the checkbox
changes. This makes it ideal for reacting to user interaction.

----------------------------------------------------
HTML STRUCTURE (RELEVANT PART)
---------------------------------------------------- */
```
<input type="checkbox"
       id="remember"
       name="remember"
       value="on">
```

// JAVASCRIPT EXAMPLE

const checkbox = document.getElementById('remember');

checkbox.addEventListener('change', (e) => {
  console.log(checkbox.value);
  console.log(checkbox.checked);
});
/*
----------------------------------------------------
EXECUTION FLOW
----------------------------------------------------

1. The user clicks the checkbox
2. The checked state toggles
3. The change event is triggered
4. checkbox.value logs the string "on"
5. checkbox.checked logs true or false depending on state


  
====================================================================
5. PRACTICAL INTERPRETATION
====================================================================

If checkbox.checked is true:
- The user has selected the option
- The value will be included when the form is submitted

If checkbox.checked is false:
- The user has not selected the option
- The value will not be submitted

This behavior is commonly used for:
- Remember me options
- Accept terms and conditions
- Feature toggles
- User preferences


  
====================================================================
6. SUMMARY
====================================================================

Checkboxes are handled differently from text-based inputs in JavaScript.

Key points:
- The value property represents the submission value, not the state
- The checked property indicates whether the checkbox is selected
- checked returns a Boolean (true or false)
- The change event is the preferred way to track checkbox state changes

Correct checkbox handling always relies on the checked property rather
than the value property.

====================================================================
END OF FILE
==================================================================== */
