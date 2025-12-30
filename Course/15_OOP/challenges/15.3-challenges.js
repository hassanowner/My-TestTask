/*
============================================================
ADVANCED JAVASCRIPT OOP CHALLENGES (PROTOTYPE + DESCRIPTORS)
Topics Used ONLY from What You Studied:
- Prototype & Prototype Chain
- Class Prototype Methods
- Extending Prototypes (Custom & Built-in)
- Object.defineProperty
- Object.defineProperties
- Property Descriptors (writable, enumerable, configurable)
- getOwnPropertyDescriptor(s)
============================================================


CHALLENGE 1
------------------------------------------------------------
QUESTION:
You have a class User.
- The constructor receives (username).
- Add a method sayHi() using the prototype AFTER the class definition.
- Create two instances.
- Check if both instances share the same sayHi method.

------------------------------------------------------------
ANSWER:
*/

class User {
  constructor(username) {
    this.username = username;
  }
}

User.prototype.sayHi = function () {
  return `Hi ${this.username}`;
};

let u1 = new User("Ali");
let u2 = new User("Sara");

console.log(u1.sayHi());
console.log(u1.sayHi === u2.sayHi);
// Result:
// "Hi Ali"
// true



/*
============================================================
CHALLENGE 2
------------------------------------------------------------
QUESTION:
You have an object product.
- Define a property price using Object.defineProperty.
- price should:
  - Have value 100
  - NOT be writable
  - Be enumerable
- Try to change price to 200.
- Loop over the object and log properties.

------------------------------------------------------------
ANSWER:
*/

const product = {};

Object.defineProperty(product, "price", {
  value: 100,
  writable: false,
  enumerable: true,
  configurable: true,
});

product.price = 200;

for (let key in product) {
  console.log(key, product[key]);
}
// Result:
// price 100



/*
============================================================
CHALLENGE 3
------------------------------------------------------------
QUESTION:
Extend String.prototype by adding a method called firstChar().
- It should return the first character of the string.
- Use it on a primitive string.

------------------------------------------------------------
ANSWER:
*/

String.prototype.firstChar = function () {
  return this[0];
};

let word = "JavaScript";
console.log(word.firstChar());
// Result:
// "J"



/*
============================================================
CHALLENGE 4
------------------------------------------------------------
QUESTION:
You have an object settings with properties a and b.
- Use Object.defineProperties to add:
  c (value: 3, enumerable: true)
  d (value: 4, configurable: true)
- Retrieve and log the descriptor of property d.

------------------------------------------------------------
ANSWER:
*/

const settings = {
  a: 1,
  b: 2,
};

Object.defineProperties(settings, {
  c: {
    value: 3,
    enumerable: true,
  },
  d: {
    value: 4,
    configurable: true,
  },
});

console.log(Object.getOwnPropertyDescriptor(settings, "d"));
// Result:
// {
//   value: 4,
//   writable: false,
//   enumerable: false,
//   configurable: true
// }



/*
============================================================
CHALLENGE 5
------------------------------------------------------------
QUESTION:
Create an object that inherits from another object using Object.create.
- Parent object has property inherited = 50.
- Child object has own property own = 10.
- Use for...in loop to log all properties.
- Explain why both properties appear.

------------------------------------------------------------
ANSWER:
*/

let parent = {
  inherited: 50,
};

let child = Object.create(parent);
child.own = 10;

for (let key in child) {
  console.log(key, child[key]);
}
// Result:
// own 10
// inherited 50
// Explanation:
// - for...in iterates over own properties AND enumerable prototype properties.
// - inherited comes from the prototype chain.


/*
============================================================
END OF PROTOTYPE & DESCRIPTOR CHALLENGES
============================================================
*/
