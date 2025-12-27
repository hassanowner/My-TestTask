/*
========================================================
LOOP CHALLENGES (FOR / WHILE / DO-WHILE)
========================================================
*/


/*
--------------------------------------------------------
Challenge 1 — for loop
- Print numbers from 1 to 10
- Skip number 5 using continue
--------------------------------------------------------
*/

for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

/*
Output:
1
2
3
4
6
7
8
9
10
*/


/*
--------------------------------------------------------
Challenge 2 — for loop
- Print only even numbers from 0 to 20
--------------------------------------------------------
*/

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/*
Output:
0
2
4
6
8
10
12
14
16
18
20
*/


/*
--------------------------------------------------------
Challenge 3 — for loop
- Loop through array
- Print items with their index
--------------------------------------------------------
*/

let fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}: ${fruits[i]}`);
}

/*
Output:
0: Apple
1: Banana
2: Orange
*/


/*
--------------------------------------------------------
Challenge 4 — for loop
- Sum numbers greater than 10 only
--------------------------------------------------------
*/

let numbers = [5, 12, 8, 20, 3, 15];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    sum += numbers[i];
  }
}

console.log(sum);

/*
Output:
47
*/


/*
--------------------------------------------------------
Challenge 5 — Nested for loop
- Print a simple star pattern
--------------------------------------------------------
*/

for (let i = 1; i <= 3; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

/*
Output:
*
**
***
*/


/*
--------------------------------------------------------
Challenge 6 — while loop
- Search for a value and stop when found
--------------------------------------------------------
*/

let products = ["Keyboard", "Mouse", "Monitor", "Printer"];
let search = "Monitor";
let index = 0;

while (index < products.length) {
  if (products[index] === search) {
    console.log(`Found ${search} at index ${index}`);
    break;
  }
  index++;
}

/*
Output:
Found Monitor at index 2
*/


/*
--------------------------------------------------------
Challenge 7 — do / while loop
- Always show menu at least once
--------------------------------------------------------
*/

let userChoice;
let attempts = 0;

do {
  console.log("Menu Displayed");
  attempts++;
} while (userChoice === "exit" && attempts < 3);

/*
Output:
Menu Displayed
*/

/*
Explanation:
- Code runs at least once
- Condition is checked AFTER execution
- do/while is perfect for menus & validation
*/


/*
========================================================
** FINAL NOTES **
========================================================
- for      → best when iteration count is known
- while    → best when condition-based looping
- do/while → runs at least one time guaranteed
- break    → stops loop
- continue → skips current iteration
========================================================
*/
