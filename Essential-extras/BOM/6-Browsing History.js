/*
========================================================
MANAGING BROWSING HISTORY USING THE HISTORY API
========================================================

1) TOPICS THAT WILL BE STUDIED
-----------------------------
This topic explains how to work with the browser’s
history using the JavaScript History API. It focuses on:
- Reading the current state
- Adding new entries to the history
- Replacing the current history entry
- Updating page content dynamically without full reload

The main properties and methods covered are: */
1. history.state
2. history.pushState()
3. history.replaceState()

/* --------------------------------------------------------


2) FEATURES EXPLANATION
----------------------

• FEATURE 1: history.state
--------------------------
What it does:
Returns the state object associated with the current history entry.

Function:
Allows access to the data stored for the current page in history.

Explanation:
The state object is defined when calling pushState() or replaceState().
It can contain any JavaScript object that represents the page state.

Syntax: */
const currentState = history.state;

// Example:
console.log(history.state);

/* Meaning:
Displays the current page’s state object in the console.

--------------------------------------------------------

• FEATURE 2: history.pushState()
--------------------------------
What it does:
Adds a new entry to the browser history.

Function:
Allows you to change the URL and store state without reloading the page.

Explanation:
Three arguments are passed: */
1. state object → contains data representing the page
2. title        → text for the browser’s title bar (not widely used)
3. URL          → new URL to display in the address bar

/* Syntax:
history.pushState(stateObj, title, url);

Practical Example: */
function handleClick(event) {
  const pageName = event.target.getAttribute('href').split('/').pop();
  const content = contents[pageName];

  updateContent(content.content);

  history.pushState(
    content,                 // State object
    event.target.textContent, // Title
    event.target.href         // URL
  );

  event.preventDefault();
}

/* Meaning:
- Adds a new history entry when a link is clicked
- Updates the URL without reloading
- Stores page-specific data in state object

--------------------------------------------------------

• FEATURE 3: history.replaceState()
-----------------------------------
What it does:
Replaces the current history entry with a new one.

Function:
Allows updating the current entry’s URL and state without
adding a new entry to the history.

Explanation:
Useful for modifying the current page’s state or URL
without affecting the Back button behavior.

Syntax: */
history.replaceState(stateObj, title, url);

// Example:
history.replaceState({ content: 'Services' }, 'Services', '/services');

/* Meaning:
The current entry now represents the “Services” page,
but the previous entry is not affected.

--------------------------------------------------------


3) PRACTICAL USAGE: DYNAMIC PAGE LOADING
---------------------------------------
HTML structure: */
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/skills">Skills</a></li>
    <li><a href="/aboutus">About Us</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
<main id="content"></main>

/* JavaScript logic:
- Event listeners for all links intercept clicks
- preventDefault() stops default navigation
- updateContent() updates the visible content
- pushState() adds a new history entry with URL, title, and state

Example: */
function updateContent(content) {
  document.getElementById('content').textContent = content;
}

document.addEventListener('DOMContentLoaded', init);

/* Benefits:
- Page content updates dynamically without full reload
- URL in the browser reflects the current page
- Back and Forward buttons work as expected
- State objects store page-specific data

--------------------------------------------------------


4) SUMMARY
---------
history.state        → contains data of the current history entry  
history.pushState()  → adds a new history entry (URL and state)  
history.replaceState() → replaces the current history entry  

Advantages of the History API:
- Allows single-page application (SPA) behavior
- Enables dynamic content updates without page reloads
- Provides fine control over browser navigation and URLs

========================================================
END OF FILE
======================================================== */
