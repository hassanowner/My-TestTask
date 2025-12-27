/*
====================================================================
TOPIC: BOM (Browser Object Model)
Session Storage — Temporary Client-Side Storage
====================================================================

STUDIED TOPICS & AVAILABLE FEATURES
- What is Session Storage
- setItem()     → Store data
- getItem()     → Read data
- removeItem()  → Delete single entry
- clear()       → Delete all entries
- key()         → Access stored keys by index

IMPORTANT SESSION RULES
- New Tab           → New Session
- Duplicate Tab     → Session is cloned
- Same URL New Tab  → New Session
- Session ends when tab is closed
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
  <title>Session Storage Demo</title>
</head>

<body>
  <input class="username" type="text" placeholder="Enter Name" />
</body>
</html>

NOTE:
- HTML is commented because this is a JavaScript-only file.
====================================================================
*/


/*
====================================================================
SECTION 1: WHAT IS SESSION STORAGE
====================================================================
- Part of the Browser Object Model
- Stores data per browser tab
- Data is removed automatically when tab closes
- Suitable for temporary state
====================================================================
*/

console.log(window.sessionStorage);
console.log(typeof window.sessionStorage);


/*
====================================================================
SECTION 2: BEGINNER EXAMPLE — BASIC STORAGE
====================================================================
- Simple set and get operations
====================================================================
*/

/*
SET VALUE
*/

sessionStorage.setItem("language", "en");


/*
GET VALUE
*/

console.log(sessionStorage.getItem("language"));


/*
ACCESS KEY BY INDEX
*/

console.log(sessionStorage.key(0));


/*
====================================================================
SECTION 3: COMPARISON WITH LOCAL STORAGE
====================================================================
- Same API
- Different lifespan
====================================================================
*/

localStorage.setItem("theme", "dark");
sessionStorage.setItem("theme", "light");

/*
RESULT:
- localStorage "theme" remains after closing tab
- sessionStorage "theme" is removed when tab closes
*/


/*
====================================================================
SECTION 4: PRACTICAL EXAMPLE — TEMPORARY FORM DATA
====================================================================
- Saves user input during the session
- Restores it on page refresh
====================================================================
*/

let nameField = document.querySelector(".username");

/*
Restore stored value on load
*/

if (sessionStorage.getItem("temp-name")) {
  nameField.value = sessionStorage.getItem("temp-name");
}


/*
Save input value when user leaves the field
*/

nameField.onblur = function () {
  sessionStorage.setItem("temp-name", this.value);
};


/*
====================================================================
SECTION 5: REMOVING STORED DATA
====================================================================
*/

/*
REMOVE SINGLE ITEM
*/

// sessionStorage.removeItem("temp-name");


/*
CLEAR ENTIRE SESSION
*/

// sessionStorage.clear();


/*
====================================================================
SECTION 6: DATA TYPE LIMITATION
====================================================================
- Session Storage stores only STRING values
- Objects require JSON conversion
====================================================================
*/

/*
Example
*/

// let draft = { step: 2, completed: false };
// sessionStorage.setItem("draft", JSON.stringify(draft));
// let parsedDraft = JSON.parse(sessionStorage.getItem("draft"));


/*
====================================================================
FINAL BEHAVIOR SUMMARY
====================================================================
Action                    | Behavior
--------------------------|----------------------------
Page Reload               | Data remains
Duplicate Tab             | Data is copied
New Tab (manual)          | Empty session
Tab Close                 | Data deleted
clear()                   | Deletes all session data
====================================================================
*/


/*
====================================================================
FINAL TECHNICAL NOTES
====================================================================
- Use Session Storage for temporary UI state
- Ideal for multi-step forms and drafts
- Never store sensitive information
- Same-origin policy applies
====================================================================
*/
