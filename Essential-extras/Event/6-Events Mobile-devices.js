/*
========================================================
Mobile & Touch Events in JavaScript — Complete Guide
======================================================== */

// ## Introduction ##

- Mobile devices such as smartphones and tablets are operated differently
from desktop computers. Instead of a mouse and keyboard, users interact
with web pages using fingers, touch gestures, or input pens. In addition,
mobile devices can be rotated, tilted, and moved, which introduces new
types of interaction.

- To support these interactions, JavaScript provides special mobile-related
events. These events allow developers to detect touch actions, device
orientation changes, and device motion such as acceleration.

- In this guide, mobile events are explained in a logical order, starting
with device orientation and motion events, then moving to touch-based
interaction events.

Main Topics List (in learning order):

1. Device Orientation & Motion Events
   - orientationchange
   - deviceorientation
   - devicemotion

2. Touch Interaction Events
   - touchstart
   - touchmove
   - touchend
   - touchcancel


  /*
========================================================
1. Device Orientation & Motion Events
======================================================== */

These events are related to the physical movement and orientation
of the mobile device itself.

----------------------------------------
1.1 orientationchange
----------------------------------------

What It Is:
Triggered when the orientation of the device changes
(for example, from portrait to landscape).

Function:
Used to adapt layouts and UI behavior to screen orientation.

Features:
- Triggered on rotation
- Simple orientation detection
- Works on window object

How It Works:
When the device rotates, the browser fires the event.

Example:
Detect orientation change

window.addEventListener("orientationchange", function () {
    console.log("Device orientation changed");
});

0
----------------------------------------
1.2 deviceorientation
----------------------------------------

What It Is:
Triggered when new orientation data is available.

Function:
Used to detect how the device is tilted.

Features:
- Provides alpha, beta, gamma values
- Represents rotation around 3 axes
- Useful for games and AR apps

How It Works:
The event fires whenever the device orientation sensors
provide new data.

Example:
Detect device tilt

window.addEventListener("deviceorientation", function (event) {
    console.log("Tilt:", event.beta, event.gamma);
});


----------------------------------------
1.3 devicemotion
----------------------------------------

What It Is:
Triggered at regular intervals to report acceleration data.

Function:
Used to detect movement such as shaking or sudden motion.

Features:
- Uses accelerometer data
- Fires continuously
- Useful for motion-based interactions

How It Works:
The browser reads acceleration forces and fires the event.

Example:
Detect device motion

window.addEventListener("devicemotion", function (event) {
    console.log("Acceleration:", event.acceleration);
});



/*
========================================================
2. Touch Interaction Events
========================================================*/

These events detect direct interaction with the touchscreen.

----------------------------------------
2.1 touchstart
----------------------------------------

What It Is:
Triggered when a finger (or stylus) touches the display.

Function:
Used to detect the start of a touch interaction.

Features:
- Similar to mousedown
- Supports multi-touch
- Fired immediately on touch

How It Works:
When the finger touches the screen, the event is fired.

Example:
Detect touch start

document.addEventListener("touchstart", function () {
    console.log("Touch started");
});


----------------------------------------
2.2 touchmove
----------------------------------------

What It Is:
Triggered when the finger moves across the display.

Function:
Used for swipes, dragging, and gestures.

Features:
- Fires continuously while moving
- Can detect direction
- Performance-sensitive

How It Works:
As the finger moves, the event fires repeatedly.

Example:
Detect touch movement

document.addEventListener("touchmove", function () {
    console.log("Touch moving");
});


----------------------------------------
2.3 touchend
----------------------------------------

What It Is:
Triggered when the finger is removed from the display.

Function:
Used to detect the end of a touch interaction.

Features:
- Similar to mouseup
- Fires once per touch
- Useful for tap detection

How It Works:
When the touch stops, the browser fires the event.

Example:
Detect touch end

document.addEventListener("touchend", function () {
    console.log("Touch ended");
});


----------------------------------------
2.4 touchcancel
----------------------------------------

What It Is:
Triggered when touch tracking is interrupted.

Function:
Used to handle unexpected interruptions.

Features:
- Occurs during system interruptions
- Rare but important
- Helps maintain app stability

How It Works:
The browser cancels the touch sequence and fires the event.

Example:
Detect touch cancel

document.addEventListener("touchcancel", function () {
    console.log("Touch canceled");
});


/*
========================================================
Summary
========================================================

Mobile events allow JavaScript to respond to touch-based interaction and
physical device movement. Orientation and motion events detect how the
device is positioned and moved, while touch events track direct user
interaction with the screen. These events are essential for building
modern, mobile-friendly, and interactive web applications.

======================================================== */
