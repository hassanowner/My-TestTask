/*
  FOR EACH TEST TASKS COLLECTION
  ========================================
  General Idea:
  - Demonstrate practical usage of JavaScript's forEach method.
  - Each task shows how to iterate through arrays or NodeLists and apply logic on each element.
  - Key concepts covered:
      1. Doubling numbers in an array
      2. Calculating total values
      3. Cleaning data (removing falsy values)
      4. Interacting with DOM elements (toggle active class, hide divs)
  - Notes:
      - forEach executes a function for each element
      - Does NOT return a new array (unlike map or filter)
*/


/* ================================
   Task 1 – Doubling Numbers
*/
let numbersArray = [2, 5, 8, 10];
let doubledNumbers = [];

numbersArray.forEach(function(number) {
  // Multiply each number by 2 and add to the new array
  doubledNumbers.push(number * 2);
});

console.log("Task 1 – Doubled Numbers:");
console.log(doubledNumbers);
// Expected Output: [4, 10, 16, 20]
console.log("---------------------------------------------------");





/* ================================
   Task 2 – Calculating Total Price
*/
let itemPrices = [10, 20, 15, 5];
let totalPrice = 0;

itemPrices.forEach(function(price) {
  // Add each price to the total
  totalPrice += price;
});

console.log("Task 2 – Total Price:");
console.log(totalPrice);
// Expected Output: 50
console.log("---------------------------------------------------");





/* ================================
   Task 3 – Cleaning Data (Remove Falsy Values)
*/
let rawDataArray = ["Ali", null, "Sara", "", "Hassan", undefined, "Reem"];
let cleanedDataArray = [];

rawDataArray.forEach(function(item) {
  // Only add truthy values to the cleanedDataArray
  if (item) {
    cleanedDataArray.push(item);
  }
});

console.log("Task 3 – Clean Data:");
console.log(cleanedDataArray);
// Expected Output: ["Ali", "Sara", "Hassan", "Reem"]
console.log("---------------------------------------------------");





/* ================================
   Task 4 – Interactive DOM List (Toggle Active Class)
   -------------------
   Concept:
   - Iterate through a NodeList of <li> elements
   - Toggle 'active' class when an item is clicked
   - Hide all associated content divs
*/
//in Html --->
<ul>
  <li class="active">One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
<div class="content">
  <div>Div One</div>
  <div>Div Two</div>
  <div>Div Three</div>
</div>
---------------------------------
  
let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

// Loop through each list item
allLis.forEach(function(listItem) {
  listItem.onclick = function () {
    // Remove 'active' class from all list items
    allLis.forEach(function(li) {
      li.classList.remove("active");
    });

    // Add 'active' class to the clicked item
    this.classList.add("active");

    // Hide all content divs
    allDivs.forEach(function(div) {
      div.style.display = "none";
    });

    // Note: Optional logic to show div by index is removed
  };
});

console.log("Task 4 – Interactive list ready");
// Expected Output: No console return; interaction occurs in DOM
console.log("---------------------------------------------------");
