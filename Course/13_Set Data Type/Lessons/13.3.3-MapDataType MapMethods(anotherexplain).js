/* =====================================================================
• MAIN TOPICS TO BE STUDIED
=====================================================================

• Maps (Key–Value Data Structures)
• Creating Maps in JavaScript
• Iterable Objects
• Map Properties and Methods
    • size
    • set()
    • get()
    • has()
    • delete()
    • clear()

===================================================================== */


/* =====================================================================
• TOPIC 1: Maps (Key–Value Data Structures)
=====================================================================

• Definition:
  • A Map is a data structure that stores data as key–value pairs
  • Each key is unique
  • Values can be duplicated

• Basic Rule:
  • Keys must be unique
  • Values can repeat
  • Keys can be of any data type (string, number, object, function)

• How It Works:
  • You store data by associating a key with a value
  • You retrieve data using the key
  • Internally, Map preserves insertion order

• Benefits:
  • Faster lookup compared to objects in many cases
  • Allows non-string keys
  • Built-in size property
  • Clean and clear API

• Conceptual Example:
  • Band name → Number of albums

===================================================================== */



/* =====================================================================
• TOPIC 2: Creating Maps in JavaScript
=====================================================================

• Definition:
  • Maps are created using the Map constructor

• Forms of Creation:
  • Empty map
  • Map initialized with iterable data (array of arrays)

• Basic Rule:
  • The constructor accepts an iterable object
  • Each element must be a [key, value] pair

• How It Works:
  • The constructor reads each inner array
  • First value becomes the key
  • Second value becomes the value

• Practical Example (Initialization with Array):
*/

const numbersOfAlbums = new Map([
  ['Kyuss', 4],
  ['Tool', 6],
  ['Monster Magnet', 8],
  ['Ben Harper', 9],
  ['Queens of the Stone Age', 6]
]);

console.log(numbersOfAlbums.size); 
// Output: 5

/* =====================================================================
• Explanation:
  • 5 unique keys were added
  • Map size reflects number of entries
===================================================================== */



/* =====================================================================
• TOPIC 3: Iterable Objects
=====================================================================

• Definition:
  • An iterable object defines how it can be looped over

• Basic Rule:
  • Must implement iteration behavior (Symbol.iterator)

• Built-in Iterable Objects:
  • String
  • Array
  • Map
  • Set

• Why This Matters for Maps:
  • Map constructor accepts any iterable
  • Allows flexible initialization
  • Enables usage in loops (for...of)

• How It Works:
  • Each iteration yields a [key, value] pair

• Practical Example:
*/

for (const [band, albums] of numbersOfAlbums) {
  console.log(band, albums);
}
// Output:
// Kyuss 4
// Tool 6
// Monster Magnet 8
// Ben Harper 9
// Queens of the Stone Age 6

/* =====================================================================
• Explanation:
  • Map is iterable by default
  • Each iteration returns key and value
===================================================================== */



/* =====================================================================
• TOPIC 4: Map Properties and Methods
===================================================================== */

/* ---------------------------------------------------------------------
• size Property
---------------------------------------------------------------------

• Definition:
  • Returns the number of entries in a map

• Rule:
  • Read-only
  • Automatically updated

• Example:
*/

console.log(numbersOfAlbums.size);
// Output: 5


/* ---------------------------------------------------------------------
• set(key, value)
---------------------------------------------------------------------

• Definition:
  • Adds or updates an entry

• Rules:
  • If key exists → value is overwritten
  • Returns the map (chainable)

• Example:
*/

numbersOfAlbums.set('Kyuss', 5);
console.log(numbersOfAlbums.get('Kyuss'));
// Output: 5


/* ---------------------------------------------------------------------
• get(key)
---------------------------------------------------------------------

• Definition:
  • Retrieves the value for a given key

• Rules:
  • Returns undefined if key does not exist

• Example:
*/

console.log(numbersOfAlbums.get('Tool'));
// Output: 6


/* ---------------------------------------------------------------------
• has(key)
---------------------------------------------------------------------

• Definition:
  • Checks if a key exists

• Returns:
  • true or false

• Example:
*/

console.log(numbersOfAlbums.has('Kyuss'));
// Output: true

console.log(numbersOfAlbums.has('Justin Bieber'));
// Output: false


/* ---------------------------------------------------------------------
• delete(key)
---------------------------------------------------------------------

• Definition:
  • Removes an entry by key

• Returns:
  • true if deleted
  • false if key not found

• Example:
*/

numbersOfAlbums.delete('Kyuss');
console.log(numbersOfAlbums.has('Kyuss'));
// Output: false


/* ---------------------------------------------------------------------
• clear()
---------------------------------------------------------------------

• Definition:
  • Removes all entries from the map

• Effect:
  • size becomes 0

• Example:
*/

numbersOfAlbums.clear();
console.log(numbersOfAlbums.size);
// Output: 0


/* =====================================================================
• FINAL SUMMARY
=====================================================================

• Maps store key–value pairs
• Keys are unique; values can repeat
• Maps are iterable by default
• Map constructor accepts iterable data
• Map provides clear and powerful methods
• Ideal for structured, ordered, and flexible data storage

===================================================================== */
