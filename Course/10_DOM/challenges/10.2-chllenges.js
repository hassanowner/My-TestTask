/* =====================================================
   DOM ADVANCED TEST CHALLENGES (5 TASKS)
   Topics Covered ONLY:
   - children vs childNodes
   - firstChild vs firstElementChild
   - DOM Events (click, focus, blur, submit)
   - preventDefault()
   - classList
===================================================== */


/* =====================================================
   CHALLENGE 1 — children vs childNodes
=====================================================
QUESTION:
You have a <div id="box"> that contains:
- spaces
- a comment
- two elements (<h2> and <p>)

Tasks:
1) Log number of children
2) Log number of childNodes
3) Explain the difference
===================================================== */

let box = document.getElementById("box");

console.log(box.children.length);
console.log(box.childNodes.length);

/*
RESULT (example):
children.length => 2
childNodes.length => 7

Explanation:
- children counts ONLY elements
- childNodes counts text, comments, and elements
*/




/* =====================================================
   CHALLENGE 2 — firstChild vs firstElementChild
=====================================================
QUESTION:
Using the same element (#box):

Tasks:
1) Log firstChild
2) Log firstElementChild
3) Identify which one is safer to use and why
===================================================== */

console.log(box.firstChild);
console.log(box.firstElementChild);

/*
RESULT:
firstChild => #text
firstElementChild => <h2>...</h2>

Explanation:
- firstChild may return text or comment
- firstElementChild always returns an HTML element
*/




/* =====================================================
   CHALLENGE 3 — classList.toggle() WITH EVENT
=====================================================
QUESTION:
You have a <div id="panel"> with no class "active".

Tasks:
1) Toggle class "active" on click
2) Log class count after each click
===================================================== */

let panel = document.getElementById("panel");

panel.onclick = function () {
  panel.classList.toggle("active");
  console.log(panel.classList.length);
};

/*
RESULT:
First click  => "active" added → length increases
Second click => "active" removed → length decreases

Explanation:
- toggle() adds/removes class automatically
*/




/* =====================================================
   CHALLENGE 4 — focus + blur EVENT FLOW
=====================================================
QUESTION:
You have an <input id="email"> and a <button id="send">.

Tasks:
1) Log when input gains focus
2) Log when input loses focus
3) Force focus back to input when button is clicked
===================================================== */

let email = document.getElementById("email");
let send = document.getElementById("send");

email.onfocus = function () {
  console.log("Focused");
};

email.onblur = function () {
  console.log("Blurred");
};

send.onclick = function () {
  email.focus();
};

/*
RESULT (event order):
1) Click input → "Focused"
2) Click button → "Blurred"
3) Button forces focus → "Focused"

Explanation:
- blur happens before button click
- focus() triggers focus event again
*/




/* =====================================================
   CHALLENGE 5 — submit EVENT + preventDefault()
=====================================================
QUESTION:
You have a form with one input (username).

Rules:
- Username must be at least 5 characters
- Prevent form submission if invalid
===================================================== */

let form = document.forms[0];
let username = form.querySelector("input");

form.onsubmit = function (e) {
  if (username.value.length < 5) {
    e.preventDefault();
    console.log("Form Blocked");
  } else {
    console.log("Form Submitted");
  }
};

/*
RESULT:
Invalid input (<5 chars) => "Form Blocked"
Valid input (>=5 chars)  => "Form Submitted"

Explanation:
- preventDefault() stops browser submission
- Validation controls form behavior
*/


/* =====================================================
   FINAL SELF-CHECK
=====================================================
If the learner can explain:
✔ node vs element differences
✔ safe element traversal
✔ event flow (focus → blur → click)
✔ classList behavior
✔ preventDefault logic

→ They fully understand these DOM topics
===================================================== */
