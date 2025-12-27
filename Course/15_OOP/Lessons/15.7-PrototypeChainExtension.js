/*
====================================================================
JavaScript OOP – Prototype Chain Extension
====================================================================

------------------------------------------------------------
** TOPICS OVERVIEW (What & Why) **
------------------------------------------------------------

• Prototype Chain Extension
  - JavaScript allows adding new properties and methods to prototypes.
  - This affects all objects that inherit from that prototype.
  - It is a powerful feature but must be used carefully.

• Extending Custom Class Prototypes
  - You can add methods to your own class prototype.
  - All existing and future instances will share that method.

• Extending Built-in Constructors
  - Built-in objects like String, Array, Object have prototypes.
  - You can extend them with custom methods or properties.
  - This should be done cautiously to avoid conflicts.

------------------------------------------------------------
1) SIMPLE PROTOTYPE EXTENSION (CUSTOM CLASS)
------------------------------------------------------------*/

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

Explanation:
- sayHello is stored in Person.prototype.
- All Person objects can access it.
*/

/*
------------------------------------------------------------
2) MEDIUM EXAMPLE – ADDING MORE METHODS
------------------------------------------------------------*/

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

Explanation:
- Methods are shared between all objects.
- Memory usage is optimized.
*/

/*
------------------------------------------------------------
3) ADVANCED EXAMPLE 
------------------------------------------------------------*/

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
acc1.ownerName => "Ali"
acc1.greetOwner() => "Hello Ali"
acc1.welcomeMessage() => "Welcome Ali"

Explanation:
- welcomeMessage was added after class creation.
- All Account instances can use it.
*/

/*
------------------------------------------------------------
4) EXTENDING OBJECT.PROTOTYPE (DANGEROUS AREA)
------------------------------------------------------------*/

Object.prototype.appName = "My Application";

/*
Explanation:
- appName becomes available on ALL objects.
- Example:
  {}.appName => "My Application"
  [].appName => "My Application"

⚠ Warning:
- This can cause unexpected behavior.
- Should be avoided in real projects.
*/

/*
------------------------------------------------------------
5) EXTENDING BUILT-IN STRING PROTOTYPE
------------------------------------------------------------ */

String.prototype.wrapWithStars = function () {
  return `***${this}***`;
};

let title = "JavaScript";

/*
Result:
title.wrapWithStars() => "***JavaScript***"

Explanation:
- The method is added to String.prototype.
- All string values can use it.
- JavaScript temporarily wraps primitives with objects.
*/

/*
------------------------------------------------------------
6) WHY PROTOTYPE EXTENSION IS IMPORTANT
------------------------------------------------------------ 

• Enables shared behavior across objects.
• Reduces memory consumption.
• Makes JavaScript flexible and powerful.
• Allows enhancing built-in objects when needed.

------------------------------------------------------------
FINAL SUMMARY
------------------------------------------------------------

• Prototypes are the backbone of inheritance in JavaScript.
• You can add methods to custom class prototypes.
• Built-in constructors can be extended carefully.
• Avoid modifying Object.prototype in production code.
• Prototype mastery is essential for advanced JavaScript OOP.

====================================================================
*/
