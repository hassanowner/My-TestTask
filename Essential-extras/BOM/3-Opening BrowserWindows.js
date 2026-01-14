/*
========================================================
OPENING NEW BROWSER WINDOWS USING window.open()
========================================================

1) TOPICS THAT WILL BE STUDIED
-----------------------------
This topic explains how to open new browser windows using JavaScript.
It focuses on:
- The window.open() method
- The parameters of window.open()
- How to control the appearance and behavior of a new browser window
- Common window features such as size, position, and UI elements

The main sections covered are:
1. window.open() method
2. Parameters of window.open()
3. Window feature options (size, position, UI controls)

--------------------------------------------------------


2) FEATURES EXPLANATION
----------------------

• FEATURE 1: window.open()
-------------------------
What it does:
Opens a new browser window (or tab, depending on browser settings).

Function:
Allows loading a specified URL in a new window and controlling
how that window looks and behaves.

Explanation:
The window.open() method can take up to three arguments:
1. URL → the web page to open
2. Window name → a name for the new window
3. Features string → controls size, position, and UI elements

Syntax: */
window.open(url, windowName, features);

// Basic Example:
window.open('https://example.com');

/* This opens the URL in a new browser window or tab.

--------------------------------------------------------

• FEATURE 2: URL PARAMETER
-------------------------
What it does:
Specifies the web page to load in the new window.

Function:
Determines the content shown inside the new browser window.

Explanation:
The URL can be an absolute URL or a relative path.
If omitted or empty, a blank window opens.

Example: */
window.open('https://example.com');

/* Meaning:
The new window loads the page located at example.com.

--------------------------------------------------------

• FEATURE 3: WINDOW NAME PARAMETER
---------------------------------
What it does:
Assigns a name to the new browser window.

Function:
Allows reusing or targeting the same window later.

Explanation:
If a window with the same name already exists,
the URL will open in that existing window instead of a new one.

Example: */
window.open('https://example.com', 'MyWindow');

/* Meaning:
The window is named "MyWindow".

--------------------------------------------------------

• FEATURE 4: FEATURES STRING
----------------------------
What it does:
Controls the appearance and behavior of the new browser window.

Function:
Allows setting window size, position, and enabling or disabling
browser UI elements.

Explanation:
The features string consists of property=value pairs.
Multiple pairs are separated by commas.
For boolean properties:
- yes / no or 1 / 0 can be used
- Omitting the value means "enabled"

Example: */
window.open(
  'https://example.com',
  'MyWindow',
  'width=500,height=500,resizable=yes,scrollbars=1,status'
);
/*
Meaning:
- Window width: 500 pixels
- Window height: 500 pixels
- Resizing allowed
- Scrollbars enabled
- Status bar enabled

--------------------------------------------------------



3) WINDOW FEATURE OPTIONS
------------------------

• SIZE FEATURES
--------------- */
width
Sets the width of the new browser window in pixels.

height
Sets the height of the new browser window in pixels.

innerWidth
Sets the width of the display (content) area in pixels.

innerHeight
Sets the height of the display (content) area in pixels.

// --------------------------------------------------------

// • POSITION FEATURES

left / screenX
Distance of the upper-left corner of the window
from the left edge of the screen (in pixels).

top / screenY
Distance of the upper-left corner of the window
from the top edge of the screen (in pixels).

--------------------------------------------------------

// UI ELEMENT FEATURES

location
Shows or hides the address bar.

menubar
Shows or hides the menu bar.

toolbar
Shows or hides the toolbar.

status
Shows or hides the status bar.

scrollbars
Enables or disables scrollbars.

resizable
Allows or prevents resizing of the window.

Values:
yes / no
1 / 0
or just the property name (enabled by default)

// --------------------------------------------------------


/* 
4) COMPLETE PRACTICAL EXAMPLE
-----------------------------  */
const linkOpen = document.getElementById('link-open');

linkOpen.addEventListener('click', (e) => {
  const url = document.getElementById('url').value;

  window.open(
    url,                 // URL to open
    'Window title',      // Name of the window
    'width=500,' +
    'height=500,' +
    'resizable=yes,' +
    'scrollbars=1,' +
    'status'
  );
});

/* Explanation:
- A new window opens when the element is clicked
- The URL is taken from an input field
- The window has fixed dimensions and enabled UI features

--------------------------------------------------------

5) SUMMARY
---------
window.open() opens a new browser window or tab  
The first parameter defines the URL  
The second parameter defines the window name  
The third parameter controls size, position, and UI elements  

Using feature properties, you can precisely control:
- Window dimensions
- Window placement
- User interface components

========================================================
END OF FILE
======================================================== */
