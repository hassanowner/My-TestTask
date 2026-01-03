// ===========================
// Full Explanation of Module Pattern in JavaScript
// ===========================

// 1) What is a Module Pattern?
// -----------------------------
// The Module Pattern is a design pattern used to **encapsulate private variables and functions** 
// inside a function scope and expose only the parts you want (public API) to the outside world.
// It helps create **self-contained modules** with **private and public members**.


// -----------------------------
// 2) Why use it?
// -----------------------------
// - To **avoid polluting the global namespace** with variables and functions.
// - To **protect internal state** (private data) from external access or modification.
// - To expose only **specific functions or properties** for external use.
// - Improves code organization, readability, and maintainability.


// -----------------------------
// 3) Benefits and when to use
// -----------------------------
// Benefits:
// - Encapsulation: keeps internal variables private.
// - Clear public API: only expose what is necessary.
// - Prevent accidental modification of internal data.
// When to use:
// - For libraries, plugins, or components that need private state.
// - When you want to structure code as reusable, independent modules.


// ===========================
// 4) How it works / Cases
// ===========================
// Case 1: Private variables
// - Variables declared with var (or let/const) inside the module are not accessible outside.
// Case 2: Private functions
// - Functions declared inside are private unless returned in the object.
// Case 3: Public API
// - Returning an object with references to functions exposes only the public methods.


// ===========================
// 5) Module Pattern Examples
// ===========================

// Example 1 - Simple
function SimpleModule() {
  var message = "Hello World"; // private variable

  function showMessage() {      // private function
    console.log(message);
  }

  return {
    showMessage: showMessage    // public API
  };
}

var simple = SimpleModule();
simple.showMessage(); // Output: "Hello World"

// -----------------------------

// Example 2 - Intermediate
function CounterModule() {
  var count = 0; // private variable

  function increment() {       // private function
    count++;
    console.log(count);
  }

  function decrement() {       // private function
    count--;
    console.log(count);
  }

  return {
    increment: increment,      // public API
    decrement: decrement
  };
}

var counter = CounterModule();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1

// -----------------------------

// Example 3 - Advanced (CoolModule style)
function FunModule() {
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

var myModule = FunModule();
myModule.showHobby();    // Output: "coding"
myModule.showNumbers();  // Output: "10 | 20 | 30"

// ===========================
// Summary
// ===========================
// - Private variables/functions are hidden inside the module.
// - Only the returned functions/properties are accessible outside (public API).
// - SimpleModule: very basic example with one private variable and one public method.
// - CounterModule: more advanced, multiple private functions manipulating a private variable.
// - FunModule: similar to CoolModule, multiple private variables and functions, returned as a public API.
// - Module Pattern helps encapsulate state, avoid global namespace pollution, and create reusable code.


// ===========================
// 6) Explanation of the Example
// ===========================
// - `something` and `another` are private; cannot access them like foo.something.
// - `doSomething` and `doAnother` are exposed via the returned object.
// - The module keeps internal state safe while providing public methods for external code.
// - You can create multiple instances with their own private state:
//   var bar = CoolModule();
//   bar.doSomething(); // "cool" (independent from foo)

// ===========================
// 7) Complete Summary
// ===========================
// - The Module Pattern encapsulates private variables/functions inside a function scope.
// - Only exposes selected methods or properties via a returned object (public API).
// - Helps avoid global scope pollution and protects internal state.
// - Useful for creating reusable, maintainable, and modular code.
// - Provides flexibility: multiple instances of the module can exist with separate private states.
