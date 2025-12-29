/* =====================================================
   ADVANCED TEST CHALLENGES
   Topics Covered ONLY:
   - this keyword
   - Object.create()
   - Object.assign()
===================================================== */


/* =====================================================
   CHALLENGE 1 — `this` + Object.assign() REFERENCE TRAP
=====================================================
QUESTION:
You have an object with a method that uses `this`.
You merge it into another object using Object.assign.

Tasks:
1) Merge correctly
2) Call the method
3) Modify a property after merging
4) Explain which object is affected and why
===================================================== */

let sourceUser = {
  name: "Hassan",
  score: 10,
  getScore() {
    return this.score;
  },
};

let targetUser = {
  score: 100,
};

let mergedUser = Object.assign(targetUser, sourceUser);

mergedUser.score = 50;

console.log(mergedUser.getScore());
console.log(targetUser.score);

/*
RESULT:
mergedUser.getScore() => 50
targetUser.score => 50

Explanation:
- Object.assign mutates the TARGET
- mergedUser === targetUser
- `this` refers to the calling object (same reference)
*/



/* =====================================================
   CHALLENGE 2 — Object.create() + `this` LOOKUP
=====================================================
QUESTION:
You have a base object with a method using `this`.
You create a new object using Object.create().

Tasks:
1) Call the method before overriding any property
2) Override a property on the child object
3) Call the method again
===================================================== */

let baseProfile = {
  level: 2,
  nextLevel() {
    return this.level + 1;
  },
};

let player = Object.create(baseProfile);

console.log(player.nextLevel());

player.level = 10;

console.log(player.nextLevel());

/*
RESULT:
First call => 3
Second call => 11

Explanation:
- Method comes from prototype
- `this` refers to the calling object (player)
- Property lookup finds player.level after override
*/



/* =====================================================
   CHALLENGE 3 — Object.create() + Object.assign() + SHALLOW COPY
=====================================================
QUESTION:
You create an object using Object.create(),
then extend it using Object.assign() with a nested object.

Tasks:
1) Modify the nested object
2) Observe where the change appears
3) Explain why this happens
===================================================== */

let baseSettings = {
  config: {
    mode: "light",
  },
};

let settingsCopy = Object.create(baseSettings);

Object.assign(settingsCopy, {
  config: {
    mode: "dark",
  },
});

settingsCopy.config.mode = "custom";

console.log(settingsCopy.config.mode);
console.log(baseSettings.config.mode);

/*
RESULT:
settingsCopy.config.mode => "custom"
baseSettings.config.mode => "light"

Explanation:
- Object.assign added a NEW config object
- Prototype config was NOT modified
- Shallow copy copies references, but here reference was replaced
*/


/* =====================================================
   FINAL NOTE (SELF-CHECK)
=====================================================
If someone understands:
✔ how `this` is resolved
✔ prototype-based inheritance
✔ Object.assign mutation vs safety
✔ shallow copy behavior

→ They truly understand these topics
===================================================== */
