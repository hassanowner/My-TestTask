/* =========================================================================
TOPIC: JavaScript — Advanced Array Destructuring (Professional Examples)
============================================================================

GENERAL IDEA
- Advanced array destructuring is used to extract deeply nested values
  from complex data structures.
- Common real-world use cases:
  • API responses
  • Permission trees
  • Organization structures
  • Nested configuration data

WHAT IS COVERED
1) Deep nested array destructuring
2) Skipping unnecessary levels
3) Extracting selected values only
4) Improving readability in complex data
============================================================================
*/


/* =========================================================================
EXAMPLE DATA — ORGANIZATION STRUCTURE (REALISTIC SCENARIO)
============================================================================
- Represents a company hierarchy received from an API
- Structure:
  [
    companyName,
    location,
    year,
    [
      departmentName,
      manager,
      [
        seniorEngineer,
        juniorEngineer
      ]
    ]
  ]
*/

let organizationData = [
  "TechNova Inc",
  "Berlin",
  2015,
  [
    "Engineering",
    "Omar Hassan",
    [
      "Lina Ahmed",
      "Youssef Adel"
    ]
  ]
];


/* =========================================================================
ADVANCED DESTRUCTURING — DEEP NESTED EXTRACTION
============================================================================
- Extract:
  • Department name
  • Junior engineer name
- Ignore all other values
*/

let [, , , [departmentName, , [, juniorEngineer]]] = organizationData;

console.log(departmentName);
// RESULT: "Engineering"

console.log(juniorEngineer);
// RESULT: "Youssef Adel"


/* =========================================================================
EXPLANATION (IMPORTANT)
============================================================================
- Commas (,) are used to skip unwanted values
- Destructuring follows the exact array structure
- No variables are created for unused data
- The original array remains unchanged
============================================================================
*/


/* =========================================================================
ANOTHER PRACTICAL EXAMPLE — SYSTEM PERMISSIONS TREE
============================================================================
*/

let permissionsResponse = [
  "USR_7781",
  "Active",
  [
    "Dashboard",
    "Settings",
    [
      "Read",
      "Write",
      "Delete"
    ]
  ]
];

/*
- Goal:
  • Extract module name
  • Extract last permission only
*/

let [, , [moduleName, , [, , lastPermission]]] = permissionsResponse;

console.log(moduleName);
// RESULT: "Dashboard"

console.log(lastPermission);
// RESULT: "Delete"


/* =========================================================================
FINAL TECHNICAL NOTES
============================================================================
- Deep destructuring must respect nesting order exactly
- Skipping values improves performance & clarity
- Best used when structure is FIXED and predictable
- Avoid overusing it if readability becomes difficult
============================================================================
*/
