/*
============================================================
ADVANCED JAVASCRIPT OOP CHALLENGES (STATIC + INHERITANCE + ENCAPSULATION)
Topics Used ONLY from What You Studied:
- Static Properties
- Static Methods
- Class Inheritance (extends, super)
- Encapsulation (Private Fields #)
- Instance vs Class Members
============================================================


CHALLENGE 1
------------------------------------------------------------
QUESTION:
You have a User class.
- It has a static property count that tracks how many users are created.
- It has a private field #salary.
- The constructor receives (username, salary).
- Create a static method totalUsers() that returns:
  "Total Users: X"
- Create TWO instances.
- Log:
  1) The result of User.totalUsers()
  2) The salary of the first user using a public method.

------------------------------------------------------------
ANSWER:
*/

class User {
  static count = 0;
  #salary;

  constructor(username, salary) {
    this.username = username;
    this.#salary = salary;
    User.count++;
  }

  getSalary() {
    return this.#salary;
  }

  static totalUsers() {
    return `Total Users: ${this.count}`;
  }
}

let u1 = new User("Ali", 5000);
let u2 = new User("Sara", 6000);

console.log(User.totalUsers());
console.log(u1.getSalary());
// Result:
// "Total Users: 2"
// 5000



/*
============================================================
CHALLENGE 2
------------------------------------------------------------
QUESTION:
You have a base class Employee.
- Constructor receives (id, name).
- It has a method info() that returns "ID: X, Name: Y".

Create a child class Manager that:
- Inherits from Employee.
- Has a private field #bonus.
- Constructor receives (id, name, bonus).
- Uses super().
- Has a method totalIncome(salary) that returns salary + bonus.

Create one Manager instance and log:
1) info()
2) totalIncome(5000)

------------------------------------------------------------
ANSWER:
*/

class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  info() {
    return `ID: ${this.id}, Name: ${this.name}`;
  }
}

class Manager extends Employee {
  #bonus;

  constructor(id, name, bonus) {
    super(id, name);
    this.#bonus = bonus;
  }

  totalIncome(salary) {
    return salary + this.#bonus;
  }
}

let m1 = new Manager(1, "Hassan", 2000);

console.log(m1.info());
console.log(m1.totalIncome(5000));
// Result:
// "ID: 1, Name: Hassan"
// 7000



/*
============================================================
CHALLENGE 3
------------------------------------------------------------
QUESTION:
You have a Product class.
- It has a static property totalProducts.
- Each product has:
  - public name
  - private #price
- The constructor increases totalProducts.
- Create a static method countProducts().
- Create a method getFinalPrice() that adds 10% tax.

Create TWO products.
Log:
1) Product.countProducts()
2) Final price of the second product.

------------------------------------------------------------
ANSWER:
*/

class Product {
  static totalProducts = 0;
  #price;

  constructor(name, price) {
    this.name = name;
    this.#price = price;
    Product.totalProducts++;
  }

  getFinalPrice() {
    return this.#price * 1.1;
  }

  static countProducts() {
    return `${this.totalProducts} Products Created`;
  }
}

let p1 = new Product("Phone", 1000);
let p2 = new Product("Laptop", 2000);

console.log(Product.countProducts());
console.log(p2.getFinalPrice());
// Result:
// "2 Products Created"
// 2200


/*
============================================================
END OF ADVANCED CHALLENGES
============================================================
*/
