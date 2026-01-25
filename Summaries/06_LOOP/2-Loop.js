/*
========================================================
LOOPS IN JAVASCRIPT — COMPLETE EDUCATIONAL GUIDE
========================================================

This file covers:
1) for loop (basic & advanced)
2) break / continue / labels
3) while loop
4) do/while loop
5) nested loops
6) practical examples
7) common pitfalls & best practices
========================================================
*/

/*
========================================================
1) FOR LOOP — Basic & Advanced
========================================================
*/

// Syntax
// for (initialization; condition; update) { code }

// Examples:

// Counting 0 to 9
for (let i = 0; i < 10; i++) console.log(i);

// Counting with step
for (let i = 0; i < 10; i += 2) console.log(i);

// Counting backwards
for (let i = 5; i >= 1; i--) console.log(i);

// Loop through array using index
let users = ["Ali", "Hassan", "Mona"];
for (let i = 0; i < users.length; i++) console.log(users[i]);

// Accumulating values
let numbers = [10, 20, 30], total = 0;
for (let i = 0; i < numbers.length; i++) total += numbers[i];
console.log(total); // 60

// Advanced: for loop with manual condition & increment
let items = ["Laptop","Tablet","Printer","Scanner","Camera"];
let index = 0;
for (;;) {
  if (index >= items.length) break;
  console.log(items[index]);
  index++;
}

/*
========================================================
2) BREAK / CONTINUE / LABEL
========================================================
*/

// break → exit loop completely
// continue → skip current iteration
// label → control which loop to break/continue in nested loops

let products = ["Keyboard","Mouse","Pen"];
let colors = ["Red","Green","Black"];

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") break mainLoop;
  }
}

// continue example
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) continue; // skip odd numbers
  console.log(i); // prints even numbers only
}

// Labeled break/continue in nested loops
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) continue outerLoop; // skip rest of outer loop iteration
    console.log(i,j);
  }
}

/*
========================================================
3) NESTED LOOPS
========================================================
*/

let departments = ["IT","HR","Finance"];
let employees = [["Ali","Sara","Omar"],["Mona","Hassan"],["Khaled","Noor","Yara"]];

for (let i = 0; i < departments.length; i++) {
  console.log(`Department: ${departments[i]}`);
  for (let j = 0; j < employees[i].length; j++) {
    console.log(`- Employee: ${employees[i][j]}`);
  }
  console.log("---------------");
}

/*
========================================================
4) WHILE LOOP — Simple & Practical
========================================================
*/

// Basic while
let idx = 0;
while (idx < products.length) {
  console.log(products[idx]);
  idx++;
}

// Guarded search with break
let wanted = "Pen";
let i = 0, found = false;
while (i < products.length) {
  if (products[i] === wanted) {
    found = true;
    console.log(`Found "${wanted}" at index ${i}`);
    break;
  }
  i++;
}

// Accumulation example
let count = 0, max = 3, html = "";
while (count < max) {
  html += `<li>Product ${count+1}: ${products[count]}</li>\n`;
  count++;
}
console.log(`<ul>\n${html}</ul>`);

// Safety guard against infinite loops
let guardIndex = 0, guardMax = 1000;
while (guardIndex < products.length) {
  console.log(`Guarded item: ${products[guardIndex]}`);
  guardIndex++;
  if (guardIndex > guardMax) break;
}

/*
========================================================
5) DO / WHILE LOOP — At Least One Execution
========================================================
*/

// Basic do/while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

// Array iteration
let idx2 = 0;
do {
  console.log(products[idx2]);
  idx2++;
} while (idx2 < products.length);

// Comparison: while vs do/while
let a = 5;
while (a < 3) console.log("Won't run");

let b = 5;
do {
  console.log("Runs once");
} while (b < 3);

/*
========================================================
6) NAMED WHILE LOOPS — break outer loop from inner loop
========================================================
*/

outerLoop: while (true) {
  for (let j = 0; j < 5; j++) {
    let val = Math.floor(Math.random() * 10);
    console.log(`Inner value: ${val}`);
    if (val === 6) {
      console.log("Breaking outer loop!");
      break outerLoop;
    }
  }
}

/*
========================================================
SUMMARY / BEST PRACTICES
========================================================
- Use for loops for known iterations.
- Use while when condition depends on dynamic states.
- Use do/while to ensure at least one execution.
- Use break to stop loops early.
- Use continue to skip iterations.
- Use labels cautiously for nested loops.
- Always ensure loops terminate to avoid infinite loops.
========================================================
END OF JS LOOPS GUIDE
========================================================
*/
