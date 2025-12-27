/*
  Object Creation With new Object()
  - How to create an object using the `new Object()` syntax
  - How to read, write, and delete properties (dot & bracket)
  - Adding methods (functions) to objects
  - Dynamic property names
  - Inspecting objects: Object.keys / Object.values / Object.entries
  - Merging objects with Object.assign
  - Immutability example with Object.freeze
  - Best practices and when not to use `new Object()`
*/

/* -------------------------
   1) Create object with new Object()
   ------------------------- */
let user = new Object({ age: 20 });
console.log(user);
// Result:
// { age: 20 }

/* -------------------------
   2) Read & write properties (dot + bracket)
   ------------------------- */
user.age = 38;
console.log(user.age);
// Result:
// 38

user["country"] = "Egypt";
console.log(user.country);
// Result:
// Egypt

/* -------------------------
   3) Add a method (function) to the object
   ------------------------- */
user.sayHello = function () {
  return `Hello from ${this.country} - age: ${this.age}`;
};

console.log(user.sayHello());
// Result:
// Hello from Egypt - age: 38

/* -------------------------
   4) Dynamic property names
   ------------------------- */
let propName = "job";
user[propName] = "Frontend Developer";
console.log(user.job);
// Result:
// Frontend Developer

/* -------------------------
   5) Delete a property
   ------------------------- */
console.log(user.hasOwnProperty("country"));
// Result:
// true

delete user.country;
console.log(user.country);
// Result:
// undefined

/* -------------------------
   6) Object inspection helpers
   ------------------------- */
console.log(Object.keys(user));
// Example Result:
// ["age", "sayHello", "job"]

console.log(Object.values(user));
// Example Result:
// [38, function, "Frontend Developer"]

console.log(Object.entries(user));
// Example Result:
// [["age",38],["sayHello",function],["job","Frontend Developer"]]

/* -------------------------
   7) Merge objects with Object.assign
   ------------------------- */
let defaults = { age: 0, language: "en" };
let extra = { hobby: "photography" };

let merged = Object.assign({}, defaults, user, extra);
console.log(merged);
// Example Result:
// { age: 38, language: "en", sayHello: [Function], job: "Frontend Developer", hobby: "photography" }

/* -------------------------
   8) Make object immutable with Object.freeze
   ------------------------- */
let config = { mode: "dev", version: 1 };
Object.freeze(config);

config.mode = "prod";
config.newProp = true;
delete config.version;

console.log(config);
// Result:
// { mode: "dev", version: 1 }

/* -------------------------
   9) When to use new Object() vs object literal {}
   -------------------------
   - Prefer object literal {}
   - new Object() works but is rarely used in modern code
   ------------------------- */

/* -------------------------
   10) Small Practical Example
   ------------------------- */
let profile = new Object({
  username: "dev_jane",
  age: 28,
});

profile.languages = ["JavaScript", "TypeScript"];
profile.getBio = function () {
  return `${this.username} - ${this.age} years - ${this.languages.join(", ")}`;
};

console.log(profile.getBio());
// Result:
// dev_jane - 28 years - JavaScript, TypeScript

/* -------------------------
   Summary
   -------------------------
   - new Object() creates objects but {} is preferred
   - Dot & bracket notation for property access
   - Object.assign merges objects
   - Object.freeze prevents modification
   - Object.keys / values / entries inspect data
*/
