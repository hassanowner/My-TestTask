/*
====================================================
Object — Complete Educational Guide (Single File)
====================================================

This file covers:
- Object basics
- Properties vs Methods
- window object concept
- Creating objects from arrays
- Dot vs Bracket notation
- Dynamic property access
- Nested objects
- Objects with arrays
- Practical real-world modeling

====================================================
*/


// ==================================================
// Global Object Note (Browser Environment)
// ==================================================
/*
In browsers, everything runs inside the window object.

console.log() === window.console.log()
document     === window.document
alert()      === window.alert()
*/


// ==================================================
// Example 1: Basic Object Structure
// ==================================================

let developerAccount = {
  username: "frontend_dev",
  role: "JavaScript Engineer",
  experienceYears: 5,
  isActive: true,

  getProfileSummary: function () {
    return `User: ${this.username} | Role: ${this.role}`;
  },

  canAccessDashboard: function () {
    return this.isActive === true;
  }
};


// ==================================================
// Accessing Properties
// ==================================================

console.log(developerAccount.username);        // "frontend_dev"
console.log(developerAccount.experienceYears); // 5
console.log(developerAccount.isActive);        // true


// ==================================================
// Calling Methods
// ==================================================

console.log(developerAccount.getProfileSummary());
// "User: frontend_dev | Role: JavaScript Engineer"

console.log(developerAccount.canAccessDashboard());
// true


// ==================================================
// Creating an Object from an Array (Object.fromEntries)
// ==================================================

const userArray = [
  ["username", "fullstack_dev"],
  ["role", "Fullstack Engineer"],
  ["experienceYears", 4],
  ["isActive", true],
  ["displayInfo", function () {
    console.log(
      `${this.username} | ${this.role} | ${this.experienceYears} years | Active: ${this.isActive}`
    );
  }]
];

const user = Object.fromEntries(userArray);


// ==================================================
// Accessing Converted Object
// ==================================================

console.log(user.username);        // "fullstack_dev"
console.log(user.role);            // "Fullstack Engineer"
console.log(user.experienceYears); // 4
console.log(user.isActive);        // true

user.displayInfo();
// "fullstack_dev | Fullstack Engineer | 4 years | Active: true"


// ==================================================
// Dot Notation vs Bracket Notation
// ==================================================

let propertyKey = "country";

let userProfile = {
  userName: "backend_engineer",
  country: "Germany",
};


// Dot notation (static)
console.log(userProfile.userName); // "backend_engineer"
console.log(userProfile.country);  // "Germany"

// Incorrect dynamic access
console.log(userProfile.propertyKey); // undefined


// Bracket notation (dynamic)
console.log(userProfile[propertyKey]); // "Germany"


// ==================================================
// Key Rules
// ==================================================
/*
Dot notation:
- Fixed property names
- Cleaner syntax
- Cannot use variables

Bracket notation:
- Dynamic property names
- Required for variables
- Required for special characters
*/


// ==================================================
// Nested Objects & Arrays
// ==================================================

let developerProfile = {
  name: "Frontend_Developer",
  experienceYears: 6,
  skills: ["HTML", "CSS", "JavaScript"],
  availableForProjects: false,

  locations: {
    remote: "Worldwide",
    onSite: {
      primary: "Berlin",
      secondary: "Munich",
    },
  },

  checkAvailability: function () {
    return this.availableForProjects
      ? "Available For New Projects"
      : "Currently Not Available";
  },
};


// ==================================================
// Accessing Nested Data
// ==================================================

console.log(developerProfile.name);                    // "Frontend_Developer"
console.log(developerProfile.experienceYears);         // 6

console.log(developerProfile.skills);                  // ["HTML","CSS","JavaScript"]
console.log(developerProfile.skills.join(" | "));      // "HTML | CSS | JavaScript"
console.log(developerProfile.skills[2]);               // "JavaScript"

console.log(developerProfile.locations.remote);         // "Worldwide"
console.log(developerProfile.locations.onSite.primary);// "Berlin"
console.log(developerProfile["locations"]["onSite"]);  // { primary, secondary }


// ==================================================
// Calling Object Method
// ==================================================

console.log(developerProfile.checkAvailability());
// "Currently Not Available"


// ==================================================
// Final Mental Model
// ==================================================
/*
Object
 ├─ Properties → Data
 ├─ Methods    → Behavior
 ├─ Arrays     → Lists of values
 ├─ Objects    → Structured grouping
 └─ Nesting    → Real-world modeling

Use Objects to represent:
- Users
- Accounts
- Profiles
- Settings
- API responses

====================================================
End of Object Educational File
====================================================
*/
