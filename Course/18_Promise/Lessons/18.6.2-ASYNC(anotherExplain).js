/*

====================================================================================================
TOPICS TO STUDY:
1. What is Async Function?
2. How Async Functions Return Promises
3. How to Handle Resolved and Rejected Values
4. Using throw to reject in Async Functions
5. Examples:
   - Example 1: Very Simple (Local Array)
   - Example 2: Medium (Mock API Simulation)
   - Example 3: Detailed / Advanced (Conditional Promises)
6. Summary
====================================================================================================



1) WHAT IS ASYNC FUNCTION?
------------------------------------------
- In JavaScript, the `async` keyword **before a function** means this function **always returns a Promise**, even if you return a normal value.
- Syntax:
```javascript */
async function myFunc() {
  return "Hello";
}
/*

Explanation:

- Calling myFunc() does not return "Hello" directly, it returns a Promise that resolves to "Hello".

- You can handle it using .then() or await.



Example:
*/
async function greet() {
  return "Hello World!";
}
/*
console.log(greet()); // Outputs: Promise { <state>: "fulfilled" }
greet().then(msg => console.log(msg)); // Outputs: "Hello World!"





2) HOW ASYNC FUNCTIONS RETURN PROMISES

- Every async function wraps its returned value into a Promise.

- If you return normally → Promise resolves with that value.

- If you throw an error → Promise rejects with that error.


Example 1:
*/
async function checkUsers() {
  let users = ["Alice"];
  if(users.length > 0) return "Users Found";
  else throw new Error("No Users Found");
}

checkUsers().then(msg => console.log(msg))
            .catch(err => console.log(err.message));
/*
Example 2: 
*/
async function getTasks() {
  let tasks = [];
  if(tasks.length > 0) return "Tasks Found";
  else throw new Error("No Tasks Found");
}

getTasks().then(msg => console.log(msg))
          .catch(err => console.log(err.message));
/*




3) HOW TO HANDLE RESOLVED AND REJECTED VALUES

- You can handle resolved and rejected values using .then() and .catch().

.then() can take two arguments: first for success, second for failure (less common).
.catch() is preferred for handling errors.


Example:
*/
async function fetchData() {
  let items = ["Item1", "Item2"];
  if(items.length > 0) return "Items Found";
  else throw new Error("No Items Found");
}

fetchData().then(
  resolvedValue => console.log("Success:", resolvedValue),
  rejectedValue => console.log("Rejected:", rejectedValue.message)
);
/*
Alternative with catch:

fetchData()
  .then(resolvedValue => console.log("Success:", resolvedValue))
  .catch(err => console.log("Rejected:", err.message));






4) USING THROW TO REJECT IN ASYNC FUNCTIONS

Inside an async function, you can throw an error to reject the Promise.

This is cleaner than returning Promise.reject() manually.


Example 1:
*/
async function checkLogin(user) {
  if(user === "admin") return "Login Successful";
  else throw new Error("Invalid User");
}

checkLogin("guest")
  .then(msg => console.log(msg))
  .catch(err => console.log(err.message)); // "Invalid User"
/*

Example 2:
*/
async function loadData() {
  let data = [];
  if(data.length > 0) return "Data Loaded";
  else throw new Error("Data Not Found");
}

loadData()
  .then(msg => console.log(msg))
  .catch(err => console.log(err.message)); // "Data Not Found"




/*
5) EXAMPLES SUMMARIZED

----- Example 1: Local Array ----- */

async function getLocalUsers() {
  let users = ["John", "Jane"];
  if(users.length > 0) return "Users Found";
  else throw new Error("No Users Found");
}

getLocalUsers().then(msg => console.log(msg))
               .catch(err => console.log(err.message));


// ----- Example 2: Mock API Simulation -----

async function fetchProducts() {
  let products = ["Laptop", "Monitor"];
  if(products.length > 0) return products;
  else throw new Error("No Products Found");
}

fetchProducts().then(list => console.log("Products:", list))
               .catch(err => console.log(err.message));


// ----- Example 3: Conditional Promises -----

async function checkInventory(item) {
  let inventory = { "apple": 10, "banana": 0 };
  if(inventory[item] > 0) return `${item} is available`;
  else throw new Error(`${item} is out of stock`);
}

checkInventory("banana")
  .then(msg => console.log(msg))
  .catch(err => console.log(err.message));

/*
6 SUMMARY

async → before a function always returns a Promise.

await (not in examples yet) → can pause execution until a Promise resolves.

Return value inside async → Promise resolves.

Throwing error inside async → Promise rejects.

Handle resolved/rejected using .then() and .catch().

Advantages:

Cleaner syntax than manual Promise.resolve/Promise.reject.

Better readability for async operations. ====================================================================================================



In this version:  
- Every case from your original text is explained.  
- All **examples are replaced** with **new, realistic examples**.  
- Each concept has **two to three examples**, showing both resolve and reject cases.  
*/
