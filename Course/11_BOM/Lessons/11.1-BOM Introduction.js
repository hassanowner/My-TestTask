/*
====================================================================
TOPIC: BOM (Browser Object Model) — Window Object Introduction
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) What Is BOM?
2) Window Object Overview
3) Relationship Between Window & Document
4) Global Scope and Window
5) What We Can Do With Window Object
6) Practical Example: Changing Page Title
====================================================================
*/


/*
====================================================================
HTML STRUCTURE (REFERENCE ONLY)
====================================================================

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Default Title</title>
</head>

<body>
</body>
</html>

NOTE:
- This HTML is commented because this is a JavaScript-only file.
====================================================================
*/


/*
===============================================================
1) What Is BOM?
===============================================================
- BOM stands for Browser Object Model
- It represents the browser environment, not the web page itself
- The main object in BOM is the Window object
*/


/*
===============================================================
2) Window Object Overview
===============================================================
- window represents the browser window or tab
- It is the top-level object in the browser
*/


/*
===============================================================
3) Relationship Between Window & Document
===============================================================
- window contains the document object
- document represents the HTML page (DOM)
- Accessing document through window is optional
*/

/*
These are equivalent:
window.document
document
*/


/*
===============================================================
4) Global Scope and Window
===============================================================
- All global variables, functions, and objects become
  properties of the window object
- console and document are members of window
*/

/*
Examples:
window.console
window.document
window.alert
*/


/*
===============================================================
5) What Can We Do With Window Object?
===============================================================
- Open a new window or tab
- Close the current window
- Move the window
- Resize the window
- Print the document
- Execute code after a delay (setTimeout / setInterval)
- Fully control the URL (location object)
- Store data inside the browser (localStorage, sessionStorage)
*/


/*
===============================================================
6) Practical Example: Changing Page Title
===============================================================
- Accessing document via window
- Updating the title of the page dynamically
*/

window.document.title = "Hello JS";

/*
RESULT:
- The browser tab title changes to "Hello JS"
*/
