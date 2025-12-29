/* ======================================================
   JAVASCRIPT FUNDAMENTALS CHALLENGES
   Topics Covered:
   - Data Types (String, Number, Array, Boolean)
   - Variables (var, let, const)
   - Variable Declaration and Usage
======================================================== */

// ======================================================
// CHALLENGE 1: Data Types and Output
// ======================================================

/*
QUESTION:
You have the following code. What will appear in console.log for each line?
*/

let product = "Laptop";
let price = 1500;
let available = true;
let features = ["16GB RAM", "512GB SSD", "Intel i7"];

console.log("1:", typeof product);
console.log("2:", typeof price);
console.log("3:", typeof available);
console.log("4:", typeof features);
console.log("5:", features[1]);

/* ANSWER:
1: string
2: number
3: boolean
4: object
5: 512GB SSD
*/

// ======================================================
// CHALLENGE 2: Difference between var, let, and const
// ======================================================

/*
QUESTION:
What will happen in the following code? Determine if it will work normally or give an error
*/

var userName = "Ali";
var userName = "Mohamed"; // Is this allowed?

let userAge = 25;
// let userAge = 30; // If we uncomment this line, what will happen?

const userCountry = "Egypt";
// userCountry = "KSA"; // If we uncomment this line, what will happen?

console.log("1:", userName);
console.log("2:", userAge);
console.log("3:", userCountry);

/* ANSWER:
- First line with var: Allowed and works
- Second line with let: If uncommented, will give error (cannot redeclare)
- Third line with const: If uncommented, will give error (cannot change value)
Output:
1: Mohamed
2: 25
3: Egypt
*/

// ======================================================
// CHALLENGE 3: Working with Arrays
// ======================================================

/*
QUESTION:
You have the following array. What is the output value in each console.log?
*/

let numbers = [10, 20, 30];

numbers[1] = 25;
numbers.push(40);

console.log("1:", numbers.length);
console.log("2:", numbers[0]);
console.log("3:", numbers[1]);
console.log("4:", numbers[3]);

/* ANSWER:
1: 4
2: 10
3: 25
4: 40
*/
