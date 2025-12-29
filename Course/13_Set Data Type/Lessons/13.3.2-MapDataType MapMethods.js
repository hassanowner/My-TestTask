/* =========================================================================
TOPIC: JavaScript — Map Data Type (Methods & Properties)
============================================================================

GENERAL OVERVIEW
- Map is a built-in JavaScript data structure for storing key/value pairs.
- Unlike Object:
  • Keys keep their real data type
  • Data order is preserved
  • Designed for frequent add / remove operations

WHAT IS COVERED (IN ORDER)
1) set()       → Add or update entries
2) get()       → Retrieve values by key
3) has()       → Check if key exists
4) size        → Count entries
5) delete()    → Remove a single entry
6) clear()     → Remove all entries
============================================================================
*/


/* =========================================================================
SECTION 1.A — CREATING A MAP (INITIAL DATA)
============================================================================
- Simulates application configuration settings

Scenario:
- A system stores user roles by unique identifiers
*/

const userRoles = new Map();

// Adding entries using set()
userRoles.set(101, "Administrator");
userRoles.set(102, "Editor");
userRoles.set(103, "Viewer");

console.log(userRoles);

/*
Expected Output:
Map(3) {
  101 => "Administrator",
  102 => "Editor",
  103 => "Viewer"
}
*/

/* =========================================================================
SECTION 1.B — CREATING A MAP (INITIAL DATA)
============================================================================
- Simulates application configuration settings
*/

const appSettings = new Map([
  // Each inner array represents ONE entry in the Map
  // Format: [key, value]

  ["theme", "dark"],     // key = "theme"    → value = "dark"
  ["language", "en"],    // key = "language" → value = "en"
  ["autoSave", true],    // key = "autoSave" → value = true
]);

// The outer array [] contains multiple key/value pairs
// Each pair is passed to the Map constructor

console.log(appSettings);

// OUTPUT:
// Map(3) {
//   "theme"     => "dark",
//   "language"  => "en",
//   "autoSave"  => true
// }

// RESULT:
// Map(3) { "theme" => "dark", "language" => "en", "autoSave" => true }


/* =========================================================================
SECTION 1.C — set() METHOD
============================================================================
- Adds new entries or updates existing ones
*/

appSettings.set("fontSize", 16); // add key ="fontSize" → value = 16
appSettings.set("theme", "light");

console.log(appSettings);

// RESULT:
// Map(4) {
//   "theme" => "light",
//   "language" => "en",
//   "autoSave" => true,
//   "fontSize" => 16
// }


/* =========================================================================
SECTION 2 — get() METHOD
============================================================================
- Retrieves value using the exact key
*/

console.log(appSettings.get("theme"));
console.log(appSettings.get("language"));
console.log(appSettings.get("autoSave"));

// RESULT:
// "light"
// "en"
// true


/* =========================================================================
SECTION 3 — has() METHOD
============================================================================
- Checks if a key exists in the Map
- Returns true or false
*/

console.log(appSettings.has("fontSize"));
console.log(appSettings.has("notifications"));

// RESULT:
// true
// false


/* =========================================================================
SECTION 4 — size PROPERTY
============================================================================
- Returns number of entries in the Map
*/

console.log(appSettings.size);

// RESULT:
// 4


/* =========================================================================
SECTION 5 — delete() METHOD
============================================================================
- Removes a specific entry by key
- Returns true if deletion succeeds
*/

console.log(appSettings.delete("language"));
console.log(appSettings.size);

// RESULT:
// true
// 3


/* =========================================================================
SECTION 6 — clear() METHOD
============================================================================
- Removes ALL entries from the Map
*/

appSettings.clear();

console.log(appSettings.size);
console.log(appSettings);

// RESULT:
// 0
// Map(0) {}


/* =========================================================================
SUMMARY — WHEN TO USE MAP METHODS
============================================================================
- set()    → Store or update configuration, cache, state
- get()    → Fast key-based access
- has()    → Safe existence checks
- delete() → Remove specific data
- clear()  → Reset data structure
- size     → Quick count without iteration
============================================================================
*/
