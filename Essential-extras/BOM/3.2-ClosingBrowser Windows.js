/*
========================================================
CLOSING BROWSER WINDOWS USING window.close()
========================================================

1) TOPICS THAT WILL BE STUDIED
-----------------------------
This topic explains how to close browser windows that were
opened using JavaScript. It focuses on:
- The window.close() method
- Storing a reference to an opened window
- Closing a window via user interaction
- Best practices and limitations of opening windows via JavaScript

The main sections covered are:
1. window.close() method
2. Window references
3. Practical example (open & close)
4. Important notes and browser behavior

--------------------------------------------------------


2) FEATURES EXPLANATION
----------------------

• FEATURE 1: window.close()
--------------------------
What it does:
Closes the current browser window or a referenced browser window.

Function:
Allows a script to close a window that was opened using JavaScript.

Explanation:
The close() method can only successfully close windows
that were opened by JavaScript using window.open().
For security reasons, browsers prevent scripts from
closing windows they did not open.

Syntax: */
window.close();

// Example:
windowReference.close();

/* Meaning:
The browser window referenced by windowReference is closed.

--------------------------------------------------------

• FEATURE 2: WINDOW REFERENCE
----------------------------
What it does:
Stores a reference to the newly opened browser window.

Function:
Allows later interaction with the opened window,
such as closing it or changing its content.

Explanation:
The window.open() method returns an object that represents
the opened browser window. This object must be saved in
a variable if you want to control the window later.

Example: */
const windowReference = window.open('https://example.com');

/* Meaning:
The variable windowReference now represents the opened window.

--------------------------------------------------------

• FEATURE 3: OPENING AND CLOSING A WINDOW (PRACTICAL EXAMPLE)
------------------------------------------------------------
Explanation:
In this example, one button opens a new browser window,
and another button closes the same window using its reference.

Example Code: */
const windowReference;
const linkOpen = document.getElementById('link-open');
const linkClose = document.getElementById('link-close');

linkOpen.addEventListener('click', (e) => {
  const url = document.getElementById('url').value;

  windowReference = window.open(
    url,
    'Window title',
    'width=500,height=500,resizable,scrollbars=yes,status=1'
  );
});

linkClose.addEventListener('click', (e) => {
  windowReference.close();
});

/* Meaning:
- Clicking "linkOpen" opens a new browser window
- The opened window is stored in windowReference
- Clicking "linkClose" closes the previously opened window

--------------------------------------------------------


3) IMPORTANT NOTES ABOUT JAVASCRIPT-OPENED WINDOWS
--------------------------------------------------
- Browsers often block windows opened by JavaScript
- Such windows are commonly associated with pop-up ads
- Most browsers require explicit user interaction
  (like a button click) to allow opening a window
- Opening windows automatically is discouraged
  due to poor user experience

--------------------------------------------------------


4) SUMMARY
---------
window.close() closes a browser window  
Only windows opened via window.open() can be closed  
A window reference must be stored to control the window  
Modern browsers restrict pop-up behavior for user safety  

JavaScript window opening and closing should be used
sparingly and only when necessary.

========================================================
END OF FILE
======================================================== */
