/*
====================================================
JavaScript Core Concepts
====================================================

Covers:
- Arrow Functions (ES6)
- Scope (Global / Local / Block)
- Lexical Scope
- Closures

All examples are valid JavaScript
Everything is in ONE file
====================================================
*/


/* ==================================================
1) Function — Arrow Functions (ES6)
================================================== */

// Regular Function
let getValueRegular = function () {
  return 10;
};

// Arrow Function
let getValueArrow = () => 10;

console.log(getValueRegular()); // 10
console.log(getValueArrow());   // 10


// One Parameter
let doubleRegular = function (num) {
  return num;
};

let doubleArrow = num => num;

console.log(doubleRegular(5)); // 5
console.log(doubleArrow(5));   // 5


// Multiple Parameters
let sumRegular = function (num1, num2) {
  return num1 + num2;
};

let sumArrow = (num1, num2) => num1 + num2;

console.log(sumRegular(100, 50)); // 150
console.log(sumArrow(100, 50));   // 150


// Multi-line Arrow Function
let calculateTotal = (price, tax) => {
  let total = price + tax;
  return total;
};

console.log(calculateTotal(100, 20)); // 120



/* ==================================================
2) Scope — Global Scope vs Local Scope
================================================== */

var a = 1;
let b = 2;

console.log(`From Global a: ${a}`); // 1
console.log(`From Global b: ${b}`); // 2

function showText() {
  var a = 10;
  let b = 20;

  console.log(`Function - From Local a: ${a}`); // 10
  console.log(`Function - From Local b: ${b}`); // 20
}

showText();

console.log(`From Global a After Function: ${a}`); // 1
console.log(`From Global b After Function: ${b}`); // 2



/* ==================================================
3) Scope — Block Scope (if / for)
================================================== */

var x = 10;
console.log(`From Global Before Block: ${x}`); // 10

if (true) {
  let x = 50;
  console.log(`From If Block: ${x}`); // 50
}

console.log(`From Global After Block: ${x}`); // 10



/* ==================================================
4) Scope — Lexical Scope
================================================== */

function parent() {
  let a = 10;

  function child() {
    console.log(a); // 10

    function grand() {
      let b = 100;
      console.log(`From Grand a: ${a}`); // 10
      console.log(`From Grand b: ${b}`); // 100
    }

    grand();
  }

  child();
}

parent();



/* ==================================================
5) Closures — Full Explanation in Code
================================================== */

// Basic Closure
function outerFunction() {
  var name = "Alice";
  return function innerFunction() {
    console.log(name);
  };
}

var greet = outerFunction();
greet(); // Alice


// Simple Closure
function simpleClosure() {
  var message = "Hello Closure!";
  return function () {
    console.log(message);
  };
}

var show = simpleClosure();
show(); // Hello Closure!


// Counter Using Closure
function makeCounter() {
  var count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

var counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3


// Module Pattern Using Closure
function CoolModule() {
  var hobby = "coding";
  var numbers = [10, 20, 30];

  function showHobby() {
    console.log(hobby);
  }

  function showNumbers() {
    console.log(numbers.join(" | "));
  }

  return {
    showHobby: showHobby,
    showNumbers: showNumbers
  };
}

var myModule = CoolModule();
myModule.showHobby();    // coding
myModule.showNumbers();  // 10 | 20 | 30


// Multiple Independent Closures
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


// Independent State Example
function createScoreTracker() {
  var score = 0;
  return {
    increment: function () {
      score++;
      console.log(score);
    },
    reset: function () {
      score = 0;
      console.log(score);
    }
  };
}

var player1 = createScoreTracker();
player1.increment(); // 1
player1.increment(); // 2
player1.reset();     // 0

var player2 = createScoreTracker();
player2.increment(); // 1
