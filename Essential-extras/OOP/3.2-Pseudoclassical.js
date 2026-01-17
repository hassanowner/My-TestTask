/*
PSEUDOCLASSICAL OOP: SUPERCLASS CALLS & OVERRIDING
==============================================================

This is ONE SINGLE SQUARE FILE explaining how superclass constructors
and methods are called, how methods are overwritten, and how OOP
principles apply in pseudoclassical object orientation.

==============================================================

1) CALLING THE CONSTRUCTOR OF THE "SUPERCLASS"
----------------------------------------------
In pseudoclassical object orientation, constructors do NOT call each
other automatically. If a subclass wants to reuse the constructor logic
of its superclass, it must do so explicitly.

This is done using the call() method. */

Rule:
To call a superclass constructor, use:
Superclass.call(this, arguments)

/// Example:
function Dog(name, color, age, type) {
  Animal.call(this, name, color, age);
  this.type = type;
}

Explanation:
- Animal.call(...) executes the Animal constructor
- `this` refers to the Dog instance being created
- Properties from Animal are copied into Dog

/* ==============================================================

  
2) OVERWRITING METHODS IN A "SUBCLASS"
--------------------------------------
To overwrite a method in a subclass, simply define a method with the
same name on the subclass’s prototype.

JavaScript will always use the closest method in the prototype chain.

Rule:
Methods defined on the subclass prototype override superclass methods.

Example: */
function VegetarianDog(name, color, age, type) {
  Dog.call(this, name, color, age);
  this.type = type;
}

VegetarianDog.prototype.eat = function(food) {
  if (food.indexOf('meat') >= 0) {
    throw new Error('I don’t eat meat!');
  } else {
    console.log('Chow chow, ' + food);
  }
};

Explanation:
- eat() on VegetarianDog replaces eat() from Animal/Dog
- Other inherited methods remain unchanged

/* ==============================================================

  
3) CALLING METHODS OF THE "SUPERCLASS"
--------------------------------------
Sometimes you want to overwrite a method but still reuse the original
logic from the superclass.

This is done using call() on the prototype of the superclass.

Rule:
Use:
Superclass.prototype.method.call(this, arguments)

Example: */
VegetarianDog.prototype.eat = function(food) {
  if (food.indexOf('meat') >= 0) {
    throw new Error('I don’t eat meat!');
  } else {
    Dog.prototype.eat.call(this, food);
  }
};

const vegetarianDog = new VegetarianDog('Bella', 'White', 2, 'Maltese');
vegetarianDog.eat('bread');

Explanation:
- Dog.prototype.eat is executed
- `this` still refers to vegetarianDog

/* ==============================================================

4) WHY call() IS REQUIRED
------------------------
JavaScript does not have built-in superclass keywords (in constructor
functions).

call():
- Explicitly sets the execution context
- Allows reuse of constructors and methods
- Makes inheritance behavior predictable

==============================================================


5) PSEUDOCLASSICAL OOP & OOP PRINCIPLES
--------------------------------------

ABSTRACTION:
- Constructor functions define abstract object structure
- Prototypes define shared behavior

INHERITANCE:
- Implemented manually via prototype chaining
- More complex than prototypical inheritance

ENCAPSULATION:
- Limited
- Achieved via conventions, getters/setters, and patterns

POLYMORPHISM:
- Naturally supported due to JavaScript’s dynamic typing

==============================================================

FINAL SUMMARY
-------------
- Superclass constructors are called using call()
- Methods are overridden by redefining them on the subclass prototype
- Superclass methods can still be reused via prototype.call()
- Pseudoclassical OOP simulates class-based behavior
- Understanding this explains modern JavaScript classes

END OF SINGLE SQUARE FILE
============================================================== */
