/* =========================================================================
CHALLENGE 1 — SET (DEDUPLICATION + SIZE CHECK)
============================================================================
QUESTION:
You receive an array of user roles from an API that may contain duplicates.
- Create a Set to remove duplicates
- Check if the role "Admin" exists
- Log the total number of unique roles
*/

const apiRoles = ["User", "Admin", "Editor", "Admin", "User"];

// ANSWER:
const uniqueRoles = new Set(apiRoles);

console.log(uniqueRoles.has("Admin")); // RESULT: true
console.log(uniqueRoles.size);         // RESULT: 3
console.log(uniqueRoles);              // RESULT: Set { "User", "Admin", "Editor" }


/* =========================================================================
CHALLENGE 2 — SET METHODS (ADD + DELETE + CLEAR)
============================================================================
QUESTION:
You are managing a permission system using Set.
- Add permissions: "read", "write", "delete"
- Remove "write"
- Clear all permissions at the end
*/

const permissions = new Set();

// ANSWER:
permissions.add("read").add("write").add("delete");
permissions.delete("write");

console.log(permissions); // RESULT: Set { "read", "delete" }

permissions.clear();
console.log(permissions.size); // RESULT: 0


/* =========================================================================
CHALLENGE 3 — MAP (KEY TYPE SAFETY + SIZE)
============================================================================
QUESTION:
You need to store permissions where keys must preserve their data type.
- Store permissions using keys:
  1) number 1
  2) string "1"
  3) boolean true
- Retrieve each value and log the Map size
*/

const permissionMap = new Map();

// ANSWER:
permissionMap.set(1, "Admin");
permissionMap.set("1", "User");
permissionMap.set(true, "Moderator");

console.log(permissionMap.get(1));     // RESULT: "Admin"
console.log(permissionMap.get("1"));   // RESULT: "User"
console.log(permissionMap.get(true));  // RESULT: "Moderator"
console.log(permissionMap.size);       // RESULT: 3


/* =========================================================================
CHALLENGE 4 — MAP ITERATION (forEach)
============================================================================
QUESTION:
You receive a Map containing system settings.
- Iterate over the Map using forEach
- Log each key and value pair
*/

const systemSettings = new Map([
  ["theme", "dark"],
  ["language", "en"],
  ["autoSave", true],
]);

// ANSWER:
systemSettings.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

/*
RESULT:
theme: dark
language: en
autoSave: true
*/


/* =========================================================================
CHALLENGE 5 — WEAKMAP (MEMORY-SAFE OBJECT TRACKING)
============================================================================
QUESTION:
You want to store temporary metadata about a user object.
- Use WeakMap to store session data
- Remove the object reference
- Explain what happens to the WeakMap entry
*/

let userObject = { id: 77, name: "Hassan" };
const sessionCache = new WeakMap();

// ANSWER:
sessionCache.set(userObject, { lastLogin: "09:00 AM" });

userObject = null;

console.log(sessionCache);
/*
RESULT:
WeakMap {}

EXPLANATION:
- The object key is no longer reachable
- Garbage Collector can remove it
- WeakMap entry disappears automatically
*/
