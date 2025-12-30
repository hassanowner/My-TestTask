/*
================================================================================
ADVANCED TEST CHALLENGES — JavaScript Modules & Default Parameters
================================================================================
Instructions:
- Each challenge is written first as a QUESTION.
- Below it, the ANSWER is written in JavaScript.
- The expected RESULT appears as a comment.
- Topics used ONLY:
  ES Modules (named export, default export, alias, import all)
  Default parameters
================================================================================
*/


/* =============================================================================
CHALLENGE 1 — Named Export + Import with Alias
============================================================================= */
/*
QUESTION:
You have a module that exports a variable called `taxRate`.
1) Export it as a named export.
2) Import it using an alias called `vat`.
3) Log its value.
*/

// file: config.js
export const taxRate = 0.15;

// file: main.js
import { taxRate as vat } from "./config.js";

console.log(vat);

/*
RESULT:
0.15

Meaning:
- Named export imported using a local alias
*/


/* =============================================================================
CHALLENGE 2 — Default Export Function + Flexible Import Name
============================================================================= */
/*
QUESTION:
Create a module that default-exports a function.
The function should return "Welcome User".
Import it using ANY name and call it.
*/

// file: welcome.js
export default function () {
  return "Welcome User";
}

// file: main.js
import showMessage from "./welcome.js";

console.log(showMessage());

/*
RESULT:
Welcome User

Meaning:
- Default exports can be imported with any name
*/


/* =============================================================================
CHALLENGE 3 — Mixing Named and Default Exports
============================================================================= */
/*
QUESTION:
A module exports:
1) A default function that returns "Main Function"
2) A named function called `helper` that returns "Helper Function"

Import both and log their outputs.
*/

// file: tools.js
export function helper() {
  return "Helper Function";
}

export default function () {
  return "Main Function";
}

// file: main.js
import mainFunc, { helper } from "./tools.js";

console.log(mainFunc());
console.log(helper());

/*
RESULT:
Main Function
Helper Function

Meaning:
- One default export + multiple named exports can coexist
*/


/* =============================================================================
CHALLENGE 4 — Import All (*) + Access Default Export
============================================================================= */
/*
QUESTION:
Import everything from a module as an object.
1) Access a named export.
2) Access the default export correctly.
*/

// file: data.js
export const level = 5;
export default function () {
  return "Game Started";
}

// file: main.js
import * as gameData from "./data.js";

console.log(gameData.level);
console.log(gameData.default());

/*
RESULT:
5
Game Started

Meaning:
- Default export is accessed via `.default` when using import *
*/


/* =============================================================================
CHALLENGE 5 — Default Parameters + Module Function
============================================================================= */
/*
QUESTION:
Export a function that calculates a final price.
- price is required
- discount defaults to 0.1
Return the final price after discount.
*/

// file: price.js
export function finalPrice(price, discount = 0.1) {
  return price - price * discount;
}

// file: main.js
import { finalPrice } from "./price.js";

console.log(finalPrice(100));
console.log(finalPrice(100, 0.25));

/*
RESULT:
90
75

Meaning:
- Default parameters protect against missing arguments
- Module function stays reusable and clean
*/


/*
================================================================================
END OF MODULES & DEFAULT PARAMETERS CHALLENGES
================================================================================
*/
