/******************************************************************************************
 TOPICS COVERED 
******************************************************************************************/

// • Functions as Return Values
// • Function Factories
// • Anonymous Functions
// • Function Objects & Multiple Instances
// • Chaining Function Calls
// • Nested Functions
// • Execution Order with Parentheses
// • Practical Benefits of Returning Functions


/******************************************************************************************
 TOPIC 1: Functions as Return Values
******************************************************************************************/

// • Definition:
//   - In JavaScript, a function can return another function as its return value.
//   - The returned function can be stored in a variable or called immediately.

// • Basic Rule:
//   - Functions are first-class objects in JavaScript.
//   - This means functions can be:
//     • Assigned to variables
//     • Passed as arguments
//     • Returned from other functions

// • How It Works:
//   - The outer function runs first.
//   - When it reaches the `return` statement, it returns a function object.
//   - That returned function can later be executed.

// • Concepts Involved:
//   - First-class functions
//   - Higher-order functions
//   - Scope isolation (each returned function is independent)

// • Benefits:
//   - Code reuse
//   - Dynamic behavior creation
//   - Cleaner and more flexible logic
//   - Basis for advanced concepts like closures and currying

// • Practical Example:

function createAddFunction() {
  return function (x, y) {
    return x + y;
  };
}

const addFunction1 = createAddFunction();
const addFunction2 = createAddFunction();

console.log(addFunction1(20, 50)); // 70
console.log(addFunction2(33, 66)); // 99

// • Explanation of Result:
//   - createAddFunction() returns a NEW function each time.
//   - addFunction1 and addFunction2 are separate function objects.
//   - Each call works independently and produces correct results.



/******************************************************************************************
 TOPIC 2: Function Factories
******************************************************************************************/

// • Definition:
//   - A function factory is a function that creates and returns other functions.

// • Basic Rule:
//   - Every call to a factory function produces a new function instance.

// • How It Works:
//   - The factory defines logic.
//   - It returns a function that uses that logic.

// • Benefits:
//   - Avoids code duplication
//   - Allows creation of customized functions

// • Example:

function multiplyFactory(multiplier) {
  return function (number) {  // return function
    return number * multiplier; // this function return a number 
  };
}

const double = multiplyFactory(2); //--> multiplier=2
const triple = multiplyFactory(3); //--> multiplier=3

console.log(double(5)); // 10 ,--> number =5
console.log(triple(5)); // 15 ,--> number =5



/******************************************************************************************
 TOPIC 3: Anonymous Functions
******************************************************************************************/

// • Definition:
//   - Anonymous functions are functions without a name.
//   - Often used as return values.

// • Basic Rule:
//   - Anonymous functions are usually used once or assigned to variables.

// • How It Works:
//   - JavaScript treats them as objects even without names.

// • Benefits:
//   - Cleaner syntax
//   - Less clutter in the global scope

// • Example:

function greetCreator() {
  return function () {
    console.log("Hello from anonymous function");
  };
}

const greet = greetCreator();
greet(); // Hello from anonymous function



/******************************************************************************************
 TOPIC 4: Function Objects & Multiple Instances
******************************************************************************************/

// • Definition:
//   - Each returned function is a separate object in memory.

// • Basic Rule:
//   - Calling the outer function multiple times creates multiple function instances.

// • How It Works:
//   - JavaScript allocates a new function object each time.

// • Benefits:
//   - Independent behavior
//   - No shared state unless explicitly defined

// • Example:

function counterFactory() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = counterFactory(); //
const counter2 = counterFactory();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1

// When you call counter1() as a function,
// you call the function inside the return statement. 



/******************************************************************************************
 TOPIC 5: Chaining Function Calls
******************************************************************************************/

// • Definition:
//   - Chaining occurs when a function returns another function
//     and that returned function is immediately called.

// • Basic Rule:
//   - Each pair of parentheses () executes one function level.

// • How It Works:
//   - First () → outer function
//   - Second () → returned function
//   - Third () → next returned function

// • Benefits:
//   - Compact syntax
//   - Expressive execution flow

// • Example:

function sayHello() {
  console.log("Hello");
  return function () {
    console.log("World");
    return function () {
      console.log("My name is John Doe.");
    };
  };
}

sayHello();        // Hello
sayHello()();      // Hello, World
sayHello()()();    // Hello, World, My name is John Doe.



/******************************************************************************************
 TOPIC 6: Nested Functions
******************************************************************************************/

// • Definition:
//   - Functions defined inside other functions.

// • Basic Rule:
//   - Inner functions are not accessible outside unless returned.

// • How It Works:
//   - Inner functions can access outer variables.

// • Benefits:
//   - Encapsulation
//   - Controlled access to logic

// • Example:

function outer() {
  console.log("Outer function");
  function inner() {
    console.log("Inner function");
  }
  return inner;
}

const innerFunc = outer(); // Outer function
innerFunc();               // Inner function


/******************************************************************************************
 TOPIC 7: Execution Order with Parentheses
******************************************************************************************/

// • Rule:
//   - Each () executes the function immediately before it.

// • Example Breakdown:
//   sayHello()       → executes outer function
//   sayHello()()     → executes outer, then middle
//   sayHello()()()   → executes all nested functions


/******************************************************************************************
 TOPIC 8: Practical Benefits of Returning Functions
******************************************************************************************/

// • Enables advanced patterns:
//   - Closures
//   - Currying
//   - Middleware
//   - Functional programming

// • Improves:
//   - Reusability
//   - Readability
//   - Maintainability

// • Used heavily in:
//   - React
//   - Node.js
//   - Event handling
//   - Asynchronous programming


/******************************************************************************************
 END OF FILE
******************************************************************************************/
