/*
====================================================
Function — Return / Interrupting / ASI
====================================================

Goal:
Teach how `return` works, how it stops function execution,
and why JavaScript Automatic Semicolon Insertion (ASI)
can be dangerous if written incorrectly.

This is a NEW example, different from previous ones,
but explains the SAME core concepts.
====================================================
*/


// ==================================================
// Example 1: Basic Function with Return
// ==================================================

function calculateTotal(price, tax) {
  let total = price + tax;

  return total; // Stops the function and sends result back
}

let result = calculateTotal(100, 20);
console.log(result);

/*
Output:
120

Explanation:
- The function calculates the total price.
- `return total` sends the value back.
- Any code after return would NOT run.
*/


// ==================================================
// Example 2: return Interrupts Function Execution
// ==================================================

function checkUserAccess(role) {
  if (role !== "admin") {
    return "Access Denied"; // Function stops here
  }

  console.log("This line will NOT run for non-admins");
  return "Access Granted";
}

console.log(checkUserAccess("editor"));
console.log(checkUserAccess("admin"));

/*
Output:
Access Denied
This line will NOT run for non-admins
Access Granted

Explanation:
- When role is not "admin":
  return happens immediately.
- Code below return is skipped.
*/


// ==================================================
// Example 3: return Inside a Loop (Interrupting Loop)
// ==================================================

function findFirstNegative(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      return numbers[i]; // Stops loop AND function
    }
  }

  return "No Negative Numbers Found";
}

console.log(findFirstNegative([5, 10, -3, 7, -1]));
console.log(findFirstNegative([1, 2, 3]));

/*
Output:
-3
No Negative Numbers Found

Explanation:
- As soon as a negative number is found:
  return executes and exits the function.
*/


// ==================================================
// Example 4: Automatic Semicolon Insertion (ASI)
// ==================================================

function getStatus() {
  return
  "Success"; // WRONG: ASI inserts semicolon after return
}

console.log(getStatus());

/*
Output:
undefined

Explanation:
- JavaScript inserts a semicolon after `return`.
- The string is never returned.
- return MUST be on the same line as the value.
*/


// ==================================================
// Correct Version (ASI Safe)
// ==================================================

function getFixedStatus() {
  return "Success";
}

console.log(getFixedStatus());

/*
Output:
Success
*/



/*
====================================================
Key Takeaways:
====================================================

1) return sends a value back from a function
2) return stops function execution immediately
3) return can interrupt loops inside functions
4) Never place a line break after return
5) ASI can silently break your code if misused
====================================================
*/
