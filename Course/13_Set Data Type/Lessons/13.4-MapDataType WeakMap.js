/* =========================================================================
TOPIC: JavaScript — Map vs WeakMap (Memory Management Perspective)
============================================================================

GENERAL OVERVIEW
- Map and WeakMap are key/value data structures.
- The critical difference is how they interact with
  JavaScript's Garbage Collector.
- WeakMap is designed for memory-safe object tracking.

WHAT IS COVERED (IN ORDER)
1) Key type limitations
2) Garbage Collection behavior
3) Real-world usage scenarios
4) Practical comparison using objects
============================================================================
*/


/* -----------------------------------------------------------------------------
SECTION 1.A — Strong Reference Storage
----------------------------------------------------------------------------- */

/*
Scenario:
- Storing session metadata linked to user objects
- Map keeps a STRONG reference to keys
*/

let sessionUser = { id: 1, username: "admin" };

const sessionMap = new Map();

// Using an object as a key
sessionMap.set(sessionUser, {
  lastLogin: "2025-01-01",
  status: "active"
});

// Removing external reference
sessionUser = null;

console.log(sessionMap);

/*
Explanation:
- Even after setting sessionUser to null
- The Map still holds the object in memory
- Garbage Collector CANNOT remove the key

Expected Output:
Map(1) {
  { id: 1, username: "admin" } => { lastLogin: "2025-01-01", status: "active" }
}
*/



/* =========================================================================
SECTION 1.B — MAP EXAMPLE (STRONG REFERENCE)
============================================================================
- Map keeps a STRONG reference to its keys
- Objects stored as keys will NOT be removed automatically
*/

let userSession = { username: "admin", role: "super-user" };

const activeSessions = new Map();

activeSessions.set(userSession, {
  lastLogin: "10:30 AM",
  status: "active",
});

userSession = null; // Original reference removed

console.log(activeSessions);

// RESULT:
// Map(1) {
//   { username: "admin", role: "super-user" } => { lastLogin: "10:30 AM", status: "active" }
// }
//
// EXPLANATION:
// - Even though the variable reference was removed,
//   Map still holds a strong reference to the object.
// - Garbage Collector CANNOT remove it automatically.



/* =========================================================================
SECTION 2 — WEAKMAP EXAMPLE (WEAK REFERENCE)
============================================================================
- WeakMap keys MUST be objects
- References are weak (do not prevent garbage collection)
*/

let cacheObject = { resourceId: 101 };

const memoryCache = new WeakMap();

memoryCache.set(cacheObject, {
  tempData: "cached-response",
});

cacheObject = null; // Reference removed

console.log(memoryCache);

// RESULT:
// WeakMap {}
//
// EXPLANATION:
// - Once the object becomes unreachable,
//   Garbage Collector is free to remove it.
// - WeakMap entries disappear automatically.
// - No memory leak risk.


/* =========================================================================
SECTION 3 — KEY DIFFERENCES (SUMMARY TABLE)
============================================================================

| Feature                | Map                 | WeakMap              |
|------------------------|---------------------|----------------------|
| Key Types              | Any data type       | Objects only         |
| Garbage Collected      | No (strong ref)     | Yes (weak ref)       |
| Iterable               | Yes                 | No                   |
| size Property          | Available           | Not available        |
| forEach()              | Supported           | Not supported        |

============================================================================
*/


/* =========================================================================
SECTION 4 — REAL-WORLD USE CASES
============================================================================

** Use Map when:
- You need iteration
- You need persistent key/value storage
- Keys might be primitives (string, number, boolean)

** Use WeakMap when:
- You want temporary object metadata
- You care about memory cleanup
- You are building cache systems
- You store private data tied to objects

Examples:
- DOM element metadata
- Cache layers
- Object lifecycle tracking

============================================================================
*/


/* =========================================================================
FINAL TECHNICAL NOTES
============================================================================
- WeakMap cannot be inspected or logged meaningfully
- WeakMap is NOT a replacement for Map
- WeakMap exists purely for memory optimization
- Garbage Collection timing is NOT predictable
============================================================================
*/
