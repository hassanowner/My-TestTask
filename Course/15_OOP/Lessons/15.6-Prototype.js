/*
====================================================================
JavaScript OOP – Prototype Explained (Introduction)
====================================================================

------------------------------------------------------------
** TOPICS OVERVIEW (Names + Programming Purpose) **
------------------------------------------------------------

• Prototype
  - A fundamental concept in JavaScript.
  - JavaScript uses prototypes instead of classical inheritance.
  - Every object in JavaScript has an internal link to another object
    called its prototype.
  - Prototypes are the mechanism by which JavaScript objects inherit
    features (properties and methods) from one another.

• Prototype Chain
  - When accessing a property or method:
    1) JavaScript looks in the object itself.
    2) If not found, it looks in the prototype.
    3) It continues up the chain until it finds it or reaches null.

• Class Syntax and Prototype
  - Classes in JavaScript are just syntax sugar.
  - Methods written inside a class are stored on the prototype,
    not inside each object.

------------------------------------------------------------
1) PROTOTYPE – VERY SIMPLE IDEA
------------------------------------------------------------*/

let obj = { name: "Ali" };

/*
Explanation:
- obj has its own properties.
- It also has a hidden link to Object.prototype.
- That is why obj can use methods like toString().
*/

/*
------------------------------------------------------------
2) PROTOTYPE – SIMPLE CLASS EXAMPLE
------------------------------------------------------------*/

class User {
  constructor(username) {
    this.username = username;
  }

  sayHello() {
    return `Hello ${this.username},`;
  }
}

let u1 = new User("Ahmed");

/*
Explanation:
- username is stored directly on the object.
- sayHello() is stored on User.prototype.
- All User objects share the same method.
*/

/*
------------------------------------------------------------
3) PROTOTYPE – MEDIUM EXAMPLE (INSPECTING PROTOTYPE)
------------------------------------------------------------*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }

  sayHello() {
    return `Hello ${this.u} ,`;
  }
}

let userOne = new User(100, "Noor");

/*
Results:
userOne.u => "Noor"
User.prototype => { constructor, sayHello }
Explanation:
- sayHello() exists only once on the prototype.
- userOne accesses it through the prototype chain.
*/

/*
------------------------------------------------------------
4) BUILT-IN PROTOTYPES (STRING EXAMPLE)
------------------------------------------------------------*/

let strOne = "Mohamed";

/*
Explanation:
- strOne is a primitive string.
- JavaScript temporarily wraps it with String object.
- It gains access to String.prototype methods.
*/

console.log(String.prototype);

/*
Result:
- Shows methods like:
  length
  toUpperCase()
  toLowerCase()
  includes()
  slice()
  etc.
*/

/*
------------------------------------------------------------
5) WHY PROTOTYPES ARE IMPORTANT
------------------------------------------------------------

• Save memory:
  - Methods are shared, not duplicated per object.

• Enable inheritance:
  - Objects inherit behavior from other objects.

• Power built-in objects:
  - Array, String, Number, Object all rely on prototypes.

------------------------------------------------------------
FINAL SUMMARY
------------------------------------------------------------

• Prototype is how JavaScript implements inheritance.
• Objects inherit features through prototype chains.
• Class methods live on the prototype.
• Built-in objects use prototypes extensively.
• Understanding prototypes is key to mastering JavaScript OOP.

====================================================================
*/
