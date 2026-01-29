/*
===========================================================================
TOPIC: JavaScript — Set & WeakSet (Complete Practical Guide)
===========================================================================

OVERVIEW:
- Set: stores **unique values** (any type), preserves insertion order, iterable.
- WeakSet: stores **only objects**, weak references (automatic garbage collection), not iterable.
- Both ignore duplicates automatically.
- Use these structures for data uniqueness, fast lookup, and memory-sensitive object tracking.
===========================================================================
*/


/* =========================================================================
SECTION 1 — CREATING A SET
============================================================================ */
const rawValues = [10, 10, 20, 30, 30, "Admin"];
const uniqueValues = new Set(rawValues);

console.log(uniqueValues);
// OUTPUT: Set { 10, 20, 30, "Admin" }

/*
Notes:
- Only unique values are kept.
- Iteration order matches insertion order.
- Cannot access elements by index.
*/


/* =========================================================================
SECTION 2 — ADD METHOD
============================================================================ */
const roles = new Set();
roles.add("User");
roles.add("User");           // ignored
roles.add("Editor").add("Admin"); // chainable

console.log(roles);
// OUTPUT: Set { "User", "Editor", "Admin" }


/* =========================================================================
SECTION 3 — HAS METHOD
============================================================================ */
console.log(roles.has("Admin"));  // true
console.log(roles.has("admin"));  // false (case-sensitive)


/* =========================================================================
SECTION 4 — SIZE PROPERTY
============================================================================ */
console.log(roles.size);  // 3


/* =========================================================================
SECTION 5 — NO INDEX ACCESS
============================================================================ */
const numbers = new Set([1, 2, 3]);
console.log(numbers[0]);   // undefined


/* =========================================================================
SECTION 6 — DELETE METHOD
============================================================================ */
const permissions = new Set(["read", "write", "delete"]);
console.log(permissions.delete("write"));   // true
console.log(permissions.delete("execute")); // false
console.log(permissions);                   // Set { "read", "delete" }


/* =========================================================================
SECTION 7 — CLEAR METHOD
============================================================================ */
permissions.clear();
console.log(permissions);       // Set {}
console.log(permissions.size);  // 0


/* =========================================================================
SECTION 8 — REAL-WORLD USE CASE: REMOVE DUPLICATES
============================================================================ */
const userIds = [101, 102, 101, 103, 102];
const uniqueUserIds = new Set(userIds);
console.log(uniqueUserIds);   // Set { 101, 102, 103 }


/* =========================================================================
SECTION 9 — ITERATION (forEach, values, keys)
============================================================================ */
const activeUserIds = new Set([101, 102, 103, "Admin"]);

activeUserIds.forEach((val) => console.log(`Value: ${val}`));
// Value: 101
// Value: 102
// Value: 103
// Value: Admin

const idIterator = activeUserIds.values();
console.log(idIterator.next().value);  // 101
console.log(idIterator.next().value);  // 102


/* =========================================================================
SECTION 10 — WEAKSET (OBJECT-ONLY COLLECTION)
============================================================================ */
const connectedClients = new WeakSet();

let clientA = { id: 201, name: "Client A" };
let clientB = { id: 202, name: "Client B" };

connectedClients.add(clientA);
connectedClients.add(clientB);

console.log(connectedClients);
// OUTPUT: WeakSet { <objects> }

/*
Notes:
- Only objects are allowed.
- Not iterable, no size property.
- Ideal for memory-sensitive object tracking.
*/


/* =========================================================================
SECTION 11 — GARBAGE COLLECTION IN WEAKSET
============================================================================ */
clientA = null; 
// clientA object may now be garbage collected automatically
// WeakSet handles memory cleanup silently


/* =========================================================================
SECTION 12 — WHEN TO USE SET VS WEAKSET
============================================================================ */
console.log("SET Use Cases:");
console.log("- Unique primitive or object values");
console.log("- Need iteration or size");
console.log("- Deduplication, fast lookups");

console.log("WEAKSET Use Cases:");
console.log("- Tracking temporary objects");
console.log("- Automatic memory cleanup (no memory leaks)");
console.log("- Internal systems like active sessions or DOM elements");

/*
KEY DIFFERENCES:
-----------------------------------------------------------
Feature          | Set              | WeakSet
-----------------|-----------------|---------------------
Stored Values    | Any type         | Objects only
Duplicates       | Ignored          | Ignored
Size Property    | Yes              | No
Iteration        | Yes              | No
Keys/Values      | Available        | Not available
Garbage Col      | Strong references | Weak references
Use Case         | Deduplication     | Lifecycle tracking
*/
