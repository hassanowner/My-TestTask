/*
============================================================
SECTION: Controlling Event Behavior in JavaScript
============================================================

------------------------------------------------------------
1) MAIN TOPICS (IN ORDER) + KEY POINTS
------------------------------------------------------------ */

1. stopPropagation()                       /*
   - Controls event propagation (bubbling / capturing)
   - Stops the event from reaching parent elements
   - Used when multiple elements listen to the same event */

2. preventDefault()                        /*
   - Controls browser default behavior
   - Prevents automatic browser actions
   - Does NOT stop event propagation by itself


------------------------------------------------------------
2) FEATURE #1: stopPropagation()
------------------------------------------------------------

------------------------------------------------------------
A) WHAT IS stopPropagation()?
------------------------------------------------------------

stopPropagation() is a method of the Event object.
It is used to STOP the event from moving (propagating)
to other elements in the DOM tree.

In simple words:
-> The event happens on ONE element only
-> Parent elements will NOT receive the event

------------------------------------------------------------
B) WHY DO WE NEED stopPropagation()?
------------------------------------------------------------

Normally, events follow a path called **event bubbling**:      */

Child element → Parent → Grandparent → Document

/* If multiple elements have event listeners,
ALL of them will react unless propagation is stopped.

stopPropagation() is used when:
- You want only the clicked element to react
- You want to block parent elements from responding

------------------------------------------------------------
C) BASIC CODE SYNTAX
------------------------------------------------------------ */

element.addEventListener("click", function(event) {
    event.stopPropagation();
});

/* Key notes:
- Must be called on the event object
- Works for both bubbling and capturing phases

------------------------------------------------------------
D) CLEAR EXAMPLE (LEVELS EXAMPLE)
------------------------------------------------------------ */

// HTML STRUCTURE:

<div class="level1">
  <div class="level2">
    <div class="level3">C</div>
  </div>
</div>


// JavaScript:

document.querySelectorAll("div").forEach(function(div) {
  div.addEventListener("click", function(event) {

    // Color the clicked element
    this.style.backgroundColor = "gray";

    // If this is a level2 element, stop propagation
    if (this.classList.contains("level2")) {
      event.stopPropagation();
    }

  });
});
/*
------------------------------------------------------------
E) WHAT HAPPENS STEP BY STEP?
------------------------------------------------------------

When clicking on the "C" div (level3):

1. level3 gets clicked → becomes gray
2. event bubbles to level2 → becomes gray
3. stopPropagation() runs at level2
4. event DOES NOT reach level1

RESULT:
✔ level3 colored
✔ level2 colored
✖ level1 NOT colored



------------------------------------------------------------
2) FEATURE #2: preventDefault()
------------------------------------------------------------

------------------------------------------------------------
A) WHAT IS preventDefault()?
------------------------------------------------------------

preventDefault() is a method of the Event object.
It prevents the browser’s DEFAULT action
from happening when an event occurs.

Important:
-> It does NOT stop event propagation
-> It ONLY stops browser behavior

------------------------------------------------------------
B) WHAT ARE DEFAULT BROWSER ACTIONS?
------------------------------------------------------------

Examples of default actions:
- Clicking a link → opens a new page
- Submitting a form → reloads the page
- Right-click → opens context menu

preventDefault() blocks these actions.

------------------------------------------------------------
C) BASIC CODE SYNTAX
------------------------------------------------------------ */

element.addEventListener("click", function(event) {
    event.preventDefault();
});
/*
------------------------------------------------------------
D) CLEAR EXAMPLE (LINK EXAMPLE)
------------------------------------------------------------ */

// HTML:

<a href="https://example.com" id="myLink">Go to site</a>


// JavaScript:

document.getElementById("myLink").addEventListener("click", function(event) {
  event.preventDefault();
  alert("Link click prevented!");
});
/*
------------------------------------------------------------
E) WHAT HAPPENS STEP BY STEP?
------------------------------------------------------------

1. User clicks the link
2. Click event fires
3. preventDefault() runs
4. Browser does NOT open the link
5. Alert message appears

RESULT:
✔ Event happened
✔ Browser action blocked



------------------------------------------------------------
4) COMPARISON TABLE (SUMMARY TABLE)
------------------------------------------------------------ */

| Feature           | stopPropagation()             | preventDefault()               |
|-------------------|-------------------------------|--------------------------------|
| Controls          | Event flow                    | Browser behavior               |
| Stops bubbling?   | Yes                           | No                             |
| Stops default?    | No                            | Yes                            |
| Common use        | Parent event blocking         | Form / link blocking           |
| Works on          | DOM propagation               | Browser actions                |


/*
------------------------------------------------------------
5) FINAL SUMMARY
------------------------------------------------------------

- stopPropagation():
  Controls HOW FAR an event travels in the DOM.
  It blocks parent elements from receiving the event.

- preventDefault():
  Controls WHAT the browser does automatically.
  It blocks default browser actions but allows bubbling.

IMPORTANT RULE:
✔ stopPropagation() ≠ preventDefault()
✔ They solve DIFFERENT problems
✔ They can be used together if needed

============================================================
END OF FILE
============================================================ */
