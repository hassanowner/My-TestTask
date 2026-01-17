/* ===========================================================
   JavaScript Advanced Classes
   ===========================================================
   Topics Covered:
   1. Defining Private Properties and Private Methods
   2. Class Inheritance (Deriving from Classes)
   3. Deriving from Standard Classes (e.g., Error)
   Includes explanations, code rules, and examples
=========================================================== */

/* ===========================================================
1. Defining Private Properties and Private Methods
=========================================================== */
// Explanation:
// - Prefixing a property with '_' is only a convention; it doesn't prevent external access
// - ES2022 introduced true private properties/methods with '#' prefix
// - Private properties/methods are accessible only inside the class (constructor or methods)
// - Prevents outside access and accidental overwriting

// Example of "conventional private" properties (underscore prefix):
class AnimalConventional {
    _name = 'John Sample Fish';
    _color = 'Gold';
    _age = 25;

    constructor(name, color, age) {
        this._name = name || this._name;
        this._color = color || this._color;
        this._age = age || this._age;
    }

    eat(food) { console.log(`Chow chow, ${food}`); }
    drink(drink) { console.log(`Mmmmmmh, ${drink}`); }
    toString() { return `${this._name}, ${this._color}, ${this._age}`; }
}

const snakeConventional = new AnimalConventional('Hissy', 'Green', 5);
console.log(snakeConventional._name); // Accessible: "Hissy"
snakeConventional._name = 4711;       // Overwritten
console.log(snakeConventional._name); // 4711

// Example of true private properties/methods (ES2022)
class AnimalPrivate {
    #name = 'John Sample Fish';
    #color = 'Gold';
    #age = 25;

    constructor(name, color, age) {
        this.#name = name || this.#name;
        this.#color = color || this.#color;
        this.#age = age || this.#age;
    }

    get name() { return this.#name; }
    set name(name) { this.#name = name; }

    get color() { return this.#color; }
    set color(color) { this.#color = color; }

    get age() { return this.#age; }
    set age(age) { this.#age = age; }

    #eat(food) { console.log(`Chow chow, ${food}`); }
    #drink(drink) { console.log(`Mmmmmmh, ${drink}`); }

    // Only public method to access private behavior
    feed(food, drink) {
        this.#eat(food);
        this.#drink(drink);
    }

    toString() { return `${this.#name}, ${this.#color}, ${this.#age}`; }
}

const snakePrivate = new AnimalPrivate('Hissy', 'Green', 5);
console.log(snakePrivate.name); // "Hissy"
snakePrivate.feed('Mouse', 'Water'); // "Chow chow, Mouse" "Mmmmmmh, Water"
// snakePrivate.#name = 'Test'; // SyntaxError: Cannot access private field

/* ===========================================================
2. Class Inheritance (Deriving from Classes)
=========================================================== */
// Explanation:
// - Use 'extends' keyword to create a subclass
// - Subclass inherits all methods and properties of the parent class
// - Use 'super(...)' in constructor to call parent constructor
// - Can add new properties and methods in subclass

class Dog extends AnimalPrivate {
    _type; // Subclass property

    constructor(name, color, age, type) {
        super(name, color, age); // Must call parent constructor first
        this._type = type || 'Unknown';
    }

    get type() { return this._type; }
    set type(type) { this._type = type; }

    bark() { console.log('Woof woof'); }
}

// Example usage:
const dog = new Dog('Bello', 'White', 2, 'Maltese');
dog.feed('Cheese', 'Water'); // Uses parent private methods via public method
dog.bark();                  // "Woof woof"
console.log(dog.type);       // "Maltese"

// Important Note:
// - Omitting super() or calling this before super() will throw ReferenceError
// - Omitting subclass constructor entirely still works; super constructor is called implicitly

class DogImplicit extends AnimalPrivate {
    _type;
    // No constructor defined, implicit call to parent constructor
    get type() { return this._type; }
    set type(type) { this._type = type; }

    bark() { console.log('Woof woof'); }
}

const dogImplicit = new DogImplicit('Rocky', 'Brown', 3);
dogImplicit.feed('Bone', 'Water');
dogImplicit.bark();
console.log(dogImplicit.type); // undefined (subclass property not initialized)

/* ===========================================================
3. Deriving from Standard Classes (e.g., Error)
=========================================================== */
// Explanation:
// - JavaScript allows extending built-in classes like Error, Array, etc.
// - Useful for creating custom errors with extra properties

class InvalidValueError extends Error {
    constructor(value) {
        super(`Invalid value: ${value}`);
        this.value = value;
    }

    get value() { return this._value; }
    set value(value) { this._value = value; }
}

// Example usage:
try {
    throw new InvalidValueError(5);
} catch (e) {
    console.log(e.message); // "Invalid value: 5"
    console.log(e.value);   // 5
}

/* ===========================================================
Summary
=========================================================== */
/*
1. Private Properties and Methods:
   - '_' is a convention, '#' is true private
   - Private members accessible only inside class
   - Protects data and behavior from external access

2. Class Inheritance:
   - Use 'extends' to create a subclass
   - Call parent constructor with super()
   - Subclasses can add their own properties/methods
   - Omitting constructor in subclass uses implicit super() call

3. Deriving from Standard Classes:
   - Built-in classes like Error or Array can be extended
   - Custom classes can add new behavior or properties
   - Supports proper OOP and better error handling

Key Takeaway:
JavaScript's class system supports true private members, classical inheritance,
and extending built-in classes, enabling clean, maintainable, and secure OOP code.
*/
