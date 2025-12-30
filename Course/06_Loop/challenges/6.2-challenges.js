/*
====================================================
CHALLENGE 1 — do/while Loop with Early Break
====================================================
Question:
You have an array of scores: [10, 20, 30, 40, 50].
Use a do/while loop to iterate through the array.
Print each score. 
If a score is greater than 30, stop the loop immediately using break.

Answer:
*/

let scores = [10, 20, 30, 40, 50];
let idx = 0;

do {
  console.log(`Score: ${scores[idx]}`);
  if (scores[idx] > 30) {
    console.log("Score > 30, stopping loop!");
    break;
  }
  idx++;
} while (idx < scores.length);

/*
Expected Output:
Score: 10
Score: 20
Score: 30
Score: 40
Score > 30, stopping loop!
*/


/*
====================================================
CHALLENGE 2 — Nested Loops with Labeled Continue
====================================================
Question:
You have two arrays: 
let colors = ["Red", "Green", "Blue"];
let products = ["Pen", "Pad", "Mouse"];

Loop through products and colors (nested).
If the color is "Green", skip to the next product using a labeled continue.
Print all other combinations.

Answer:
*/

let colors = ["Red", "Green", "Blue"];
let products2 = ["Pen", "Pad", "Mouse"];

outerProduct: for (let i = 0; i < products2.length; i++) {
  for (let j = 0; j < colors.length; j++) {
    if (colors[j] === "Green") {
      continue outerProduct; // skip to next product
    }
    console.log(`${products2[i]} - ${colors[j]}`);
  }
}

/*
Expected Output:
Pen - Red
Pad - Red
Mouse - Red
*/


/*
====================================================
CHALLENGE 3 — Advanced For Loop Manual Control
====================================================
Question:
You have an array of items: ["Laptop", "Tablet", "Camera"].
Use a for loop without a condition or increment section (for (;;)).
Manually control the index and break the loop if the item is "Tablet".
Print all items processed before breaking.

Answer:
*/

let items3 = ["Laptop", "Tablet", "Camera"];
let ind = 0;

for (;;) {
  if (ind >= items3.length) break;
  console.log(`Item: ${items3[ind]}`);
  if (items3[ind] === "Tablet") {
    console.log("Found Tablet, breaking loop!");
    break;
  }
  ind++;
}

/*
Expected Output:
Item: Laptop
Item: Tablet
Found Tablet, breaking loop!
*/
