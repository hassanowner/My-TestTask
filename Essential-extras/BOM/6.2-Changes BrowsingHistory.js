/*
========================================================
RESPONDING TO CHANGES IN THE BROWSING HISTORY
========================================================

1) TOPICS THAT WILL BE STUDIED
-----------------------------
This topic explains how to respond to changes in the
browser's history, particularly when users click
the Back or Forward buttons. It covers:

- The `popstate` event
- Updating page content dynamically when history changes
- Replacing the current history entry using `replaceState()`
- Integration with `pushState()` for dynamic navigation

The main concepts covered are:
1. popstate event
2. Using event.state
3. replaceState() method
4. Synchronizing content with browser navigation


--------------------------------------------------------

2) FEATURES EXPLANATION
----------------------

• FEATURE 1: popstate event
---------------------------
What it does:
Triggers every time the current history entry changes
(e.g., when the user clicks Back or Forward).

Function:
Allows the page to respond to navigation events
without a full page reload.

Explanation:
- The `popstate` event is fired on the window object.
- The event object contains a `state` property
  representing the state object of the history entry.

Syntax: */
window.addEventListener('popstate', callback);

/* Example:
window.addEventListener('popstate', (event) => {
  updateContent(event.state.content);
});

Meaning:
When the user navigates back or forward:
- The `state` object of the relevant entry is read
- Page content is updated dynamically

--------------------------------------------------------

• FEATURE 2: Using event.state
-----------------------------
What it does:
Provides access to the state object of the
history entry that triggered the `popstate` event.

Function:
Enables dynamic page updates based on stored history data.

Explanation: 
`event.state` contains the object passed to `pushState()`
or `replaceState()`. This object can include content,
page-specific data, or any relevant state information.

Example: */
function handlePopState(event) {
  const currentContent = event.state.content;
  updateContent(currentContent);
}

/* Meaning:
The page reflects the correct content according to
the history entry, even when navigating using browser buttons.

--------------------------------------------------------

• FEATURE 3: replaceState()
---------------------------
What it does:
Replaces the current entry in the browsing history.

Function:
Updates the state, title, or URL of the current history entry
without creating a new entry.

Explanation:
Useful when modifying content dynamically but
keeping the history clean.

Syntax: */
history.replaceState(stateObj, title, url);

// Example:
history.replaceState(
  { content: contentElement.textContent },
  document.title,
  document.location.href
);

/* Meaning:
- Updates the current history entry
- Does not affect Back/Forward navigation
- Keeps the URL and title in sync with content changes

--------------------------------------------------------


3) PRACTICAL USAGE WITH DYNAMIC CONTENT
--------------------------------------- */
1. When a link is clicked:
   - pushState() adds a new history entry
   - updateContent() updates the <main> element

2. When Back/Forward buttons are used:
   - popstate event fires
   - event.state.content is used to update <main>

3. When modifying the current page:
   - replaceState() updates the existing entry
   - Keeps history streamlined and consistent

// JavaScript Example:
window.addEventListener('popstate', (event) => {
  updateContent(event.state.content);
});

history.replaceState(
  { content: contentElement.textContent },
  document.title,
  document.location.href
);

/*--------------------------------------------------------


4) SUMMARY
---------
popstate          → triggered on history navigation  
event.state       → provides the state object of the entry  
pushState()       → adds a new history entry  
replaceState()    → replaces the current entry  

Key Benefits:
- Supports dynamic single-page application (SPA) behavior
- Keeps browser history in sync with content changes
- Enables Back and Forward buttons to function correctly
- Provides fine-grained control over state, URL, and content

========================================================
END OF FILE
======================================================== */
