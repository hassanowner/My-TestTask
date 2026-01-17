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

This is done using the call() method.

Rule:
To call a superclass constructor, use:
Superclass.call(this, arguments)

Example: */
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
-------------------------------------- */

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

/* ==============================================================

FINAL SUMMARY
-------------
- Superclass constructors are called using call()
- Methods are overridden by redefining them on the subclass prototype
- Superclass methods can still be reused via prototype.call()
- Pseudoclassical OOP simulates class-based behavior
- Understanding this explains modern JavaScript classes

END OF SINGLE SQUARE FILE
==============================================================

Since ES2015 (ES6), JavaScript provides a class syntax. This syntax does NOT introduce true class‑based object orientation like Java or C++;
instead, it is syntactic sugar on top of JavaScript’s existing prototype-based system. Internally,
objects and prototypes still work exactly the same. The benefit of class syntax is reduced complexity and improved readability,
especially for developers coming from classical OOP languages. Nevertheless, understanding prototypes remains essential for mastering JavaScript.

Defining a Class: A class is defined using the class keyword, followed by the class name and a class body enclosed in braces.
Inside the class body, methods are defined directly, and (since ES2022) properties can also be declared directly in the class body.
The constructor() method has a special role: it is automatically called when a new object instance is created and implicitly returns that new instance.
Inside the constructor and all other methods, the current object instance is accessed using this.
Constructor parameters are typically used to initialize or overwrite default property values,
often guarded by conditional logic (for example, using the ternary operator).

Class Expressions: 
In addition to class declarations, classes can also be defined using class expressions. In this case, the class is assigned to a variable and referenced only through that variable.
The class name after the class keyword is optional and is only visible inside the class body itself. Functionally, class declarations and class expressions behave the same;
the difference lies mainly in how and where they can be referenced.

Creating Object Instances: 
Object instances are created using the new keyword, just like with constructor functions. Calling new ClassName() triggers the execution of the constructor() method.
if no arguments are passed, default property values remain unchanged. If arguments are provided, the constructor can overwrite these defaults.
Once an object instance exists, its methods can be called directly using dot notation.

Getters and Setters:
Classes support getters and setters using the get and set keywords. These allow controlled access to internal properties while keeping a clean external API.
To avoid infinite recursion and stack overflow, the internal property names must differ from the getter/setter names.
A common convention is to prefix internal properties with an underscore (for example, _name, _color, _age).

Getters return the internal value, while setters update it. From the outside, getters and setters are accessed like normal properties, not like methods.

Summary and OOP Principles:
The class syntax improves abstraction by grouping data and behavior in a familiar structure.
Inheritance, encapsulation, and polymorphism are supported in a way that feels classical,
but internally they still rely on prototypes. Compared to pseudoclassical object orientation,
the class syntax is cleaner and less error-prone, yet it does not replace the underlying prototype-based model of JavaScript.
*/
