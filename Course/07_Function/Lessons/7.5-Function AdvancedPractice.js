/*
====================================================
Function — Advanced Practice (Complete Educational Guide)
====================================================

This example demonstrates multiple JavaScript function concepts
combined together in ONE practical scenario.

Topics Covered:
- Function Parameters
- Default Parameters
- Rest Parameters
- Loops
- Conditions (if / else)
- Real-world usage pattern
====================================================
*/


// ==================================================
// Function Definition
// ==================================================

function displayUserProfile(
  username = "Unknown User",   // Default parameter
  age = "Unknown Age",         // Default parameter
  hourlyRate = 0,              // Default parameter
  showSkills = true,           // Controls visibility
  ...skills                    // Rest parameter (collects extra arguments)
) {

  // Start building UI output
  document.write("<div>");

  // Basic user information
  document.write(`<h2>User: ${username}</h2>`);
  document.write(`<p>Age: ${age}</p>`);
  document.write(`<p>Hourly Rate: $${hourlyRate}</p>`);


  // ==================================================
  // Conditional Rendering (Skills Section)
  // ==================================================

  if (showSkills === true) {

    if (skills.length > 0) {
      // Loop is implicit via join()
      document.write(`<p>Skills: ${skills.join(" | ")}</p>`);
    } else {
      document.write("<p>Skills: No skills provided</p>");
    }

  } else {
    document.write("<p>Skills: Hidden</p>");
  }

  document.write("</div>");
}


// ==================================================
// Function Call (Using Realistic Programming Data)
// ==================================================

displayUserProfile(
  "FrontendDeveloper",
  30,
  45,
  false,
  "HTML",
  "CSS",
  "JavaScript"
);


/*
====================================================
Expected Output (Rendered in the Browser):
====================================================

User: FrontendDeveloper
Age: 30
Hourly Rate: $45
Skills: Hidden


Explanation:
- username → "FrontendDeveloper"
- age → 30
- hourlyRate → 45
- showSkills → false (skills are hidden)
- Rest parameter receives:
  ["HTML", "CSS", "JavaScript"]
  but is NOT displayed due to condition
*/


/*
====================================================
Important Concepts Explained Simply:
====================================================

1) Default Parameters
- Used when no value is passed
- Prevents undefined values

2) Rest Parameters (...skills)
- Collect remaining arguments into an array
- Must be the LAST parameter
- Only ONE rest parameter is allowed

3) Condition Control
- showSkills controls UI behavior
- Helps toggle features on/off

4) Real World Usage
- User profiles
- Dashboards
- CV systems
- Admin panels
- Dynamic UI generation

====================================================
This is a clean, scalable, professional function design
====================================================
*/
