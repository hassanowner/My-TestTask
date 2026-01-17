/*
OBJECT-ORIENTED PROGRAMMING (OOP) PRINCIPLES & JAVASCRIPT
======================================================

MAIN TOPICS (IN ORDER)
---------------------
1. Principle 1: Define Abstract Behavior
2. Principle 2: Encapsulate Condition and Behavior (Encapsulation)
3. Principle 3: Inherit Condition and Behavior (Inheritance)
4. Principle 4: Accept Different Types (Polymorphism)
5. Statically Typed vs Dynamically Typed Languages
6. JavaScript and Object Orientation
   - Prototypical Object Orientation
   - Pseudoclassical Object Orientation
   - Object Orientation with Class Syntax

======================================================

PRINCIPLE 1: DEFINE ABSTRACT BEHAVIOR
-----------------------------------
WHAT IT IS:
Abstract behavior means defining common state (properties) and behavior (methods)
that multiple objects share. Classes or prototypes act as blueprints, while
instances represent concrete objects with real values.

BENEFITS:
- Avoids repetition
- Improves code organization
- Makes systems scalable and reusable

BASIC RULE: 
Define shared behavior once, then create multiple instances from it.

BASIC EXAMPLE: */
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound");
  }
}
/*
======================================================

PRINCIPLE 2: ENCAPSULATE CONDITION AND BEHAVIOR
----------------------------------------------
WHAT IT IS:
Encapsulation means hiding internal data and exposing it only through
controlled methods. This prevents unauthorized or invalid changes.

BENEFITS:
- Protects object state
- Improves security
- Makes code easier to maintain

BASIC RULE:
Do not access object data directly; use methods instead.

BASIC EXAMPLE: */
class Person {
  #age;
  constructor(age) {
    this.#age = age;
  }
  getAge() {
    return this.#age;
  }
}
/*
======================================================



PRINCIPLE 3: INHERIT CONDITION AND BEHAVIOR
------------------------------------------
WHAT IT IS:
Inheritance allows a class to reuse and extend another class. It represents
an "is-a" relationship.

BENEFITS:
- Code reuse
- Clear hierarchy
- Easier extension

BASIC RULE:
Subclasses automatically receive behavior from superclasses.

BASIC EXAMPLE: */
class Animal {
  speak() {
    console.log("Animal sound");
  }
}
class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}
/*
======================================================

  
PRINCIPLE 4: ACCEPT DIFFERENT TYPES (POLYMORPHISM)
------------------------------------------------
WHAT IT IS:
Polymorphism allows objects of different subclasses to be treated as objects
of the same superclass.

BENEFITS: */
- Flexible code
- Easier extension
- Less coupling

BASIC RULE:
Program to shared behavior, not specific types.

BASIC EXAMPLE:
function makeSound(animal) {
  animal.speak();
}
/*
======================================================

STATIC VS DYNAMIC TYPING
-----------------------
STATIC TYPING:
- Checked at compile time
- Example: Java

DYNAMIC TYPING:
- Checked at runtime
- Example: JavaScript

JavaScript allows passing any object as long as it behaves correctly.

======================================================

JAVASCRIPT AND OBJECT ORIENTATION
--------------------------------
1) Prototypical OOP:
Objects inherit directly from other objects.

2) Pseudoclassical OOP:
Constructor functions and prototypes.

3) Class Syntax:
Modern, clean syntax built on prototypes.

======================================================

FINAL SUMMARY
-------------
- Abstraction defines shared behavior
- Encapsulation protects data
- Inheritance reuses behavior
- Polymorphism enables flexibility
- JavaScript supports OOP in multiple styles

END OF SINGLE SQUARE FILE
====================================================== */
