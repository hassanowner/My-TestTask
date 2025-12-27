/*
====================================================================
JavaScript OOP – Updating Properties & Built-in Constructors Explained
====================================================================

------------------------------------------------------------
** TOPICS OVERVIEW (Names + Programming Purpose) **
------------------------------------------------------------

• Updating Properties
  - Modifying object data after the object is created.
  - Helps keep objects dynamic and changeable.
  - Common in real applications (edit user info, update settings).

• Instance Methods
  - Methods that belong to objects created from a class.
  - Used to update or interact with object properties.

• Built-in Constructors
  - JavaScript provides built-in constructor functions like:
    String, Number, Boolean, Array, Object.
  - They create object wrappers around primitive values.

• typeof vs instanceof
  - typeof checks the data type.
  - instanceof checks if an object was created from a constructor.

• constructor Property
  - Points to the function that created the object.

------------------------------------------------------------
1) UPDATING PROPERTIES
------------------------------------------------------------*/

//Example 1 (Very Simple):

class User {
  constructor(name) {
    this.name = name;
  }

  updateName(newName) {  //updateName is a method 
    this.name = newName;
  }
}

let u1 = new User("Ali");
u1.updateName("Ahmed"); //updateName (newName = "Ahmed")

/*
Result:
u1.name => "Ahmed"
Explanation:
- The method modifies the existing property.
*/

------------------------------------------------------------

//Example 2 (Medium):

class User {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }

  updateAge(newAge) {
    this.age = newAge;
  }
}

let u2 = new User("Hassan", 20);
u2.updateAge(25);

/*
Result:
u2.age => 25
Explanation:
- Object data is updated after creation.
*/

------------------------------------------------------------

//Example 3 (Advanced):

class User {
  constructor(id, username, salary) {
    this.id = id;
    this.username = username;
    this.salary = salary;
  }

  updateName(newName) {
    this.username = newName;
  }

  increaseSalary(amount) {
    this.salary += amount;
  }
}

let u3 = new User(100, "Elzero", 5000);
u3.updateName("Mohamed");
u3.increaseSalary(1000);

/*
Result:
u3.username => "Mohamed"
u3.salary   => 6000
Explanation:
- Multiple updates using different methods.
*/

/*
------------------------------------------------------------
2) BUILT-IN CONSTRUCTORS
------------------------------------------------------------*/

//Example 1:

let str1 = "Hello";
let str2 = new String("Hello");

/*
Explanation:
- str1 is a primitive string.
- str2 is an object created by String constructor.
*/

------------------------------------------------------------

//Example 2 :

console.log(typeof str1);
console.log(typeof str2);

/*
Result:
typeof str1 => "string"
typeof str2 => "object"
Explanation:
- Primitive vs object wrapper.
*/

------------------------------------------------------------

//Example 3 (Advanced):

console.log(str1 instanceof String);
console.log(str2 instanceof String);

console.log(str1.constructor === String);
console.log(str2.constructor === String);

/*
Results:
str1 instanceof String => false
str2 instanceof String => true

str1.constructor === String => true
str2.constructor === String => true

Explanation:
- instanceof checks object inheritance.
- constructor shows which function created the value.
- Primitive values are auto-wrapped when needed.
*/

/*
------------------------------------------------------------
3) IMPORTANT NOTES
------------------------------------------------------------

• Updating properties is done through methods to keep logic organized.
• Built-in constructors create object wrappers.
• Avoid using new String(), new Number() unless necessary.
• Use primitives for better performance.

------------------------------------------------------------
FINAL SUMMARY
------------------------------------------------------------

• Objects can be updated after creation using methods.
• Methods allow safe and controlled changes.
• JavaScript has built-in constructors.
• typeof, instanceof, and constructor help inspect values.
• Understanding these concepts improves OOP mastery.

====================================================================
*/
