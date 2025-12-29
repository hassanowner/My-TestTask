/*
====================================================
OBJECT — SIMPLE CHALLENGES (BEGINNER → INTERMEDIATE)
====================================================
*/

// ==================================================
// CHALLENGE 1: Create Object & Access Properties
// ==================================================

/*
QUESTION:
Create an object that represents a user
with name, age, and active status.
Then print them.
*/

let user = {
  name: "Mohammed",
  age: 25,
  isActive: true,
};

console.log(user.name);
console.log(user.age);
console.log(user.isActive);

/*
Result:
Mohammed
25
true
*/


// ==================================================
// CHALLENGE 2: Object Method Using Properties
// ==================================================

/*
QUESTION:
Add a method that returns a short profile text
*/

let account = {
  username: "dev_ali",
  role: "Frontend",
  getInfo: function () {
    return `${account.username} works as ${account.role}`;
  },
};

console.log(account.getInfo());

/*
Result:
dev_ali works as Frontend
*/


// ==================================================
// CHALLENGE 3: Dot Notation vs Bracket Notation
// ==================================================

/*
QUESTION:
Access object property using a variable
*/

let keyName = "country";

let profile = {
  username: "hassan_dev",
  country: "Iraq",
};

console.log(profile.country);
/*
Result:
Iraq
*/

console.log(profile[keyName]);
/*
Result:
Iraq
*/


// ==================================================
// CHALLENGE 4: Nested Object Access
// ==================================================

/*
QUESTION:
Access nested data inside an object
*/

let developer = {
  name: "Frontend Dev",
  location: {
    city: "Baghdad",
    type: "Remote",
  },
  isAvailable: false,
  checkStatus: function () {
    return developer.isAvailable
      ? "Available"
      : "Not Available";
  },
};

console.log(developer.location.city);
/*
Result:
Baghdad
*/

console.log(developer.location.type);
/*
Result:
Remote
*/

console.log(developer.checkStatus());
/*
Result:
Not Available
*/
