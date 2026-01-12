/*
====================================================================
Understanding and Influencing the Flow of Events (Event Flow)
====================================================================

MAIN TOPICS COVERED IN THIS SECTION
--------------------------------------------------------------------
1. What is Event Flow in JavaScript
2. The Three Event Phases
   - Capturing Phase
   - Target Phase
   - Bubbling Phase
3. How Events Travel Through HTML Elements (div structure)
4. Event Characteristics During Bubbling & Capturing
5. The Basic Rule of Event Flow (MDN Concept)
6. Applying Event Flow to a Practical HTML + JS Example
7. Final Summary


====================================================================
1. WHAT IS FLOW OF EVENTS?
====================================================================

Flow of Events (Event Flow) describes the *path an event follows*
through the DOM tree when it is triggered.

When a user interacts with an element (for example: clicking a div),
the event does NOT stay only on that element.
Instead, it travels through multiple DOM nodes in a specific order.

This travel process is called:
--> Event Flow

The DOM is a tree structure:
document
 └── html
     └── body
         └── parent div
             └── child div
                 └── box div

An event moves through this tree in THREE PHASES.


====================================================================
2. THE THREE EVENT PHASES (DETAILED)
====================================================================

--------------------------------------------------
1) CAPTURING PHASE
--------------------------------------------------
• The event starts at the TOP of the DOM tree (document)
• It moves DOWNWARD toward the target element
• This phase allows parent elements to react FIRST
• Event listeners must be registered with:
  addEventListener(type, handler, true)

Example path:
document → html → body → parent → child → box

Important:
- Default event listeners do NOT run in capturing
- Capturing is optional and must be explicitly enabled

--------------------------------------------------
2) TARGET PHASE
--------------------------------------------------
• The event reaches the element that was actually clicked
• This element is called:
  --> event.target
• All listeners on the target element execute here
• Happens exactly ONCE

Example:
Clicking div.box → Target Phase executes on div.box

--------------------------------------------------
3) BUBBLING PHASE
--------------------------------------------------
• The event moves UPWARD from the target element
• Travels back to the document node
• This is the DEFAULT behavior in JavaScript

Example path:
box → child → parent → body → html → document

Important:
- Most event handling relies on bubbling
- Event delegation depends on this phase



====================================================================
3. EVENT CHARACTERISTICS & MOVEMENT TABLE
====================================================================

| Feature              | Description                                   | HTML Div Movement |
|---------------------|-----------------------------------------------|------------------|
| event.target        | Element that was actually clicked             | box              |
| event.currentTarget | Element currently executing the listener      | parent / child   |
| Capturing Phase     | Top → Down                                    | document → box   |
| Target Phase        | Event reaches target                          | box              |
| Bubbling Phase      | Bottom → Up                                   | box → document   |
| Default Behavior    | Bubbling enabled                              | Yes              |
| stopPropagation()   | Stops further movement                        | Blocks bubbling  |



====================================================================
4. BASIC EVENT FLOW RULE (MDN CONCEPT)
====================================================================

MDN BASIC RULE (Simplified):

"When an event occurs, it flows in three steps:
1. Capture phase (top → target)
2. Target phase (on the target)
3. Bubble phase (target → top)"

Basic syntax rule: */

element.addEventListener(
  "event",
  callback,
  useCapture // false = bubbling (default), true = capturing
);


/*
====================================================================
5. APPLYING EVENT FLOW TO THE GIVEN EXAMPLE
==================================================================== */

// HTML STRUCTURE:

<div id="parent">
  Parent
  <div id="child1" class="child">
    Child 1
    <div class="box">A</div>
    <div class="box">B</div>
  </div>

  <div id="child2" class="child">
    Child 2
    <div class="box">C</div>
    <div class="box">D</div>
  </div>
</div>

// JAVASCRIPT:

const allDivs = document.querySelectorAll("div");

allDivs.forEach(div => {
  div.addEventListener("click", function () {
    this.style.backgroundColor = "gray";
  });
});

/*
====================================================================
EVENT FLOW EXPLANATION — ORGANIZED BY PROGRAMMING STAGES
====================================================================

STAGE 1: INITIAL STATE (BEFORE ANY INTERACTION)
--------------------------------------------------------------------

• All div elements have the same click event listener.
• No element has a gray background.
• The browser is waiting for a user interaction.

DOM TREE (SIMPLIFIED):
document
 └── parent
     ├── child1
     │   ├── box A
     │   └── box B
     └── child2
         ├── box C
         └── box D

At this stage:
• Nothing has happened yet.
• The event system is idle.
• All listeners are already registered and ready.

====================================================================

STAGE 2: USER INTERACTION & EVENT CREATION
--------------------------------------------------------------------

The user clicks on:
<div class="box">A</div>

• This physical action (mouse click) creates a click event.
• The browser begins processing the event.

At this moment:
• An event object is created internally by the browser.
• The event flow is about to start.

====================================================================

STAGE 3: TARGET IDENTIFICATION & TARGET PHASE
--------------------------------------------------------------------

• The browser determines the element that was actually clicked.
• This element is called the TARGET.

TARGET ELEMENT:
<div class="box">A</div>

Important rule:
The target is always the clicked element and never changes during
the entire event flow.

TARGET PHASE (FIRST EXECUTION):

• The event starts executing on the target element itself.
• The event listener attached to box A runs first.

Inside the event listener:
this === box A

Executed code:
this.style.backgroundColor = "gray";

Result:
• Box A turns gray.

At this moment:
• target content = "A"
• this refers to box A

====================================================================

STAGE 4: BUBBLING PHASE (UPWARD MOVEMENT)
--------------------------------------------------------------------

After the target phase, the event moves upward in the DOM tree.
This upward movement is called EVENT BUBBLING.

--- Bubbling Step 1: child1 ---

Current element:
<div id="child1" class="child">

• The event reaches child1.
• child1 also has a click listener.
• The listener executes again.

Inside the event listener:
this === child1

Executed code:
this.style.backgroundColor = "gray";

Result:
• Child 1 turns gray.

Important:
• target is still box A
• only this has changed

--- Bubbling Step 2: parent ---

Current element:
<div id="parent">

• The event continues bubbling upward.
• The listener on parent executes.

Inside the event listener:
this === parent

Executed code:
this.style.backgroundColor = "gray";

Result:
• Parent turns gray.

====================================================================

STAGE 5: END OF EVENT FLOW & FINAL RESULT
--------------------------------------------------------------------

• The event continues bubbling to body, html, and document.
• No listeners exist there.
• The event flow stops automatically.

FINAL VISUAL RESULT:

If the user clicks on box A, the following elements turn gray in order:

1. Box A (target)
2. Child 1
3. Parent

Boxes B, C, and D remain unchanged.

KEY RULES CONFIRMED BY THIS FLOW:

• The event always starts on the target element.
• The event bubbles upward through parent elements.
• The same listener runs on every element that has it.
• this changes at every level of bubbling.
• target always remains the originally clicked element.


/*
## TABLE: EVENT FLOW STAGES — TARGET vs CURRENTTARGET ##

The following table explains how the event moves when the user clicks
on <div class="box">A</div>, and how the values of target and
currentTarget (this) change at each programming stage.

--------------------------------------------------------------------------------------------------------------------------------
| Programming Stage | Event Position        | target             | currentTarget (this)   | What Happens |
--------------------------------------------------------------------------------------------------------------------------------
| Stage 1           | box A (Target Phase)  | box A ("A")        | box A                  | The click event starts on the element that was actually clicked. The listener on box A executes first and box A turns gray. |
--------------------------------------------------------------------------------------------------------------------------------
| Stage 2           | child1 (Bubbling)     | box A ("A")        | child1                 | The event bubbles up to child1. The same listener executes on child1. Child1 turns gray. The target remains box A. |
--------------------------------------------------------------------------------------------------------------------------------
| Stage 3           | parent (Bubbling)     | box A ("A")        | parent                 | The event continues bubbling upward to parent. The listener executes on parent and it turns gray. |
--------------------------------------------------------------------------------------------------------------------------------
| Stage 4           | body / html / document| box A ("A")        | body / html / document | The event continues bubbling upward, but no listeners are registered on these elements, so nothing executes. |
--------------------------------------------------------------------------------------------------------------------------------

// IMPORTANT OBSERVATIONS:

• target always refers to the element that was originally clicked.
• target never changes during the event flow.
• currentTarget (this) changes at each stage as the event moves.
• The bubbling phase is responsible for executing listeners on parent elements.
• The same event object is shared across all stages.
*/


// OR you can use this example to see what happens behind the scenes for yourself:

const allDivs = document.querySelectorAll("div");

allDivs.forEach(div => {
  div.addEventListener("click", function(e) {

    console.log(
      "currentTarget:",
      this.id || this.textContent,
      "| target:",
      e.target.textContent
    );

    this.style.border = "3px solid red";
    e.target.style.backgroundColor = "lightgray";
  });
});
/*
--------------------------------------------------
WHAT HAPPENS WHEN YOU CLICK BOX "A"?
--------------------------------------------------

STEP 1 – Capturing Phase
(document → parent → child1 → box)
• No listeners run here (useCapture = false)

STEP 2 – Target Phase
• event.target === box "A"
• box listener runs
• background turns gray

STEP 3 – Bubbling Phase
• Event bubbles upward:
  box → child1 → parent
• Each div executes its listener
• Borders turn red one by one

Console Output Order (Bubbling):
1. box
2. child1
3. parent

This proves:
✔ Bubbling is active
✔ currentTarget changes
✔ target remains the same


====================================================================
FINAL SUMMARY
====================================================================

• Event Flow defines how events travel through the DOM
• JavaScript uses THREE phases:
  1. Capturing (top → down)
  2. Target (actual element)
  3. Bubbling (bottom → up)
• Bubbling is the default behavior
• event.target never changes
• event.currentTarget changes at each level
• Understanding event flow is essential for:
  - Event delegation
  - Debugging
  - Performance optimization

====================================================================
END OF FILE
==================================================================== */
