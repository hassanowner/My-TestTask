// ## FUNCTIONAL PROGRAMMING IN JAVASCRIPT ## //

INTRODUCTION
Functional Programming (FP) is an important programming paradigm that focuses on functions rather than objects or procedures. JavaScript is a multi-paradigm language, meaning it supports both object-oriented programming (OOP) and functional programming. In this section, we study the core principles of functional programming, understand how they work in JavaScript, and see how they differ from imperative and object-oriented approaches.

MAIN TOPICS (IN ORDER)
1. Functions as First-Class Objects
2. Working with Immutable Data Structures
3. Functions Without Side Effects (Pure Functions)
4. Declarative Nature of Functional Programming

----------------------------------------------------------------

1. FUNCTIONS AS FIRST-CLASS OBJECTS

WHAT IT IS
In functional programming, functions are first-class objects (first-class citizens). This means functions are treated like any other value in the language.

WHAT ITS FUNCTION IS
This principle allows functions to be stored in variables, passed as arguments to other functions, and returned from functions. This enables higher-order functions, which are a fundamental concept in functional programming.

FEATURES
- Functions can be assigned to variables
- Functions can be passed as parameters
- Functions can be returned from other functions
- Code becomes more flexible and reusable

HOW IT WORKS
JavaScript treats functions as objects internally, allowing them to be manipulated like numbers, strings, or arrays.

BASIC CODE STRUCTURE
function greet(name) {
  return "Hello " + name;
}

const sayHello = greet;
console.log(sayHello("Hassan"));

function callFunction(fn) {
  return fn("World");
}

console.log(callFunction(greet));

----------------------------------------------------------------

  
2. WORKING WITH IMMUTABLE DATA STRUCTURES

WHAT IT IS
Immutability means data cannot be changed after it is created. Instead of modifying existing data, new data structures are created and returned.

WHAT ITS FUNCTION IS
Immutability helps avoid unexpected bugs, makes programs easier to reason about, and improves predictability and reliability.

FEATURES
- Original data remains unchanged
- New data structures are returned
- Safer and more predictable code
- Commonly used with arrays and objects

HOW IT WORKS
Although JavaScript allows mutation, functional programming avoids it by using methods that return new values instead of modifying existing ones.

BASIC CODE STRUCTURE
const numbers = [1, 2, 3];
const newNumbers = numbers.map(n => n * 2);

console.log(numbers);
console.log(newNumbers);

----------------------------------------------------------------

  
3. FUNCTIONS WITHOUT SIDE EFFECTS (PURE FUNCTIONS)

WHAT IT IS
A pure function always returns the same output for the same input, does not modify external variables, and does not cause side effects.

WHAT ITS FUNCTION IS
Pure functions make programs easier to test, easier to debug, and more predictable.

FEATURES
- Deterministic output
- No dependency on external state
- No mutation of external data

HOW IT WORKS
Pure functions rely only on their input parameters and return a value without changing anything outside the function.

BASIC CODE STRUCTURE
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

IMPURE FUNCTION EXAMPLE
let total = 0;

function addToTotal(value) {
  total += value;
}

----------------------------------------------------------------

  
4. DECLARATIVE NATURE OF FUNCTIONAL PROGRAMMING

WHAT IT IS
Functional programming is declarative, meaning you describe what should be done rather than how to do it step by step.

WHAT ITS FUNCTION IS
Declarative code improves readability, reduces boilerplate code, and focuses on intent instead of control flow.

FEATURES
- Uses expressions instead of statements
- Avoids explicit loops like for and while
- Uses higher-order functions such as map, filter, and reduce

HOW IT WORKS
Instead of manually controlling loops and conditions, built-in functional methods handle the logic.

BASIC CODE STRUCTURE

IMPERATIVE APPROACH
let result = [];
for (let i = 0; i < 5; i++) {
  result.push(i * 2);
}

DECLARATIVE APPROACH
const result = [0, 1, 2, 3, 4].map(n => n * 2);

----------------------------------------------------------------

BRIEF SUMMARY
Functional programming in JavaScript emphasizes treating functions as values, avoiding data mutation, writing pure and predictable functions, and expressing logic declaratively. Although JavaScript is not a purely functional language, it strongly supports functional programming concepts and allows developers to combine functional and object-oriented approaches to produce cleaner, more maintainable, and more expressive code. 
