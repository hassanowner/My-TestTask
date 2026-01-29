/*
====================================================================
JAVASCRIPT OBJECTS — COMPLETE PROFESSIONAL GUIDE (SINGLE FILE)
====================================================================

Topics Covered:
- Creating objects with new Object()
- Reading, writing, deleting properties
- Dot vs Bracket notation
- Dynamic property names
- Adding methods and using this
- Object inspection (keys / values / entries)
- Object.assign (merging)
- Object.freeze (immutability)
- delete & in operators
- Symbols as unique property keys

Everything below is VALID JavaScript and safe to run.
====================================================================
*/


/* ====================================================
1) Object Creation with new Object()
==================================================== */

let user = new Object({ age: 20 });
console.log(user); // { age: 20 }


/* ====================================================
2) Read & Write Properties (Dot + Bracket)
==================================================== */

user.age = 38;
user["country"] = "Egypt";

console.log(user.age);     // 38
console.log(user.country); // Egypt


/* ====================================================
3) Adding Methods to Objects
==================================================== */

user.sayHello = function () {
  return `Hello from ${this.country} - age: ${this.age}`;
};

console.log(user.sayHello());
// Hello from Egypt - age: 38


/* ====================================================
4) Dynamic Property Names
==================================================== */

let dynamicKey = "job";
user[dynamicKey] = "Frontend Developer";

console.log(user.job); // Frontend Developer


/* ====================================================
5) Deleting Properties
==================================================== */

console.log("country" in user); // true
delete user.country;
console.log("country" in user); // false
console.log(user.country);      // undefined


/* ====================================================
6) Object Inspection Helpers
==================================================== */

console.log(Object.keys(user));
// ["age", "sayHello", "job"]

console.log(Object.values(user));
// [38, function, "Frontend Developer"]

console.log(Object.entries(user));
// [["age",38],["sayHello",function],["job","Frontend Developer"]]


/* ====================================================
7) Merging Objects with Object.assign
==================================================== */

let defaults = { age: 0, language: "en" };
let extra = { hobby: "photography" };

let merged = Object.assign({}, defaults, user, extra);
console.log(merged);


/* ====================================================
8) Object Immutability with Object.freeze
==================================================== */

let config = { mode: "dev", version: 1 };
Object.freeze(config);

config.mode = "prod";
config.newProp = true;
delete config.version;

console.log(config);
// { mode: "dev", version: 1 }


/* ====================================================
9) Practical Object Example
==================================================== */

let profile = new Object({
  username: "dev_jane",
  age: 28,
});

profile.languages = ["JavaScript", "TypeScript"];

profile.getBio = function () {
  return `${this.username} - ${this.age} years - ${this.languages.join(", ")}`;
};

console.log(profile.getBio());
// dev_jane - 28 years - JavaScript, TypeScript


/* ====================================================
10) Dot vs Bracket Notation (Rules)
==================================================== */

let accessKey = "country";

let account = {
  userName: "backend_engineer",
  country: "Germany",
};

console.log(account.userName);       // backend_engineer
console.log(account[accessKey]);     // Germany
console.log(account.accessKey);      // undefined


/* ====================================================
11) Properties with Special Characters
==================================================== */

let specialUser = {
  "first-name": "John",
  "last-name": "Doe"
};

console.log(specialUser["first-name"]); // John
console.log(specialUser["last-name"]);  // Doe


/* ====================================================
12) Dynamic Property Construction
==================================================== */

let nameKey = "name";
let dynamicPerson = {
  "first-name": "John",
  "last-name": "Doe"
};

console.log(dynamicPerson["first-" + nameKey]); // John
console.log(dynamicPerson["last-" + nameKey]);  // Doe


/* ====================================================
13) Adding Properties & Methods Dynamically
==================================================== */

let dynamicObject = {};

dynamicObject.title = "Admin";
dynamicObject.isLoggedIn = true;

dynamicObject.login = function () {
  return "User logged in";
};

console.log(dynamicObject.login());


/* ====================================================
14) delete Operator vs null vs undefined
==================================================== */

let book = {
  title: "JavaScript Guide",
  price: 59.95
};

book.price = null;
console.log("price" in book); // true
console.log(book.price);      // null

delete book.price;
console.log("price" in book); // false
console.log(book.price);      // undefined


/* ====================================================
15) Using Symbols as Object Property Keys
==================================================== */

const userIdSymbol = Symbol("userId");
const secureUser = {};

secureUser[userIdSymbol] = 12345;

console.log(secureUser[userIdSymbol]); // 12345
console.log(secureUser.userId);         // undefined
console.log(secureUser["userId"]);      // undefined


/* ====================================================
16) Symbols vs Strings Comparison
==================================================== */

const symKey = Symbol("secret");
const strKey = "secret";

let objA = {};
objA[symKey] = "hidden";

let objB = {};
objB[strKey] = "visible";

console.log(objA[symKey]); // hidden
console.log(objA.secret);  // undefined

console.log(objB[strKey]); // visible
console.log(objB.secret);  // visible


/* ====================================================
FINAL SUMMARY
====================================================

- Objects store key–value pairs
- {} is preferred over new Object()
- Dot notation is static
- Bracket notation is dynamic
- delete removes properties completely
- in checks existence, not value
- Object.assign merges objects
- Object.freeze prevents mutation
- Symbols create collision-free keys

====================================================
END OF OBJECT MASTER FILE
====================================================
*/
