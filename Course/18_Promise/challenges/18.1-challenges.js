/* =========================
   PROMISE CHALLENGE 1 – Basic Resolve / Reject
========================= */
/*
Question:
Create a promise that checks if a user is logged in.
- If `isLoggedIn = true`, resolve with "Welcome User!".
- If `isLoggedIn = false`, reject with "Please log in!".
Handle it using `.then()` and `.catch()` to print the message.
*/

const loginCheck = new Promise((resolve, reject) => {
    let isLoggedIn = true; // change to false to test rejection
    if(isLoggedIn){
        resolve("Welcome User!");
    } else {
        reject("Please log in!");
    }
});

loginCheck
    .then(msg => console.log("Success:", msg))
    .catch(err => console.log("Error:", err));

// Expected Output (if isLoggedIn = true):
// Success: Welcome User!
// Expected Output (if isLoggedIn = false):
// Error: Please log in!



/* =========================
   PROMISE CHALLENGE 2 – Chaining Promises
========================= */
/*
Question:
You have a promise that returns a list of products: ['Laptop', 'Mouse', 'Keyboard'].
- First then() → pick the first 2 products.
- Second then() → select the first product to ship.
- Print each step in the chain.
- Handle errors if the list is empty.
*/

const productPromise = new Promise((resolve, reject) => {
    let products = ['Laptop', 'Mouse', 'Keyboard'];
    if(products.length > 0){
        resolve(products);
    } else {
        reject(Error("No products available"));
    }
});

productPromise
    .then(items => {
        console.log("Step 1 - All Products:", items);
        return items.slice(0, 2); // pick first 2
    })
    .then(selected => {
        console.log("Step 2 - Selected Products:", selected);
        return selected[0]; // pick first to ship
    })
    .then(finalItem => console.log("Step 3 - Final Item to ship:", finalItem))
    .catch(err => console.log("Error:", err))
    .finally(() => console.log("Operation Completed"));

// Expected Output:
// Step 1 - All Products: Laptop,Mouse,Keyboard
// Step 2 - Selected Products: Laptop,Mouse
// Step 3 - Final Item to ship: Laptop
// Operation Completed



/* =========================
   PROMISE CHALLENGE 3 – Resolve Multiple Values
========================= */
/*
Question:
Create a promise that calculates exam results:
- If score >= 50 → resolve an object {status: "Passed", grade: "A"}.
- Else → reject an object {status: "Failed", grade: "F"}.
- Print the status and grade using .then() and .catch().
*/

const examResult = new Promise((resolve, reject) => {
    let score = 65; // change to 40 to test rejection
    if(score >= 50){
        resolve({status: "Passed", grade: "A"});
    } else {
        reject({status: "Failed", grade: "F"});
    }
});

examResult
    .then(result => console.log(`Success: ${result.status}, Grade: ${result.grade}`))
    .catch(result => console.log(`Error: ${result.status}, Grade: ${result.grade}`));

// Expected Output (if score = 65):
// Success: Passed, Grade: A
// Expected Output (if score = 40):
// Error: Failed, Grade: F
