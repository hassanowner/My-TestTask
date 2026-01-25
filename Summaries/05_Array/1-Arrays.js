/*
========================================================
JAVASCRIPT ARRAYS — FULL EDUCATIONAL GUIDE
========================================================

Topics Covered:
1) Array Basics & Declaration
2) Access & Nested Arrays
3) Changing Elements
4) Check if Array
5) Length Property
6) Adding & Removing Elements (push, pop, shift, unshift)
7) Best Practices & Notes
========================================================
*/


/*
========================================================
1) ARRAY BASICS & DECLARATION
========================================================

- Arrays store multiple values in an **ordered sequence**
- Each element has a numeric **index starting from 0**
- Elements can be any type: number, string, boolean, object, array

Declaration:

// Method 1: Literal syntax
let myArray = ["A", 10, true, [1,2]];

// Method 2: Using constructor
let myArray2 = new Array("HR", "IT", "Finance");

/* Visualization:
myArray
  ├── [0] → "A"
  ├── [1] → 10
  ├── [2] → true
  └── [3] → [1,2]
        ├── [0] → 1
        └── [1] → 2
*/
console.log(myArray);

/*
Key Points:
- Index starts from 0
- Nested arrays allow hierarchical data
- Length counts top-level elements only
*/


/*
========================================================
2) ACCESSING ARRAY ELEMENTS
========================================================
*/

let teamMembers = ["Ali", "Omar", "Hassan", ["Yousef", "Kareem"]];

console.log(teamMembers[0]);           // "Ali"
console.log(teamMembers[3]);           // ["Yousef", "Kareem"]
console.log(teamMembers[3][1]);        // "Kareem"
console.log(teamMembers[3][1][2]);     // "r" (3rd char in "Kareem")


/*
========================================================
3) CHANGING ARRAY ELEMENTS
========================================================
*/

teamMembers[1] = "Salem";              // Change element at index 1
teamMembers[3] = ["Adel", "Mahmoud"];  // Replace nested array
console.log(teamMembers);


/*
========================================================
4) CHECK IF VARIABLE IS ARRAY
========================================================
*/

console.log(Array.isArray(teamMembers)); // true


/*
========================================================
5) LENGTH PROPERTY
========================================================
*/

let teamUsers = ["Ali", "Omar", "Hassan", "Salman"];

console.log(teamUsers.length);  // 4

// Modify length: truncate
teamUsers.length = 2;
console.log(teamUsers); // ["Ali","Omar"]

// Increase length: adds empty slots
teamUsers.length = 5;
console.log(teamUsers); // ["Ali","Omar", <3 empty items>]


/*
========================================================
6) ADDING & REMOVING ELEMENTS
========================================================
*/

let employees = ["Ali", "Omar", "Hassan", "Salem"];

// unshift() → add to beginning
employees.unshift("Manager", "Supervisor");
console.log(employees);

// push() → add to end
employees.push("Intern", "Consultant");
console.log(employees);

// shift() → remove first
let firstEmployee = employees.shift();
console.log(employees);
console.log(`Removed First: ${firstEmployee}`);

// pop() → remove last
let lastEmployee = employees.pop();
console.log(employees);
console.log(`Removed Last: ${lastEmployee}`);

/* ASCII Visualization:

Initial:
+-------+-------+-------+-------+
| Ali   | Omar  | Hassan| Salem |
+-------+-------+-------+-------+

After unshift("Manager","Supervisor"):
+---------+-----------+-------+-------+-------+-------+
| Manager | Supervisor| Ali   | Omar  | Hassan| Salem |
+---------+-----------+-------+-------+-------+-------+

After push("Intern","Consultant"):
+---------+-----------+-------+-------+-------+-------+--------+-----------+
| Manager | Supervisor| Ali   | Omar  | Hassan| Salem | Intern | Consultant|
+---------+-----------+-------+-------+-------+-------+--------+-----------+

After shift():
+-----------+-------+-------+-------+-------+--------+-----------+
| Supervisor| Ali   | Omar  | Hassan| Salem | Intern | Consultant|
+-----------+-------+-------+-------+-------+--------+-----------+
Removed First: Manager

After pop():
+-----------+-------+-------+-------+-------+--------+
| Supervisor| Ali   | Omar  | Hassan| Salem | Intern |
+-----------+-------+-------+-------+-------+--------+
Removed Last: Consultant
*/


/*
========================================================
7) BEST PRACTICES & NOTES
========================================================

1) Indexing always starts from 0
2) Use Array.isArray() to confirm variable is an array
3) Length property is dynamic (read/write)
4) push/pop → operate on end, unshift/shift → operate on start
5) Avoid direct empty slots for readability
6) Nested arrays allow multi-dimensional structures
7) Use length carefully when truncating arrays
========================================================
*/
