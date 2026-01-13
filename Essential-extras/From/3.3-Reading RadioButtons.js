/*
====================================================================
READING THE VALUE OF RADIO BUTTONS IN JAVASCRIPT
====================================================================

--------------------------------------------------------------------
MAIN TOPICS COVERED IN THIS SECTION
--------------------------------------------------------------------
1. What radio buttons are and how they work in groups
2. The role of the name attribute in radio button grouping
3. Accessing radio button groups via the form object
4. Iterating over radio buttons in a group
5. Using the change event to detect selection
6. Reading the selected radio button value
7. Displaying the selected value dynamically
8. Summary

====================================================================
1. WHAT ARE RADIO BUTTONS?
====================================================================

Radio buttons are form controls that allow users to select exactly one
option from a predefined set of choices. Unlike checkboxes, radio buttons
are mutually exclusive within a group.

This means:
- Only one radio button in the group can be selected at a time
- Selecting one automatically deselects the others


====================================================================
2. RADIO BUTTON GROUPING USING THE name ATTRIBUTE
====================================================================

Radio buttons are grouped by sharing the same value in their name
attribute. All radio buttons with the same name belong to one logical
group.

In this example, all radio buttons belong to the group named "order".

----------------------------------------------------
HTML FORM STRUCTURE (index.html)
---------------------------------------------------- */
```html
<form id="orderform" name="orderform" class="form center-block">

  <div class="form-group">
    <input type="radio" id="P001" name="order" value="P001">
    <label for="P001">Pizza Salami</label>
  </div>

  <div class="form-group">
    <input type="radio" id="P002" name="order" value="P002">
    <label for="P002">Pizza Margherita</label>
  </div>

  <div class="form-group">
    <input type="radio" id="P003" name="order" value="P003">
    <label for="P003">Pizza Tonno</label>
  </div>

  <div class="form-group">
    <input type="radio" id="P004" name="order" value="P004">
    <label for="P004">Pizza Mozzarella</label>
  </div>

  <div class="form-group">
    <input type="radio" id="P005" name="order" value="P005">
    <label for="P005">Pizza Hawaii</label>
  </div>

</form>

<div class="form Selection-block">
  Selection:
  <div id="selection"></div>
</div>
```

/*
====================================================================
3. ACCESSING RADIO BUTTONS VIA THE FORM OBJECT
====================================================================

Each form object exposes its form controls as properties. When multiple
controls share the same name, the corresponding property contains a
collection of those controls.

In this case:
- orderForm.order refers to all radio buttons with name="order"

----------------------------------------------------
JAVASCRIPT SETUP (main.js)
---------------------------------------------------- */

const messageContainer = document.getElementById('selection');
const orderForm = document.getElementById('orderform');

const radioButtons = orderForm.order;


/*
====================================================================
4. ITERATING OVER THE RADIO BUTTON GROUP
====================================================================

Since orderForm.order returns a collection, we must iterate over it to
attach event listeners to each radio button.

----------------------------------------------------
JAVASCRIPT EXAMPLE
---------------------------------------------------- */

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', (e) => {
    console.log(e.target.value);
    messageContainer.innerText = e.target.value;
  });
}


/*
====================================================================
5. HOW THE EVENT HANDLING WORKS
====================================================================

Execution flow:
1. The user selects a radio button
2. The previously selected radio button is deselected automatically
3. The change event fires on the newly selected radio button
4. e.target refers to the selected radio button
5. e.target.value contains the value of that radio button
6. The value is displayed in the selection container


====================================================================
6. IMPORTANT OBSERVATIONS
====================================================================

- Only one radio button can trigger the change event at a time
- The value property identifies the selected option
- The checked property exists but is rarely needed when reacting to
  change events
- Using e.target is reliable and works well with arrow functions


====================================================================
7. PRACTICAL USE CASES
====================================================================

Reading radio button values is commonly used for:
- Product selection
- Payment method choice
- Shipping options
- Survey answers
- Configuration settings


====================================================================
8. SUMMARY
====================================================================

Radio buttons represent mutually exclusive choices in a form.

Key points:
- Radio buttons are grouped using the name attribute
- The form object provides direct access to radio button groups
- The selected radio button is detected using the change event
- The selected value is read via e.target.value
- Iterating over the group allows consistent event handling

This approach provides a clean and structured way to handle radio button
selections in JavaScript.

====================================================================
END OF FILE
==================================================================== */
