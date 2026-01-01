/*
========================================================
Arrays
========================================================
Covered Topics:
- Create Arrays [Two Methods] new Array() + []
- Access Arrays Elements
- Nested Arrays
- Change Arrays Elements
- Check For Array Array.isArray(arr)
========================================================



========================================================
** ARRAY — BASIC STRUCTURE & VISUALIZATION **
========================================================

1- Declaration Syntax */

let arrayName = [element0, element1, element2, ...];

/*
- Arrays store multiple values in **ordered sequence**.
- Each element has a **numeric index starting from 0**.
- Elements can be of **any type**: number, string, boolean, object, another array, etc.

--------------------------------------------------------
2- Base Structure Example */

let myArray = [ "A", 10, true, [1,2] ];

/* Visualization:

myArray
  ├── [0] → "Hi"
  ├── [1] → 10
  ├── [2] → true
  └── [3] → [1, 2]   <-- Nested array
          ├── [0] → 1
          └── [1] → 2

--------------------------------------------------------
3- Index Table (Basic Reference)

| Index  | Element Type        |
|--------|-------------------|
| 0      | "A"               |
| 1      | 10                |
| 2      | true              |
| 3      | Array (Nested)    |
| 3[0]   | 1                 |
| 3[1]   | 2                 |

--------------------------------------------------------
4- Key Points

4.a) Indexing always starts from 0.
4.b) Arrays can store **any type of value**, including nested arrays.
4.c) Access elements using square brackets:
   - myArray[0] → "A"
   - myArray[3][1] → 2
4.d) Length property:
   - myArray.length → 4
   - Includes top-level elements only, nested array elements not counted in top-level length.
4.e) Arrays are **ordered collections**, meaning the order of insertion is preserved.
4.f) Use nested arrays for **hierarchical or multi-dimensional data**.

--------------------------------------------------------
5- ASCII GENERAL TEMPLATE

arrayName
  ├── [0] → element0
  ├── [1] → element1
  ├── [2] → element2
  └── [3] → element3
          ├── [0] → nestedElement0
          └── [1] → nestedElement1

======================================================== */



// ======================================================
// Create Arrays
// ======================================================l

// Method 1: Using square brackets []
let teamMembers = ["Ali", "Omar", "Hassan"];

// Method 2: Using new Array()
let departments = new Array("HR", "IT", "Finance");

console.log(teamMembers);
/*
Result:
["Ali", "Omar", "Hassan"]

teamMembers
  ├── [0] → "Ali"
  ├── [1] → "Omar"
  └── [2] → "Hassan"
  
*/


// ======================================================
// Access Array Elements
// ======================================================

console.log(`Welcome ${teamMembers[0]}`);
/*
Result:
"Welcome Ali"
*/

console.log(`Welcome ${teamMembers[2]}`);
/*
Result:
"Welcome Hassan"
*/


// ======================================================
// Nested Arrays
// ======================================================

let teamMembers = ["Ali", "Omar", "Hassan", ["Yousef", "Kareem"] ];

/* teamMembers
  ├── [0] → "Ali"
  ├── [1] → "Omar"
  ├── [2] → "Hassan"
  └── [3] → ["Yousef", "Kareem"]
           ├── [0] → "Yousef"
           └── [1] → "Kareem"     */


console.log(teamMembers[3]);
/*
Result:
["Yousef", "Kareem"]
*/

console.log(`Nested Member: ${teamMembers[3][1]}`);
/*
Result:
"Nested Member: Kareem"
*/

console.log(teamMembers[3][1][2]);
/*
Result:
"r"
*/


// ======================================================
// Change Array Elements
// ======================================================

teamMembers[1] = "Salem";
console.log(teamMembers);

/*
Result:
["Ali", "Salem", "Hassan", ["Yousef", "Kareem"]]
*/

teamMembers[3] = ["Adel", "Mahmoud"];
console.log(teamMembers);

/*
Result:
["Ali", "Salem", "Hassan", ["Adel", "Mahmoud"]]
*/


// ======================================================
// Check If Variable Is Array
// ======================================================

console.log(Array.isArray(teamMembers));

/*
Result:
true
*/
