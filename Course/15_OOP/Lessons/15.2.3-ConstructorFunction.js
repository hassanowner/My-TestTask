/*
====================================================================
JavaScript OOP Topics Explained (Class, Constructor, Properties, Methods)
====================================================================

------------------------------------------------------------
** TOPICS OVERVIEW (Names + Programming Benefits) **
------------------------------------------------------------

• Class
  - A class is a blueprint used to create objects.
  - It helps organize code and follow Object-Oriented Programming (OOP).
  - It replaces constructor functions in modern JavaScript (ES6).

• Constructor
  - A special method that runs automatically when a new object is created.
  - Used to initialize object properties.

• Properties
  - Variables that belong to an object.
  - They store data related to that object.

• Methods
  - Functions that belong to a class or object.
  - They define behaviors (actions).

• Default Values
  - Used to assign a fallback value when no value is provided.

• Conditional Logic in Constructor
  - Logic inside the constructor to modify values automatically.

• Instance Methods vs Class Methods
  - Methods inside constructor vs methods defined outside constructor.

------------------------------------------------------------
1) CLASS
------------------------------------------------------------*/

//Example :

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    return `${this.name} is ${this.age} years old`;
  }
}

let p = new Person("Sara", 25);

/*
Result:
p.info() => "Sara is 25 years old"
*/

/*
------------------------------------------------------------
2) CONSTRUCTOR
------------------------------------------------------------*/

//Example 1 (Very Simple):

class User {
  constructor() {
    this.role = "Guest";
  }
}

let u1 = new User();

/*
Result:
u1.role => "Guest"
*/

------------------------------------------------------------

//Example 2 (Medium):

class User {
  constructor(username) {
    this.uname = username;
  }
}

let u2 = new User("Hassan");

/*
Result:
u2.uname => "Hassan"
*/

------------------------------------------------------------

//Example 3 (Advanced):

class User {
  constructor(username, salary) {
    this.username = username;
    this.salary = salary < 5000 ? salary + 500 : salary;
  }
}

let u3 = new User("Ali", 4000);

/*
Result:
u3.salary => 4500
*/

/*
------------------------------------------------------------ 
3) PROPERTIES
------------------------------------------------------------*/

//Example 1:

class Car {
  constructor(color, price) {
    this.color = color;
    this.price = price;
  }
}

let c1 = new Car("Blue", 20000);

/*
Result:
c1.price => 20000
*/

------------------------------------------------------------

//Example 2 (Advanced):

class Car {
  constructor(color, basePrice) {
    this.color = color;
    this.price = basePrice + 1000;
    this.available = true;
  }
}

let c2 = new Car("Black", 30000);

/*
Result:
c2.price => 31000
c2.available => true
*/

/*
------------------------------------------------------------
4) METHODS
------------------------------------------------------------*/

//Example 1 (Simple):

class Test {
  sayHi() {
    return "Hi";
  }
}

let t1 = new Test();

/*
Result:
t1.sayHi() => "Hi"
*/

------------------------------------------------------------

//Example 2 (Medium):

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {  // method (function) inside User
    return `Hello ${this.name}`;
  }
}

let u4 = new User("Ali");

/*
Result:
u4.greet() => "Hello Ali"
*/

------------------------------------------------------------

//Example 3 (Advanced):

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

let u5 = new User("Hassan", 5000);
u5.increaseSalary(1000);

/*
Result:
u5.getInfo() => "User: Hassan, Salary: 6000"
*/

/*
------------------------------------------------------------
5) METHODS INSIDE CONSTRUCTOR vs OUTSIDE
------------------------------------------------------------*/

class User {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;

    // Method inside constructor (created per object)
    this.msg = function () {
      return `Hello ${this.name} from inside constructor`;
    };
  }

  // Method outside constructor (shared via prototype)
  writeMsg() {
    return `Hello ${this.name} from outside constructor`;
  }
}

let u6 = new User("Lima", 5000);

/*
Results:
u6.msg() => "Hello Lima from inside constructor"
u6.writeMsg() => "Hello Lima from outside constructor"

Note:
- msg() is recreated for every object.
- writeMsg() is shared between all objects (better performance).
*/

/*
------------------------------------------------------------
6) DEFAULT VALUES
------------------------------------------------------------*/

class User {
  constructor(username) {
    this.username = username || "Unknown";
  }
}

let u7 = new User("");
let u8 = new User("Ali");

/*
Results:
u7.username => "Unknown"
u8.username => "Ali"
*/

/*
------------------------------------------------------------
FINAL SUMMARY
------------------------------------------------------------

• Classes organize code using OOP.
• Constructors initialize object data.
• Properties store object information.
• Methods define object behavior.
• Logic inside constructors automates rules.
• Methods outside constructor are more efficient.
• This approach builds clean, scalable applications.

====================================================================
*/
