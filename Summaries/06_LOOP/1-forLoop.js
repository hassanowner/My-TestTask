/*
========================================================
FOR LOOP — COMPLETE JS GUIDE
========================================================

Purpose:
- Repeat a block of code a known number of times
- Ideal when the number of iterations is predetermined

Syntax:
for (initialization; condition; update) {
  // code executed each iteration
}

Components:
1) Initialization: runs once before loop starts, usually sets a counter
2) Condition: checked before each iteration, loop runs while true
3) Update: executed after each iteration, usually increments/decrements counter
========================================================
*/


/*
========================================================
EXAMPLES — BASIC FOR LOOP
========================================================
*/

// EXAMPLE 1: Counting 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// Output: 0,1,2,3,4,5,6,7,8,9

// EXAMPLE 2: Counting with step (increment by 2)
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
// Output: 0,2,4,6,8

// EXAMPLE 3: Counting backwards
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// Output: 5,4,3,2,1


/*
========================================================
LOOP THROUGH ARRAY USING INDEX
========================================================
*/

let users = ["Ali", "Hassan", "Mona"];
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
// Output: Ali, Hassan, Mona


/*
========================================================
ACCUMULATING VALUES
========================================================
*/

let numbers = [10, 20, 30];
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total); // Output: 60


/*
========================================================
FILTERING DATA USING FOR LOOP
========================================================
Scenario: Extract only strings from a mixed array
*/

let myFriends = [1, 2, "Lina", "Ahmed", 3, 4, "Roan", 6, "Ali"];
let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}
console.log(onlyNames); // Output: ["Lina", "Ahmed", "Roan", "Ali"]

/*
Notes:
- typeof checks the element type
- Using a separate array preserves original data
- Common real-world use: filter data by type, value, condition
*/


/*
========================================================
NESTED LOOPS
========================================================
Scenario: Departments and employees
*/

let departments = ["IT", "HR", "Finance"];
let employees = [
  ["Ali", "Sara", "Omar"],    // IT
  ["Mona", "Hassan"],         // HR
  ["Khaled", "Noor", "Yara"]  // Finance
];

for (let i = 0; i < departments.length; i++) {
  console.log(`Department: ${departments[i]}`);
  
  for (let j = 0; j < employees[i].length; j++) {
    console.log(`- Employee: ${employees[i][j]}`);
  }

  console.log("---------------");
}

/*
Final Output:

Department: IT
- Employee: Ali
- Employee: Sara
- Employee: Omar
---------------
Department: HR
- Employee: Mona
- Employee: Hassan
---------------
Department: Finance
- Employee: Khaled
- Employee: Noor
- Employee: Yara
---------------
*/

/*
Key Notes:
1) Outer loop iterates over main array (departments)
2) Inner loop iterates over sub-array (employees)
3) Nested loops are essential for multi-dimensional data
4) Use clear variable names (i, j) to avoid confusion
*/


/*
========================================================
BEST PRACTICES
========================================================
1) Always ensure condition will eventually be false to avoid infinite loops
2) Use array.length to prevent invalid index access
3) Initialize counters properly (let i = 0)
4) Use nested loops carefully; they increase time complexity
5) Use for-loops for predictable iteration counts; use for-of/for-in when appropriate
========================================================
*/
