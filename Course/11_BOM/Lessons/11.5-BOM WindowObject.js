/*
====================================================================
TOPIC: BOM (Browser Object Model)
Window Object — open() and close()
====================================================================

STUDIED TOPICS & AVAILABLE FEATURES
- Understanding window.open() method
- Understanding window.close() method
- Window target behavior
- Window features and positioning
- Browser security limitations

WINDOW METHODS
- window.open()
- window.close()

WINDOW FEATURES
- width
- height
- left
- top
- menubar
- resizable
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
  <title>Window Open Demo</title>
</head>

<body>
  <button id="openWin">Open Window</button>
  <button id="closeWin">Close Window</button>
</body>
</html>

NOTE:
- This HTML is commented because the file is JavaScript only.
====================================================================
*/


/*
====================================================================
SECTION 1: window.open() OVERVIEW
====================================================================
- window.open() opens a new browser window or tab
- The behavior depends on browser settings
- It may be blocked if not triggered by user interaction
====================================================================
*/


/*
SYNTAX:
window.open(
  URL,            // Optional
  Target,         // Optional
  WindowFeatures, // Optional
  ReplaceHistory  // Optional (Boolean)
)
*/


/*
====================================================================
SECTION 2: BEGINNER EXAMPLE — BASIC USAGE
====================================================================
- Opens a blank page in a new tab
- No custom size or features
====================================================================
*/

let basicWindow = window.open("about:blank", "_blank");

/*
RESULT:
- A new blank tab is opened
*/


/*
====================================================================
SECTION 3: OPENING A WINDOW WITH FEATURES
====================================================================
- Opening a controlled popup window
- Setting dimensions and position
====================================================================
*/

let advancedWindow = window.open(
  "https://example.com",
  "_blank",
  "width=500,height=300,left=200,top=100,menubar=no"
);

/*
RESULT:
- A new window opens with specified size and position
- Menu bar is hidden (if browser allows)
*/


/*
====================================================================
SECTION 4: WINDOW FEATURES EXPLANATION
====================================================================
- width   : window width in pixels
- height  : window height in pixels
- left    : distance from left side of screen
- top     : distance from top of screen
- menubar : show or hide menu (yes | no)
====================================================================
*/


/*
====================================================================
SECTION 5: window.close() OVERVIEW
====================================================================
- window.close() closes the current window
- Can ONLY close windows opened by JavaScript
- Browsers block closing manually opened tabs
====================================================================
*/


/*
====================================================================
SECTION 6: PRACTICAL CONTROL USING BUTTONS
====================================================================
*/

let openBtn = document.getElementById("openWin");
let closeBtn = document.getElementById("closeWin");

let controlledWindow = null;

if (openBtn) {
  openBtn.onclick = function () {
    controlledWindow = window.open(
      "https://developer.mozilla.org",
      "_blank",
      "width=600,height=400,left=150,top=150"
    );
  };
}

if (closeBtn) {
  closeBtn.onclick = function () {
    if (controlledWindow) {
      controlledWindow.close();
      console.log("Window Closed Successfully");
    }
  };
}


/*
====================================================================
SECTION 7: SECURITY & BEHAVIOR NOTES
====================================================================
- Browsers may block popups without user interaction
- window.close() works only on JS-opened windows
- Popup features may be ignored based on browser policy
====================================================================
*/


/*
====================================================================
FINAL TECHNICAL SUMMARY
====================================================================
- window.open() allows controlled navigation
- Feature strings customize window appearance
- window.close() requires window ownership
- Modern browsers enforce strict popup rules
====================================================================
*/
