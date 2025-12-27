/*
====================================================
Filter — Practical Programming Examples
====================================================
filter() is used to KEEP elements that satisfy
a specific condition.
It always returns a NEW array.
====================================================
*/


// ==================================================
// Example 1: Filter Short Command Keywords
// ==================================================

let commandLine = "run build deploy test clean commit";

let shortCommands = commandLine
  .split(" ")
  .filter(command => command.length <= 4)
  .join(" ");

console.log(shortCommands);
/*
Output:
"run test"
*/

/*
Explanation:
- split(" ") converts the string into an array of commands
- filter() keeps commands with length <= 4
- join(" ") converts the array back into a string

Use case:
- CLI command validation
- Parsing shell input
*/


// ==================================================
// Example 2: Remove Numeric Characters from Version Label
// ==================================================

let versionLabel = "v2e0r2s5i";

let pureText = versionLabel
  .split("")
  .filter(char => isNaN(char))
  .join("");

console.log(pureText);
/*
Output:
"versi"
*/

/*
Explanation:
- Each character is checked
- Numbers are removed
- Letters are preserved

Use case:
- Version formatting
- Input sanitation
*/


// ==================================================
// Example 3: Extract Numeric Values and Apply Calculation
// ==================================================

let logEntry = "E3R5X9";

let calculatedValues = logEntry
  .split("")
  .filter(char => !isNaN(char))
  .map(num => num * 2)
  .join("");

console.log(calculatedValues);
/*
Output:
"61018"
*/

/*
Explanation:
1) filter():
   - Keeps numeric characters only
2) map():
   - Multiplies each number by 2
3) join():
   - Converts final array into string

Use case:
- Log processing
- Numeric transformation pipelines
*/


// ==================================================
// filter() + map() — Workflow Concept
// ==================================================

/*
Step 1: filter() decides WHAT stays
Step 2: map() decides HOW it changes

filter() => selection
map()    => transformation
*/


// ==================================================
// Key Rules You Must Remember
// ==================================================

/*
✔ filter() requires a condition returning true or false
✔ It does NOT change the original data
✔ It is perfect for:
   - Validating input
   - Cleaning data
   - Applying rules
*/


// ==================================================
// Final Summary
// ==================================================

/*
filter() is essential in real applications:
- Frontend validation
- Backend data filtering
- File parsing
- System logs analysis

Mastering filter() gives you control over
which data is allowed to continue
through your program.
====================================================
End of Lesson
====================================================
*/
