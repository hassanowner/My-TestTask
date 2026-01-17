/*
PSEUDOCLASSICAL OBJECT ORIENTATION (JAVASCRIPT)
===================================================

This is ONE SINGLE SQUARE FILE explaining pseudoclassical object
orientation clearly, step by step, with rules and examples.

===================================================

1) WHAT IS PSEUDOCLASSICAL OBJECT ORIENTATION?
--------------------------------------------
Pseudoclassical object orientation is a way of writing JavaScript that
*looks and feels* like class-based programming (such as Java or C++),
even though JavaScript is actually prototype-based.

Key idea:
- JavaScript uses constructor FUNCTIONS instead of real classes
- Objects are created using the `new` keyword
- Inheritance is simulated manually

Rule:
Pseudoclassical OOP is an abstraction layer built on top of prototypes.

===================================================

2) CONSTRUCTOR FUNCTIONS
-----------------------
Constructor functions are normal JavaScript functions.
They become constructors ONLY when called with `new`.

Naming convention:
- UpperCamelCase (Animal, Dog, Person)

Inside a constructor:
- `this` refers to the newly created object

Example: */
function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
}

/* Rule:
Always call constructor functions using `new`.

===================================================


3) CREATING OBJECT INSTANCES
---------------------------
Calling a constructor function with `new` creates a new object
instance and assigns values to its properties.

Example: */
const fish = new Animal('Fishy', 'Green', 2);

fish.name;  // Fishy
fish.color; // Green
fish.age;   // 2

/*
What `new` does internally:
1) Creates a new empty object
2) Links it to the constructor’s prototype
3) Binds `this` to the new object
4) Returns the new object

===================================================


4) DEFINING METHODS USING THE PROTOTYPE
--------------------------------------
If methods are defined inside the constructor, they are duplicated
for every instance. To avoid this, shared methods are placed on the
constructor’s prototype.

Example: */
Animal.prototype.eat = function(food) {
  console.log('Chow chow, ' + food + '!');
};

Animal.prototype.drink = function(drink) {
  console.log('Mmmmmmh, ' + drink + '!');
};

const fish = new Animal('Fishy', 'Green', 2);
fish.eat('algae');
fish.drink('water');

/* Rule:
Shared behavior belongs on the prototype, not inside the constructor.

===================================================


5) INHERITANCE IN PSEUDOCLASSICAL OOP
-----------------------------------
Inheritance is created manually by linking prototypes.
This is more complex than prototypical inheritance but mimics
class-based inheritance.

We explain it step by step.

===================================================

STEP 1: DEFINE THE SUPERCLASS CONSTRUCTOR
---------------------------------------- */
function Animal(name, color, age) {
  this.name = name;
  this.color = color;
  this.age = age;
}

/* ===================================================

STEP 2: ADD METHODS TO THE SUPERCLASS PROTOTYPE
----------------------------------------------- */
Animal.prototype.eat = function(food) {
  console.log('Chow chow, ' + food);
};

Animal.prototype.drink = function(drink) {
  console.log('Mmmmmmh, ' + drink);
};

/* ===================================================

STEP 3: DEFINE THE SUBCLASS CONSTRUCTOR
-------------------------------------- */
function Dog(name, color, age, type) {
  Animal.call(this, name, color, age);
  this.type = type;
}

Explanation:
Animal.call(this, ...) copies Animal’s properties
into the Dog instance.

/* ===================================================

STEP 4: LINK THE PROTOTYPES (INHERITANCE)
----------------------------------------
Dog.prototype = new Animal();

What this does:
- Creates a new object
- Sets Animal.prototype as its prototype
- Assigns it to Dog.prototype

===================================================

STEP 5: FIX THE CONSTRUCTOR REFERENCE
------------------------------------ */
Dog.prototype.constructor = Dog;

Why this is needed:
- Step 4 overwrites the constructor reference
- This restores the correct link

/* ===================================================

STEP 6: ADD SUBCLASS-SPECIFIC METHODS
------------------------------------ */
Dog.prototype.bark = function() {
  console.log('Woof woof');
};

IMPORTANT RULE:
Always add methods AFTER redefining the prototype.

/* =================================================== 

6) CREATING A SUBCLASS INSTANCE
------------------------------- */
const bello = new Dog('Bello', 'White', 2, 'Maltese');

bello.bark();   // Woof woof
bello.eat('meat');
bello.drink('water');

Prototype chain:
bello → Dog.prototype → Animal.prototype → Object.prototype

/* ===================================================

7) WHY THIS STYLE IS CALLED "PSEUDOCLASSICAL"
---------------------------------------------
- Looks like class-based inheritance
- Uses constructors and subclasses
- But internally still relies on prototypes

Modern JavaScript replaces this pattern with `class` syntax
for readability, not because the model changed.

===================================================

FINAL SUMMARY
-------------
- Pseudoclassical OOP simulates class-based programming
- Constructor functions act like classes
- Prototypes store shared methods
- Inheritance is created manually
- Understanding this explains how JavaScript classes work internally

END OF SINGLE SQUARE FILE
=================================================== */
