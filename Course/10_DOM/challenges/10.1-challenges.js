/* =====================================================
   DOM ADVANCED TEST CHALLENGES (5 TASKS)
   Topics Covered ONLY:
   - DOM selectors
   - Content (innerHTML / textContent)
   - Attributes (get / set / has / remove)
   - Creating elements & nodes
   - Appending & DOM structure
===================================================== */


/* =====================================================
   CHALLENGE 1 — SELECTORS + LIVE vs STATIC
=====================================================
QUESTION:
You have multiple <p class="item"> elements.

Tasks:
1) Select them using getElementsByClassName
2) Select them again using querySelectorAll
3) Add a new <p class="item"> to the DOM
4) Observe which collection updates automatically
===================================================== */

let liveItems = document.getElementsByClassName("item");
let staticItems = document.querySelectorAll(".item");

let newP = document.createElement("p");
newP.className = "item";
newP.textContent = "New Item";
document.body.appendChild(newP);

console.log(liveItems.length);
console.log(staticItems.length);

/*
RESULT:
liveItems.length => increased by 1
staticItems.length => unchanged

Explanation:
- HTMLCollection is LIVE
- NodeList from querySelectorAll is STATIC
*/





/* =====================================================
   CHALLENGE 2 — innerHTML vs textContent SECURITY
=====================================================
QUESTION:
You receive user-generated content that contains HTML tags.

Tasks:
1) Insert it using innerHTML
2) Insert it using textContent
3) Observe the difference in rendering
===================================================== */

let container = document.createElement("div");
let userInput = "<span>Injected</span>";

container.innerHTML = userInput;
console.log(container.innerHTML);

container.textContent = userInput;
console.log(container.textContent);

/*
RESULT:
innerHTML => <span>Injected</span> (HTML rendered)
textContent => <span>Injected</span> (plain text)

Explanation:
- innerHTML parses HTML
- textContent treats everything as text (safer)
*/





/* =====================================================
   CHALLENGE 3 — ATTRIBUTE CHECK + CONDITIONAL LOGIC
=====================================================
QUESTION:
You have a <div> element with optional data-role attribute.

Tasks:
1) Check if the attribute exists
2) If empty → remove it
3) If has value → change it
4) If not exists → log "Missing"
===================================================== */

let roleDiv = document.createElement("div");
roleDiv.setAttribute("data-role", "");

if (roleDiv.hasAttribute("data-role")) {
  if (roleDiv.getAttribute("data-role") === "") {
    roleDiv.removeAttribute("data-role");
  } else {
    roleDiv.setAttribute("data-role", "admin");
  }
} else {
  console.log("Missing");
}

console.log(roleDiv.attributes);

/*
RESULT:
data-role attribute is REMOVED

Explanation:
- Empty attribute is treated as invalid
- removeAttribute cleans the element
*/





/* =====================================================
   CHALLENGE 4 — CREATE FULL ELEMENT STRUCTURE
=====================================================
QUESTION:
Build the following structure using ONLY DOM methods:

<div class="card">
  <h3>Title</h3>
  <p>Description</p>
</div>
===================================================== */

let card = document.createElement("div");
card.className = "card";

let h3 = document.createElement("h3");
h3.appendChild(document.createTextNode("Title"));

let p = document.createElement("p");
p.appendChild(document.createTextNode("Description"));

card.appendChild(h3);
card.appendChild(p);
document.body.appendChild(card);

/*
RESULT (HTML):
<div class="card">
  <h3>Title</h3>
  <p>Description</p>
</div>

Explanation:
- Elements created in memory
- Text nodes appended
- Structure built step-by-step
*/





/* =====================================================
   CHALLENGE 5 — appendChild MOVE BEHAVIOR
=====================================================
QUESTION:
You append the SAME element to two different parents.

Tasks:
1) Append element to first parent
2) Append SAME element to second parent
3) Observe where the element ends up
===================================================== */

let first = document.createElement("div");
let second = document.createElement("div");

let shared = document.createElement("span");
shared.textContent = "Shared";

first.appendChild(shared);
second.appendChild(shared);

console.log(first.innerHTML);
console.log(second.innerHTML);

/*
RESULT:
first.innerHTML => "" (empty)
second.innerHTML => "<span>Shared</span>"

Explanation:
- appendChild MOVES nodes
- A node cannot exist in two places at once
*/


/* =====================================================
   FINAL SELF-EVALUATION
=====================================================
If someone can explain ALL results correctly:
✔ DOM selection behavior
✔ Live vs static collections
✔ Safe content insertion
✔ Attribute inspection logic
✔ Node creation & movement

→ They truly understand DOM fundamentals
===================================================== */
