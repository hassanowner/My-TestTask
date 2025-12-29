/*
====================================================
DOM — Create Elements (Complete Educational Guide)
====================================================

This lesson explains how to:
- Create elements dynamically
- Create text, comments, and attributes
- Attach attributes to elements
- Append nodes correctly to the DOM
- Understand node building order

Everything here mirrors real-world DOM usage.
====================================================
*/


//////////////////////////////////////////////////////
// 1) CREATE ELEMENT NODE
//////////////////////////////////////////////////////

/*
createElement(tagName)
----------------------
- Creates a new HTML element
- Does NOT appear on the page until appended
*/

let myElement = document.createElement("div");

console.log(myElement);
// Result:
// <div></div>


//////////////////////////////////////////////////////
// 2) CREATE ATTRIBUTE NODE
//////////////////////////////////////////////////////

/*
createAttribute(attributeName)
------------------------------
- Creates an attribute node
- Must be attached to an element
*/

let myAttr = document.createAttribute("data-custom");


//////////////////////////////////////////////////////
// 3) CREATE TEXT NODE
//////////////////////////////////////////////////////

/*
createTextNode(text)
--------------------
- Creates plain text
- Treated as a DOM node
*/

let myText = document.createTextNode("Product One");


//////////////////////////////////////////////////////
// 4) CREATE COMMENT NODE
//////////////////////////////////////////////////////

/*
createComment(text)
-------------------
- Creates an HTML comment
- Visible only in DevTools
*/

let myComment = document.createComment("This Is Div");


//////////////////////////////////////////////////////
// 5) ADD CLASS & ATTRIBUTES TO ELEMENT
//////////////////////////////////////////////////////

/*
Adding class using property
---------------------------
*/

myElement.className = "product";

/*
Attach attribute node explicitly
--------------------------------
*/

myElement.setAttributeNode(myAttr);

/*
Set attribute directly (recommended way)
-----------------------------------------
*/

myElement.setAttribute("data-test", "Testing");


//////////////////////////////////////////////////////
// 6) APPEND NODES INSIDE ELEMENT
//////////////////////////////////////////////////////

/*
appendChild(node)
-----------------
- Adds a node as the LAST child
- Order matters
*/

// Append comment first
myElement.appendChild(myComment);

/*
DOM result so far:
<div class="product" data-custom="" data-test="Testing">
  <!-- This Is Div -->
</div>
*/

// Append text
myElement.appendChild(myText);

/*
DOM result:
<div class="product" data-custom="" data-test="Testing">
  <!-- This Is Div -->
  Product One
</div>
*/


//////////////////////////////////////////////////////
// 7) APPEND ELEMENT TO THE PAGE
//////////////////////////////////////////////////////

/*
Nothing is displayed until appended
to the document
*/

document.body.appendChild(myElement);

/*
Final DOM:
<body>
  <div class="product" data-custom="" data-test="Testing">
    <!-- This Is Div -->
    Product One
  </div>
</body>
*/


//////////////////////////////////////////////////////
// 8) IMPORTANT NOTES
//////////////////////////////////////////////////////

/*
✔ createElement → creates HTML elements
✔ createTextNode → safer than innerHTML
✔ createComment → useful for debugging
✔ createAttribute → rarely used today
✔ setAttribute → preferred method
✔ appendChild → moves node if reused
*/


//////////////////////////////////////////////////////
// 9) REAL-WORLD USE CASE
//////////////////////////////////////////////////////

/*
- Building products dynamically
- Rendering data from APIs
- Avoiding innerHTML security issues
- Creating reusable UI components
*/


//////////////////////////////////////////////////////
// SUMMARY
//////////////////////////////////////////////////////

/*
✔ DOM elements are created in memory first
✔ Nodes must be appended to appear
✔ appendChild order controls structure
✔ Prefer createElement + text nodes
✔ Avoid innerHTML when possible
*/
/*
====================================================
End of DOM Create Elements Guide
====================================================*/
