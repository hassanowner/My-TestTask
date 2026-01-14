/*
========================================================
CHANGING THE SIZE AND POSITION OF A BROWSER WINDOW
========================================================

1) TOPICS THAT WILL BE STUDIED
-----------------------------
This topic explains JavaScript `window` object methods that allow you to:
- Move the browser window on the screen
- Resize the browser window
- Scroll the content inside the browser window

The methods covered are:
1. moveBy()
2. moveTo()
3. resizeBy()
4. resizeTo()
5. scrollBy()
6. scrollTo()

--------------------------------------------------------


2) FEATURES EXPLANATION
----------------------

• FEATURE 1: moveBy()
--------------------
What it does:
Moves the current browser window relative to its current position.

Function:
Allows shifting the browser window horizontally and vertically
by a specified number of pixels.

Explanation:
The window is moved from its current position.
Positive values move it right and down, negative values move it left and up.

Syntax: */
window.moveBy(x, y);

// Example:
window.moveBy(200, 200);

/* Meaning:
The browser window moves 200 pixels to the right
and 200 pixels downward from its current position.

--------------------------------------------------------

• FEATURE 2: moveTo()
--------------------
What it does:
Moves the browser window to an exact position on the screen.

Function:
Places the window at a specific horizontal and vertical coordinate.

Explanation:
Unlike moveBy(), this method ignores the current position
and moves the window directly to the given coordinates.

Syntax: */
window.moveTo(x, y);

// Example:
window.moveTo(200, 200);

/* Meaning:
The browser window is placed 200 pixels from the left
and 200 pixels from the top of the screen.

--------------------------------------------------------

• FEATURE 3: resizeBy()
----------------------
What it does:
Resizes the browser window relative to its current size.

Function:
Increases or decreases the window width and height
by a specified number of pixels.

Explanation:
Positive values enlarge the window,
negative values shrink the window.

Syntax: */
window.resizeBy(widthChange, heightChange);

// Examples:
window.resizeBy(200, 200);
// → Enlarges the window by 200 pixels in width and height

window.resizeBy(-200, -200);
// → Shrinks the window by 200 pixels in width and height

/* --------------------------------------------------------

• FEATURE 4: resizeTo()
----------------------
What it does:
Resizes the browser window to a fixed size.

Function:
Sets the window to an exact width and height.

Explanation:
This method does not depend on the current size.
It forces the browser window to the specified dimensions.

Syntax: */
window.resizeTo(width, height);

// Example:
window.resizeTo(1024, 768);

/* Meaning:
The browser window becomes exactly
1024 pixels wide and 768 pixels tall.

--------------------------------------------------------

• FEATURE 5: scrollBy()
----------------------
What it does:
Scrolls the content of the browser window relative
to the current scroll position.

Function:
Moves the page content horizontally and vertically
by a specified number of pixels.

Explanation:
This method scrolls the page incrementally.
Positive values scroll right/down, negative values scroll left/up.

Syntax: */
window.scrollBy(x, y);

// Example:
window.scrollBy(200, 200);

/* Meaning:
The page content scrolls 200 pixels to the right
and 200 pixels downward from its current position.

--------------------------------------------------------

• FEATURE 6: scrollTo()
----------------------
What it does:
Scrolls the content of the browser window to a specific position.

Function:
Jumps directly to a given scroll coordinate.

Explanation:
Unlike scrollBy(), this method scrolls to an exact position
instead of moving relative to the current scroll.

Syntax: */
window.scrollTo(x, y);

// Example:
window.scrollTo(200, 200);

/* Meaning:
The page content scrolls directly to
200 pixels from the left and 200 pixels from the top.

--------------------------------------------------------


3) SUMMARY
---------
moveBy()     → moves the window relative to its current position  
moveTo()     → moves the window to an exact screen position  
resizeBy()   → resizes the window relative to its current size  
resizeTo()   → resizes the window to a fixed size  
scrollBy()   → scrolls page content relative to current scroll  
scrollTo()   → scrolls page content to a fixed position  

These methods allow full control over the browser window’s
movement, size, and scrolling behavior.

========================================================
END OF FILE
======================================================== */
