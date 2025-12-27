/*
  Object.assign() — FULL & STRUCTURED EXPLANATION
  ----------------------------------------------
  - What Object.assign() does
  - Merge objects
  - Overwriting properties
  - Reference behavior
  - Creating new objects
  - Practical rules
*/

/* =====================================================
   1) WHAT IS Object.assign() ?
-----------------------------------------------------
- Copies properties from one or more source objects
- Into a target object
- Returns the TARGET object
- Copy is SHALLOW (not deep)
===================================================== */


/* =====================================================
   2) SOURCE OBJECTS
----------------------------------------------------- */
let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};


/* =====================================================
   3) TARGET OBJECT
----------------------------------------------------- */
let targetObject = {
  prop1: 100,
  prop3: 3,
};


/* =====================================================
   4) MERGING OBJECTS USING Object.assign()
-----------------------------------------------------
Order matters:
- Properties copied from left → right
- Later objects overwrite earlier ones
===================================================== */
let finalObject = Object.assign(targetObject, obj1, obj2);

console.log(finalObject);
/*
Result:
{
  prop1: 1,       // overwritten by obj1
  prop3: 3,
  prop2: 2,
  meth1: ƒ,
  meth2: ƒ
}
*/


/* =====================================================
   5) MODIFYING FINAL OBJECT
-----------------------------------------------------
finalObject === targetObject (same reference)
===================================================== */
finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);
/*
{
  prop1: 200,
  prop3: 3,
  prop2: 2,
  prop4: 4,
  meth1: ƒ,
  meth2: ƒ
}
*/


/* =====================================================
   6) IMPORTANT: REFERENCE BEHAVIOR
-----------------------------------------------------
- targetObject is modified
- finalObject points to same object
===================================================== */
console.log(finalObject === targetObject);
// true


/* =====================================================
   7) CREATING A BRAND NEW OBJECT SAFELY
-----------------------------------------------------
Use {} as target to avoid mutation
===================================================== */
let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);
/*
{
  prop1: 1,
  meth1: ƒ,
  prop5: 5,
  prop6: 6
}
*/


/* =====================================================
   8) WHY USE Object.assign() ?
-----------------------------------------------------
- Merge multiple objects
- Clone object (shallow)
- Extend existing objects
- Common in configs & defaults
===================================================== */


/* =====================================================
   9) COMMON USE CASE: DEFAULT SETTINGS
----------------------------------------------------- */
let defaults = {
  theme: "light",
  debug: false,
};

let userSettings = {
  debug: true,
};

let settings = Object.assign({}, defaults, userSettings);

console.log(settings);
/*
{
  theme: "light",
  debug: true
}
*/


/* =====================================================
   10) IMPORTANT NOTES
-----------------------------------------------------
** Does NOT clone nested objects (shallow copy)
** Mutates target if not using {}
===================================================== */


/* =====================================================
   SUMMARY
===================================================== */
/*
✔ Object.assign(target, ...sources)
✔ Returns target
✔ Order matters
✔ Later properties overwrite earlier ones
✔ Use {} to create a new object safely
*/


/* =====================================================
   NEXT TOPICS YOU SHOULD LEARN
===================================================== */
/*
- Spread Operator {...obj}
- Deep clone strategies
- Comparing Object.assign vs Spread
*/
