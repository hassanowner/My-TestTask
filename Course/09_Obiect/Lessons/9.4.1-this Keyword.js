/*
  Function this Keyword — FULL & ORDERED EXPLANATION
  -----------------------------------------------
  - What is `this`
  - `this` in Global Context
  - `this` with window
  - `this` inside a regular function
  - `this` inside an object method
  - `this` in DOM event
  - Strict Mode effect
*/

/* =====================================================
   1) WHAT IS `this` ?
   -----------------------------------------------------
   `this` refers to the owner of the code execution
   Its value is determined at runtime (how function is called)
===================================================== */


/* =====================================================
   2) GLOBAL CONTEXT
   -----------------------------------------------------
   In browsers (non-strict mode):
   - `this` === window
===================================================== */
console.log(this);
// Result: window

console.log(this === window);
// Result: true


/* =====================================================
   3) GLOBAL VARIABLES & `this`
   -----------------------------------------------------
   Variables declared without let/const/var
   become properties of window
===================================================== */
myGlobal = 100;

console.log(window.myGlobal);
// Result: 100

console.log(this.myGlobal);
// Result: 100


/* =====================================================
   4) `this` INSIDE NORMAL FUNCTION (NON-STRICT)
   -----------------------------------------------------
   When a function is called directly:
   - `this` === window
===================================================== */
function showThis() {
  console.log(this);
  return this;
}

showThis();
// Result: window

console.log(showThis() === window);
// Result: true


/* =====================================================
   5) `this` INSIDE OBJECT METHOD
   -----------------------------------------------------
   When function is called as object.method():
   - `this` === the object itself
===================================================== */
let account = {
  balance: 500,
  getBalance: function () {
    console.log(this);
    return this.balance;
  },
};

console.log(account.balance);
// Result: 500

console.log(account.getBalance());
// Result:
// { balance: 500, getBalance: f }
// 500


/* =====================================================
   6) WHY `this` IS IMPORTANT IN OBJECTS
   -----------------------------------------------------
   It allows methods to access object properties
   dynamically instead of hard-coding object name
===================================================== */
let car = {
  speed: 120,
  speedPerHour: function () {
    return this.speed + " km/h";
  },
};

console.log(car.speedPerHour());
// Result:
// "120 km/h"


/* =====================================================
   7) `this` INSIDE DOM EVENT
   -----------------------------------------------------
   In event handlers:
   - `this` refers to the element that fired the event
===================================================== */
document.getElementById("cl").onclick = function () {
  console.log(this);
};
// Result when clicked:
// <element id="cl">


/* =====================================================
   8) FUNCTION CONTEXT VS OBJECT CONTEXT
===================================================== */
function normalFunc() {
  return this;
}

let obj = {
  fn: normalFunc,
};

console.log(normalFunc() === window);
// Result: true (global call)

console.log(obj.fn() === obj);
// Result: true (method call)


/* =====================================================
   9) STRICT MODE EFFECT
   -----------------------------------------------------
   In strict mode:
   - Global `this` still === window
   - Inside function (not method): `this` === undefined
===================================================== */
"use strict";

function strictTest() {
  console.log(this);
}

strictTest();
// Result:
// undefined


/* =====================================================
   10) COMMON MISTAKE EXAMPLE
===================================================== */
let user = {
  age: 38,
  ageInDays: function () {
    return this.age * 365;
  },
};

console.log(user.age);
// Result: 38

console.log(user.ageInDays());
// Result: 13870


/* =====================================================
   SUMMARY — VERY IMPORTANT RULES
===================================================== */
/*
1- Global scope (browser, non-strict) → this === window
2- Normal function call → this === window (or undefined in strict)
3- Object method → this === the object
4- Event handler → this === HTML element
5- Strict mode protects from accidental globals
6- `this` determined by HOW function is called, NOT where written
*/

/* =====================================================
   BEST PRACTICES
===================================================== */
/*
- Always use `this` inside object methods
- Use strict mode to avoid bugs
- Never rely on global `this`
- Understand function invocation pattern
*/

/* =====================================================
   NEXT SUGGESTED TOPICS
===================================================== */
/*
- Arrow Function & this (very important)
- call(), apply(), bind()
- this in classes
*/
