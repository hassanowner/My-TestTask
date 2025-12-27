/* =========================================================================
TOPIC: JavaScript — Array Destructuring (Swapping Variables)
============================================================================

GENERAL IDEA
- Variable swapping means exchanging values between two variables.
- Traditionally, this required a temporary variable.
- JavaScript destructuring provides a cleaner, safer, and more elegant way.

WHAT IS COVERED
1) The classical (traditional) swapping approach
2) Modern swapping using array destructuring
3) Real-world practical example
4) Why destructuring is preferred
============================================================================
*/


/* =========================================================================
EXAMPLE 1 — CLASSIC WAY (FOR UNDERSTANDING THE PROBLEM)
============================================================================
- This approach uses a temporary variable.
- It works, but it is verbose and error-prone.
*/

let primaryRole = "Admin";
let secondaryRole = "Editor";

let tempRole = primaryRole;
primaryRole = secondaryRole;
secondaryRole = tempRole;

console.log(primaryRole);
console.log(secondaryRole);

// RESULT:
// "Editor"
// "Admin"


/* =========================================================================
EXAMPLE 2 — MODERN WAY USING ARRAY DESTRUCTURING (RECOMMENDED)
============================================================================
- No temporary variables
- Clean and readable
- Executes swapping in one single step
*/

let mainStatus = "Online";
let backupStatus = "Offline";

[mainStatus, backupStatus] = [backupStatus, mainStatus];

console.log(mainStatus);
console.log(backupStatus);

// RESULT:
// "Offline"
// "Online"


/* =========================================================================
EXAMPLE 3 — REAL-WORLD SCENARIO (APPLICATION STATE)
============================================================================
- Common use case:
  • UI state toggling
  • Feature flag switching
  • User preference swapping
*/

let currentTheme = "Light";
let previousTheme = "Dark";

[currentTheme, previousTheme] = [previousTheme, currentTheme];

console.log(currentTheme);
console.log(previousTheme);

// RESULT:
// "Dark"
// "Light"


/* =========================================================================
TECHNICAL EXPLANATION
============================================================================
- Right side [valueA, valueB] is evaluated first
- Left side variables receive new values simultaneously
- No data loss occurs
- Original variables are reassigned, not recreated
============================================================================
*/


/* =========================================================================
WHY THIS IS BEST PRACTICE
============================================================================
- Less code
- Better readability
- Lower chance of logical errors
- Widely used in modern JavaScript frameworks
============================================================================
*/
