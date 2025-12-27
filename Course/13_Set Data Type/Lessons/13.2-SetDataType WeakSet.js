/* =========================================================================
TOPIC: JavaScript — Set vs WeakSet (Professional Comparison)
============================================================================

GENERAL OVERVIEW
- Set and WeakSet are collections for storing unique values.
- The key difference lies in:
  • What data types they accept
  • How memory is managed (Garbage Collection)
  • Available properties and methods

---------------------------------------------------------------------------
COMPARISON SUMMARY
---------------------------------------------------------------------------
FEATURE              | Set                     | WeakSet
-------------------- | ----------------------- | ---------------------------
Stored Values        | Any data type           | Objects only
Duplicate Values     | Automatically ignored   | Automatically ignored
Size Property        | size                    | No size
Iteration            | forEach / for..of       | Not iterable
Keys / Values        | Available               | Not available
Garbage Collection   | Strong references       | Weak references
Use Case             | Data uniqueness         | Object lifecycle tracking
============================================================================
*/


/* =========================================================================
SECTION 1 — SET (GENERAL USAGE)
============================================================================
- Used for storing unique primitive or object values
- Suitable for data collections and deduplication
*/

const activeUserIds = new Set([101, 101, 102, 103, "Admin", "Admin"]);

console.log(activeUserIds);

// RESULT:
// Set { 101, 102, 103, "Admin" }


/* =========================================================================
SECTION 2 — size PROPERTY (SET ONLY)
============================================================================
- Returns total number of unique values
*/

console.log(`Active Users Count: ${activeUserIds.size}`);

// RESULT:
// Active Users Count: 4


/* =========================================================================
SECTION 3 — keys() & values() (SET)
============================================================================
- keys() and values() are identical in Set
- Both return an iterator
*/

const idIterator = activeUserIds.values();

console.log(idIterator.next().value);
console.log(idIterator.next().value);
console.log(idIterator.next().value);
console.log(idIterator.next().value);
console.log(idIterator.next());

// RESULT:
// 101
// 102
// 103
// "Admin"
// { value: undefined, done: true }


/* =========================================================================
SECTION 4 — forEach() ITERATION (SET)
============================================================================
- Iterating over all unique values in insertion order
*/

activeUserIds.forEach((value) => {
  console.log(`Value: ${value}`);
});

// RESULT:
// Value: 101
// Value: 102
// Value: 103
// Value: Admin




/* =========================================================================
SECTION 5 — WEAKSET (OBJECT-ONLY COLLECTION)
============================================================================
- Accepts ONLY objects
- Objects are weakly referenced
- No size, no iteration, no enumeration
*/

const connectedClients = new WeakSet();

let clientA = { id: 201, name: "Client A" };
let clientB = { id: 202, name: "Client B" };

connectedClients.add(clientA);
connectedClients.add(clientB);

console.log(connectedClients);

// RESULT:
// WeakSet { <objects> }


/* =========================================================================
SECTION 6 — Garbage Collection BEHAVIOR (WEAKSET)
============================================================================
- When object reference is removed
- Object becomes eligible for garbage collection
*/

clientA = null;

// At this moment:
// - clientA object may be removed automatically by the JS engine
// - WeakSet cleans itself silently
// - No manual delete required


/* =========================================================================
SECTION 7 — REAL-WORLD USE CASE (WHY WEAKSET EXISTS)
============================================================================
SCENARIO:
- Tracking active components, sessions, or DOM elements
- Automatically clean memory when objects are no longer in use

WHY NOT SET?
- Set would keep objects in memory forever
- WeakSet avoids memory leaks
============================================================================
*/


/* =========================================================================
FINAL TAKEAWAY
============================================================================
WHEN TO USE SET
- Unique values (IDs, roles, tags)
- Need iteration and size
- Need full control

WHEN TO USE WEAKSET
- Tracking object existence
- Temporary object associations
- Memory-sensitive logic
- Internal system-level handling
============================================================================
*/
