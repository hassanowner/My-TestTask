/*
================================================================================
 JAVASCRIPT OOP — STATIC, INHERITANCE, & ENCAPSULATION
 Complete Single-File Reference
================================================================================

TOPICS COVERED:
1) Static Properties & Static Methods
2) Instance vs Class Members
3) Class Inheritance (extends & super)
4) Multi-Level Inheritance
5) Encapsulation (Public vs Private Fields)
6) Getter Methods for Controlled Access

PURPOSE:
- One clean, structured OOP reference
- Correct concepts and syntax
- Practical, real-world examples
================================================================================
*/


/*
================================================================================
SECTION 1: STATIC PROPERTIES & STATIC METHODS
================================================================================
- Static members belong to the class itself.
- Accessed using the class name, not instances.
- Common use cases: counters, helpers, utilities.
*/


/* -----------------------------
STATIC PROPERTY — BASIC
----------------------------- */
class Counter {
  static value = 0;
}

console.log(Counter.value); // 0


/* -----------------------------
STATIC PROPERTY — INSTANCE COUNT
----------------------------- */
class InstanceCounter {
  static count = 0;

  constructor() {
    InstanceCounter.count++;
  }
}

new InstanceCounter();
new InstanceCounter();

console.log(InstanceCounter.count); // 2


/* -----------------------------
STATIC METHODS
----------------------------- */
class Helper {
  static sum(a, b) {
    return a + b;
  }

  static sayHi() {
    return "Hi";
  }
}

console.log(Helper.sum(5, 3)); // 8
console.log(Helper.sayHi());   // Hi


/* -----------------------------
STATIC + INSTANCE TOGETHER
----------------------------- */
class UserStatic {
  static count = 0;

  constructor(id, username) {
    this.id = id;
    this.username = username;
    UserStatic.count++;
  }

  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let us1 = new UserStatic(1, "Ali");
let us2 = new UserStatic(2, "Sara");

console.log(UserStatic.count);           // 2
console.log(UserStatic.countMembers());  // "2 Members Created"


/*
================================================================================
SECTION 2: INSTANCE VS STATIC ACCESS
================================================================================
*/

class Demo {
  static x = 10;
  y = 20;
}

let d = new Demo();

console.log(Demo.x); // 10
console.log(d.y);    // 20

// d.x -> undefined (static not accessible from instance)


/*
================================================================================
SECTION 3: CLASS INHERITANCE (extends & super)
================================================================================
- Inheritance allows a class to reuse another class’s logic.
- Child classes inherit properties and methods from parent classes.
*/


/* -----------------------------
PARENT CLASS
----------------------------- */
class User {
  constructor(id, username) {
    this.id = id;
    this.username = username;
  }

  sayHello() {
    return `Hello ${this.username}`;
  }
}


/* -----------------------------
CHILD CLASS
----------------------------- */
class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.permissions = permissions;
  }
}

let adminOne = new Admin(101, "Daniel", 1);

console.log(adminOne.username);   // Daniel
console.log(adminOne.sayHello()); // Hello Daniel
console.log(adminOne.permissions); // 1


/*
================================================================================
SECTION 4: MULTI-LEVEL INHERITANCE
================================================================================
*/

class SuperAdmin extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.ability = ability;
  }
}

let sa = new SuperAdmin(201, "Root", 5, "All");

console.log(sa.sayHello()); // Hello Root
console.log(sa.ability);   // All


/*
================================================================================
SECTION 5: ENCAPSULATION (PRIVATE FIELDS)
================================================================================
- Encapsulation hides internal data.
- Private fields use # and are accessible only inside the class.
*/


/* -----------------------------
PUBLIC PROPERTY
----------------------------- */
class PublicExample {
  value = 10;
}

let pub = new PublicExample();
console.log(pub.value); // 10


/* -----------------------------
PRIVATE FIELD — BASIC
----------------------------- */
class PrivateExample {
  #value = 10;

  getValue() {
    return this.#value;
  }
}

let pri = new PrivateExample();
console.log(pri.getValue()); // 10
// pri.#value -> Error (private)


/* -----------------------------
ENCAPSULATION — PRACTICAL
----------------------------- */
class SecureUser {
  #salary;

  constructor(id, username, salaryText) {
    this.id = id;
    this.username = username;
    this.#salary = salaryText;
  }

  getSalary() {
    return parseInt(this.#salary);
  }

  getSalaryAfterTax() {
    return this.getSalary() * 0.8;
  }
}

let su = new SecureUser(100, "Ali", "500 Dollar");

console.log(su.username);           // Ali
console.log(su.getSalary());         // 500
console.log(su.getSalaryAfterTax()); // 400


/*
================================================================================
SECTION 6: IMPORTANT NOTES
================================================================================
• Static members belong to the class, not instances.
• Use class name to access static properties/methods.
• extends creates inheritance.
• super() must be called before using this in child constructors.
• Private fields (#) enforce encapsulation.
• Getter methods expose controlled access.
================================================================================
END OF FILE
================================================================================
*/
