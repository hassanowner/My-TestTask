/*
===========================================================================
Comprehensive Explanation of JavaScript OOP Topics
===========================================================================

Topics Covered:
1) Constructor Function (New Syntax using Class)
2) Creating Instances with `new`
3) Using Properties inside Constructor
4) `instanceof` Operator
5) `constructor` Property

Purpose:
- Constructor functions (or classes) allow you to create multiple objects 
  with the same structure and behavior.
- `new` is used to create a new object instance from a class.
- Properties store the data of each object.
- `instanceof` checks if an object belongs to a specific class.
- `constructor` identifies which constructor function created the object.

===========================================================================
1) Constructor Function (Class Syntax)
===========================================================================*/

//Simple Example:
class Person {
  constructor(name) {
    this.name = name; // property 'name' for the object
  }
}

let personOne = new Person("Ali");
console.log(personOne.name); // Ali
// Result: Prints "Ali", a simple constructor with one property

//Medium Example:
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

let carOne = new Car("Toyota", "Red");
console.log(carOne.brand); // Toyota
console.log(carOne.color); // Red
// Result: Prints brand and color, constructor with two properties

//Advanced Example:
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price + 100; // Adds logic to modify the property
  }
}

let productOne = new Product(1, "Laptop", 1000);
console.log(productOne.id);    // 1
console.log(productOne.name);  // Laptop
console.log(productOne.price); // 1100
// Result: Constructor with logic modifying one property during creation

/*
===========================================================================
2) Creating Instances with `new`
===========================================================================*/

// Example:
class BankAccount {
  constructor(accountNumber, owner, balance) {
    this.accNum = accountNumber; //make a name inside constructor
    this.owner = owner;
    this.bal = balance;
  }

  deposit(amount) { // this is a method inside `BankAccount`
    this.bal += amount;
  }
}

let myAccount = new BankAccount(12345, "Ali", 1000);
myAccount.deposit(500); // => to amount = 500 
console.log(myAccount.bal); // 1500
// Result: Instance with method affecting the property

/*
===========================================================================
3) Using Properties inside Constructor
===========================================================================*/

// Example:
class Device {
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.price = price;
    this.discountedPrice = price * 0.9; // property calculated inside constructor
  }
}

let deviceOne = new Device("Phone", "X1", 1000);
console.log(deviceOne.discountedPrice); // 900
// Result: Advanced property logic inside constructor

/*
===========================================================================
4) `instanceof` Operator
===========================================================================*/

//Simple Example:
class Animal {}
let dog = new Animal();
console.log(dog instanceof Animal); // true
// Result: Checks if dog is an instance of Animal

//Medium Example:
class Vehicle {}
let car = new Vehicle();
console.log(car instanceof Vehicle); // true
console.log(car instanceof Object);  // true
// Result: Confirms inheritance hierarchy

//Advanced Example:
class Product {}
let laptop = new Product();
console.log(laptop instanceof Product); // true
console.log(laptop instanceof Object);  // true
console.log(laptop instanceof Array);   // false
// Result: Shows instanceof can differentiate unrelated types

/*
===========================================================================
5) `constructor` Property
===========================================================================*/

//Simple Example:
class Person {}
let p = new Person();
console.log(p.constructor === Person); // true
// Result: Identifies which constructor created the object

//Medium Example:
class Car {}
let carone = new Car();
console.log(carone.constructor === Car);    // true
console.log(carone.constructor === Object); // false
// Result: Confirms the object's constructor reference

//Advanced Example:
class Device {}
let tablet = new Device();
console.log(tablet.constructor === Device); // true
console.log(tablet.constructor.name);       // "Device"
// Result: Can access the constructor name dynamically

/*
===========================================================================
End of Explanation
===========================================================================
*/
