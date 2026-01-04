/*
  Object.create() — FULL & ORDERED EXPLANATION
  -------------------------------------------
  - What Object.create() does
  - Prototype concept (base idea)
  - Creating empty objects
  - Inheriting from another object
  - Property lookup order
  - Practical rules & best practices
*/

/* =====================================================
   1) WHAT IS Object.create() ?
-----------------------------------------------------
- Creates a NEW object
- Links it to an existing object as its PROTOTYPE
- Does NOT copy properties
- Uses prototype inheritance
===================================================== */


/* =====================================================
   2) BASIC OBJECT FOR DEMO
----------------------------------------------------- */
let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(user);
console.log(user.age);
// Result: 20
console.log(user.doubleAge());
// Result: 40


/* =====================================================
   3) CREATE EMPTY OBJECT
-----------------------------------------------------
Object.create({})
- Creates an empty object
- Prototype is {}
===================================================== */
let obj = Object.create({});

obj.a = 100;

console.log(obj);
// Result: { a: 100 }


/* =====================================================
   4) CREATE OBJECT THAT INHERITS FROM ANOTHER OBJECT
----------------------------------------------------- */
let copyObj = Object.create(user);


/*
- copyObj does NOT have its own properties yet
- age & doubleAge come from prototype (user)
*/

console.log(copyObj.age);
// Result: 20 (from prototype)

console.log(copyObj.doubleAge());
// Result: 40 (uses prototype method)


/* =====================================================
   5) OVERRIDING (SHADOWING) PROPERTIES
-----------------------------------------------------
When a property exists on the object itself:
- JS stops prototype search
===================================================== */
copyObj.age = 50;

console.log(copyObj.age);
// Result: 50 (own property)

console.log(copyObj.doubleAge());
// Result: 100
// Explanation:
// this.age = copyObj.age (50)


/* =====================================================
   6) PROPERTY LOOKUP ORDER (VERY IMPORTANT)
-----------------------------------------------------
JavaScript searches properties in this order:

1- Object itself
2- Prototype object
3- Prototype of prototype
4- null → stop
===================================================== */


/* =====================================================
   7) PROTOTYPE RELATIONSHIP
----------------------------------------------------- */
console.log(user.isPrototypeOf(copyObj));
// Result: true


/* =====================================================
   8) MODIFYING PROTOTYPE AFFECTS ALL CHILD OBJECTS
----------------------------------------------------- */
user.tripleAge = function () {
  return this.age * 3;
};

console.log(copyObj.tripleAge());
// Result: 150


/* =====================================================
   9) WHY Object.create() IS USEFUL
-----------------------------------------------------
- Cleaner inheritance
- No constructor functions needed
- No duplication of methods
- Memory-efficient
===================================================== */


/* =====================================================
   10) Object.create() VS Object Literal
-----------------------------------------------------
Object Literal:
{
  age: 20
}
** No inheritance setup

Object.create(user):
- Inherits methods & properties
===================================================== */


/* =====================================================
   11) COMMON PITFALL
-----------------------------------------------------
Changing prototype value changes all inheritors
Use carefully
===================================================== */


/* =====================================================
   SUMMARY
===================================================== */
/*
✔ Object.create(proto) creates a new object
✔ Links object via [[Prototype]]
✔ Properties are NOT copied
✔ `this` refers to calling object
✔ Used for inheritance patterns
*/


/* =====================================================
   NEXT SUGGESTED TOPICS
===================================================== */
/*
- Prototype chain (__proto__)
- Constructor functions
- ES6 Classes
*/
