/*
========================================================
LOADING AND RELOADING WEB PAGES USING window.location
========================================================

1) TOPICS THAT WILL BE STUDIED
-----------------------------
This topic explains the different ways to load, replace,
and reload web pages in the current browser window
using the JavaScript `location` object.

The main areas covered are:
- Loading a new page with assign()
- Loading a new page with replace()
- Loading a new page using the href property
- Reloading the current page with reload()

--------------------------------------------------------


2) FEATURES EXPLANATION
----------------------

• FEATURE 1: location.assign()
------------------------------
What it does:
Loads a new web page in the current browser window.

Function:
Navigates to a specified URL and adds an entry
to the browser’s history.

Explanation:
After using assign(), the user can return to the
previous page using the Back button.

Syntax: */
window.location.assign(url);

// Example:
const linkLoad = document.getElementById('link-load');

linkLoad.addEventListener('click', (e) => {
  const url = document.getElementById('url').value;
  window.location.assign(url);
});

/* Meaning:
The browser navigates to the entered URL
and stores the current page in history.

--------------------------------------------------------

• FEATURE 2: location.replace()
-------------------------------
What it does:
Loads a new web page in the current browser window.

Function:
Navigates to a specified URL without creating
a new history entry.

Explanation:
The previous page is replaced in history.
The user cannot navigate back to the old page.

Syntax: */
window.location.replace(url);

// Example:
const linkLoad = document.getElementById('link-load');

linkLoad.addEventListener('click', (e) => {
  const url = document.getElementById('url').value;
  window.location.replace(url);
});

/* Meaning:
The browser navigates to the new URL
and removes the current page from history.

--------------------------------------------------------

• FEATURE 3: location.href
--------------------------
What it does:
Loads a new web page by assigning a value to the href property.

Function:
Acts like clicking a normal link.

Explanation:
Setting location.href automatically navigates
to the specified URL and adds a history entry.

Syntax: */
window.location.href = url;

// Example:
const linkLoad = document.getElementById('link-load');

linkLoad.addEventListener('click', (e) => {
  const url = document.getElementById('url').value;
  window.location.href = url;
});

/* Meaning:
The browser loads the new page
and allows navigation back.

--------------------------------------------------------

• FEATURE 4: location.reload()
------------------------------
What it does:
Reloads the current web page.

Function:
Refreshes the page content.

Explanation:
An optional Boolean parameter controls cache usage:
- true  → reload from the server (no cache)
- false → reload using browser cache (default)

Syntax: */
window.location.reload(forceReload);

Example:
const linkReload = document.getElementById('link-reload');

linkReload.addEventListener('click', (e) => {
  window.location.reload(true);
});

/* Meaning:
The page is reloaded directly from the server.

--------------------------------------------------------


3) COMPARISON
------------- */
assign()   → loads a new page and keeps history  
replace()  → loads a new page and removes history  
href       → loads a new page like a normal link  
reload()   → refreshes the current page  

/* --------------------------------------------------------


4) SUMMARY
---------
JavaScript provides multiple ways to control page navigation  
assign() and href create history entries  
replace() removes the current page from history  
reload() refreshes the current page (with or without cache)  

These methods are essential for programmatic navigation
and page control in web applications.

========================================================
END OF FILE
======================================================== */
