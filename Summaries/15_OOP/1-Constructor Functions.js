/*
================================================================================
 JAVASCRIPT OOP — COMPLETE REFERENCE
 Topics Covered:
 1) Constructor Functions (Classic OOP)
 2) this & new Keywords
 3) Object Instances
 4) ES6 Classes
 5) Properties & Methods
 6) instanceOf & constructor
 7) Updating Properties
 8) Built-in Constructors
================================================================================

PURPOSE:
--------
• One clean, structured, self-contained OOP reference
• No duplicated logic
• Correct syntax and concepts
• Progressive learning from basics to advanced
================================================================================
*/


/*
================================================================================
SECTION 1: CONSTRUCTOR FUNCTIONS (CLASSIC OOP)
================================================================================

A constructor function is used to create multiple objects
that share the same structure.

Rules:
• Name starts with a Capital Letter
• Uses `this` to assign properties
• Must be called with `new`
*/


/*
----------------------------------------
Example 1: Basic Constructor
----------------------------------------
*/

function Person(name) {
  this.name = name;
}

let personOne = new Person("Ali");
console.log(personOne.name); // Ali


/*
----------------------------------------
How `new` Works
----------------------------------------
1) Creates a new empty object
2) Binds `this` to that object
3) Assigns properties
4) Returns the object automatically
*/


/*
----------------------------------------
Custom Property Names
----------------------------------------
*/

function PersonAlt(name) {
  this.na = name; // property name can be anything
}

let personTwo = new PersonAlt("Ali");
console.log(personTwo.na); // Ali


/*
================================================================================
SECTION 2: MULTIPLE PROPERTIES
================================================================================
*/

function Employee(id, username) {
  this.id = id;
  this.username = username;
}

let employeeOne = new Employee(1, "Hassan");
let employeeTwo = new Employee(2, "Sara");

console.log(employeeOne.id);       // 1
console.log(employeeOne.username); // Hassan
console.log(employeeTwo.id);       // 2
console.log(employeeTwo.username); // Sara


/*
================================================================================
SECTION 3: LOGIC INSIDE CONSTRUCTORS
================================================================================
*/

function Product(id, name, basePrice) {
  this.id = id;
  this.name = name;
  this.price = basePrice + 50;
}

let p1 = new Product(1, "Laptop", 1000);
let p2 = new Product(2, "Phone", 600);

console.log(p1.price); // 1050
console.log(p2.price); // 650


/*
================================================================================
SECTION 4: ES6 CLASSES (MODERN OOP)
================================================================================
Classes are syntactic sugar over constructor functions.
They provide cleaner syntax and better organization.
*/


/*
----------------------------------------
Basic Class
----------------------------------------
*/

class PersonClass {
  constructor(name) {
    this.name = name;
  }
}

let pc = new PersonClass("Ali");
console.log(pc.name); // Ali


/*
----------------------------------------
Class with Multiple Properties
----------------------------------------
*/

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

let carOne = new Car("Toyota", "Red");
console.log(carOne.brand); // Toyota
console.log(carOne.color); // Red


/*
----------------------------------------
Class with Logic
----------------------------------------
*/

class ProductClass {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price + 100;
  }
}

let prod = new ProductClass(1, "Laptop", 1000);
console.log(prod.price); // 1100


/*
================================================================================
SECTION 5: METHODS
================================================================================
Methods define object behavior.
*/


class User {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getInfo() {
    return `User: ${this.name}, Salary: ${this.salary}`;
  }

  increaseSalary(amount) {
    this.salary += amount;
  }
}

let u1 = new User("Hassan", 5000);
u1.increaseSalary(1000);
console.log(u1.getInfo()); // User: Hassan, Salary: 6000


/*
----------------------------------------
Methods Inside vs Outside Constructor
----------------------------------------
*/

class Example {
  constructor(name) {
    this.name = name;

    this.msg = function () {
      return `Hello ${this.name} (inside constructor)`;
    };
  }

  writeMsg() {
    return `Hello ${this.name} (prototype method)`;
  }
}

let ex = new Example("Lima");
console.log(ex.msg());
console.log(ex.writeMsg());


/*
================================================================================
SECTION 6: DEFAULT VALUES
================================================================================
*/

class DefaultUser {
  constructor(username) {
    this.username = username || "Unknown";
  }
}

console.log(new DefaultUser("").username);   // Unknown
console.log(new DefaultUser("Ali").username); // Ali


/*
================================================================================
SECTION 7: INSTANCEOF & CONSTRUCTOR
================================================================================
*/

class Animal {}
let dog = new Animal();

console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true
console.log(dog.constructor === Animal); // true


/*
================================================================================
SECTION 8: UPDATING PROPERTIES
================================================================================
*/

class Account {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  updateOwner(newOwner) {
    this.owner = newOwner;
  }
}

let acc = new Account("Ali", 1000);
acc.deposit(500);
acc.updateOwner("Ahmed");

console.log(acc.balance); // 1500
console.log(acc.owner);   // Ahmed


/*
================================================================================
SECTION 9: BUILT-IN CONSTRUCTORS
================================================================================
*/

let str1 = "Hello";
let str2 = new String("Hello");

console.log(typeof str1); // string
console.log(typeof str2); // object

console.log(str1 instanceof String); // false
console.log(str2 instanceof String); // true

console.log(str1.constructor === String); // true
console.log(str2.constructor === String); // true


/*
================================================================================
BEST PRACTICES
================================================================================
• Always use `new` with constructors
• Prefer classes for modern code
• Keep methods outside constructor when possible
• Avoid built-in object wrappers unless needed
• Use methods to update object data safely
================================================================================
END OF FILE
================================================================================
*/
