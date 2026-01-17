/*
========================
JavaScript Classes Guide
========================

Topics Covered:
1. Defining Private Properties and Private Methods
2. True Private Properties and Methods in ES2022
3. Deriving from "Classes" (Inheritance)
4. Overwriting Methods & Calling Superclass Methods
5. Class Syntax vs. Pseudoclassical Object Orientation
6. Deriving from Standard Classes (like Error, Array)
========================
*/

/* 
========================
1. Defining Private Properties and Private Methods
========================
- Before ES2022, privacy in JS was by convention using _ (underscore)
- _propertyName indicates intended private access, but is still public
- Benefits: signals internal use, organizes code
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

  // Methods
  eat(food) {
    console.log(`Chow chow, ${food}`);
  }

  drink(drink) {
    console.log(`Mmmmmmh, ${drink}`);
  }

  toString() {
    return `${this._name}, ${this._color}, ${this._age}`;
  }
}

const snake = new Animal('Hissy', 'Green', 5);
console.log(snake._name); // "Hissy"
snake._name = 4711;        // Can still overwrite
console.log(snake._name); // 4711

/*
Basic Rule: Use _ to indicate private properties, but they are not enforced.
*/


/* 
========================
2. True Private Properties and Methods in ES2022
========================
- Use # for true private properties/methods
- Only accessible inside class (constructor or methods)
- External access causes SyntaxError
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

  // Getters and Setters
  get name() { return this.#name; }
  set name(name) { this.#name = name; }

  get color() { return this.#color; }
  set color(color) { this.#color = color; }

  get age() { return this.#age; }
  set age(age) { this.#age = age; }

  // Private methods
  #eat(food) { console.log(`Chow chow, ${food}`); }
  #drink(drink) { console.log(`Mmmmmmh, ${drink}`); }

  toString() {
    return `${this.#name}, ${this.#color}, ${this.#age}`;
  }
}

const snake2 = new AnimalPrivate('Hissy', 'Green', 5);
console.log(snake2.name); // "Hissy"
// snake2.#name = 'NewName'; // SyntaxError

/*
Basic Rule: Use # for true private members. Access only inside class.
*/


/* 
========================
3. Deriving from "Classes" (Inheritance)
========================
- Use extends to inherit from another class
- Call super() in constructor before using this
- Subclass can add new properties/methods or override parent methods
*/

class Dog extends Animal {
  _type;

  constructor(name, color, age, type) {
    super(name, color, age); // must call parent constructor first
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
Basic Rules:
1. Use extends to inherit
2. Call super() before using this
*/


/* 
========================
4. Overwriting Methods & Calling Superclass Methods
========================
- Overwriting (overriding) a method in a subclass:
  Simply define a method with the same name
- Can add additional logic or restrict functionality
- Use `super.methodName()` to call the original method from the superclass
- Benefits: avoids duplicate code, enforces rules, adds flexibility
*/

/* Food class hierarchy for demonstration */
class Food {
  _description;
  constructor(description) {
    this._description = description ? description : this._description;
  }
  get description() { return this._description; }
  set description(description) { this._description = description; }
  toString() { return this.description; }
}

class Meat extends Food {}
class Bread extends Food {}

const bread = new Bread('wheat bread');
const meat = new Meat('steak');

console.log(bread.description); // "wheat bread"
console.log(meat.description);  // "steak"

/* VegetarianDog overrides eat() from Dog */
class VegetarianDog extends Dog {
  eat(food) {
    if (food instanceof Meat) {
      throw new Error("I don't eat meat!");
    } else {
      // Call superclass method to reuse existing logic
      super.eat(food);
    }
  }
}

const vegDog = new VegetarianDog('Bello', 'White', 2, 'Maltese');
vegDog.eat(new Bread('wheat bread')); // "Chow chow, [object Object]!"
// vegDog.eat(new Meat('steak'));     // Error: "I don't eat meat!"

/*
Basic Rules:
- Overwrite method by defining it with the same name
- Use super.methodName() to reuse superclass logic
- Avoids duplicate code and enforces object-oriented structure
*/


/* 
========================
5. Class Syntax vs. Pseudoclassical Object Orientation
========================
- Classes are syntactic sugar over prototype-based objects
- Methods defined in class go to prototype
- Properties defined in constructor are per-instance
*/

// Old pseudoclassical pattern
function AnimalOld(name) {
  this.name = name;
}
AnimalOld.prototype.eat = function(food) {
  console.log(`Chow chow, ${food}`);
};

const fish = new AnimalOld('Nemo');
fish.eat('flakes'); // "Chow chow, flakes"

// Class syntax equivalent
class AnimalClass {
  constructor(name) { this.name = name; }
  eat(food) { console.log(`Chow chow, ${food}`); }
}

const fish2 = new AnimalClass('Dory');
fish2.eat('flakes'); // "Chow chow, flakes"

/*
Basic Rule: Class syntax = cleaner modern syntax, same underlying prototype structure
*/


/* 
========================
6. Deriving from Standard Classes (like Error, Array)
========================
- Use extends to create custom errors or collections
- Call super() with appropriate parameters
*/

class InvalidValueError extends Error {
  constructor(value) {
    super(`Invalid value: ${value}`);
    this.value = value;
  }

  get value() { return this._value; }
  set value(value) { this._value = value; }
}

// throw new InvalidValueError(5); // Example of throwing custom error

/*
Basic Rule:
- Extend built-in classes using extends
- Call super() to initialize parent
*/


/* 
========================
Summary
========================
- _propertyName: convention for private, not enforced
- #propertyName: true private (ES2022), only accessible inside class
- extends + super(): for inheritance, must call super() before this
- Overwriting methods: define same name in subclass
- Use super.methodName() to reuse parent method
- Class syntax: cleaner way for pseudoclassical pattern
- Custom classes can extend standard classes like Error or Array
- Benefits: Encapsulation, code reuse, clarity, extendibility
========================
*/
