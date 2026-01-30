/*
================================================================================
 JavaScript OOP — PROTOTYPE & PROTOTYPE CHAIN
 Complete Reference
================================================================================

PURPOSE:
- Explain Prototype, Prototype Chain, and how JavaScript inheritance works
- Show how class syntax maps to prototypes
- Demonstrate prototype extension (custom & built-in)
- Provide clear, memory-focused understanding

NOTE:
- This is ONE complete square file
- All explanations are inside comments
================================================================================
*/


/*
================================================================================
SECTION 1: PROTOTYPE — CORE CONCEPT
================================================================================

• JavaScript uses prototypes instead of classical inheritance.
• Every object has an internal [[Prototype]] link.
• Objects inherit properties and methods through this link.
• This mechanism is called the Prototype Chain.
*/


/*
------------------------------------------------------------
1) PROTOTYPE — VERY SIMPLE OBJECT
------------------------------------------------------------
*/

let obj = { name: "Ali" };

/*
Explanation:
- obj has its own property: name
- obj also links to Object.prototype
- That is why obj can use methods like:
  obj.toString()
  obj.hasOwnProperty()
*/


/*
------------------------------------------------------------
2) PROTOTYPE — CLASS SYNTAX (SIMPLE)
------------------------------------------------------------
*/

class User {
  constructor(username) {
    this.username = username; // stored on the object
  }

  sayHello() {
    return `Hello ${this.username},`;
  }
}

let u1 = new User("Ahmed");

/*
Explanation:
- username exists directly on u1
- sayHello() exists on User.prototype
- All User instances share the same method
*/


/*
------------------------------------------------------------
3) PROTOTYPE — INSPECTING STRUCTURE
------------------------------------------------------------
*/

class UserDetails {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }

  sayHello() {
    return `Hello ${this.u},`;
  }
}

let userOne = new UserDetails(100, "Noor");

/*
Results:
userOne.u            => "Noor"
UserDetails.prototype => { constructor, sayHello }

Explanation:
- sayHello exists only once
- userOne accesses it via the prototype chain
*/


/*
================================================================================
SECTION 2: BUILT-IN PROTOTYPES
================================================================================
*/


/*
------------------------------------------------------------
4) STRING PROTOTYPE EXAMPLE
------------------------------------------------------------
*/

let strOne = "Mohamed";

/*
Explanation:
- strOne is a primitive
- JavaScript temporarily wraps it as a String object
- This gives access to String.prototype methods
*/

console.log(String.prototype);

/*
Examples of inherited methods:
- toUpperCase()
- toLowerCase()
- includes()
- slice()
- length
*/


/*
================================================================================
SECTION 3: WHY PROTOTYPES MATTER
================================================================================

• Memory efficiency:
  - Methods are shared, not duplicated

• Inheritance:
  - Objects reuse behavior

• Built-in power:
  - Array, String, Object rely entirely on prototypes
*/


/*
================================================================================
SECTION 4: PROTOTYPE CHAIN EXTENSION
================================================================================

• JavaScript allows adding methods to prototypes
• All instances (past & future) can access them
• Powerful feature — must be used carefully
*/


/*
------------------------------------------------------------
5) EXTENDING CUSTOM CLASS PROTOTYPE (SIMPLE)
------------------------------------------------------------
*/

class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

Person.prototype.sayHello = function () {
  return `Hello ${this.name},`;
};

let p1 = new Person(1, "Ali");

/*
Result:
p1.sayHello() => "Hello Ali,"
*/


/*
------------------------------------------------------------
6) EXTENDING CUSTOM CLASS PROTOTYPE (MEDIUM)
------------------------------------------------------------
*/

class Employee {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }
}

Employee.prototype.getInfo = function () {
  return `ID: ${this.id}, User: ${this.username}`;
};

Employee.prototype.isAdmin = function () {
  return false;
};

let emp1 = new Employee(10, "Hassan");

/*
Results:
emp1.getInfo() => "ID: 10, User: Hassan"
emp1.isAdmin() => false
*/


/*
------------------------------------------------------------
7) EXTENDING AFTER CLASS CREATION (ADVANCED)
------------------------------------------------------------
*/

class Account {
  constructor(accountId, ownerName) {
    this.accountId = accountId;
    this.ownerName = ownerName;
  }

  greetOwner() {
    return `Hello ${this.ownerName}`;
  }
}

Account.prototype.welcomeMessage = function () {
  return `Welcome ${this.ownerName}`;
};

let acc1 = new Account(1001, "Ali");

/*
Results:
acc1.greetOwner()       => "Hello Ali"
acc1.welcomeMessage()  => "Welcome Ali"
*/


/*
================================================================================
SECTION 5: DANGEROUS PROTOTYPE EXTENSIONS
================================================================================
*/


/*
------------------------------------------------------------
8) EXTENDING Object.prototype (NOT RECOMMENDED)
------------------------------------------------------------
*/

Object.prototype.appName = "My Application";

/*
Effect:
{}.appName  => "My Application"
[].appName  => "My Application"

Warning:
- Affects ALL objects
- Can break loops and libraries
- Avoid in production code
*/


/*
------------------------------------------------------------
9) EXTENDING BUILT-IN STRING PROTOTYPE
------------------------------------------------------------
*/

String.prototype.wrapWithStars = function () {
  return `***${this}***`;
};

let title = "JavaScript";

/*
Result:
title.wrapWithStars() => "***JavaScript***"
*/


/*
================================================================================
FINAL SUMMARY
================================================================================

• Prototype is the foundation of JavaScript inheritance
• Objects inherit via prototype chains
• Class syntax is just a cleaner wrapper over prototypes
• Methods live on prototypes, not objects
• Prototype extension enables shared behavior
• Avoid modifying Object.prototype in real projects
• Mastering prototypes = mastering JavaScript OOP

================================================================================
END OF FILE
================================================================================
*/
