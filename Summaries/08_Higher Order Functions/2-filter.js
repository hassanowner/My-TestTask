/*
====================================================
filter() — Practical & Professional Explanation
====================================================

filter() is used to SELECT elements from an array
based on a condition.

Key rules:
- Does NOT modify the original array
- ALWAYS returns a NEW array
- Callback must return true or false

Syntax:
array.filter((element, index, array) => condition)
====================================================
*/


/* ==================================================
Example 1: Filter Valid System Ports
================================================== */

let ports = [80, 443, 21, -1, 0, 8080];

let validPorts = ports.filter(port => port > 0);

console.log(validPorts); // [80, 443, 21, 8080]

/*
Use case:
- Network programming
- Server validation
*/


/* ==================================================
Example 2: Filter Secure File Extensions
================================================== */

let files = ["app.js", "index.html", "style.css", "readme.txt"];

let scriptFiles = files.filter(file => file.endsWith(".js"));

console.log(scriptFiles); // ["app.js"]

/*
Use case:
- Build tools
- File scanners
*/


/* ==================================================
Example 3: Filter Positive Performance Metrics
================================================== */

let metrics = [120, -50, 300, 0, 75];

let validMetrics = metrics.filter(value => value > 0);

console.log(validMetrics); // [120, 300, 75]

/*
Use case:
- Analytics
- Monitoring systems
*/


/* ==================================================
Example 4: Filter Alphabetic User Input Only
================================================== */

let userInput = "Dev123Ops#2025";

let cleanText = userInput
  .split("")
  .filter(char => isNaN(char))
  .join("");

console.log(cleanText); // "DevOps"

/*
Use case:
- Input sanitization
- Form validation
*/


/* ==================================================
Example 5: Filter Allowed HTTP Response Codes
================================================== */

let responseCodes = [200, 404, 500, 301, 100];

let successCodes = responseCodes.filter(
  code => code >= 200 && code < 300
);

console.log(successCodes); // [200]

/*
Use case:
- API handling
- HTTP status checking
*/


/* ==================================================
map() vs filter() — Critical Difference
================================================== */

/*
map():
- Transforms values
- Always same array length

filter():
- Selects values
- Array length may change
- Condition must return true or false
*/


/* ==================================================
Filter — Practical Programming Examples
================================================== */


/* Example 6: Filter Short Command Keywords */

let commandLine = "run build deploy test clean commit";

let shortCommands = commandLine
  .split(" ")
  .filter(command => command.length <= 4)
  .join(" ");

console.log(shortCommands); // "run test"

/*
Use case:
- CLI command validation
- Parsing shell input
*/


/* ==================================================
Example 7: Remove Numeric Characters from Version Label
================================================== */

let versionLabel = "v2e0r2s5i";

let pureText = versionLabel
  .split("")
  .filter(char => isNaN(char))
  .join("");

console.log(pureText); // "versi"

/*
Use case:
- Version formatting
- Input sanitization
*/


/* ==================================================
Example 8: Extract Numbers and Apply Calculation
================================================== */

let logEntry = "E3R5X9";

let calculatedValues = logEntry
  .split("")
  .filter(char => !isNaN(char))
  .map(num => num * 2)
  .join("");

console.log(calculatedValues); // "61018"

/*
Workflow:
1) filter() keeps numeric values
2) map() transforms them
3) join() builds final string

Use case:
- Log processing
- Data pipelines
*/


/* ==================================================
filter() + map() — Mental Model
================================================== */

/*
filter() decides WHAT stays
map() decides HOW it changes

filter() => selection
map()    => transformation
*/


/* ==================================================
Key Rules You Must Remember
================================================== */

/*
✔ filter() is for selection, not transformation
✔ Original array is untouched
✔ Use filter() for:
  - Data validation
  - Input cleaning
  - Applying business rules
*/


/* ==================================================
Final Summary
================================================== */

/*
filter() is essential in real applications:
- Frontend validation
- Backend data filtering
- File parsing
- System log analysis

Mastering filter() gives you full control
over which data survives in your program.
====================================================
End of Lesson
====================================================
*/
