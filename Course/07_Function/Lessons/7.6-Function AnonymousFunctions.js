/*
====================================================
Function — Anonymous Functions (Complete Educational Guide)
====================================================

This lesson explains:
- What an Anonymous Function is
- Difference between Named and Anonymous Functions
- Passing functions as arguments
- Using functions without names
- Practical usage with setTimeout and events
====================================================
*/


// ==================================================
// 1) Anonymous Function Assigned To a Variable
// ==================================================

// This function has NO name
// It is stored inside the variable "calculator"
let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));
// Result:
// 30

/*
Explanation:
- The function does not have its own name
- The variable "calculator" becomes the reference
- You call it using the variable name
- Very common in real applications
*/



// ==================================================
// 2) Named Function
// ==================================================

function sayHello() {
  console.log("Hello Developer");
}

sayHello();
// Result:
// Hello Developer

/*
Explanation:
- This is a named function
- It has a clear identifier: sayHello
- Can be called anywhere in the scope
*/



// ==================================================
// 3) Passing a Function as an Argument (Event Handling)
// ==================================================

// The function name is passed WITHOUT parentheses
// The browser calls it automatically on click
document.getElementById("show").onclick = sayHello;

/*
Explanation:
- We pass the function itself, not its result
- sayHello is executed only when the event happens
- This is a core concept in JavaScript
*/



// ==================================================
// 4) Anonymous Function as an Argument (Callback)
// ==================================================

setTimeout(function () {
  console.log("Task Completed");
}, 2000);

/*
Result (after 2 seconds):
Task Completed

Explanation:
- The function has NO name
- It is used once, then discarded
- Called automatically after 2000 milliseconds
- This pattern is called a "callback function"
*/



/*
====================================================
Key Differences Summary:
====================================================

Named Function:
- Has a name
- Can be reused
- Easier to debug

Anonymous Function:
- No name
- Often used once
- Cleaner for short tasks
- Common in callbacks and events


====================================================
Real-World Usage:
====================================================
- Event listeners
- Timers
- API callbacks
- Array methods (map, filter, etc.)
- UI interactions

====================================================
This concept is fundamental for advanced JavaScript
====================================================
*/
