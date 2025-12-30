/*
====================================================
CHALLENGE 1 — Break Outer Loop with Label
====================================================
Question:
You have an array of numbers. Loop through the array and for each number, loop from 1 to 5.
If the number is even AND the inner loop index is 3, break the outer loop immediately.
Print the number and inner index each step.

Answer:
*/

let numbers = [1, 3, 4, 5, 6];

outer: for (let i = 0; i < numbers.length; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`Number: ${numbers[i]}, Index: ${j}`);
    if (numbers[i] % 2 === 0 && j === 3) {
      console.log("Breaking outer loop due to condition!");
      break outer;
    }
  }
}

/*
Expected Output:
Number: 1, Index: 1
Number: 1, Index: 2
Number: 1, Index: 3
Number: 1, Index: 4
Number: 1, Index: 5
Number: 3, Index: 1
Number: 3, Index: 2
Number: 3, Index: 3
Number: 3, Index: 4
Number: 3, Index: 5
Number: 4, Index: 1
Number: 4, Index: 2
Number: 4, Index: 3
Breaking outer loop due to condition!
*/


/*
====================================================
CHALLENGE 2 — Continue Inner Loop and Skip Items
====================================================
Question:
You have an array of products: ["Pen", "Pad", "Mouse", "Keyboard"].
Loop through each product and print only if the product name length is 4 or less.
Use continue to skip products longer than 4 characters.

Answer:
*/

let products = ["Pen", "Pad", "Mouse", "Keyboard"];

for (let i = 0; i < products.length; i++) {
  if (products[i].length > 4) continue;
  console.log(products[i]);
}

/*
Expected Output:
Pen
Pad
*/


/*
====================================================
CHALLENGE 3 — Labeled Continue in Nested Loops
====================================================
Question:
You have two arrays:
let arr1 = [1,2,3];
let arr2 = [4,5,6];

Loop through arr1 and arr2 (nested). 
If the inner loop number is 5, skip the rest of the current outer loop iteration using a label.
Print all numbers that are not skipped.

Answer:
*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

outerLoop: for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] === 5) {
      console.log(`Skipping outer loop iteration for arr1[${i}] due to arr2 element 5`);
      continue outerLoop;
    }
    console.log(`arr1[${i}]: ${arr1[i]}, arr2[${j}]: ${arr2[j]}`);
  }
}

/*
Expected Output:
arr1[0]: 1, arr2[0]: 4
Skipping outer loop iteration for arr1[0] due to arr2 element 5
arr1[1]: 2, arr2[0]: 4
Skipping outer loop iteration for arr1[1] due to arr2 element 5
arr1[2]: 3, arr2[0]: 4
Skipping outer loop iteration for arr1[2] due to arr2 element 5
*/
