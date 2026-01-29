/*
====================================================================
JAVASCRIPT `this` KEYWORD — COMPLETE, CLEAN, SINGLE-FILE GUIDE
====================================================================

This file is:
- Fully ordered
- Corrected (no misconceptions)
- Self-contained
- Ready to read or run section by section

IMPORTANT NOTE:
- Behavior shown here assumes a **browser environment**
- Top-level `this` differs in modules vs scripts
====================================================================
*/


/* =====================================================
1) WHAT IS `this` ?
===================================================== */
/*
`this` is NOT where the function is written.
`this` IS determined by HOW the function is called.
The value is resolved at runtime.
*/


/* =====================================================
2) GLOBAL CONTEXT (BROWSER, NON-MODULE)
===================================================== */
console.log(this === window); // true (non-module script)


/* =====================================================
3) GLOBAL VARIABLES & `this`
===================================================== */
/*
Variables declared WITHOUT let/const/var
become properties of window (bad practice)
*/
myGlobalValue = 100;

console.log(window.myGlobalValue); // 100
console.log(this.myGlobalValue);   // 100


/* =====================================================
4) NORMAL FUNCTION CALL (NON-STRICT)
===================================================== */
function normalFunction() {
  return this;
}

console.log(normalFunction() === window); // true


/* =====================================================
5) NORMAL FUNCTION CALL (STRICT MODE)
===================================================== */
"use strict";

function strictFunction() {
  return this;
}

console.log(strictFunction()); // undefined


/* =====================================================
6) OBJECT METHOD CALL
===================================================== */
const account = {
  balance: 500,
  getBalance: function () {
    return this.balance;
  },
};

console.log(account.getBalance()); // 500


/* =====================================================
7) WHY `this` MATTERS IN OBJECTS
===================================================== */
const car = {
  speed: 120,
  speedPerHour() {
    return this.speed + " km/h";
  },
};

console.log(car.speedPerHour()); // "120 km/h"


/* =====================================================
8) FUNCTION CONTEXT VS OBJECT CONTEXT
===================================================== */
function whoIsThis() {
  return this;
}

const obj = {
  fn: whoIsThis,
};

console.log(whoIsThis() === window); // true
console.log(obj.fn() === obj);       // true


/* =====================================================
9) DOM EVENT HANDLER
===================================================== */
/*
In DOM event handlers:
`this` refers to the element that fired the event
*/
document.getElementById("btn").onclick = function () {
  console.log(this); // <button id="btn">
};


/* =====================================================
10) COMMON MISTAKE
===================================================== */
const user = {
  age: 38,
  ageInDays() {
    return this.age * 365;
  },
};

console.log(user.ageInDays()); // 13870


/* =====================================================
11) STANDALONE FUNCTION vs METHOD REUSE
===================================================== */
var name = "global name";

function getName() {
  return this.name;
}

console.log(getName()); // "global name"

const artist1 = {
  name: "Bob",
  getName: getName, // reference, NOT call
};

const artist2 = {
  name: "Jimi",
  getName: getName,
};

console.log(artist1.getName()); // "Bob"
console.log(artist2.getName()); // "Jimi"


/* =====================================================
12) WRONG WAY (CALLING THE FUNCTION)
===================================================== */
const wrongArtist = {
  name: "Kyuss",
  getName: getName(), // called immediately
};

console.log(typeof wrongArtist.getName); // string
console.log(wrongArtist.getName);        // "global name"


/* =====================================================
13) CONSTRUCTOR FUNCTION (`new`)
===================================================== */
function Person(name) {
  this.name = name;
}

const p1 = new Person("Alice");
const p2 = new Person("Bob");

console.log(p1.name); // Alice
console.log(p2.name); // Bob


/* =====================================================
14) ARROW FUNCTIONS & `this`
===================================================== */
/*
Arrow functions DO NOT have their own `this`
They inherit `this` from surrounding scope
*/

const arrowExample = {
  name: "Arrow Object",
  regular() {
    return this.name;
  },
  arrow: () => {
    return this.name;
  },
};

console.log(arrowExample.regular()); // "Arrow Object"
console.log(arrowExample.arrow());   // undefined (or global name)


/* =====================================================
15) call(), apply(), bind()
===================================================== */
function showName() {
  return this.name;
}

const ctx = { name: "Bound Context" };

console.log(showName.call(ctx));   // Bound Context
console.log(showName.apply(ctx));  // Bound Context

const boundFn = showName.bind(ctx);
console.log(boundFn());            // Bound Context


/* =====================================================
FINAL RULES — MEMORIZE THESE
===================================================== */
/*
1) Global function call → this = window (undefined in strict)
2) Object method call → this = the object
3) Constructor call (new) → this = new object
4) Event handler → this = DOM element
5) Arrow function → this is inherited
6) call/apply/bind → this is explicitly set
7) `this` depends on HOW a function is called
*/


/* =====================================================
BEST PRACTICES
===================================================== */
/*
- Always use strict mode
- Never rely on global `this`
- Do not use arrow functions as object methods
- Reuse functions by assigning references, not calling them
*/


/* =====================================================
END OF SINGLE FILE
===================================================== */
