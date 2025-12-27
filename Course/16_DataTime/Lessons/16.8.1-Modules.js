/*
================================================================================
TOPIC: JavaScript Modules - Import and Export
================================================================================

Modules allow splitting JavaScript code into separate files for better organization and reuse.

Key Points:
1. `export` allows you to make variables, functions, or classes available to other files.
2. `import` allows you to access exported members from another module.
3. Modules must be loaded with `type="module"` in the HTML script tag.
4. Named exports vs Default exports:
   - Named: export { a, b, func }
   - Default: export default func
5. Aliasing imports: `import { func as myFunc } from './file.js'`
================================================================================


modules-example/
├── index.html          (HTML file)
├── app.js   (app file - Exports functions)
└── main.js            (Main file - Imports functions).  */
   


/* =============================================================================
Example 1: HTML setup to use modules
============================================================================= */
/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>JavaScript Modules Example</title>
</head>
<body>
  <!-- main.js exports variables and functions -->
  <script src="main.js" type="module"></script>

  <!-- app.js imports from main.js and uses them -->
  <script src="app.js" type="module"></script>
</body>
</html>
*/

/*
Explanation:
- type="module" is required for module scripts.
- Modules are loaded with strict mode automatically.
- Each module has its own scope, avoiding global namespace pollution.
- Browser fetches the JS files as modules and handles imports/exports.
*/





/* =============================================================================
Example 1: Exporting variables and functions from a module
File: main.js
============================================================================= */

// Exporting named variables and a function
export let numberValue = 10;
export let arrayValue = [1, 2, 3, 4];

export function greet() {
  return "Hello from module!";
}

/*
Explanation:
- numberValue, arrayValue, greet are now available to other files that import them.
- Named exports allow selective import of only what you need.
*/





/* =============================================================================
Example 1: Importing from a module with alias
File: app.js
============================================================================= */

import { numberValue, arrayValue, greet } from "./main.js";

console.log(numberValue);       // 10
console.log(arrayValue);        // [1, 2, 3, 4]
console.log(greet());   // "Hello from module!"

/*
Explanation:
- 
- Only the exported members are accessible.
- Names must match exported names unless using alias.
** you can also Imported `greet` with alias `greetFunction` or anything:
   import { numberValue, arrayValue, greet as greetFunction} from "./main.js";
   console.log(greetFunction());   
*/







/* =============================================================================
Example 2: Default Export (optional)
============================================================================= */

// In main.js
export default function defaultGreeting() {
  return "Default Greeting!";
}

// In app.js
import defaultGreet from "./main.js";
console.log(defaultGreet()); // "Default Greeting!"

/*
Explanation:
- Default export allows importing without curly braces.
- Only one default export per module.
================================================================================
*/


/*
================================================================================
SUMMARY
================================================================================

- Use `export` to make code available to other files.
- Use `import` to access exported members in other files.
- Modules enforce scope isolation and support code organization.
- Aliases and default exports provide flexibility.
- Always use type="module" in HTML to load modules.
================================================================================
*/
