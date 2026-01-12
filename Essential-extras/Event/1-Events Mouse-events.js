/*
========================================================
Mouse Events in JavaScript — Detailed Systematic Guide
========================================================*/

// ## Introduction ##

- Mouse events are one of the most important interaction mechanisms in web development. 
They allow JavaScript to detect and respond to user actions such as clicking, moving the mouse,
pressing buttons, or hovering over elements.

- In this guide, mouse events are studied in a logical order, starting from basic click actions,
moving to mouse button and movement events, then hover-related events, and finally the properties
provided by the MouseEvent object.

Main Topics List (in order):

1. Basic Mouse Click Events
   - click
   - dblclick
   - contextmenu

2. Mouse Button & Movement Events
   - mousedown
   - mouseup
   - mousemove

3. Mouse Entering and Leaving Elements
   - mouseover
   - mouseout
   - mouseenter
   - mouseleave

4. MouseEvent Properties
   - Modifier keys
   - Mouse buttons
   - Mouse coordinates
   - relatedTarget


/*
========================================================
1. Basic Mouse Click Events
======================================================== */

These events are related to clicking actions using the mouse buttons.

----------------------------------------
1.1 click
----------------------------------------

What It Is:
The click event is triggered when the mouse button is pressed and released once on the same element.

Function:
It is mainly used to trigger actions like submitting forms, opening menus, or running commands.

Features:
- Requires both press and release
- Most commonly used mouse event
- Works on buttons, links, divs, etc.

How It Works:
The browser detects a full click cycle (down + up) and then fires the event.

Basic Code Structure:
element.addEventListener("click", function(event) {
    // action
});

Example:
Button click detection

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    console.log("Button clicked once");
});


----------------------------------------
1.2 dblclick
----------------------------------------

What It Is:
The dblclick event is triggered when the mouse button is pressed and released twice rapidly.

Function:
It is used for actions like opening files or zooming elements.

Features:
- Requires two clicks in a short time
- Less commonly used than click
- Depends on system double-click speed

How It Works:
The browser counts two consecutive click actions and triggers dblclick.

Example:
Detecting double click

const box = document.getElementById("box");

box.addEventListener("dblclick", function () {
    console.log("Element double-clicked");
});


----------------------------------------
1.3 contextmenu
----------------------------------------

What It Is:
The contextmenu event is triggered when the context menu is opened, usually by right-clicking.

Function:
Used to create custom right-click menus or prevent the default browser menu.

Features:
- Triggered by right mouse button
- Can be prevented using preventDefault()
- Useful in advanced UI controls

How It Works:
The browser fires the event before showing the context menu.

Example:
Preventing right-click menu

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    console.log("Right click detected");
});


/*
========================================================
2. Mouse Button & Movement Events
======================================================== */

These events track mouse button actions and movement behavior.

----------------------------------------
2.1 mousedown
----------------------------------------

What It Is:
Triggered when a mouse button is pressed down on an element.

Function:
Used to detect the start of an interaction such as dragging.

Features:
- Fires immediately on press
- Does not require release
- Works with all mouse buttons

Example:
Detecting mouse press

document.addEventListener("mousedown", function () {
    console.log("Mouse button pressed");
});


----------------------------------------
2.2 mouseup
----------------------------------------

What It Is:
Triggered when a mouse button is released.

Function:
Often used together with mousedown to track full interactions.

Features:
- Fires after pressing
- Can occur outside the original element
- Important for drag-and-drop logic

Example:
Detecting mouse release

document.addEventListener("mouseup", function () {
    console.log("Mouse button released");
});


----------------------------------------
2.3 mousemove
----------------------------------------

What It Is:
Triggered whenever the mouse pointer moves.

Function:
Used for tracking cursor position, drawing, or hover effects.

Features:
- Fires continuously
- Can fire many times per second
- Should be optimized for performance

Example:
Tracking mouse movement

document.addEventListener("mousemove", function () {
    console.log("Mouse is moving");
});


/*
========================================================
3. Mouse Entering and Leaving Elements
======================================================== */

These events detect when the mouse enters or leaves elements.

----------------------------------------
3.1 mouseover
----------------------------------------

What It Is:
Triggered when the mouse enters an element or one of its child elements.

Function:
Used for hover interactions where child elements matter.

Features:
- Bubbles
- Fires multiple times with child elements
- Can be noisy

Example:
Mouse over element

const area = document.getElementById("area");

area.addEventListener("mouseover", function () {
    console.log("Mouse over area or child");
});


----------------------------------------
3.2 mouseout
----------------------------------------

What It Is:
Triggered when the mouse leaves an element or moves to a child element.

Function:
Used to detect when hover ends.

Features:
- Bubbles
- Triggered frequently
- Includes child transitions

Example:
Mouse out detection

area.addEventListener("mouseout", function () {
    console.log("Mouse left area or child");
});


----------------------------------------
3.3 mouseenter
----------------------------------------

What It Is:
Triggered only when the mouse enters the element itself.

Function:
Used for clean hover logic.

Features:
- Does NOT bubble
- Fires once per entry
- Ignores child elements

Example:
Mouse enters element

area.addEventListener("mouseenter", function () {
    console.log("Mouse entered element");
});


----------------------------------------
3.4 mouseleave
----------------------------------------

What It Is:
Triggered only when the mouse leaves the element itself.

Function:
Used for precise hover exit detection.

Features:
- Does NOT bubble
- Clean and predictable
- Ignores child elements

Example:
Mouse leaves element

area.addEventListener("mouseleave", function () {
    console.log("Mouse left element");
});


/*
========================================================
4. MouseEvent Properties
======================================================== */

MouseEvent properties provide additional information about the event.

----------------------------------------
4.1 Modifier Keys
----------------------------------------

Properties:
- altKey
- ctrlKey
- shiftKey
- metaKey

Example:
Checking Ctrl key

document.addEventListener("click", function (event) {
    console.log("Ctrl pressed:", event.ctrlKey);
});


----------------------------------------
4.2 Mouse Buttons
----------------------------------------

Properties:
- button
- buttons

Example:
Detecting mouse button

document.addEventListener("mousedown", function (event) {
    console.log("Button code:", event.button);
});


----------------------------------------
4.3 Mouse Coordinates
----------------------------------------

Properties:
- clientX / clientY
- screenX / screenY
- movementX / movementY

Example:
Mouse position

document.addEventListener("mousemove", function (event) {
    console.log(event.clientX, event.clientY);
});


----------------------------------------
4.4 relatedTarget
----------------------------------------

What It Is:
Refers to the element the mouse came from or moved to.

Example:
Detecting related element

area.addEventListener("mouseenter", function (event) {
    console.log("From:", event.relatedTarget);
});


/*
========================================================
Summary
========================================================

Mouse events enable JavaScript to react to user behavior accurately.
Each mouse action triggers a specific event, and each event provides detailed
information through the MouseEvent object. Mastering these events is essential
for building interactive and professional web applications.

======================================================== */
