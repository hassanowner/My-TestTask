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
  <div id="child1">
    <div class="box">A</div>
    <div class="box">B</div>
  </div>
</div>

// JAVASCRIPT:

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

  /*
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
====================================================================
*/
