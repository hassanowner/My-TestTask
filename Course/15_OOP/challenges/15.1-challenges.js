/*
============================================================
ADVANCED JAVASCRIPT OOP CHALLENGES (5 TEST TASKS)
Topics Used ONLY from What You Studied:
- Class & Constructor
- Properties & Methods
- this & new
- Default Values
- Logic inside Constructor
- Updating Properties
- instanceof
- constructor property
- Built-in Constructors (String)
============================================================


CHALLENGE 1
------------------------------------------------------------
QUESTION:
You have a User class.
- The constructor receives (username, age).
- If age is less than 18, it should automatically become 18.
- Create a method called info() that returns:
  "Username: X, Age: Y"
- Create one instance with age 15.
- Log the result of info().

------------------------------------------------------------
ANSWER:
*/

class User {
  constructor(username, age) {
    this.username = username;
    this.age = age < 18 ? 18 : age;
  }

  info() {
    return `Username: ${this.username}, Age: ${this.age}`;
  }
}

let user1 = new User("Ali", 15);
console.log(user1.info());
// Result: "Username: Ali, Age: 18"



/*
============================================================
CHALLENGE 2
------------------------------------------------------------
QUESTION:
You have a Product class.
- Constructor receives (name, price).
- Inside constructor, create a discountedPrice property = price * 0.8
- Create a method increasePrice(amount) that increases BOTH price
  and recalculates discountedPrice.
- Create an instance with price 1000.
- Increase price by 500.
- Log discountedPrice.

------------------------------------------------------------
ANSWER:
*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.discountedPrice = price * 0.8;
  }

  increasePrice(amount) {
    this.price += amount;
    this.discountedPrice = this.price * 0.8;
  }
}

let prod1 = new Product("Laptop", 1000);
prod1.increasePrice(500);
console.log(prod1.discountedPrice);
// Result: 1200



/*
============================================================
CHALLENGE 3
------------------------------------------------------------
QUESTION:
You have a BankAccount class.
- Constructor receives (owner, balance).
- Add a method deposit(amount).
- Add a method withdraw(amount) but:
  if amount > balance → do nothing.
- Create an instance with balance 1000.
- Withdraw 1500.
- Log the balance.

------------------------------------------------------------
ANSWER:
*/

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
}

let acc1 = new BankAccount("Hassan", 1000);
acc1.withdraw(1500);
console.log(acc1.balance);
// Result: 1000



/*
============================================================
CHALLENGE 4
------------------------------------------------------------
QUESTION:
You have a Device class.
- Create an instance.
- Use instanceof to check if the object is:
  1) Device
  2) Object
  3) Array
- Log all results.

------------------------------------------------------------
ANSWER:
*/

class Device {}

let d1 = new Device();

console.log(d1 instanceof Device);
console.log(d1 instanceof Object);
console.log(d1 instanceof Array);
// Result:
// true
// true
// false



/*
============================================================
CHALLENGE 5
------------------------------------------------------------
QUESTION:
You have a primitive string and a String object.
- Create:
  let a = "Hello";
  let b = new String("Hello");
- Check:
  1) typeof a
  2) typeof b
  3) a instanceof String
  4) b instanceof String
  5) a.constructor === String
- Log all results.

------------------------------------------------------------
ANSWER:
*/

let a = "Hello";
let b = new String("Hello");

console.log(typeof a);
console.log(typeof b);
console.log(a instanceof String);
console.log(b instanceof String);
console.log(a.constructor === String);
// Result:
// "string"
// "object"
// false
// true
// true

/*
============================================================
END OF CHALLENGES
============================================================
*/
