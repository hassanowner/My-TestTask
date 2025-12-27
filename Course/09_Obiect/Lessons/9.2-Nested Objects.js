/*
====================================================
Object — Nested Objects & Practical Training
====================================================

This lesson explains:
- What a Nested Object is
- How to access nested data
- Objects with arrays inside
- Objects with objects inside
- Object methods that use object properties
====================================================
*/

// A variable outside the object (to show difference later)
let globalAvailability = true;

// Main object representing a developer profile
let developerProfile = {
  // Basic properties
  name: "Frontend_Developer",
  experienceYears: 6,

  // Array inside object
  skills: ["HTML", "CSS", "JavaScript"],

  // Boolean property
  availableForProjects: false,

  // Nested object (object inside object)
  locations: {
    remote: "Worldwide",
    onSite: {
      primary: "Berlin",
      secondary: "Munich",
    },
  },

  // Method inside object
  checkAvailability: function () {
    // Accessing object property using object name
    if (developerProfile.availableForProjects === true) {
      return "Available For New Projects";
    } else {
      return "Currently Not Available";
    }
  },
};


// ==================================================
// Accessing Basic Properties
// ==================================================

console.log(developerProfile.name);
// Output:
// "Frontend_Developer"

console.log(developerProfile.experienceYears);
// Output:
// 6


// ==================================================
// Accessing Array Inside Object
// ==================================================

console.log(developerProfile.skills);
// Output:
// ["HTML", "CSS", "JavaScript"]

console.log(developerProfile.skills.join(" | "));
// Output:
// "HTML | CSS | JavaScript"

console.log(developerProfile.skills[2]);
// Output:
// "JavaScript"
/*
Explanation:
- skills is an array
- index access works like any normal array
*/


// ==================================================
// Accessing Nested Objects
// ==================================================

console.log(developerProfile.locations.remote);
// Output:
// "Worldwide"

console.log(developerProfile.locations.onSite.primary);
// Output:
// "Berlin"

console.log(developerProfile["locations"].onSite.primary);
// Output:
// "Berlin"

console.log(developerProfile["locations"]["onSite"]);
// Output:
// { primary: "Berlin", secondary: "Munich" }

console.log(developerProfile["locations"]["onSite"]["primary"]);
// Output:
// "Berlin"
/*
Explanation:
- Dot notation is used for static access
- Bracket notation allows flexible access
- Both can be mixed
*/


// ==================================================
// Object Method Execution
// ==================================================

console.log(developerProfile.checkAvailability());
// Output:
// "Currently Not Available"


// ==================================================
// Key Notes Summary
// ==================================================

/*
1) Nested Object:
---------------
An object inside another object.
Used to organize related data in a structured way.

2) Object + Array:
------------------
Objects often contain arrays (skills, roles, permissions).

3) Methods in Objects:
----------------------
Functions inside objects are called methods.
They can read or modify object properties.

4) Best Practice:
-----------------
Use nested objects to model real-world data
like profiles, settings, configurations, APIs.
*/

====================================================
End of Nested Object Explanation
====================================================
