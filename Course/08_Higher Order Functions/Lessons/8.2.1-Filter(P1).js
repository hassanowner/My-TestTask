/*
====================================================
filter() — Practical & Professional Explanation
====================================================
filter() is used to SELECT elements from an array
based on a condition.
It does NOT modify the original array.
It ALWAYS returns a new array.
====================================================
Syntax:
array.filter((element, index, array) => condition)
====================================================
*/


// ==================================================
// Example 1: Filter Valid System Ports
// ==================================================

let ports = [80, 443, 21, -1, 0, 8080];

let validPorts = ports.filter(port =>
  port > 0
);

console.log(validPorts);
/*
Result:
[80, 443, 21, 8080]
*/

/*
Use case:
- Network programming
- Server validation
*/


// ==================================================
// Example 2: Filter Secure File Extensions
// ==================================================

let files = ["app.js", "index.html", "style.css", "readme.txt"];

let scriptFiles = files.filter(file =>
  file.endsWith(".js")
);

console.log(scriptFiles);
/*
Result:
["app.js"]
*/

/*
Use case:
- Build tools
- File scanners
*/


// ==================================================
// Example 3: Filter Positive Performance Metrics
// ==================================================

let metrics = [120, -50, 300, 0, 75];

let validMetrics = metrics.filter(value =>
  value > 0
);

console.log(validMetrics);
/*
Result:
[120, 300, 75]
*/

/*
Use case:
- Analytics
- Monitoring systems
*/


// ==================================================
// Example 4: Filter Alphabetic User Input Only
// ==================================================

let userInput = "Dev123Ops#2025";

let cleanText = userInput
  .split("")
  .filter(char => isNaN(char))
  .join("");

console.log(cleanText);
/*
Result:
"DevOps"
*/

/*
Use case:
- Input sanitization
- Form validation
*/


// ==================================================
// Example 5: Filter Allowed Response Codes
// ==================================================

let responseCodes = [200, 404, 500, 301, 100];

let successCodes = responseCodes.filter(code =>
  code >= 200 && code < 300
);

console.log(successCodes);
/*
Result:
[200]
*/

/*
Use case:
- API handling
- HTTP status checking
*/


// ==================================================
// map() vs filter() — Critical Difference
// ==================================================

/*
map():
- Modifies values
- Returns same length array

filter():
- Selects values
- May reduce array size
- Condition must return true/false
*/


// ==================================================
// Key Rules You Must Remember
// ==================================================

/*
✔ filter() is for selection, not transformation
✔ Original array is untouched
✔ Use filter() when:
  - Removing invalid data
  - Applying rules or constraints
  - Keeping specific values only
*/


// ==================================================
// Final Summary
// ==================================================

/*
filter() is essential for:
- Data validation
- User input cleaning
- Business logic rules
- Backend & frontend development

Understanding filter() gives you full control
over what data survives in your application.
====================================================
End of Lesson
====================================================
*/
