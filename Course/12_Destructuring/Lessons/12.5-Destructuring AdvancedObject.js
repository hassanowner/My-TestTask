/* =========================================================================
TOPIC: JavaScript — Advanced Object Destructuring (Professional Practice)
============================================================================

GENERAL IDEA
- Advanced object destructuring allows:
  • Renaming variables
  • Setting default values
  • Extracting nested objects
  • Isolating nested data independently
- This approach is common in real-world applications
  such as dashboards, admin panels, and API data handling.

WHAT IS COVERED
1) Renaming variables during destructuring
2) Providing default values
3) Nested object destructuring
4) Extracting nested objects separately
5) Practical output analysis
============================================================================
*/


/* =========================================================================
EXAMPLE 1 — DATA MODEL (EMPLOYEE PROFILE)
============================================================================
- Simulates a profile object retrieved from a backend system
*/

const employeeProfile = {
  fullName: "Hassan Ali",
  experienceYears: 7,
  position: "Frontend Engineer",
  location: "Iraq",
  themePreference: "Dark",
  technicalSkills: {
    javascript: 85,
    css: 90,
  },
};


/* =========================================================================
EXAMPLE 2 — ADVANCED OBJECT DESTRUCTURING
============================================================================
- Renaming properties
- Default value assignment
- Nested object extraction
*/

const {
  fullName: name,   //rename fullName to --> name
  experienceYears: years,  //rename experienceYears to -->years
  location,   //no change 
  themePreference: theme = "Light", // Default if missing
  technicalSkills: { javascript: jsSkill, css: cssSkill },
} = employeeProfile;

console.log(name);    //name --> = "Hassan Ali" ,[value of `name`]in employeeProfile
console.log(years); 
console.log(location);
console.log(theme);
console.log(`JavaScript Skill Level: ${jsSkill}`);
console.log(`CSS Skill Level: ${cssSkill}`);

// RESULT:
// "Hassan Ali"
// 7
// "Iraq"
// "Dark"
// "JavaScript Skill Level: 85"
// "CSS Skill Level: 90"


/* =========================================================================
EXAMPLE 3 — DESTRUCTURING NESTED OBJECT ONLY
============================================================================
- Accessing nested data independently
- Useful when passing specific sections to functions or components
*/

const { javascript: primarySkill, css: secondarySkill } =
  employeeProfile.technicalSkills;

console.log(`Primary Skill Score: ${primarySkill}`);
console.log(`Secondary Skill Score: ${secondarySkill}`);

// RESULT:
// "Primary Skill Score: 85"
// "Secondary Skill Score: 90"


/* =========================================================================
TECHNICAL NOTES
============================================================================
- Renamed variables improve readability and semantic meaning
- Default values prevent undefined errors
- Nested destructuring reduces deep object access chains
- Isolating nested data improves modularity
============================================================================
*/


/* =========================================================================
WHY THIS PATTERN IS USED IN REAL PROJECTS
============================================================================
- Cleaner component props handling (React / Vue)
- Safer API response processing
- Easier refactoring and scaling
- Improves developer experience (DX)
============================================================================
*/
