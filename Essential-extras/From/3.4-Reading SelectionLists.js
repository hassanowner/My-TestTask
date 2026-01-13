/*
====================================================================
READING THE VALUE OF SELECTION LISTS IN JAVASCRIPT
====================================================================

--------------------------------------------------------------------
MAIN TOPICS COVERED IN THIS SECTION
--------------------------------------------------------------------
1. What selection lists (<select>) are
2. Structure of a selection list and <option> elements
3. Using the change event with selection lists
4. Reading the selected value using the value property
5. Using selectedIndex to determine the selected option
6. Accessing <option> elements via item()
7. Difference between option value and option text
8. Summary

====================================================================
1. WHAT ARE SELECTION LISTS?
====================================================================

A selection list is a form control created using the <select> element.
It allows the user to choose one option from a predefined list of
options represented by <option> elements.

Only one option can be selected at a time unless the multiple attribute
is used.

Selection lists are commonly used for:
- Product selection
- Category choice
- Configuration options
- Navigation menus


====================================================================
2. STRUCTURE OF THE SELECTION LIST
==================================================================== */

// HTML FILE (index.html)
``` html
<form id="orderform" name="orderform" class="form center-block">

  <select id="order" name="order" class="form-control">
    <option selected value="P001">Pizza Salami</option>
    <option value="P002">Pizza Margherita</option>
    <option value="P003">Pizza Tonno</option>
    <option value="P004">Pizza Mozzarella</option>
    <option value="P005">Pizza Hawaii</option>
  </select>

</form>

<div class="form Selection-block">
  Selection:
  <div id="selection"></div>
</div>
```
/*
Each <option> element has:
- a value attribute (machine-readable)
- text content (human-readable)


====================================================================
3. USING THE change EVENT WITH SELECTION LISTS
====================================================================

Selection lists react to the change event. This event is triggered
whenever the user selects a different option.

The change event is ideal for responding immediately to user selection.


====================================================================
4. REGISTERING THE EVENT LISTENER
==================================================================== */

// JAVASCRIPT FILE (main.js)

function init() {

  const messageContainer = document.getElementById('selection');
  const order = document.getElementById('order');

  order.addEventListener('change', updateOrder);

}
/*
This time, a regular function is used as the event listener, which makes
the keyword this refer to the <select> element itself.


====================================================================
5. READING THE SELECTED VALUE
==================================================================== */

function updateOrder(event) {

  const value = this.value;

}
/*
EXPLANATION
- this refers to the HTMLSelectElement
- this.value returns the value of the currently selected <option>
- This is the simplest way to read the selected value


====================================================================
6. USING selectedIndex
==================================================================== */

function updateOrder(event) {

  const index = this.selectedIndex;

}
/*
EXPLANATION
- selectedIndex returns the numeric index of the selected option
- Indexing starts at 0
- The index corresponds to the order of <option> elements in HTML


====================================================================
7. ACCESSING THE SELECTED <option> ELEMENT
==================================================================== */

function updateOrder(event) {

  const index = this.selectedIndex;
  const option = this.item(index);

}
/*
EXPLANATION
- item(index) returns the <option> element at that position
- The returned object is of type HTMLOptionElement
- This allows access to additional option-specific properties


====================================================================
8. READING OPTION TEXT AND VALUE
==================================================================== */

function updateOrder(event) {

  const value = this.value;
  const index = this.selectedIndex;
  const option = this.item(index);
  const text = option.text;

  const message = text + ' (' + value + ')';
  messageContainer.innerText = message;

}
/*
EXPLANATION
- option.value returns the same value as this.value
- option.text returns the visible text shown to the user
- Combining both creates meaningful output for display


====================================================================
9. EXECUTION FLOW
====================================================================

1. The user selects an option from the list
2. The change event is triggered
3. updateOrder() is executed
4. The selected value and text are retrieved
5. A formatted message is created
6. The message is displayed in the output container


====================================================================
10. SUMMARY
====================================================================

Selection lists are powerful form controls for structured user input.

Key points:
- Selection lists use the <select> element
- The change event detects user selection
- this.value retrieves the selected option value
- selectedIndex identifies the selected option position
- item() provides access to the HTMLOptionElement
- option.text returns the user-visible label

Using these properties together allows precise and flexible handling of
selection lists in JavaScript.

====================================================================
END OF FILE
==================================================================== */
