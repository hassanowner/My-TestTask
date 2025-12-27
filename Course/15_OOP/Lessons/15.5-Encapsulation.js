/*
====================================================================
JavaScript OOP – Encapsulation Explained (Private Fields)
====================================================================

------------------------------------------------------------
** TOPICS OVERVIEW (Names + Programming Purpose) **
------------------------------------------------------------

• Encapsulation
  - One of the core principles of Object-Oriented Programming (OOP).
  - It means wrapping data (properties) and behavior (methods) together.
  - It controls access to internal data.
  - It protects data from illegal or unintended access.
  - It hides complex implementation details.
  - It reduces human errors.
  - It makes applications more flexible, manageable, and easier to maintain.

• Public Fields
  - By default, class properties in JavaScript are public.
  - They can be accessed and modified directly from outside the class.

• Private Fields
  - Declared using `#`.
  - Accessible only inside the class.
  - Cannot be accessed directly from outside.

• Getter Methods
  - Public methods used to safely access private data.
  - Allow controlled interaction with private fields.

------------------------------------------------------------
1) PUBLIC VS PRIVATE (CONCEPT)
------------------------------------------------------------*/

//Public property example:

class Test {
  value = 10;
}

let t = new Test();

/*
Result:
t.value => 10
Explanation:
- value is public and accessible directly.
*/

//Private property example: 
class Test {
  #value = 10;
}

/*
Result:
- #value cannot be accessed from outside the class.
- Direct access will cause an error.
*/

/*
------------------------------------------------------------
2) ENCAPSULATION – SIMPLE EXAMPLE
------------------------------------------------------------*/

class User {
  #salary;

  constructor(salary) {
    this.#salary = salary;
  }

  getSalary() {
    return this.#salary;
  }
}

let u1 = new User(5000);

/*
Result:
u1.getSalary() => 5000
but you can't use u1.#salary .
Explanation:
- salary is hidden.
- Access is only through a method.
*/

/*
------------------------------------------------------------
3) ENCAPSULATION – MEDIUM EXAMPLE
------------------------------------------------------------*/

class User {
  #salary;

  constructor(username, salary) {
    this.username = username;
    this.#salary = salary;
  }

  getSalaryAfterTax() {
    return this.#salary * 0.8; 
  }
}

let u2 = new User("Ali", 6000);

/*
Result:
u2.getSalaryAfterTax() => 4800
Explanation:
- Internal data is protected.
- Logic is applied without exposing salary directly.
*/

/*
------------------------------------------------------------
4) ENCAPSULATION – ADVANCED EXAMPLE (YOUR CODE)
------------------------------------------------------------*/

class User {
  // Private property
  #e;

  constructor(id, username, eSalary) {
    // Public properties
    this.i = id;
    this.u = username;

    // Private property
    this.#e = eSalary;
  }

  // Public method to access private data
  getSalary() {
    return parseInt(this.#e);
  }
}

let userOne = new User(100, "Ali", "500 Dollar");

/*
Results:
userOne.u => "Ali"
userOne.getSalary() => 500
userOne.getSalary() * 0.3 => 150

Explanation:
- #e is a private field and cannot be accessed directly.
- getSalary() safely exposes processed data.
- parseInt extracts the numeric value only.
*/

/*
------------------------------------------------------------
6) IMPORTANT NOTES
------------------------------------------------------------

• Private fields start with `#`.
• They are accessible only inside the class.
• Direct access like userOne.#e will throw an error.
• Encapsulation protects sensitive data.
• Logic can be changed internally without affecting external code.

------------------------------------------------------------
FINAL SUMMARY
------------------------------------------------------------

• Encapsulation hides internal details.
• Private fields prevent illegal access.
• Getter methods provide controlled access.
• Code becomes safer and easier to maintain.
• Encapsulation is essential for clean and scalable OOP design.

====================================================================
*/
