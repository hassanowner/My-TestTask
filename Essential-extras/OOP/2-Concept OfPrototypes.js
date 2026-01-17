/* THE CONCEPT OF PROTOTYPES IN JAVASCRIPT
=====================================

This is ONE SINGLE SQUARE FILE explaining prototypical object orientation
from start to finish, with concepts, rules, and examples.

=====================================

1) WHAT IS A PROTOTYPE?
----------------------
In JavaScript, almost every object is based on another object called its
prototype. A prototype is simply another object from which properties
and methods are inherited.

Important notes:
- Objects inherit from OBJECTS, not from classes
- Object is the root of almost all objects
- Objects created with Object.create(null) have no prototype

Rule:
Every JavaScript object has an internal [[Prototype]] reference
(except objects with prototype set to null).

=====================================

2) OBJECTS AS TEMPLATES (PROTOTYPICAL INHERITANCE)
-------------------------------------------------
Any object can act as a template (prototype) for another object.
The new object automatically gains access to the prototype’s
properties and methods.

Key idea:p
In prototypical inheritance, there are NO classes inheriting from classes.
Instead, objects inherit directly from other objects.

=====================================

3) ACCESSING AN OBJECT’S PROTOTYPE
---------------------------------
The prototype of an object can be accessed in two ways:

1) __proto__ (legacy, not recommended)
2) Object.getPrototypeOf(object) (recommended)

Checking relationships:
Object.isPrototypeOf(proto, obj)

Rule:
Always prefer Object.getPrototypeOf() for clarity and safety.

=====================================

4) DERIVING OBJECTS USING Object.create()
-----------------------------------------
Object.create() creates a new object and sets its prototype.

Example: */
const animal = {
  name: '',
  color: 'Brown',
  age: 0,
  eat(food) {
    console.log('Chow chow, ' + food + '!');
  },
  drink(drink) {
    console.log('Mmmmmmh, ' + drink + '!');
  }
};

const cat = Object.create(animal);
const dog = Object.create(animal);

/* =====================================

5) INHERITING METHODS AND PROPERTIES
-----------------------------------
Objects created from a prototype inherit all accessible properties
and methods from that prototype.

Example usage: */
cat.eat('cat food');
cat.drink('milk');
console.log(cat.color); // Brown

dog.eat('meat');
dog.drink('water');
console.log(dog.color); // Brown

Rule:
If a property is not found on the object itself, JavaScript looks it up
on the prototype.

/* =====================================

6) ADDING METHODS TO DERIVED OBJECTS
-----------------------------------
Derived objects can define their own methods without affecting
other objects or the prototype.

Example: */
cat.meow = function() {
  console.log('Meowwwww!');
};

dog.bark = function() {
  console.log('Woof woof!');
};

// Rule:
// Methods added to a derived object exist ONLY on that object.

/* =====================================

7) OVERWRITING (OVERRIDING) METHODS
----------------------------------
Objects lower in the prototype chain can overwrite methods defined
higher in the chain.

Example: */
const vegetarianDog = Object.create(dog);

vegetarianDog.eat = function(food) {
  if (food.includes('meat')) {
    throw new Error('I don’t eat meat!');
  }
  console.log('Chow chow, ' + food + '!');
};

vegetarianDog.eat('cheese');

// Rule:
// JavaScript always uses the closest matching method in the prototype chain.

/* =====================================

8) THE PROTOTYPE CHAIN
---------------------
When accessing a property or method:
1) JavaScript checks the object itself
2) Then its prototype
3) Then the prototype’s prototype
4) Continues until Object is reached

Example lookup: */
vegetarianDog.eat();     // found on vegetarianDog
vegetarianDog.bark();    // found on dog
vegetarianDog.drink();   // found on animal
vegetarianDog.toString();// found on Object

// Rule:
// The prototype chain is a chain of objects used for property resolution.

/* =====================================

9) CALLING A METHOD FROM THE PROTOTYPE
-------------------------------------
Sometimes you overwrite a method but still want to call the original
method from the prototype.

Recommended approach:
Object.getPrototypeOf(this).method.call(this, args)

Example: */
vegetarianDog.eat = function(food) {
  if (food.includes('meat')) {
    throw new Error('I don’t eat meat!');
  }
  Object.getPrototypeOf(this).eat.call(this, food);
};

// Rule:
// Use call() to control the execution context (this).

/* =====================================

10) PROTOTYPES & OOP PRINCIPLES
------------------------------
ABSTRACTION:
Common behavior is defined in prototypes.

INHERITANCE:
Objects inherit via the prototype chain.

ENCAPSULATION:
Limited; achieved via getters/setters and design patterns.

POLYMORPHISM:
Natural in JavaScript due to dynamic typing.

=====================================

FINAL SUMMARY
-------------
- Prototypes are the foundation of JavaScript OOP
- Objects inherit from objects, not classes
- Object.create() defines inheritance
- The prototype chain resolves properties and methods
- Method overriding enables specialization
- JavaScript OOP is flexible, powerful, and dynamic

END OF SINGLE SQUARE FILE
===================================== */
