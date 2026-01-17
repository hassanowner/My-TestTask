/*
========================
JavaScript Classes: Complete Guide
========================

Topics Covered:
1. Defining Private Properties and Private Methods
2. True Private Properties and Methods (ES2022)
3. Class Inheritance / Deriving from Classes
4. Implicit Constructors and Super Calls
5. Object Orientation with Class Syntax
6. Overwriting Methods & Calling Superclass Methods
7. Deriving from Standard Classes (like Error)
========================
*/

/* 
========================
1. Defining Private Properties and Private Methods (Convention)
========================
- Use underscore (_) prefix to indicate a property is intended as private
- This is only a **convention**: the property can still be accessed and overwritten from outside
- Benefit: signals intended internal use, organizes code
*/

class Animal {
  _name = 'John Sample Fish';
  _color = 'Gold';
  _age = '25';

  constructor(name, color, age) {
    this._name = name ? name : this._name;
    this._color = color ? color : this._color;
    this._age = age ? age : this._age;
  }

  eat(food) { console.log(`Chow chow, ${food}`); }
  drink(drink) { console.log(`Mmmmmmh, ${drink}`); }
  toString() { return `${this._name}, ${this._color}, ${this._age}`; }
}

const snake = new Animal('Hissy', 'Green', 5);
console.log(snake._name); // "Hissy"
snake._name = 4711; 
console.log(snake._name); // 4711

/*
Rule: _propertyName is a **convention**, not enforced privacy
*/


/* 
========================
2. True Private Properties and Methods (ES2022)
========================
- Prefix property or method with # to make it truly private
- Accessible only inside class (constructor or methods)
- Outside access throws SyntaxError
*/

class AnimalPrivate {
  #name = 'John Sample Fish';
  #color = 'Gold';
  #age = '25';

  constructor(name, color, age) {
    this.#name = name ? name : this.#name;
    this.#color = color ? color : this.#color;
    this.#age = age ? age : this.#age;
  }

  get name() { return this.#name; }
  set name(name) { this.#name = name; }

  eat(food) { console.log(`Chow chow, ${food}`); }
  drink(drink) { console.log(`Mmmmmmh, ${drink}`); }

  // Private methods
  #eatPrivate(food) { console.log(`Private eating: ${food}`); }

  toString() { return `${this.#name}, ${this.#color}, ${this.#age}`; }
}

const snake2 = new AnimalPrivate('Hissy', 'Green', 5);
console.log(snake2.name); // "Hissy"
// snake2.#name = 'New'; // SyntaxError

/*
Rule: Use # for true private members; only accessible inside the class
*/


/* 
========================
3. Class Inheritance / Deriving from Classes
========================
- Use extends to inherit from a parent class
- Use super() to call parent constructor before using this
- Subclass inherits methods and properties from parent
*/

class Dog extends Animal {
  _type;

  constructor(name, color, age, type) {
    super(name, color, age);
    this._type = type ? type : this._type;
  }

  get type() { return this._type; }
  set type(type) { this._type = type; }

  bark() { console.log('Woof woof'); }
}

const dog = new Dog('Bello', 'White', 2, 'Maltese');
dog.eat('cheese'); // "Chow chow, cheese"
dog.bark();        // "Woof woof"
console.log(dog.type); // "Maltese"

/*
Rule: Call super() before using this in subclass constructor
*/


/* 
========================
4. Implicit Constructors and Super Calls
========================
- If a subclass has no constructor, an implicit constructor is used:
  constructor(...args) { super(...args); }
- If constructor exists but omits super(), accessing this causes Error
- Benefit: allows optional overriding of constructors
*/

class DogImplicit extends Animal {
  _type;
  // no explicit constructor => super called automatically
  get type() { return this._type; }
  set type(type) { this._type = type; }
  bark() { console.log('Woof woof'); }
}

const dogImplicit = new DogImplicit('Max', 'Brown', 3);
dogImplicit.eat('bones'); // works fine
console.log(dogImplicit.type); // undefined (because _type not initialized)


/* 
========================
5. Object Orientation with Class Syntax
========================
- class keyword creates a “class” (syntactic sugar for prototypical inheritance)
- constructor() is called automatically with new
- this refers to the instance
- class expressions allow assignment to a variable
*/

class AnimalClassSyntax {
  name = 'John Sample Fish';
  color = 'Gold';
  age = '25';

  constructor(name, color, age) {
    this.name = name ? name : this.name;
    this.color = color ? color : this.color;
    this.age = age ? age : this.age;
  }

  eat(food) { console.log(`Chow chow, ${food}`); }
  drink(drink) { console.log(`Mmmmmmh, ${drink}`); }
  toString() { return `${this.name}, ${this.color}, ${this.age}`; }
}

const defaultAnimal = new AnimalClassSyntax();
console.log(defaultAnimal.toString()); // John Sample Fish, Gold, 25

const fish = new AnimalClassSyntax('Fishy', 'Green', 2);
fish.eat('Algen'); // Chow chow, Algen
console.log(fish.toString()); // Fishy, Green, 2

/*
Rule: Use constructor() for initialization; access instance properties via this
*/


/* 
========================
6. Overwriting Methods & Calling Superclass Methods
========================
- Define method in subclass with same name to overwrite
- Use super.methodName() to call parent method
- Benefit: avoids code duplication, enables extension
*/

class Food {
  constructor(description) { this._description = description; }
  get description() { return this._description; }
  set description(desc) { this._description = desc; }
  toString() { return this.description; }
}

class Meat extends Food {}
class Bread extends Food {}

class VegetarianDog extends Dog {
  eat(food) {
    if (food instanceof Meat) throw new Error("I don't eat meat!");
    super.eat(food); // call Dog/Animal eat method
  }
}

const vegDog = new VegetarianDog('Bello', 'White', 2, 'Maltese');
vegDog.eat(new Bread('wheat bread')); // Chow chow, [object Object]!
// vegDog.eat(new Meat('steak'));     // Error: I don't eat meat!


/* 
========================
7. Deriving from Standard Classes
========================
- Can extend built-in classes like Error, Array, Map
- Call super() with appropriate arguments
*/

class InvalidValueError extends Error {
  constructor(value) {
    super(`Invalid value: ${value}`);
    this.value = value;
  }
  get value() { return this._value; }
  set value(v) { this._value = v; }
}

// throw new InvalidValueError(5); // example


/* 
========================
Summary
========================
- _propertyName = convention for private (not enforced)
- #propertyName = true private (ES2022)
- constructor() initializes instances; called automatically
- extends + super() = inheritance; super() must be called before this
- Overwrite methods by redefining in subclass; call super.method() to reuse
- Class syntax is syntactic sugar; prototypes still used internally
- Can extend built-in classes for custom errors, arrays, etc.
- Benefits: Encapsulation, inheritance, code reuse, clarity, extendibility
========================
*/
