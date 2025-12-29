/* =====================================================
   ADVANCED DOM TEST CHALLENGES (5 TASKS)
   Covered ONLY the given topics:
   - style / cssText / setProperty / removeProperty
   - before / after / append / prepend / remove
   - parentElement / siblings
   - cloneNode(deep)
===================================================== */


/* =====================================================
   CHALLENGE 1 — style vs cssText (OVERWRITE LOGIC)
=====================================================
QUESTION:
You have a div with id="box".

Steps:
1) Set color to red using style
2) Set fontSize to 20px using style
3) Then use cssText to set ONLY background-color: black
4) Log final inline styles

What will remain and what will be removed?
===================================================== */

let box = document.getElementById("box");

box.style.color = "red";
box.style.fontSize = "20px";

box.style.cssText = "background-color: black";

console.log(box.style.cssText);

/*
RESULT:
"background-color: black;"

Explanation:
- cssText OVERWRITES all existing inline styles
- color and fontSize are removed
*/



/* =====================================================
   CHALLENGE 2 — setProperty vs removeProperty
=====================================================
QUESTION:
You have an element with id="title".

Steps:
1) Add font-size: 30px !important
2) Add color: blue
3) Remove font-size only
4) Log the inline styles

What styles remain?
===================================================== */

let title = document.getElementById("title");

title.style.setProperty("font-size", "30px", "important");
title.style.setProperty("color", "blue");

title.style.removeProperty("font-size");

console.log(title.style.cssText);

/*
RESULT:
"color: blue;"

Explanation:
- removeProperty removes only the specified property
- !important does NOT protect it from removal
*/



/* =====================================================
   CHALLENGE 3 — before / append ORDER TEST
=====================================================
QUESTION:
You have a div with id="container" containing text "MAIN".

Steps:
1) Insert "A" before the div
2) Append "B" inside the div
3) Prepend "C" inside the div
4) Insert "D" after the div

What is the final DOM order?
===================================================== */

let container = document.getElementById("container");

container.before("A");
container.append("B");
container.prepend("C");
container.after("D");

/*
FINAL RESULT IN DOM:

A
<div id="container">
  C MAIN B
</div>
D

Explanation:
- before/after → outside element
- prepend/append → inside element
*/



/* =====================================================
   CHALLENGE 4 — Traversing + remove()
=====================================================
QUESTION:
HTML structure:
<div class="card">
  <h3>Title</h3>
  <button class="delete">Delete</button>
</div>

Task:
When clicking the button:
1) Remove ONLY the card div
2) Use parentElement (no selectors inside handler)
===================================================== */

document.querySelector(".delete").onclick = function () {
  this.parentElement.remove();
};

/*
RESULT:
- Clicking the button removes the entire card
- Only the parent div is removed

Explanation:
- this → button
- parentElement → card div
*/



/* =====================================================
   CHALLENGE 5 — cloneNode(true) + ID FIX
=====================================================
QUESTION:
You have a paragraph with id="info" that contains a <span>.

Steps:
1) Clone the paragraph INCLUDING children
2) Change the cloned id to "info-copy"
3) Append the clone after the original

What is the final structure?
===================================================== */

let original = document.getElementById("info");
let clone = original.cloneNode(true);

clone.id = "info-copy";

original.after(clone);

/*
FINAL RESULT:

<p id="info">
  ...
  <span>...</span>
</p>

<p id="info-copy">
  ...
  <span>...</span>
</p>

Explanation:
- cloneNode(true) clones children
- IDs must be unique
- after() places clone outside & after original
*/


/* =====================================================
   SELF-EVALUATION CHECK
=====================================================
✔ Understand inline vs stylesheet styles
✔ Know when styles are overwritten
✔ Master element positioning methods
✔ Correct DOM traversal & removal
✔ Safe cloning with deep copy & ID handling

→ If all results are predicted correctly,
  the learner truly understands these DOM topics
===================================================== */
