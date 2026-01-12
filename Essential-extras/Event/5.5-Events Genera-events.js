/*
========================================================
General User Interface Events in JavaScript — Complete Guide
======================================================== */

// ## Introduction ##

- User Interface (UI) events are events that relate to the overall behavior
of the browser window, the document lifecycle, resource loading, user
selection, resizing, scrolling, and clipboard operations. Most of these
events are represented by the UIEvent type, although some use specialized
types such as BeforeUnloadEvent or ClipboardEvent.

- These events are essential for managing page loading, detecting layout
changes, handling user selections, and responding to copy–paste actions.

Main Topics List (in learning order):

1. Page Lifecycle Events
   - load
   - DOMContentLoaded
   - beforeunload
   - unload

2. Resource & Error Events
   - abort
   - error

3. Viewport Interaction Events
   - resize
   - scroll

4. Selection Events
   - select (page text)
   - select (form fields)

5. Clipboard Events
   - cut
   - copy
   - paste


/*
========================================================
1. Page Lifecycle Events
======================================================== */

These events are related to loading and unloading a web page.

----------------------------------------
1.1 load
----------------------------------------

What It Is:
Triggered when the entire page and all resources are fully loaded.

Function:
Used to run code after everything is ready.

Example:
Detect page load

window.addEventListener("load", function () {
    console.log("Page fully loaded");
});


----------------------------------------
1.2 DOMContentLoaded
----------------------------------------

What It Is:
Triggered when the DOM tree is fully loaded (before images/styles).

Function:
Used to safely access DOM elements early.

Example:
DOM ready detection

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
});


----------------------------------------
1.3 beforeunload
----------------------------------------

What It Is:
Triggered just before the page is unloaded.

Function:
Used to warn users before leaving a page.

Example:
Show leave warning

window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = "";
});


----------------------------------------
1.4 unload
----------------------------------------

What It Is:
Triggered when the page is being unloaded.

Function:
Used for cleanup operations.

Example:
Unload detection

window.addEventListener("unload", function () {
    console.log("Page unloaded");
});


/*
========================================================
2. Resource & Error Events
======================================================== */

These events relate to loading problems.

----------------------------------------
2.1 abort
----------------------------------------

What It Is:
Triggered when resource loading is canceled.

Function:
Used to detect canceled downloads.

Example:
Detect image load abort

const img = document.getElementById("img");

img.addEventListener("abort", function () {
    console.log("Image loading aborted");
});


----------------------------------------
2.2 error
----------------------------------------

What It Is:
Triggered when an error occurs while loading a page or resource.

Function:
Used to detect loading or script errors.

Example:
Detect loading error

window.addEventListener("error", function () {
    console.log("An error occurred");
});


/*
========================================================
3. Viewport Interaction Events
======================================================== */

These events track changes in window size and scrolling.

----------------------------------------
3.1 resize
----------------------------------------

What It Is:
Triggered when the browser window is resized.

Function:
Used for responsive behavior.

Example:
Detect resize

window.addEventListener("resize", function () {
    console.log("Window resized");
});


----------------------------------------
3.2 scroll
----------------------------------------

What It Is:
Triggered when the page is scrolled.

Function:
Used for lazy loading or animations.

Example:
Detect scrolling

window.addEventListener("scroll", function () {
    console.log("Scrolling");
});


/*
========================================================
4. Selection Events
======================================================== */

These events detect text selection.

----------------------------------------
4.1 select (page text)
----------------------------------------

What It Is:
Triggered when text is selected on a web page.

Function:
Used for text-related features.

Example:
Detect text selection

document.addEventListener("select", function () {
    console.log("Text selected on page");
});


----------------------------------------
4.2 select (form fields)
----------------------------------------

What It Is:
Triggered when text is selected inside an input or textarea.

Function:
Used to monitor form field interaction.

Example:
Detect selection in input

const field = document.getElementById("field");

field.addEventListener("select", function () {
    console.log("Text selected in input");
});


/*
========================================================
5. Clipboard Events
======================================================== */

These events detect clipboard operations.

----------------------------------------
5.1 cut
----------------------------------------

What It Is:
Triggered when content is cut.

Function:
Used to monitor or prevent cutting.

Example:
Detect cut

field.addEventListener("cut", function () {
    console.log("Content cut");
});


----------------------------------------
5.2 copy
----------------------------------------

What It Is:
Triggered when content is copied.

Function:
Used to track copying behavior.

Example:
Detect copy

field.addEventListener("copy", function () {
    console.log("Content copied");
});


----------------------------------------
5.3 paste
----------------------------------------

What It Is:
Triggered when content is pasted.

Function:
Used to validate pasted content.

Example:
Detect paste

field.addEventListener("paste", function () {
    console.log("Content pasted");
});


/*
========================================================
Summary
========================================================

UI events allow JavaScript to react to page loading, unloading, resizing,
scrolling, text selection, and clipboard actions. These events are
fundamental for managing application lifecycle behavior, improving user
experience, and building responsive, interactive web applications.

======================================================== */
