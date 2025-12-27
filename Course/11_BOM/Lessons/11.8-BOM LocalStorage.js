/*
====================================================================
TOPIC: BOM (Browser Object Model)
Local Storage — Persistent Client-Side Storage
====================================================================

STUDIED TOPICS & AVAILABLE FEATURES
- What is Local Storage
- setItem()     → Store data
- getItem()     → Read data
- removeItem()  → Delete single entry
- clear()       → Delete all entries
- key()         → Access stored keys by index

IMPORTANT CHARACTERISTICS
- Data is stored as STRING
- Data persists until manually removed
- Works on HTTP and HTTPS (separately)
- Data is isolated per domain
- Limited behavior in Private / Incognito mode
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
  <title>Local Storage Demo</title>
</head>

<body>
  <button id="save">Save Theme</button>
  <button id="remove">Remove Theme</button>
</body>
</html>

NOTE:
- HTML is commented because this is a JavaScript-only file.
====================================================================
*/


/*
====================================================================
SECTION 1: WHAT IS LOCAL STORAGE
====================================================================
- Local Storage is part of the BOM
- Stores data in the browser permanently
- Data survives page reload and browser restart
- Maximum size is ~5MB per origin
====================================================================
*/

console.log(window.localStorage);
console.log(typeof window.localStorage);


/*
====================================================================
SECTION 2: BEGINNER EXAMPLE — BASIC STORAGE OPERATIONS
====================================================================
- Demonstrates storing and reading simple values
====================================================================
*/

/*
SET VALUES
*/

localStorage.setItem("themeColor", "#1e90ff");
localStorage.setItem("textSize", "18px");


/*
GET VALUES
*/

console.log(localStorage.getItem("themeColor"));
console.log(localStorage.getItem("textSize"));


/*
ACCESS USING key()
*/

console.log(localStorage.key(0));
console.log(localStorage.key(1));


/*
====================================================================
SECTION 3: ALTERNATIVE ACCESS SYNTAX (NOT RECOMMENDED)
====================================================================
- JavaScript allows object-style access
- setItem / getItem is preferred for clarity
====================================================================
*/

localStorage.fontStyle = "italic";
console.log(localStorage.fontStyle);


/*
====================================================================
SECTION 4: REMOVING DATA
====================================================================
*/

/*
REMOVE SINGLE ITEM
*/

// localStorage.removeItem("textSize");


/*
CLEAR ALL STORED DATA
*/

// localStorage.clear();


/*
====================================================================
SECTION 5: PRACTICAL EXAMPLE — SAVING USER PREFERENCE
====================================================================
- Saves user-selected background color
- Applies it automatically on page reload
====================================================================
*/

const DEFAULT_COLOR = "#ffffff";
const SAVED_COLOR_KEY = "uiBackground";

/*
Apply saved color on load
*/

document.body.style.backgroundColor =
  localStorage.getItem(SAVED_COLOR_KEY) || DEFAULT_COLOR;


/*
Save data using button
*/

let saveButton = document.getElementById("save");

if (saveButton) {
  saveButton.onclick = function () {
    localStorage.setItem(SAVED_COLOR_KEY, "#2ecc71");
    document.body.style.backgroundColor = "#2ecc71";
  };
}


/*
Remove saved data
*/

let removeButton = document.getElementById("remove");

if (removeButton) {
  removeButton.onclick = function () {
    localStorage.removeItem(SAVED_COLOR_KEY);
    document.body.style.backgroundColor = DEFAULT_COLOR;
  };
}


/*
====================================================================
SECTION 6: DATA TYPE WARNING
====================================================================
- Local Storage stores ONLY strings
- Objects must be converted using JSON
====================================================================
*/

/*
Example
*/

// let userSettings = { font: "Arial", size: 14 };
// localStorage.setItem("settings", JSON.stringify(userSettings));
// let data = JSON.parse(localStorage.getItem("settings"));


/*
====================================================================
FINAL BEHAVIOR SUMMARY
====================================================================
Action               | Result
---------------------|-----------------------------
Refresh Page         | Data remains
Browser Restart      | Data remains
removeItem()         | Deletes one key
clear()              | Deletes all keys
Private Mode         | Data may be cleared
====================================================================
*/


/*
====================================================================
FINAL TECHNICAL NOTES
====================================================================
- Always namespace keys to avoid conflicts
- Do not store sensitive information
- Prefer Local Storage for UI preferences
- Use Session Storage for temporary data
====================================================================
*/
