// ===========================
// Full Explanation of Closures in JavaScript
// ===========================

// 1) Topics to Study
// -------------------
// - What is a Closure
// - Why Closures are useful
// - How Closures work (scope + environment)
// - Using Closures for private variables
// - Using Closures for maintaining state
// - Using Closures in practical patterns (Module Pattern, Counter, Dynamic Functions)


// ===========================
// 2) Basic Structure of a Closure
// -------------------
// A Closure is created when a function is defined inside another function,
// and the inner function **retains access** to variables of the outer function,
// even after the outer function has finished executing.
// Benefits:
// - Encapsulation (private variables)
// - Maintain state across function calls
// - Modular and reusable code


// ===========================
// 3) Simple Example
// -------------------
function outerFunction() {
  var name = "Alice"; // private variable
  function innerFunction() {
    console.log(name);
  }
  return innerFunction;
}

var greet = outerFunction();
greet(); 
// Output: "Alice"
// Explanation: innerFunction "remembers" the variable name from outerFunction



// ===========================
// 4) Three Examples
// -------------------

// Example 1 - Simple Closure
function simpleClosure() {
  var message = "Hello Closure!"; // private variable
  return function() {
    console.log(message);
  }
}

var show = simpleClosure();
show(); 
// Output: "Hello Closure!"

// Example 2 - Intermediate: Counter using Closure
function makeCounter() {
  var count = 0; // private variable

  return function() {
    count++;
    console.log(count);
  }
}

var counter = makeCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

// Example 3 - Advanced: Module Pattern with Closures
function CoolModule() {
  var hobby = "coding";                // private variable
  var numbers = [10, 20, 30];         // private variable

  function showHobby() {               // private function
    console.log(hobby);
  }

  function showNumbers() {             // private function
    console.log(numbers.join(" | "));
  }

  return {
    showHobby: showHobby,              // public API
    showNumbers: showNumbers
  };
}

var myModule = CoolModule();
myModule.showHobby();    // Output: "coding"
myModule.showNumbers();  // Output: "10 | 20 | 30"




// ===========================
// 5) Additional Examples to Cover All Cases
// -------------------

// Case: Multiple closures with different environments
function makeAdder(x) {
  return function(y) {
    return x + y;
  }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));   // Output: 7
console.log(add10(2));  // Output: 12

// Case: Maintaining independent state
function createScoreTracker() {
  var score = 0;
  return {
    increment: function() { score++; console.log(score); },
    reset: function() { score = 0; console.log(score); }
  }
}

var player1 = createScoreTracker();
player1.increment(); // Output: 1
player1.increment(); // Output: 2
player1.reset();     // Output: 0

var player2 = createScoreTracker();
player2.increment(); // Output: 1 (independent from player1)


// ===========================
// 6 Summary
// -------------------
// - Closures are functions that retain access to their outer function’s variables.
// - Useful for:
//      • Private variables and encapsulation
//      • Maintaining state across multiple calls
//      • Dynamic function generation
//      • Module patterns and reusable components
// - Behavior:
//      • Inner functions "remember" the scope they were created in
//      • Multiple closures can have independent states
// - Closures are widely used in JavaScript for building safe, modular, and maintainable code.
