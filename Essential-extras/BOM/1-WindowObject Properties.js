/* 
========================================================
WINDOW OBJECT PROPERTIES – SIZE, POSITION, AND SCROLLING
========================================================

1) TOPICS THAT WILL BE STUDIED
-----------------------------
This topic explains JavaScript `window` object properties that are used to:
- Determine the visible size of the browser window
- Determine the total size of the browser window
- Identify the position of the browser window on the screen
- Measure how much the web page has been scrolled

The properties covered are:
innerHeight, innerWidth, outerHeight, outerWidth,
screenX, screenY, scrollX (pageXOffset), scrollY (pageYOffset)

--------------------------------------------------------


2) FEATURES EXPLANATION
----------------------

• FEATURE 1: innerHeight
-----------------------
What it does:
Returns the height of the visible content area of the browser window.

Function:
Used to know how much vertical space is available for displaying web content.
Includes the horizontal scrollbar if present but excludes browser toolbars.

Explanation:
This property helps in responsive design and layout calculations by showing
the height the user can actually see.

Example: */
console.log(window.innerHeight);
/* Example output: 600 → visible content height is 600 pixels

--------------------------------------------------------

• FEATURE 2: innerWidth
----------------------
What it does:
Returns the width of the visible content area of the browser window.

Function:
Used to measure available horizontal space for page content.
Includes the vertical scrollbar if present but excludes browser UI elements.

Explanation:
Commonly used to adjust layouts based on screen size.

Example: */
console.log(window.innerWidth);
/* Example output: 1134 → visible content width is 1134 pixels

--------------------------------------------------------

• FEATURE 3: outerHeight
-----------------------
What it does:
Returns the total height of the browser window.

Function:
Measures the full browser height including toolbars, tabs, and scrollbars.

Explanation:
Useful when comparing browser size to screen size.

Example: */
console.log(window.outerHeight);
/* Example output: 720 → total browser height is 720 pixels

--------------------------------------------------------

• FEATURE 4: outerWidth
----------------------
What it does:
Returns the total width of the browser window.

Function:
Measures the full width including content area and browser UI.

Explanation:
Helps determine how much screen space the browser occupies.

Example: */
console.log(window.outerWidth);
/* Example output: 1280 → total browser width is 1280 pixels

--------------------------------------------------------

• FEATURE 5: screenX
-------------------
What it does:
Returns the horizontal position of the browser window on the screen.

Function:
Shows the distance between the left edge of the screen and the browser window.

Explanation:
Useful for multi-window and multi-monitor environments.

Example: */
console.log(window.screenX);
/* Example output: 100 → browser starts 100 pixels from the left of the screen

--------------------------------------------------------

• FEATURE 6: screenY
-------------------
What it does:
Returns the vertical position of the browser window on the screen.

Function:
Shows the distance between the top edge of the screen and the browser window.

Explanation:
Indicates how far down the browser window is placed.

Example: */
console.log(window.screenY);
/* Example output: 22 → browser is 22 pixels below the top of the screen

--------------------------------------------------------

• FEATURE 7: scrollX (pageXOffset)
--------------------------------
What it does:
Returns the number of pixels the document has been scrolled horizontally.

Function:
Tracks left-to-right scrolling of page content.

Explanation:
Used for horizontal scroll effects and interactions.

Example: */
console.log(window.scrollX);
console.log(window.pageXOffset);
/* Example output: 50 → page scrolled 50 pixels to the right

--------------------------------------------------------

• FEATURE 8: scrollY (pageYOffset)
--------------------------------
What it does:
Returns the number of pixels the document has been scrolled vertically.

Function:
Tracks up-and-down scrolling of page content.

Explanation:
Widely used for scroll animations, lazy loading, and navigation logic.

Example: */
console.log(window.scrollY);
console.log(window.pageYOffset);
/* Example output: 300 → page scrolled 300 pixels downward

--------------------------------------------------------


3) SUMMARY
---------
innerHeight / innerWidth → visible content size  
outerHeight / outerWidth → total browser window size  
screenX / screenY → browser position on the screen  
scrollX / scrollY → amount of page scrolling  

These properties are essential for responsive layouts, user interaction,
and dynamic web page behavior.

========================================================
END OF FILE
======================================================== */
