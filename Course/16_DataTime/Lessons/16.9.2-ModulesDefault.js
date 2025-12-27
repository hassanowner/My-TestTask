/******************************************************************
 TOPICS OVERVIEW
******************************************************************/

/*
1) Default Export in ES Modules
--------------------------------
Programming Benefit:
- Allows exporting ONE main value from a module.
- The importer can choose ANY name for the imported value.
- Makes code cleaner when a module has a single main responsibility.

What it does:
- Exports a value (function, class, object, variable) as the default export.
- Imported without curly braces {}.

---------------------------------------------------------------

2) Default Parameters in JavaScript
------------------------------------
Programming Benefit:
- Prevents undefined values.
- Makes functions safer and cleaner.
- Reduces the need for manual checks inside functions.

What it does:
- Assigns default values to function parameters if no argument is passed.
*/




/******************************************************************
 TOPIC 1: DEFAULT EXPORT IN ES MODULES
******************************************************************/

/* ===============================================================
 Example 1 (VERY SIMPLE)
================================================================ */

// file: math.js
export default 10; 
// Default export of a number

// file: main.js
import value from "./math.js";
// You can name it anything (value, num, x, etc.)

console.log(value);

/*
OUTPUT:
10
*/

/* ===============================================================
 Example 2 (MEDIUM)
================================================================ */

// file: greet.js
export default function greet(name) {
  return `Hello ${name}`;
}
// Default export of a function

// file: main.js
import greetUser from "./greet.js";
// Name is flexible

console.log(greetUser("Hassan"));

/*
OUTPUT:
Hello Hassan
*/

/* ===============================================================
 Example 3 (ADVANCED)
================================================================ */

// file: User.js
export default class User {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }
}

// file: main.js
import Account from "./User.js";
// Importing default class with a custom name
// Default => `Account` 
const user1 = new Account("Ali", 100);

console.log(user1.deposit(50));

/*
OUTPUT:
150
*/

/******************************************************************
 TOPIC 2: DEFAULT PARAMETERS IN JAVASCRIPT
******************************************************************/

/* ===============================================================
 Example 1 (VERY SIMPLE)
================================================================ */

function sayHello(name = "Guest") {
  console.log(`Hello ${name}`);
}

sayHello();
sayHello("Hassan");

/*
OUTPUT:
Hello Guest
Hello Hassan
*/

/* ===============================================================
 Example 2 (MEDIUM)
================================================================ */

function calculatePrice(price, tax = 0.1) {
  return price + price * tax;
}

console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2));

/*
OUTPUT:
110
120
*/

/* ===============================================================
 Example 3 (ADVANCED)
================================================================ */

function createUser(
  username,
  role = "user",
  isActive = true
) {
  return {
    username,
    role,
    isActive,
  };
}

const userA = createUser("Hassan");
const userB = createUser("Admin", "administrator", false);

console.log(userA);
console.log(userB);

/*
OUTPUT:
{ username: "Hassan", role: "user", isActive: true }
{ username: "Admin", role: "administrator", isActive: false }
*/

/******************************************************************
 SUMMARY
******************************************************************/

/*
- Default Export:
  Used when a module has ONE main thing to export.

- Default Parameters:
  Used to protect functions from missing arguments
  and write cleaner, safer code.
*/
