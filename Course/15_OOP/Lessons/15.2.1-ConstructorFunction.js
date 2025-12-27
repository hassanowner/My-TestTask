/*
============================================================
Constructor Function in JavaScript (OOP – Detailed Explanation)
============================================================

1) What Is a Constructor Function?
---------------------------------
A Constructor Function is a special type of function used to create multiple
objects that share the same structure (properties and behavior).

- It works like a blueprint.
- It prevents code repetition.
- By convention, its name starts with a Capital Letter.

Real-life analogy:
- Think of a factory that produces cars.
- Every car has the same structure (engine, color),
  but different values.

------------------------------------------------------------

2) Why Do We Need Constructor Functions?
----------------------------------------
Without constructor functions:
- You create every object manually.
- Code becomes repetitive and hard to maintain.

With constructor functions:
- One function can create unlimited objects.
- Code becomes cleaner and scalable.
- This is a core idea of OOP.

------------------------------------------------------------

3) The `this` Keyword
--------------------
- `this` refers to the object being created.
- Each time the constructor is called, `this` points
  to a new object.

Real-life analogy:
- `this` means: "this specific item".

------------------------------------------------------------

4) The `new` Keyword
--------------------
When using `new`:
1. A new empty object is created.
2. `this` refers to that object.
3. Properties are added to it.
4. The object is returned automatically.

Important:
- Without `new`, the constructor will not work correctly.

-----------------------------------------------------------

//// * * Constructor Function Examples * * /////
------------------------------------------------------------
Example 1: Simple Example (One Variable)
------------------------------------------------------------
Explanation:
- Person is a constructor function.
- It receives one parameter: name.
- this.name creates a property called name for the object.
- new creates a new object and assigns the value to it.
- personOne is an instance of Person.
- Each instance has its own name value.
0
Real-life analogy:
- A name tag that contains only one piece of information.

*/

// Example 1: Simple Example (One Variable)
function Person(name) {
  this.name = name;
}

let personOne = new Person("Ali");
console.log(personOne.name); // Ali

/* 
--------------------------------------------------------------------------
** Explanation of `this` in Constructor Function with Custom Property Name
=> Step-by-Step
--------------------------------------------------------------------------

A) Constructor Function:
- `Person` is a constructor function used to create new objects.
- Each object created by `new Person(...)` gets its own properties.

B) The `this` Keyword:
- Inside the function, `this` refers to the object being created.
- Writing `this.na = name;` assigns the value of the parameter `name` to a new property called `na` in the object.
- You can choose any property name, like `na`, `n`, or `username` instead of `name` depending on your preference.

C) The `new` Keyword:
- `let personOne = new Person("Ali");` does several things:
  1. Creates a new empty object.
  2. Sets `this` inside `Person` to point to that object.
  3. Adds the property `na` with the value `"Ali"` to the new object.
  4. Returns the object and assigns it to `personOne`.     */
  
// Code from A,B,C : ↑↑↑
function Person(name) {
  this.na = name; // Here the property name is changed from 'name' to 'na'
}
let personOne = new Person("Ali");
console.log(personOne.na); // Ali   

/*
D) Accessing the Property:
- `console.log(personOne.na);` prints `"Ali"`.
- Each instance of `Person` has its own `na` value.

Real-life Analogy:
- Think of `Person` as a blueprint for a name tag.
- `this` is the specific tag being created, and `this.na` is the name written on that tag.

-----------------------------------------------------------
Summary:
- `this` inside a constructor always refers to the object being created.
- You can change the property name to anything you like, not necessarily `name`.
- Using `new` is essential to create a new instance and bind `this`.
- Each object created has its own independent properties.
============================================================
*/

/*
------------------------------------------------------------
Example 2: Advanced Example (two Variables)
------------------------------------------------------------
Explanation:
- Employee is a constructor function.
- It receives three parameters.
- Each parameter is stored as a property using this.
- All objects share the same structure.
- Each object has its own independent values.

Real-life analogy:
- An employee file that stores ID, name, and salary. */
  
// Example 2: Advanced Example (Three Variables)

function Employee(id, username) {
  this.id = id;
  this.username = username;
  // The salary is not included
}

// Creating only two employees
let employeeOne = new Employee(1, "Hassan");
let employeeTwo = new Employee(2, "Sara");

console.log(employeeOne.id);       // 1
console.log(employeeOne.username); // Hassan

console.log(employeeTwo.id);       // 2
console.log(employeeTwo.username); // Sara

/*
------------------------------------------------------------
Key Concepts Explained
------------------------------------------------------------

- Constructor Function:
  A special function used to create objects.

- this:
  Refers to the current object being created.

- new:
  Creates a new object and links it to the constructor.

------------------------------------------------------------
Summary
------------------------------------------------------------
- Example 1 shows the simplest constructor with one variable.
- Example 2 shows how multiple variables are grouped together.
- Constructor functions help organize data.
- This is a core concept of Object-Oriented Programming (OOP).

============================================================ */
  

/*
5) Practical Example (NEW CODE)
------------------------------- */

function Product(id, name, basePrice) {
  this.id = id;                 // Product ID
  this.name = name;             // Product Name
  this.price = basePrice + 50;  // Price after adding tax
}

let productOne = new Product(1, "Laptop", 1000);
let productTwo = new Product(2, "Phone", 600);
let productThree = new Product(3, "Tablet", 400);

console.log(productOne.id);     // 1
console.log(productOne.name);   // Laptop
console.log(productOne.price);  // 1050

console.log(productTwo.id);     // 2
console.log(productTwo.name);   // Phone
console.log(productTwo.price);  // 650

console.log(productThree.id);   // 3
console.log(productThree.name); // Tablet
console.log(productThree.price);// 450

------------------------------------------------------------
  
/*
6) Explanation of Constructor Parts
----------------------------------
- function Product(...)
  Defines the constructor blueprint.

- this.id = id
  Attaches data to the object.

- this.price = basePrice + 50
  Adds logic inside the constructor.

------------------------------------------------------------

7) Object Instances
-------------------
- Each object created with `new` is an instance.
- All instances share the same structure.
- Each instance has its own data.

------------------------------------------------------------

8) Manual Objects vs Constructor Function
-----------------------------------------
Manual creation:
- Repetitive
- Hard to update
- Not scalable

Constructor function:
- One definition
- Easy maintenance
- Clean OOP design

------------------------------------------------------------

9) Relation to OOP Concepts
--------------------------
- Encapsulation:
  Data and logic are grouped together.

- Reusability:
  Same constructor reused many times.

- Organization:
  Clear and predictable structure.

------------------------------------------------------------

10) Final Summary
----------------
- Constructor Functions are used to create objects.
- `this` refers to the current object.
- `new` is essential.
- Logic can be included inside constructors.
- This approach is a foundation of OOP in JavaScript.

============================================================
*/
