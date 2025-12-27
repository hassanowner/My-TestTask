/*
================================================================================
TOPIC: JavaScript Modules - Overview and Learning Points
================================================================================

This code demonstrates multiple aspects of JavaScript Modules:

1) Named Exports:
   - Syntax: export const variableName = value;
   - Purpose: Allows exporting multiple variables, functions, or classes by name.
   - Benefit: You can import only what you need in another file, avoiding unnecessary code.

2) Export with Alias:
   - Syntax: export { variableName as aliasName };
   - Purpose: Export a variable or function under a different name.
   - Benefit: Avoid name conflicts or provide a more meaningful name for the importing file.

3) Named Export of Functions:
   - Syntax: export function funcName() { ... }
   - Purpose: Export reusable functions by name.
   - Benefit: Modular code allows importing only specific functions as needed.

4) Default Export:
   - Syntax: export default function() { ... }
   - Purpose: Export a single “main” value or function from a module.
   - Benefit: Importers can choose any name for the default export, simplifying usage.

5) Import Named Members:
   - Syntax: import { memberName } from './module.js';
   - Purpose: Import specific variables, functions, or classes from a module.
   - Benefit: Only imports what is required, keeping code clean and optimized.

6) Import with Alias:
   - Syntax: import { memberName as localName } from './module.js';
   - Purpose: Rename imported member locally to avoid conflicts or for clarity.
   - Benefit: Flexible naming inside the importing file.

7) Import Default Member:
   - Syntax: import defaultMember from './module.js';
   - Purpose: Import the default export of a module.
   - Benefit: Convenient for importing a single main functionality.

8) Import All as Object:
   - Syntax: import * as alias from './module.js';
   - Purpose: Import all named and default exports as properties of an object.
   - Benefit: Access multiple exports in a structured way; default export is accessed via .default.

9) Combining Multiple Exports:
   - Example: Using both named exports and default exports in the same module.
   - Benefit: Provides flexibility to export multiple utilities while keeping a main export.

================================================================================

modules-example/
├── index.html
├── main.js
└── module.js                             */

/*
// - - - module.js File - - - //

<!DOCTYPE html>
<html>
<head>
    <title>Simple Modules</title>
</head>
<body>
    <h1>Check Console (F12)</h1>
    <script type="module" src="main.js"></script>
</body>
</html>
*/



// - - - module.js File - - - //
// ============================================
// 1. NAMED EXPORT - 
// ============================================
export const score = 100; // Named export: score


// ============================================
// 2. EXPORT ALIAS - Simple Example
// ============================================
const playerName = "John";
export { playerName as name }; // Export as alias 'name'
/* Explanation:
- playerName is exported under a new name: "name"
- Other modules must import it using "name" (or alias it locally) */


// ============================================
// 3. NAMED EXPORT - Medium Example
// ============================================
export function calculate(x, y) {
    return x * y;
}


// ============================================
// 4. DEFAULT EXPORT - 
// ============================================
export default function greet() {
    return "Hello!";
}


// ============================================
// 5. DEFAULT EXPORT - Medium Example
// ============================================
// export default function getUser(id) {
//     return { id: id, name: "User" + id };
// }






// - - - main.js File - - - //
// ============================================
// 1. NAMED IMPORT - 
// ============================================
import { score } from './module.js';
console.log("Score:", score); // Output: Score: 100


// ============================================
// 2. IMPORT ALIAS - 
// ============================================
import { name } from './module.js';
console.log("User:", name); // Output: User: John
// Import using the exported name directly

//#or
import { name as n } from './module.js'; //
console.log("User:", n); // Output: User: John
// Import using a local alias
/* Explanation:
- Imported "name" but renamed it locally to "n"
- Useful to avoid naming conflicts or for readability
*/



// ============================================
// 3. NAMED IMPORT - 
// ============================================
import { calculate } from './module.js';
console.log("5 × 10 =", calculate(5, 10)); // Output: 5 × 10 = 50



// ============================================
// 4. DEFAULT IMPORT - 
// ============================================
import greet from './module.js';
console.log(greet()); // Output: Hello!



// ============================================
// 5. IMPORT ALL -
// ============================================
import * as allData from './module.js';
console.log("All data:", allData);



// ============================================
// 6. IMPORT ALL - 
// ============================================
import * as everything from './module.js';
console.log("Score from all:", everything.score); // 100
console.log("Name from all:", everything.name);   // John
console.log("Calculate:", everything.calculate(3, 4)); // 12

// Default export is accessed differently
console.log("Default:", everything.default());



/*
LEARNING OBJECTIVES

By studying this code, a developer will learn:

- How to split JavaScript code into multiple files (modules) for better organization.
- The difference between named exports and default exports.
- How to import variables, functions, and classes in different ways.
- How to use aliasing to avoid naming conflicts.
- How to import everything from a module as a single object.
- How modules enforce scope isolation and avoid polluting the global namespace.
- Best practices for structuring modular JavaScript applications.

================================================================================ */
