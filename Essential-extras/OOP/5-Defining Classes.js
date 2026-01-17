/* ===========================================================
   JavaScript Classes – Complete "Square File" Example
   ===========================================================
   This file contains:
   1. Defining Classes
   2. Class Expressions
   3. Constructor Method
   4. Creating Object Instances
   5. Defining Getters and Setters
   Includes explanations, code rules, and examples.
=========================================================== */

/* ===========================================================
1. Defining Classes
=========================================================== */
// Explanation:
// A class in JavaScript is a blueprint for creating objects.
// It encapsulates data (properties) and behavior (methods),
// making code reusable and easier to maintain.
// Benefits:
// - Encapsulation: Groups properties and methods together
// - Reusability: Multiple objects can be created from the same class
// - Readability: Clear syntax compared to old constructor functions
// - Modern OOP: Supports inheritance and other patterns

// Code Rule:
// - Use the 'class' keyword followed by the class name
// - Define properties and methods inside {}
// - Properties can be defined directly (ES2022+) or inside constructor

class Animal {
    name = 'John Sample Fish';
    color = 'Gold';
    age = 25;

    eat(food) {
        console.log(`Chow chow, ${food}`);
    }

    toString() {
        return `${this.name}, ${this.color}, ${this.age}`;
    }
}

// Example usage:
const defaultAnimal = new Animal();
console.log(defaultAnimal.toString()); // "John Sample Fish, Gold, 25"

/* ===========================================================
2. Class Expressions
=========================================================== */
// Explanation:
// A class expression defines a class inside a variable.
// The class name is optional and only accessible within the class body.
// Benefits:
// - Allows dynamic class creation
// - Can be anonymous
// - Useful for one-off or temporary classes

// Code Rule:
// - Assign the class to a variable
// - Optional class name inside expression

const AnimalClass = class AnimalExpression {
    name = 'John Sample Fish';
    color = 'Gold';
    age = 25;

    eat(food) {
        console.log(`Chow chow, ${food}`);
    }

    toString() {
        return `${this.name}, ${this.color}, ${this.age}`;
    }
};

// Example usage:
const animal = new AnimalClass();
console.log(animal.toString()); // "John Sample Fish, Gold, 25"

/* ===========================================================
3. Constructor Method
=========================================================== */
// Explanation:
// constructor() is a special method called automatically
// when a new object is created with 'new'.
// Benefits:
// - Initializes object properties
// - Allows passing parameters
// - Supports default values

// Code Rule:
// - Only one constructor per class
// - Use 'this' to refer to the object instance

class AnimalWithConstructor {
    constructor(name, color, age) {
        this.name = name || 'John Sample Fish';
        this.color = color || 'Gold';
        this.age = age || 25;
    }

    toString() {
        return `${this.name}, ${this.color}, ${this.age}`;
    }
}

// Example usage:
const fish = new AnimalWithConstructor('Fishy', 'Green', 2);
console.log(fish.toString()); // "Fishy, Green, 2"

/* ===========================================================
4. Creating Object Instances
=========================================================== */
// Explanation:
// Objects are created from a class using 'new ClassName()'.
// Each object has its own copy of properties.
// Benefits:
// - Multiple objects from one class
// - Different property values per object

// Code Rule:
// - Use 'new ClassName(parameters)'
// - Defaults are used if parameters are missing

const defaultAnimal2 = new AnimalWithConstructor();
console.log(defaultAnimal2.toString()); // "John Sample Fish, Gold, 25"

const fish2 = new AnimalWithConstructor('Fishy', 'Blue', 3);
fish2.eat = function(food) { console.log(`Chow chow, ${food}`); };
fish2.eat('Algae'); // "Chow chow, Algae"

/* ===========================================================
5. Defining Getters and Setters
=========================================================== */
// Explanation:
// Getters (get) read a property
// Setters (set) update a property
// Internal properties often prefixed with _ to avoid recursion
// Benefits:
// - Protect internal data
// - Validate or modify data
// - Improve readability

// Code Rule:
// - Use get propertyName() and set propertyName(value)
// - Internal property names should differ (e.g., _name)

class AnimalWithGetSet {
    _name = 'John Sample Fish';
    _color = 'Gold';
    _age = 25;

    constructor(name, color, age) {
        this._name = name || this._name;
        this._color = color || this._color;
        this._age = age || this._age;
    }

    get name() { return this._name; }
    set name(name) { this._name = name; }

    get color() { return this._color; }
    set color(color) { this._color = color; }

    get age() { return this._age; }
    set age(age) { this._age = age; }

    eat(food) { console.log(`Chow chow, ${food}`); }
    drink(drink) { console.log(`Mmmmmmh, ${drink}`); }

    toString() { return `${this._name}, ${this._color}, ${this._age}`; }
}

// Example usage:
const snake = new AnimalWithGetSet('Hissy', 'Green', 5);
console.log(snake.name);  // "Hissy"
console.log(snake.color); // "Green"
console.log(snake.age);   // 5
snake.eat('Mouse');       // "Chow chow, Mouse"
snake.drink('Water');     // "Mmmmmmh, Water"

/* ===========================================================
Summary
=========================================================== */
/*
- Classes: Blueprints for objects with properties and methods
- Class Expressions: Alternative way to define classes, can be anonymous
- Constructor: Special method to initialize object properties
- Creating Instances: Use new ClassName() for multiple objects
- Getters & Setters: Control access, validate, and protect internal properties

Key Takeaway:
JavaScript classes provide a modern, organized, reusable, and maintainable
way to structure object-oriented code.
*/
