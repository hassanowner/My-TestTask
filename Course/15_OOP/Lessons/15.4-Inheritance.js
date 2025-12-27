/*
====================================================================
JavaScript OOP – Class Inheritance Explained (extends & super)
====================================================================

------------------------------------------------------------
** TOPICS OVERVIEW (Names + Programming Purpose) **
------------------------------------------------------------

• Inheritance
  - A core concept in Object-Oriented Programming (OOP).
  - Allows a class to inherit properties and methods from another class.
  - Helps reuse code and avoid duplication.
  - Creates a clear hierarchy between classes.

• Parent Class (Base Class)
  - The main class that contains common properties and methods.
  - Other classes can inherit from it.

• Derived Class (Child Class)
  - A class that inherits from another class.
  - Can use parent properties and methods.
  - Can add new properties or methods.

• extends Keyword
  - Used to create a child class from a parent class.

• super Keyword
  - Used inside the child constructor.
  - Calls the parent constructor.
  - Required before using `this` in a child class.


------------------------------------------------------------
1) PARENT CLASS
------------------------------------------------------------*/

//Example 1 (the classic method code):

class User {
  constructor(username) {
    this.username = username;
  }
}

/*
Result:
- User is a base class.
- It stores common data.
*/

------------------------------------------------------------
  
//Example 2 (for explaining what we can make in object):

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }

  sayHello() {
    return `Hello ${this.u}`;
  }
}

/*
Explanation:
- User is the parent class.
- It defines shared properties (id, username).
- It defines a shared method (sayHello).
*/

/*
------------------------------------------------------------
2) CHILD CLASS (INHERITANCE)
------------------------------------------------------------*/

//Example 1 (Simple):

class Admin extends User {}

/*
Result:
- Admin inherits everything from User.
*/

------------------------------------------------------------

//Example 2 (Medium):

class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.permissions = permissions;
  }
}

/*
Explanation:
- extends User → Admin inherits from User.
- super(id, username) calls the parent constructor.
*/

------------------------------------------------------------

//Example 3 (Advanced):

class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

/*
Result:
- Admin objects have:
  id (from User)
  username (from User)
  permissions (own property)
- Admin can use sayHello() from User.
*/

/*
------------------------------------------------------------
3) MULTI-LEVEL INHERITANCE
------------------------------------------------------------*/

//Example (what is Inheritance):

// Parent
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

//  Derived Class "from User"
class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

// Derived Class "from Admin (that inheritance from User)" 
class Supermethod extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

/*
Explanation:
- Supermethod inherits from Admin.
- Admin inherits from User.
- Superman has access to:
  - User properties & methods
  - Admin properties
  - Its own properties
*/

/*
------------------------------------------------------------
5) USING THE CLASSES ()
------------------------------------------------------------*/

// Parent
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

//  Derived Class "from User"
class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

// Derived Class "from Admin (that inheritance from User)" 
class Supermethod extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userOne = new User(100, "Mona");
let adminOne = new Admin(101, "Daniel", 1);

/*
Results:
userOne.u => "Mona"
userOne.sayHello() => "Hello Mona"

adminOne.i => 101
adminOne.u => "Daniel"
adminOne.p => 1
adminOne.sayHello() => "Hello Daniel"
*/

/*
------------------------------------------------------------
6) IMPORTANT NOTES **
------------------------------------------------------------

• Child classes automatically inherit parent methods.
• super() must be called before using `this`.
• Inheritance reduces code duplication.
• Multi-level inheritance is allowed in JavaScript.
• Objects can access methods defined in parent classes.

------------------------------------------------------------
FINAL SUMMARY
------------------------------------------------------------

• Inheritance allows classes to share behavior.
• Parent classes store common logic.
• Child classes extend and customize behavior.
• extends creates the relationship.
• super connects child constructors to parents.
• This is a powerful OOP feature for scalable applications.

====================================================================
*/
