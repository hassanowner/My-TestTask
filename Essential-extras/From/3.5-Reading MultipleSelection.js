/*
====================================================================
READING THE VALUES OF MULTIPLE SELECTION LISTS IN JAVASCRIPT
====================================================================

--------------------------------------------------------------------
MAIN TOPICS COVERED IN THIS SECTION
--------------------------------------------------------------------
1. What multiple selection lists are
2. Difference between single and multiple selection lists
3. Limitations of selectedIndex in multiple selections
4. The selectedOptions property
5. Iterating over selected options
6. Dynamically displaying multiple selected values
7. Execution flow
8. Summary

====================================================================
1. WHAT ARE MULTIPLE SELECTION LISTS?
====================================================================

A multiple selection list is a variation of the <select> element that
allows users to select more than one option at the same time.

This behavior is enabled using the multiple attribute in HTML.

Users typically select multiple options by:
- Holding Ctrl (Windows/Linux)
- Holding Cmd (macOS)

Multiple selection lists are commonly used for:
- Ordering multiple products
- Selecting multiple preferences
- Assigning multiple categories or tags


====================================================================
2. HTML STRUCTURE OF A MULTIPLE SELECTION LIST
==================================================================== */

// HTML FILE (index.html)
```html
<select id="order" name="order" size="4" multiple>
  <option selected value="P001">Pizza Salami</option>
  <option value="P002">Pizza Margherita</option>
  <option value="P003">Pizza Tonno</option>
  <option value="P004">Pizza Mozzarella</option>
  <option value="P005">Pizza Hawaii</option>
</select>

<div id="selection"></div>
```
/*
EXPLANATION
- The multiple attribute enables multiple selection
- The size attribute controls visible options
- More than one <option> can be selected simultaneously  

  
====================================================================
3. WHY selectedIndex IS NOT SUFFICIENT
====================================================================

In single selection lists:
- selectedIndex identifies the selected option

In multiple selection lists:
- Multiple options can be selected at once
- selectedIndex returns only the first selected option
- Therefore, it does not represent the full selection

Because of this limitation, a different approach is required.


====================================================================
4. THE selectedOptions PROPERTY
====================================================================

The selectedOptions property solves this problem.

CHARACTERISTICS
- Returns an HTMLCollection
- Contains all selected <option> elements
- Each item is an HTMLOptionElement
- The collection updates automatically when selection changes

  
====================================================================
5. READING MULTIPLE SELECTED VALUES
==================================================================== */

// JAVASCRIPT FILE (main.js)

const order = document.getElementById('order');
const messageContainer = document.getElementById('selection');

order.addEventListener('change', updateOrder);

function updateOrder(event) {

  while (messageContainer.firstChild) {
    messageContainer.removeChild(messageContainer.firstChild);
  }

  const options = this.selectedOptions;

  for (let i = 0; i < options.length; i++) {

    const message =
      options[i].text + ' (' + options[i].value + ')';

    const div = document.createElement('div');
    const optionText = document.createTextNode(message);

    div.appendChild(optionText);
    messageContainer.appendChild(div);
  }
}

/*
====================================================================
6. STEP-BY-STEP EXECUTION FLOW
====================================================================

1. The user selects or deselects options in the list
2. The change event is triggered
3. updateOrder() is executed
4. Previously displayed results are removed
5. this.selectedOptions retrieves all selected options
6. Each selected option is processed in a loop
7. A new <div> is created for each selection
8. The text and value are displayed dynamically


====================================================================
7. IMPORTANT OBSERVATIONS
====================================================================

- selectedOptions only includes selected items
- Each option provides:
  - option.text (visible label)
  - option.value (submitted value)
- Clearing old content avoids duplicate output
- This approach scales well for any number of selections


====================================================================
8. PRACTICAL USE CASES
====================================================================

Multiple selection lists are ideal for:
- Ordering multiple items
- Choosing multiple interests
- Assigning multiple permissions
- Filtering results with multiple criteria


====================================================================
9. SUMMARY
====================================================================

Multiple selection lists allow users to select more than one option from
a list.

Key points:
- The multiple attribute enables multi-selection
- selectedIndex is not suitable for multiple selections
- selectedOptions provides access to all selected options
- Iterating over selectedOptions allows reading all values
- option.text and option.value provide user-friendly and technical data

This method provides a clean and reliable way to handle complex user
selections in JavaScript forms.

====================================================================
END OF FILE
==================================================================== */
