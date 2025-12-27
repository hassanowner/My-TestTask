/*
====================================================================
JavaScript OOP – Static Properties and Static Methods (Class Level)
====================================================================

------------------------------------------------------------
** TOPICS OVERVIEW (Names + Programming Purpose) **
------------------------------------------------------------

• Static Propertied 
  - Properties that belong to the class itself, not to its instances.
  - Used to store shared data between all objects.
  - Accessed using the class name, not object name.

• Static Methods
  - Methods that belong to the class itself.
  - Used for utility, counters, helpers, or general logic.
  - Cannot be accessed using object instances.

• Instance vs Class Members
  - Instance members belong to each object.
  - Static members belong to the class.

/*
------------------------------------------------------------
1) STATIC PROPERTY
------------------------------------------------------------*/

//Example 1 (Very Simple):

class Counter {
  static value = 0;
}

/*
Result:
Counter.value => 0
Explanation:
- value belongs to the class, not to objects.
*/

------------------------------------------------------------

//Example 2 (Medium):

class Counter {
  static value = 0;

  constructor() {
    Counter.value++;
  }
}

let c1 = new Counter();
let c2 = new Counter();

/*
Result:
Counter.value => 2  // (c1 ,c2) two time
Explanation:
- The static property counts created objects.
*/

------------------------------------------------------------

//Example 3 (Advanced):

class User {
  static count = 0;

  constructor(name) {
    this.name = name;
    User.count++;
  }
}

/*
Result:
- Every new object increases User.count
- Used to track total instances
*/

/*
------------------------------------------------------------
2) STATIC METHODS
------------------------------------------------------------*/

//Example 1 (Very Simple):

class Helper {
  static sayHi() {
    return "Hi";
  }
}

/*
Result:
Helper.sayHi() => "Hi" // you must ne use `class` to use the `static element` 
*/

------------------------------------------------------------

//Example 2 (Medium):

class Helper {
  static sum(a, b) {
    return a + b;
  }
}

/*
Result:
Helper.sum(5, 3) => 8
*/

------------------------------------------------------------

//Example 3 (Advanced):

class User {
  static count = 0;

  constructor(username) {
    this.username = username;
    User.count++;  // you can use static element inside constructor, but by `class`
  }

  static countMembers() {
    return `${this.count} Members Created`;
  }
}

/*
Result:
User.countMembers() => "X Members Created"
*/

/*
------------------------------------------------------------
3) INSTANCE VS STATIC ACCESS
------------------------------------------------------------

Important Notes:
- Static properties and methods are accessed using the class name.
- Instance objects cannot access static members. */

Example:
User.count        // Correct
userOne.count     // Undefined

User.sayHello()   // Correct
userOne.sayHello()// Error

/*
------------------------------------------------------------
4) FULL CODE EXPLANATION (YOUR CODE)
------------------------------------------------------------*/

class User {
  // Static property shared by the class
  static count = 0;

  constructor(id, username, salary) {
    // Instance properties
    this.i = id;
    this.u = username;
    this.s = salary;

    // Increase static counter every time an object is created
    User.count++;
  }

  // Static method
  static sayHello() {
    return `Hello From Class`;
  }

  // Static method that uses static property
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne = new User(300, "Mariam", 1000);
let userTwo = new User(301, "Mohamed", 1000);
let userThree = new User(302, "Ali", 1000);

/*
Results:
userOne.u => "Mariam"
userTwo.u => "Mohamed"

userOne.count => undefined
User.count => 3

User.sayHello() => "Hello From Class"
User.countMembers() => "3 Members Created"
*/

/*
------------------------------------------------------------
FINAL SUMMARY
------------------------------------------------------------

• Static properties belong to the class itself.
• Static methods are used for shared logic.
• Instances cannot access static members.
• Useful for counters, helpers, and global class logic.
• Static members improve structure and clarity in OOP.

====================================================================
*/
