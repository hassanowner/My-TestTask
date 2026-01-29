/* =========================================================================
TOPIC: JavaScript — Map & WeakMap (Complete Practical Guide)
============================================================================
OVERVIEW:

- Map and WeakMap are key/value data structures.
- Map stores strong references, keys can be any type, iterable.
- WeakMap stores weak references, keys must be objects, not iterable.
- Ideal for configuration, caching, session tracking, and memory-safe metadata.
============================================================================
*/

/* =========================================================================
1 MAP vs OBJECT — Quick Comparison
============================================================================
Feature                  | Object                   | Map
-------------------------|--------------------------|----------------------------
Default Keys             | Has built-in prototype   | No default keys
Allowed Key Types        | String, Symbol only      | Any type (number, object, function, boolean)
Key Type Safety          | Auto-converted to string | Preserved as-is
Order Preservation       | Not guaranteed           | Insertion order preserved
Size Retrieval           | Manual                   | Built-in size property
Iteration                | Needs Object helpers     | Directly iterable
Performance              | Slower for dynamic data  | Optimized for add/remove
Use Case                 | Static/simple structures | Dynamic & complex key/value storage
============================================================================
*/


/* =========================================================================
2 Creating Maps
============================================================================
- Empty Map:
*/
const map1 = new Map();

// Initialized Map (array of [key, value] pairs):
const appSettings = new Map([
  ["theme", "dark"],
  ["language", "en"],
  ["autoSave", true]
]);

console.log(appSettings);
// Map(3) { "theme" => "dark", "language" => "en", "autoSave" => true }


/* =========================================================================
3 Map Methods & Properties
============================================================================
- set(key, value) → add or update entry
- get(key) → retrieve value by key
- has(key) → check if key exists
- delete(key) → remove entry by key
- clear() → remove all entries
- size → read-only number of entries
============================================================================
*/
appSettings.set("fontSize", 16); // add new key/value
appSettings.set("theme", "light"); // update existing key

console.log(appSettings.get("theme"));      // "light"
console.log(appSettings.has("fontSize"));   // true
console.log(appSettings.size);              // 4

appSettings.delete("language");
console.log(appSettings.size);              // 3

appSettings.clear();
console.log(appSettings.size);              // 0


/* =========================================================================
4 Map Iteration
============================================================================
- Map is iterable by default (for...of, forEach)
*/

// Example Map
const numbersOfAlbums = new Map([
  ['Kyuss', 4],
  ['Tool', 6],
  ['Monster Magnet', 8]
]);

// for...of iteration
for (const [band, albums] of numbersOfAlbums) {
  console.log(`${band}: ${albums}`);
}

// forEach iteration (value first, key second)
numbersOfAlbums.forEach((value, key) => {
  console.log(`Key: ${key} → Value: ${value}`);
});


/* =========================================================================
5 Strict Key Type Preservation
============================================================================
- Keys retain original type (no auto-conversion)
*/
const keyObj = { section: "Reports" };
const keyFunc = () => {};

const permissionMap = new Map();
permissionMap.set(1, "Numeric ID");
permissionMap.set("1", "String ID");
permissionMap.set(false, "Boolean Flag");
permissionMap.set(keyObj, "Object Reference");
permissionMap.set(keyFunc, "Function Reference");

console.log(permissionMap.get(1));        // "Numeric ID"
console.log(permissionMap.get("1"));      // "String ID"
console.log(permissionMap.get(false));    // "Boolean Flag"
console.log(permissionMap.get(keyObj));   // "Object Reference"
console.log(permissionMap.get(keyFunc));  // "Function Reference"


/* =========================================================================
6 Real-World Map Use Cases
============================================================================
- Application configuration
- Request cache
- Storing user roles or permissions
- Dynamic key/value storage

// Example: Request cache
const requestCache = new Map();
const apiConfig = { endpoint: "/users", method: "GET" };
requestCache.set(apiConfig, { status: 200, payload: ["User A", "User B"] });
console.log(requestCache.get(apiConfig));
*/


/* =========================================================================
7 WeakMap — Memory-Safe Key/Value Store
============================================================================
- Keys must be objects
- Values can be anything
- References are weak → eligible for garbage collection
- Not iterable, no size property
- Perfect for temporary metadata or caches
============================================================================
*/
let element = { id: 101 };
const memoryCache = new WeakMap();

memoryCache.set(element, { tempData: "cached-response" });
element = null; // object automatically GC-ed
console.log(memoryCache); // WeakMap {}


/* =========================================================================
8 Map vs WeakMap — Summary Table
============================================================================
Feature              | Map                 | WeakMap
-------------------- | ------------------ | -------------------
Key Types             | Any                | Objects only
Garbage Collected     | No (strong ref)    | Yes (weak ref)
Iterable              | Yes                | No
Size Property         | Available          | Not available
forEach()             | Supported          | Not supported
Use Case              | Persistent storage | Temporary metadata, caches, DOM element data
============================================================================
*/

/* =========================================================================
9 Guidelines
============================================================================
** Use Map When:
- Iteration is required
- Keys can be primitives or objects
- Performance for dynamic key/value data is important

** Use WeakMap When:
- Metadata should be temporary
- Keys are objects
- Automatic memory cleanup is needed
============================================================================
*/

/* =========================================================================
10 Final Notes
============================================================================
- Map: strong references, fully iterable, predictable behavior
- WeakMap: weak references, memory-safe, cannot inspect
- Maps and WeakMaps complement Sets/WeakSets for structured or memory-sensitive storage
============================================================================
*/
