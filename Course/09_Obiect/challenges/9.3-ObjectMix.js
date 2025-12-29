/************************************************************
 MINI FINAL TASK — STEP-BY-STEP REQUIREMENTS + IMPLEMENTATION
 Language: English
 Goal: Demonstrate object composition, inheritance, dynamic
 properties, and method usage in a clean, practical structure.
*************************************************************

========================
1) WHAT IS REQUIRED
========================

1. Create a base object that:
   - Contains an `active` property
   - Contains a method `isActive()` that returns the active status

2. Create a user object that:
   - Has a name
   - Has nested stats (level, score)
   - Has a `summary()` method using shorthand syntax

3. Add a dynamic property to the user object:
   - The property name must come from a variable (`key`)
   - The value should be `true`

4. Create a config object that:
   - Stores language information
   - Has a method that returns the language

5. Create a status object that:
   - Inherits from the base object
   - Overrides the `active` value

6. Create a final object that:
   - Inherits from the base object (not from status directly)
   - Combines user, config, and status properties
   - Remains independent from the original objects

7. Add a `report()` method to the final object that:
   - Displays user name
   - Displays level
   - Displays premium status
   - Displays active status

8. Test all important methods using console.log

========================
2) IMPLEMENTATION
========================
************************************************************/

// Dynamic key name
let key = "premium";

// Base object (shared behavior)
let base = {
  active: true,
  isActive() {
    return `active: ${this.active}`;
  }
};

// User object
let user = {
  name: "Hassan",
  stats: { level: 7, score: 1200 },
  summary() {
    return `${this.name}, Level ${this.stats.level}`;
  }
};

// Add dynamic property to user
user[key] = true;

// Configuration object
let config = {
  lang: "EN",
  info() {
    return `Lang: ${this.lang}`;
  }
};

// Status object inheriting from base
let status = Object.create(base);
status.active = false;

// Final object:
// - Inherits from base
// - Merges user, config, and status
let final = Object.assign(
  Object.create(base),
  user,
  config,
  status
);

// Add report method to final object
final.report = function () {
  return `
  User: ${this.name}
  Level: ${this.stats.level}
  Premium: ${this[key]}
  Active: ${this.active}
  `;
};

// ========================
// 3) TESTS
// ========================

console.log(final.summary());
console.log(final.info());
console.log(final.isActive());
console.log(final.report());
