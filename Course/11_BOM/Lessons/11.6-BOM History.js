/*
====================================================================
TOPIC: BOM (Browser Object Model)
History API — Professional & Programmatic Guide
====================================================================

STUDIED TOPICS & AVAILABLE FEATURES
- Understanding the History object
- Navigating browser history programmatically
- History properties and methods
- Basic vs applied usage
- Modern History API overview (advanced)

HISTORY OBJECT PROPERTIES
- history.length

HISTORY OBJECT METHODS
- history.back()
- history.forward()
- history.go(delta)

ADVANCED METHODS (OVERVIEW ONLY)
- history.pushState()
- history.replaceState()
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
  <title>History API Demo</title>
</head>

<body>
  <button id="goBack">Back</button>
  <button id="goForward">Forward</button>
</body>
</html>

NOTE:
- This HTML is commented because the file is JavaScript only.
====================================================================
*/


/*
====================================================================
SECTION 1: history OBJECT OVERVIEW
====================================================================
- history is part of the Browser Object Model
- It represents the session history of the browser tab
- It allows navigation without direct URL assignment
====================================================================
*/

const browserHistory = window.history;
console.log(browserHistory);


/*
====================================================================
SECTION 2: history.length PROPERTY
====================================================================
- Indicates the number of entries in the session history
- Includes the current page
====================================================================
*/

const historySize = browserHistory.length;
console.log(historySize);

/*
PROGRAM OUTPUT:
- Logs an integer representing session history length
*/


/*
====================================================================
SECTION 3: BEGINNER EXAMPLE — BASIC NAVIGATION
====================================================================
- Simple backward navigation
====================================================================
*/

// browserHistory.back();

/*
RESULT:
- Navigates to the previous history entry
*/


/*
====================================================================
SECTION 4: forward() METHOD
====================================================================
- Moves forward in the session history
====================================================================
*/

// browserHistory.forward();

/*
RESULT:
- Navigates to the next entry (if available)
*/


/*
====================================================================
SECTION 5: go(delta) METHOD
====================================================================
- Navigates relative to the current position
====================================================================
*/

// browserHistory.go(-1); // Same as back()
// browserHistory.go(1);  // Same as forward()
// browserHistory.go(0);  // Reloads current page

/*
RESULT:
- Navigation depends on provided delta value
*/


/*
====================================================================
SECTION 6: PRACTICAL BUTTON CONTROL EXAMPLE
====================================================================
*/

let backBtn = document.getElementById("goBack");
let forwardBtn = document.getElementById("goForward");

if (backBtn) {
  backBtn.onclick = function () {
    browserHistory.back();
    console.log("Navigating Back");
  };
}

if (forwardBtn) {
  forwardBtn.onclick = function () {
    browserHistory.forward();
    console.log("Navigating Forward");
  };
}


/*
====================================================================
SECTION 7: ADVANCED KNOWLEDGE OVERVIEW
====================================================================
- pushState() adds a new entry to history
- replaceState() modifies the current entry
- These methods DO NOT trigger page reload
- Commonly used in Single Page Applications (SPA)
====================================================================
*/

/*
EXAMPLE (REFERENCE ONLY):

history.pushState(
  { page: "profile" },
  "Profile",
  "/profile"
);
*/


/*
====================================================================
FINAL TECHNICAL SUMMARY
====================================================================
- history allows controlled navigation
- length provides session size
- go() enables relative movement
- Modern APIs allow URL control without reload
====================================================================
*/
