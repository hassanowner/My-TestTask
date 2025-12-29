/* =====================================================
   ADVANCED DOM addEventListener — TEST CHALLENGES (3)
   Allowed:
   ✔ DOM only
   ✔ addEventListener
   ✔ Bubbling & Delegation
   ✔ if / array / object
===================================================== */


/* =====================================================
   CHALLENGE 1 — Multiple Events + Execution Order
=====================================================
QUESTION:
You have a button with id="btn".

Tasks:
1) Attach TWO click listeners using addEventListener
2) Each listener pushes a value into an array
3) Log the final array on click

What is logged and why?
===================================================== */

let btn = document.getElementById("btn");
let log = [];

btn.addEventListener("click", function () {
  log.push("A");
});

btn.addEventListener("click", function () {
  log.push("B");
  console.log(log);
});

/*
RESULT ON CLICK:
["A", "B"]

Explanation:
- addEventListener allows multiple handlers
- They execute in the order they were added
*/



/* =====================================================
   CHALLENGE 2 — cloneNode() + Delegation FIX
=====================================================
QUESTION:
You have a paragraph with class="item".

Steps:
1) Clicking the original paragraph clones it
2) Clones get class="clone"
3) Clicking ANY clone logs its index among all clones

Rules:
- Do NOT attach events to clones directly
- Use event delegation
===================================================== */

let item = document.querySelector(".item");

item.addEventListener("click", function () {
  let clone = item.cloneNode(true);
  clone.className = "clone";
  document.body.appendChild(clone);
});

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    let clones = Array.from(document.querySelectorAll(".clone"));
    console.log(clones.indexOf(e.target));
  }
});j

/*
RESULT:
- Clicking each clone logs:
0, then 1, then 2, ...

Explanation:
- cloneNode() does NOT copy events
- Delegation handles all dynamic elements
- index calculated using array conversion
*/



/* =====================================================
   CHALLENGE 3 — Bubbling Control with Object Rules
=====================================================
QUESTION:
You have multiple elements with class="box" inside body.

Rules stored in an object:
- red   → log "STOP"
- green → log "GO"
- other → log "UNKNOWN"

Tasks:
1) Use ONE event listener on document
2) Detect clicked element using e.target
3) Apply rules using object lookup
===================================================== */

let rules = {
  red: "STOP",
  green: "GO"
};

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("box")) {
    let color = e.target.dataset.color;
    console.log(rules[color] || "UNKNOWN");
  }
});

/*
HTML Example:
<div class="box" data-color="red"></div>
<div class="box" data-color="green"></div>
<div class="box" data-color="blue"></div>

RESULT ON CLICK:
red   → "STOP"
green→ "GO"
blue → "UNKNOWN"

Explanation:
- Bubbling sends event to document
- e.target identifies actual element
- Object used instead of multiple if statements
*/


/* =====================================================
   SELF-CHECK (MENTAL)
=====================================================
✔ Why onclick fails with multiple handlers
✔ Why cloneNode loses events
✔ How delegation solves dynamic DOM
✔ How bubbling enables single listeners
✔ Correct use of e.target, arrays, and objects

If all outputs are predicted correctly →
YOU MASTER DOM EVENTS 🚀
===================================================== */
