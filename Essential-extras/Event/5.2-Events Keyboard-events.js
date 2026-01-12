/*
========================================================
Keyboard Events in JavaScript — Complete Systematic Guide
======================================================== */

// ## Introduction ##

- Keyboard events are triggered whenever a user interacts with a web page
using the keyboard. These events allow JavaScript to detect key presses,
key releases, and typed characters. They are essential for building
features such as form validation, keyboard navigation, shortcuts,
games, and interactive user interfaces.

- In this guide, keyboard-related events are explained in a logical order,
starting from key press detection, moving to key release handling, and
then to character input behavior. Finally, we examine important
KeyboardEvent properties used to identify pressed keys.

Main Topics List (in learning order):

1. Basic Keyboard Events
   - keydown
   - keypress
   - keyup

2. Using Keyboard Events for Element Control
   - Detecting specific keys
   - Moving elements with the keyboard

3. KeyboardEvent Properties
   - key
   - keyIdentifier (obsolete but important historically)


/* 
========================================================
1. Basic Keyboard Events
======================================================== */

Keyboard events belong to the KeyboardEvent object type and are triggered
when the user presses or releases keys.

----------------------------------------
1.1 keydown
----------------------------------------

What It Is:
The keydown event is triggered when a key is pressed down.

Function:
Used to detect the start of a key press.

Features:
- Fires immediately when the key is pressed
- Repeats if the key is held down
- Works for all keys (letters, numbers, arrows, etc.)

How It Works:
When the user presses a key, the browser fires keydown repeatedly
if the key remains pressed.

Basic Code Structure:
document.addEventListener("keydown", function(event) {
    // action
});

Example:
Detecting key press

document.addEventListener("keydown", function () {
    console.log("Key is pressed down");
});


----------------------------------------
1.2 keypress
----------------------------------------

What It Is:
The keypress event is triggered when a character is inserted via the keyboard.

Function:
Used to detect typed characters (letters, numbers, symbols).

Features:
- Represents character input
- Repeats when the key is held
- Does NOT work reliably for non-character keys
- Considered deprecated in modern standards

How It Works:
The event fires after keydown and before keyup, representing text input.

Example:
Detecting typed characters

document.addEventListener("keypress", function () {
    console.log("Character typed");
});


----------------------------------------
1.3 keyup
----------------------------------------

What It Is:
The keyup event is triggered when a key is released.

Function:
Used to detect the end of a key press.

Features:
- Fires once when key is released
- Does not repeat
- Useful for stopping actions

How It Works:
Once the user releases the key, the browser fires keyup.

Example:
Detecting key release

document.addEventListener("keyup", function () {
    console.log("Key released");
});


/*
========================================================
2. Using Keyboard Events for Element Control
======================================================== */

Keyboard events are often used to control elements on a web page,
especially for movement and navigation.

----------------------------------------
2.1 Detecting Specific Keys
----------------------------------------

What It Is:
JavaScript can detect which key was pressed and react accordingly.

Function:
Used for shortcuts, controls, and navigation.

How It Works:
The pressed key is checked using event.key or event.keyIdentifier.

Example:
Detecting arrow keys

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        console.log("Up arrow pressed");
    }
});


----------------------------------------
2.2 Moving an Element with Arrow Keys
----------------------------------------

What It Is:
A practical use of keyboard events to move an element on the screen.

Function:
Commonly used in games or interactive interfaces.

How It Works:
- keydown detects the pressed key
- Position values are updated
- CSS is used to move the element

Example:
Simple movement logic

let position = { x: 0, y: 0 };

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        position.x += 10;
        console.log("Move right:", position.x);
    }
});


/*
========================================================
3. KeyboardEvent Properties
======================================================== */

KeyboardEvent objects contain properties that describe the key interaction.

----------------------------------------
3.1 key Property
----------------------------------------

What It Is:
The key property contains the actual value of the pressed key.

Function:
Used to identify which key was pressed.

Features:
- Modern standard
- Human-readable values (e.g., "a", "Enter", "ArrowLeft")
- Not supported in very old browsers

Example:
Using event.key

document.addEventListener("keydown", function (event) {
    console.log("Key:", event.key);
});


----------------------------------------
3.2 keyIdentifier Property (Obsolete)
----------------------------------------

What It Is:
An older property used before event.key was standardized.

Function:
Used to identify keys in older browsers.

Features:
- Deprecated
- Kept for backward compatibility
- Should not be used in new projects

Example:
Fallback check

document.addEventListener("keydown", function (event) {
    if (event.key) {
        console.log("Modern key:", event.key);
    } else {
        console.log("Old key identifier:", event.keyIdentifier);
    }
});


/*
========================================================
Summary
========================================================

Keyboard events allow JavaScript to respond precisely to user input.
The keydown, keypress, and keyup events represent different stages
of a key interaction. By combining these events with KeyboardEvent
properties such as key and keyIdentifier, developers can create
interactive controls, keyboard navigation, and dynamic user experiences.

======================================================== */
