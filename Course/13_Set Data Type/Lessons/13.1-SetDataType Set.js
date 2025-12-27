/* =========================================================================
TOPIC: JavaScript — Set Data Type (Complete Practical Guide)
============================================================================

GENERAL IDEA
- Set is a built-in JavaScript data structure.
- It stores UNIQUE values only.
- Duplicate values are automatically ignored.
- Order is preserved, but elements cannot be accessed by index.

WHEN TO USE SET
- Removing duplicates from data
- Tracking unique IDs or values
- Fast existence checks (better than arrays)
============================================================================*/

/*
---------------------------------------------------------------------------
PROPERTIES
---------------------------------------------------------------------------
1) size
   - Returns the number of unique elements inside the Set.

---------------------------------------------------------------------------
METHODS
---------------------------------------------------------------------------
1) add(value)
   - Adds a new value to the Set.
   - Ignores duplicate values.
   - Returns the Set (chainable).

2) has(value)
   - Checks if a value exists inside the Set.
   - Returns true or false.

3) delete(value)
   - Removes a specific value from the Set.
   - Returns true if removed successfully.
   - Returns false if the value does not exist.

4) clear()
   - Removes all values from the Set.
   */

/* =========================================================================
SECTION 1 — CREATING A SET
============================================================================
- Syntax: new Set(iterable)
- Iterable examples: Array, String, etc.
*/

const rawValues = [10, 10, 20, 30, 30, "Admin"];

const uniqueValues = new Set(rawValues);

console.log(uniqueValues);

// RESULT:
// Set { 10, 20, 30, "Admin" }


/* =========================================================================
SECTION 2 — ADD METHOD
============================================================================
- add(value) inserts a value into the Set
- Duplicate values are ignored automatically
- add() returns the Set itself (chainable)
*/

const roles = new Set();

roles.add("User");
roles.add("User"); // ignored
roles.add("Editor").add("Admin");

console.log(roles);

// RESULT:
// Set { "User", "Editor", "Admin" }


/* =========================================================================
SECTION 3 — has METHOD
============================================================================
- has(value) checks if a value exists
- Returns true or false
- Case-sensitive for strings
*/

console.log(roles.has("Admin"));
console.log(roles.has("admin"));

// RESULT:
// true
// false


/* =========================================================================
SECTION 4 — size PROPERTY
============================================================================
- size returns number of UNIQUE values
- Similar to array.length but for Set
*/

console.log(roles.size);

// RESULT:
// 3


/* =========================================================================
SECTION 5 — NO INDEX ACCESS
============================================================================
- Set does NOT support index-based access
- This improves safety but changes usage pattern
*/

const numbers = new Set([1, 2, 3]);

console.log(numbers[0]);

// RESULT:
// undefined


/* =========================================================================
SECTION 6 — delete METHOD
============================================================================
- delete(value) removes a specific value
- Returns true if value existed
- Returns false if value did not exist
*/

const permissions = new Set(["read", "write", "delete"]);

console.log(permissions.delete("write"));
console.log(permissions.delete("execute"));

console.log(permissions);

// RESULT:
// true
// false
// Set { "read", "delete" }


/* =========================================================================
SECTION 7 — clear METHOD
============================================================================
- clear() removes ALL values from the Set
*/

permissions.clear();

console.log(permissions);
console.log(permissions.size);

// RESULT:
// Set {}
// 0


/* =========================================================================
SECTION 8 — REAL-WORLD USE CASE (REMOVING DUPLICATES)
============================================================================
- Common scenario when processing user input or API data
*/

const userIds = [101, 102, 101, 103, 102];

const uniqueUserIds = new Set(userIds);

console.log(uniqueUserIds);

// RESULT:
// Set { 101, 102, 103 }


/* =========================================================================
TECHNICAL SUMMARY
============================================================================
Property / Method | Purpose
------------------|--------------------------------
size              | Get number of unique values
add(value)        | Add new value
has(value)        | Check existence
delete(value)     | Remove a specific value
clear()           | Remove all values
============================================================================
*/

/* =========================================================================
FINAL SUMMARY
============================================================================
FEATURE        | SET
-------------- | --------------------------------
Unique Values  |  Automatically enforced
Index Access   |  Not supported
Fast Lookup    |  Using has()
Data Cleaning  |  Ideal use case
============================================================================
*/


/* =========================================================================
KEY DIFFERENCES: SET vs ARRAY
============================================================================
Set:
- Unique values only
- No index access
- Faster existence check

Array:
- Allows duplicates
- Index-based access
- Slower lookup for large data
============================================================================
*/
