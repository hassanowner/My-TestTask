/* =========================================================================
TOPIC: JavaScript — Destructuring Mixed Content (Objects + Arrays)
============================================================================

GENERAL IDEA
- In real-world applications, data is rarely simple.
- Most objects contain:
  • Primitive values
  • Arrays
  • Nested objects
- Mixed Destructuring allows extracting all of these
  in a clean and readable way using ONE statement.

LEARNING PROGRESSION
1) Understanding the mixed data structure
2) Beginner approach (traditional access)
3) Intermediate destructuring (separate levels)
4) Professional mixed destructuring (one statement)
5) Real-world usage notes
============================================================================
*/


/* =========================================================================
EXAMPLE 1 — DATA STRUCTURE (SIMULATED USER PROFILE)
============================================================================
- Typical user object returned from backend or API
- Contains:
  • Basic info
  • Skills array
  • Addresses object
*/

const userProfile = {
  fullName: "Hassan Ali",
  age: 29,
  skills: ["HTML", "CSS", "JavaScript"],
  locations: {
    primary: "Baghdad",
    secondary: "Dubai",
  },
};


/* =========================================================================
EXAMPLE 2 — BEGINNER LEVEL (NO DESTRUCTURING)
============================================================================
- Direct access using dot notation and indexes
- Clear but repetitive and not scalable
*/

console.log(`Name: ${userProfile.fullName}`);
console.log(`Age: ${userProfile.age}`);
console.log(`Last Skill: ${userProfile.skills[2]}`);
console.log(`Primary Location: ${userProfile.locations.primary}`);

// RESULT:
// Name: Hassan Ali
// Age: 29
// Last Skill: JavaScript
// Primary Location: Baghdad


/* =========================================================================
EXAMPLE 3 — INTERMEDIATE LEVEL (PARTIAL DESTRUCTURING)
============================================================================
- Object and array destructuring done in separate steps
*/

const { fullName, age, skills, locations } = userProfile;
const [, , lastSkill] = skills;

console.log(`Name: ${fullName}`);
console.log(`Age: ${age}`);
console.log(`Last Skill: ${lastSkill}`);
console.log(`Primary Location: ${locations.primary}`);

// RESULT:
// Name: Hassan Ali
// Age: 29
// Last Skill: JavaScript
// Primary Location: Baghdad


/* =========================================================================
EXAMPLE 4 — PROFESSIONAL LEVEL (MIXED DESTRUCTURING)
============================================================================
- Object + Array + Nested Object destructuring
- Everything extracted in ONE clean statement
- This is common in modern frameworks and APIs
*/

const {
  fullName: name,
  age: userAge,
  skills: [, , mainSkill],
  locations: { primary: city },
} = userProfile;

console.log(`User Name: ${name}`);
console.log(`User Age: ${userAge}`);
console.log(`Main Skill: ${mainSkill}`);
console.log(`City: ${city}`);

// RESULT:
// User Name: Hassan Ali
// User Age: 29
// Main Skill: JavaScript
// City: Baghdad


/* =========================================================================
WHY MIXED DESTRUCTURING IS IMPORTANT
============================================================================
- Eliminates deep property access
- Improves readability
- Reduces bugs in complex data handling
- Essential for clean frontend and backend code
============================================================================
*/


/* =========================================================================
TECHNICAL NOTES
============================================================================
- Array destructuring depends on POSITION
- Object destructuring depends on KEY names
- Renaming avoids variable conflicts
- Missing values result in undefined
============================================================================
*/


/* =========================================================================
REAL-WORLD USE CASES
============================================================================
- API responses
- User profile data
- Configuration objects
- State management (Redux / Vuex)
============================================================================
*/
