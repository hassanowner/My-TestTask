/*
====================================================================
BOM (Browser Object Model) — Location, Window Open/Close, & History
PROFESSIONAL & PROGRAMMATIC GUIDE
====================================================================

This file contains:
1) Location Object
2) Window Open & Close
3) History Object
4) Practical & Safe Examples
====================================================================
*/

/* ==================================================================
SECTION 1 — LOCATION OBJECT
================================================================== */

/*
OVERVIEW:
- window.location provides info about the current URL
- Allows navigation, reload, redirection
- Part of BOM (Browser Object Model)
*/

const currentLocation = window.location;
console.log(currentLocation);

/* PROPERTIES */
console.log("Full URL:", currentLocation.href);
console.log("Host:", currentLocation.host);
console.log("Hostname:", currentLocation.hostname);
console.log("Protocol:", currentLocation.protocol);
console.log("Hash:", currentLocation.hash);

/* METHODS */
// currentLocation.reload();          // Reload page
// currentLocation.assign("URL");     // Navigate, history preserved
// currentLocation.replace("URL");    // Navigate, history replaced

/*
COMPARISON:
Method       | History Entry | Back Button
------------ | ------------- | -------------
href         | Yes           | Allowed
assign()     | Yes           | Allowed
replace()    | No            | Blocked
reload()     | Same page     | Allowed
hash update  | Same page     | Allowed
*/


/* ==================================================================
SECTION 2 — WINDOW OPEN() & CLOSE()
================================================================== */

/*
OVERVIEW:
- window.open() opens new tab/window
- window.close() closes windows opened by JS
- Features string allows size/position control
*/

let openBtn = document.getElementById("openWin");
let closeBtn = document.getElementById("closeWin");

let controlledWindow = null;

if (openBtn) {
  openBtn.onclick = function () {
    controlledWindow = window.open(
      "https://developer.mozilla.org",
      "_blank",
      "width=600,height=400,left=150,top=150,menubar=no,resizable=yes"
    );
    console.log("Window Opened:", controlledWindow);
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
WINDOW FEATURES:
- width, height: dimensions in pixels
- left, top: position on screen
- menubar: yes/no
- resizable: yes/no

NOTES:
- Browsers may block popups
- window.close() only works on JS-opened windows
*/


/* ==================================================================
SECTION 3 — HISTORY OBJECT
================================================================== */

/*
OVERVIEW:
- window.history represents session history
- Allows programmatic navigation without direct URL
*/

const browserHistory = window.history;
console.log(browserHistory);

/* PROPERTIES */
console.log("History Length:", browserHistory.length);

/* METHODS */
// browserHistory.back();          // Go to previous entry
// browserHistory.forward();       // Go to next entry
// browserHistory.go(delta);       // Relative navigation (-1, 1, 0)

/* PRACTICAL BUTTON EXAMPLE */
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

/* ADVANCED NOTES:
- history.pushState({data}, "title", "url") adds a new entry without reload
- history.replaceState({data}, "title", "url") replaces current entry
- Commonly used in SPAs for URL control
*/


/* ==================================================================
FINAL SUMMARY
================================================================== */

/*
LOCATION:
- Read: href, host, hostname, protocol, hash
- Navigate: assign(), replace(), reload()

WINDOW:
- Open: window.open(url, target, features)
- Close: window.close() for JS-opened windows
- Features: width, height, left, top, menubar, resizable

HISTORY:
- back(), forward(), go(delta)
- length shows number of session entries
- pushState() / replaceState() for SPA navigation

BEST PRACTICES:
- Store references to opened windows
- Avoid uncontrolled redirects
- Use replace() in auth flows carefully
- Test history behavior before production
====================================================================
*/
