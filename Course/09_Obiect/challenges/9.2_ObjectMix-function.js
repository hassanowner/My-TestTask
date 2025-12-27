/* ============================================================
   TEST TASK 1 – Product Description Generator (Using MAP)
   ============================================================
   Topics Covered:
   - map()
   - String formatting
   - Conditional status text
   - Returning NEW array of strings
   ------------------------------------------------------------
   IDEA:
   Convert a product object list into readable description lines.
   ============================================================ */

// Original array of products
var products = [
  { name: "Keyboard",    price: 25,  inStock: true  },
  { name: "Mouse",       price: 10,  inStock: false },
  { name: "Monitor",     price: 99,  inStock: true  },
  { name: "USB Cable",   price: 5,   inStock: true  },
  { name: "Headphones",  price: 40,  inStock: false }
];

// Solution using map to build readable descriptions
var descriptions = products.map(function(product) {

  // Decide availability
  var statusText = product.inStock ? "AVAILABLE" : "OUT OF STOCK";

  // Build description line
  return "Product: " + product.name +
         " | Price: $" + product.price +
         " | Status: " + statusText;
});

console.log("Task 1 – Product Descriptions:");
console.log(descriptions);

/* Expected Output:
[
  "Product: Keyboard | Price: $25 | Status: AVAILABLE",
  "Product: Mouse | Price: $10 | Status: OUT OF STOCK",
  ...
]
*/



/* ============================================================
   TEST TASK 2 – Official Name Formatter (Using MAP)
   ============================================================
   Topics Covered:
   - map()
   - split() full name
   - extracting first/middle/last name
   - ternary ?:
   - string building with newline
   ------------------------------------------------------------
   IDEA:
   Convert a user’s full name into an official short format.
   ============================================================ */

var users = [
  { fullName: "Hassan Kadem Hassan", age: 32, active: true },
  { fullName: "Ali Mohammed Ahmed", age: 22, active: false },
  { fullName: "Sara Adel Kareem", age: 44, active: true },
  { fullName: "Lana Firas Hussein", age: 19, active: false }
];

// Format each user's data
var formattedUsers = users.map(function(user) {

  var parts = user.fullName.split(" ");

  var firstName = parts[0];
  var middleInitial = parts[1].charAt(0).toUpperCase();
  var lastName = parts[2];

  var officialName = firstName + "." + middleInitial + "." + lastName;

  var statusText = user.active ? "ACTIVE" : "INACTIVE";

  return "Name: " + officialName + "\n" +
         "Age: " + user.age + "\n" +
         "Status: " + statusText;
});

console.log("Task 2 – Users Official Info:");
formattedUsers.forEach(function(info) {
  console.log(info);
  console.log("---------------");
});



/* ============================================================
   TEST TASK 3 – Filter Available Products (Using FILTER)
   ============================================================
   Topics Covered:
   - filter()
   - returning objects that match condition
   ------------------------------------------------------------
   IDEA:
   Show only products currently available.
   ============================================================ */

var products = [
  { name: "Keyboard", price: 25, inStock: true },
  { name: "Mouse", price: 10, inStock: false },
  { name: "Monitor", price: 99, inStock: true },
  { name: "USB Cable", price: 5, inStock: true },
  { name: "Headphones", price: 40, inStock: false }
];

// Filter only available ones
var availableProducts = products.filter(function(product) {
  return product.inStock === true;
});

console.log("Task 3 – Available Products:");
console.log(availableProducts);

/* Expected Output:
[
  { name: "Keyboard", ... },
  { name: "Monitor", ... },
  { name: "USB Cable", ... }
]
*/



/* ============================================================
   TEST TASK 4 – Active Adults Only (FILTER + MAP)
   ============================================================
   Topics Covered:
   - filter()
   - map()
   - splitting names
   - building formatted result
   ------------------------------------------------------------
   IDEA:
   Keep ACTIVE users who are 21+ and generate official names.
   ============================================================ */

var users = [
  { fullName: "Hassan Kadem Hassan", age: 32, active: true },
  { fullName: "Ali Mohammed Ahmed", age: 19, active: true },
  { fullName: "Sara Adel Kareem", age: 44, active: true },
  { fullName: "Lana Firas Hussein", age: 19, active: false }
];

// Step 1: Filter
var activeAdults = users.filter(function(user) {
  return user.active === true && user.age >= 21;
});

// Step 2: Map + formatting
var activeAdultsFormatted = activeAdults.map(function(user) {

  var parts = user.fullName.split(" ");

  var firstName = parts[0];
  var middleInitial = parts[1].charAt(0).toUpperCase();
  var lastName = parts[2];

  var officialName = firstName + "." + middleInitial + "." + lastName;

  return "USER: " + officialName + 
         " | Age: " + user.age +
         " | Status: ACTIVE";
});

console.log("Task 4 – Active Adult Users Only:");
console.log(activeAdultsFormatted);



/* ============================================================
   TEST TASK 5 – High Scoring Active Students (FILTER + MAP)
   ============================================================
   Topics Covered:
   - chaining array methods
   - filter()
   - map()
   - formatting + name initials
   ------------------------------------------------------------
   IDEA:
   Only keep active students with score >= 60 and make a report.
   ============================================================ */

var students = [
  { fullName: "Hassan Kadem Hassan", score: 95, active: true },
  { fullName: "Ali Mohammed Ahmed", score: 55, active: true },
  { fullName: "Sara Adel Kareem", score: 77, active: true },
  { fullName: "Lana Firas Hussein", score: 82, active: false },
  { fullName: "Omar Adel Ali", score: 45, active: true }
];

// Filter + map chain
var highScoringActiveStudents = students
  .filter(function(student) {
    return student.active === true && student.score >= 60;
  })
  .map(function(student) {
    var parts = student.fullName.split(" ");
    var officialName =
      parts[0] + "." + parts[1].charAt(0).toUpperCase() + "." + parts[2];

    return "STUDENT: " + officialName +
           " | Score: " + student.score +
           " | Status: ACTIVE";
  });

console.log("Task 5 – High Scoring Active Students Report:");
console.log(highScoringActiveStudents);



/* ============================================================
   TEST TASK 6 – Count Active Users (Using REDUCE)
   ============================================================
   Topics Covered:
   - reduce()
   - boolean to number conversion
   ------------------------------------------------------------
   IDEA:
   Count how many users are active using only reduce().
   ============================================================ */

var users = [
  { fullName: "Hassan Kadem Hassan", age: 32, active: true },
  { fullName: "Ali Mohammed Ahmed", age: 22, active: false },
  { fullName: "Sara Adel Kareem", age: 44, active: true },
  { fullName: "Lana Firas Hussein", age: 19, active: false }
];

var activeCount = users.reduce(function(acc, user) {
  return acc + (user.active ? 1 : 0);
}, 0);

console.log("Task 6 – Number of Active Users:");
console.log(activeCount);



/* ============================================================
   TEST TASK 7 – Orders Summary (Using FOREACH)
   ============================================================
   Topics Covered:
   - forEach()
   - accumulating totals
   - counting delivered orders
   ------------------------------------------------------------
   IDEA:
   Loop through orders and calculate:
     - Total amount
     - Delivered orders count
   ============================================================ */

let orders = [
  { id: 1, amount: 20, delivered: true },
  { id: 2, amount: 50, delivered: false },
  { id: 3, amount: 15, delivered: true }
];

let totalAmount = 0;
let deliveredCount = 0;

// Loop and accumulate
orders.forEach(function(order) {
  totalAmount += order.amount;
  if (order.delivered) deliveredCount++;
});

console.log("Task 7 – Orders Summary:");
console.log("Total Amount:", totalAmount);
console.log("Delivered Orders:", deliveredCount);

/* Expected Output:
Total Amount: 85
Delivered Orders: 2
*/
