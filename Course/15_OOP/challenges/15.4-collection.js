/*
====================================================================
JavaScript OOP — 5 Core Concepts (Professional & Practical)
====================================================================

This section explains the 5 most important OOP concepts in JavaScript:
1) Class & Object
2) Encapsulation
3) Abstraction
4) Inheritance
5) Polymorphism

Each concept includes:
- Clear definition
- Why it is useful
- Practical JavaScript example
====================================================================
*/

/*
============================================================
1) CLASS & OBJECT
============================================================

Definition:
- A Class is a blueprint.
- An Object is an instance created from that class.

Why it matters:
- Organizes code
- Creates multiple objects with the same structure
*/

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  info() {
    return `${this.name} is a ${this.role}`;
  }
}

let user1 = new User("Hassan", "Admin");
let user2 = new User("Ali", "Editor");

console.log(user1.info()); // Hassan is an Admin
console.log(user2.info()); // Ali is an Editor

/*
Key Point:
- Same class → different objects → different data
*/


/*
============================================================
2) ENCAPSULATION
============================================================

Definition:
- Encapsulation means:
  Bundling data + methods together
  and controlling how data is accessed.

Why it matters:
- Protects data
- Prevents accidental modification
*/

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    let _balance = balance; // private-like variable

    this.getBalance = function () {
      return _balance;
    };

    this.deposit = function (amount) {
      if (amount > 0) _balance += amount;
    };
  }
}

let acc = new BankAccount("Hassan", 1000);
acc.deposit(500);

console.log(acc.getBalance()); // 1500
// acc._balance not accessible

/*
Key Point:
- Internal data is hidden
- Access only through methods
*/


/*
============================================================
3) ABSTRACTION
============================================================

Definition:
- Abstraction means hiding complex logic
  and exposing only what the user needs.

Why it matters:
- Reduces complexity
- Improves readability
*/

class Car {
  startEngine() {
    this.#injectFuel();
    this.#ignite();
    console.log("Car Started");
  }

  #injectFuel() {
    // hidden internal logic
  }

  #ignite() {
    // hidden internal logic
  }
}

let myCar = new Car();
myCar.startEngine(); // Car Started
// myCar.#ignite()  not allowed

/*
Key Point:
- User uses simple interface
- Internal details are hidden
*/


/*
============================================================
4) INHERITANCE
============================================================

Definition:
- Inheritance allows a class to reuse
  properties and methods from another class.

Why it matters:
- Avoids code duplication
- Creates logical hierarchy
*/

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getInfo() {
    return `${this.name} earns ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
}

let mgr = new Manager("Sara", 7000, "IT");

console.log(mgr.getInfo()); // Sara earns 7000
console.log(mgr.department); // IT

/*
Key Point:
- Manager IS an Employee
- Reuses parent functionality
*/


/*
============================================================
5) POLYMORPHISM
============================================================

Definition:
- Polymorphism means:
  Same method name → different behavior

Why it matters:
- Flexible and scalable code
- Easier extension
*/

class Notification {
  send() {
    return "Sending notification";
  }
}

class Email extends Notification {
  send() {
    return "Sending Email";
  }
}

class SMS extends Notification {
  send() {
    return "Sending SMS";
  }
}

let notify = [
  new Email(),
  new SMS(),
];

notify.forEach(n => {
  console.log(n.send());
});

/*
Result:
Sending Email
Sending SMS
*/

/*
Key Point:
- Same method (send)
- Different implementations
*/


/*
============================================================
FINAL OOP SUMMARY (5 CORE POINTS)
============================================================

1) Class & Object
   - Blueprint and instance

2) Encapsulation
   - Protect data using methods

3) Abstraction
   - Hide complexity, show essentials

4) Inheritance
   - Reuse and extend behavior

5) Polymorphism
   - Same interface, different behavior

------------------------------------------------------------
These 5 concepts together form the foundation of
Object-Oriented Programming in JavaScript.
------------------------------------------------------------
*/
