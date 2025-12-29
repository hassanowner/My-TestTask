/*
====================================================================
TOPIC: DOM Manipulation — Creating Elements, Text Nodes, and Appending
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) Creating DOM Elements
2) Creating Text Nodes
3) Appending Text Nodes to Elements
4) Appending Elements to Other Elements
5) Adding Class Names
6) Appending the Final Element to the Document
====================================================================
*/

/* ================================================================
1) Creating DOM Elements
- document.createElement() is used to create HTML elements dynamically.
- These elements exist in memory and are NOT visible yet.
================================================================ */

let myMainElement = document.createElement("div"); // Create a <div> element
let myHeading = document.createElement("h2");      // Create an <h2> element
let myParagraph = document.createElement("p");     // Create a <p> element

// No output yet — elements are created but not added to the page


/* ================================================================
2) Creating Text Nodes
- document.createTextNode() creates text content.
- Text nodes must be placed INSIDE elements.
================================================================ */

let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

// Text nodes are created but not displayed yet


/* ================================================================
3) Appending Text Nodes to Elements
- appendChild() places the text inside its element.
================================================================ */

// Add text to <h2>
myHeading.appendChild(myHeadingText);

// Result inside h2:
// <h2>Product Title</h2>


/* ================================================================
4) Appending Elements to Other Elements
- We build the structure step by step.
================================================================ */

// Add <h2> to the main <div>
myMainElement.appendChild(myHeading);

// Current structure:
// <div>
//   <h2>Product Title</h2>
// </div>


/* ================================================================
5) Adding Paragraph Text and Appending It
================================================================ */

// Add text to <p>
myParagraph.appendChild(myParagraphText);

// Add <p> to the main <div>
myMainElement.appendChild(myParagraph);

// Current structure:
// <div>
//   <h2>Product Title</h2>
//   <p>Product Description</p>
// </div>


/* ================================================================
6) Adding Class Names
- className assigns a CSS class to an element.
================================================================ */

myMainElement.className = "product";

// Result:
// <div class="product">
//   <h2>Product Title</h2>
//   <p>Product Description</p>
// </div>


/* ================================================================
7) Appending the Final Element to the Document
- The element becomes visible after appending to the DOM.
================================================================ */

document.body.appendChild(myMainElement);

// FINAL OUTPUT IN HTML:
// <body>
//   <div class="product">
//     <h2>Product Title</h2>
//     <p>Product Description</p>
//   </div>
// </body>
