/* ===========================================================
   JavaScript Advanced Classes
   ===========================================================
   Topics Covered:
   1. Overwriting Methods
   2. Calling Methods of the Superclass
   3. Defining Static Methods
   4. Defining Static Properties
   Includes explanations, code rules, and examples
=========================================================== */

/* ===========================================================
1. Overwriting Methods
=========================================================== */
// Explanation:
// - Subclasses can overwrite a method by defining a method
//   with the same name as in the superclass
// - Useful for customizing behavior for a subclass
// - Example: VegetarianDog overrides eat() from Dog class
// - More object-oriented approach: use Food classes instead of strings

class Food {
    _description;
    constructor(description) {
        this._description = description || this._description;
    }
    get description() { return this._description; }
    set description(description) { this._description = description; }
    toString() { return this.description; }
}

class Meat extends Food {}
class Bread extends Food {}

console.log(new Bread('wheat bread').description); // "wheat bread"
console.log(new Meat('steak').description);        // "steak"

// Base Dog class for inheritance
class Dog {
    _name;
    _color;
    _age;
    _type;

    constructor(name, color, age, type) {
        this._name = name || 'Dog';
        this._color = color || 'Unknown';
        this._age = age || 0;
        this._type = type || 'Unknown';
    }

    eat(food) {
        console.log(`Chow chow, ${food}!`);
    }

    bark() {
        console.log('Woof woof');
    }

    toString() {
        return `${this._name}, ${this._color}, ${this._age}, ${this._type}`;
    }
}

// VegetarianDog overwrites eat()
class VegetarianDog extends Dog {
    eat(food) {
        if (food instanceof Meat) {
            throw new Error("I don't eat meat!");
        } else {
            console.log(`Chow chow, ${food.description}!`);
        }
    }
}

// Example usage:
const veggieDog = new VegetarianDog('Bello', 'White', 2, 'Maltese');
veggieDog.eat(new Bread('wheat bread')); // "Chow chow, wheat bread!"
// veggieDog.eat(new Meat('steak')); // Error: "I don't eat meat!"


/* ===========================================================
2. Calling Methods of the Superclass
=========================================================== */
// Explanation:
// - Use 'super.methodName()' to call a method of the superclass
// - Useful to reuse code from parent class and avoid duplication
class VegetarianDogWithSuper extends Dog {
    eat(food) {
        if (food instanceof Meat) {
            throw new Error("I don't eat meat!");
        } else {
            super.eat(food); // Reuse parent eat method
        }
    }
}

// Example usage:
const veggieDog2 = new VegetarianDogWithSuper('Bello', 'White', 2, 'Maltese');
veggieDog2.eat(new Bread('wheat bread')); // "Chow chow, [object Object]!"
// veggieDog2.eat(new Meat('steak')); // Error


/* ===========================================================
3. Defining Static Methods
=========================================================== */
// Explanation:
// - Static methods belong to the class itself, not instances
// - Called directly on the class using ClassName.method()
// - Useful for utility functions related to the class

class Animal {
    _name = 'John Sample Fish';
    _color = 'Gold';
    _age = 25;

    constructor(name, color, age) {
        this._name = name || this._name;
        this._color = color || this._color;
        this._age = age || this._age;
    }

    static getAnimalColors() {
        return {
            WHITE: 'White',
            BLACK: 'Black',
            BROWN: 'Brown',
            GREEN: 'Green',
            YELLOW: 'Yellow',
            ORANGE: 'Orange'
        };
    }
}

// Example usage:
console.log(Animal.getAnimalColors());
// { WHITE: 'White', BLACK: 'Black', BROWN: 'Brown', GREEN: 'Green', YELLOW: 'Yellow', ORANGE: 'Orange' }

const bird = new Animal('Birdie', Animal.getAnimalColors().BLACK, 5);
console.log(bird._name);  // "Birdie"
console.log(bird._color); // "Black"
console.log(bird._age);   // 5
// bird.getAnimalColors(); // Error: cannot call static method on instance


/* ===========================================================
4. Defining Static Properties
=========================================================== */
// Explanation:
// - Static properties belong to the class, not instances
// - Accessed via ClassName.propertyName
// - Can store constants or shared data

class AnimalWithStatic {
    _name = 'John Sample Fish';
    _color = 'Gold';
    _age = 25;

    static ANIMAL_COLORS = {
        WHITE: 'White',
        BLACK: 'Black',
        BROWN: 'Brown',
        GREEN: 'Green',
        YELLOW: 'Yellow',
        ORANGE: 'Orange'
    };

    constructor(name, color, age) {
        this._name = name || this._name;
        this._color = color || this._color;
        this._age = age || this._age;
    }
}

// Example usage:
console.log(AnimalWithStatic.ANIMAL_COLORS);
const parrot = new AnimalWithStatic('Polly', AnimalWithStatic.ANIMAL_COLORS.GREEN, 3);
console.log(parrot._name);  // "Polly"
console.log(parrot._color); // "Green"
console.log(parrot._age);   // 3
// console.log(parrot.ANIMAL_COLORS); // undefined: cannot access static property via instance


/* ===========================================================
Summary
=========================================================== */
/*
1. Overwriting Methods:
   - Subclass can define a method with the same name as in superclass
   - Customizes behavior for subclass
   - Can throw errors or add conditions (e.g., VegetarianDog)

2. Calling Superclass Methods:
   - Use 'super.methodName()' to reuse parent method
   - Avoids duplicate code
   - 'this.method()' calls subclass version if exists

3. Static Methods:
   - Belong to the class itself
   - Called via ClassName.method()
   - Useful for utility or constant-like methods

4. Static Properties:
   - Belong to the class
   - Accessed via ClassName.property
   - Useful for storing shared constants (e.g., color codes)

Key Takeaway:
JavaScript classes allow method overriding, code reuse via super(),
and class-level functionality with static methods/properties,
enabling robust object-oriented design.
*/
