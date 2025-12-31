/* =========================
   ASYNC/AWAIT CHALLENGE 1 – Basic Async Function & Error Handling
========================= */

/*
Task:
1) Create an async function `calculateDiscountedPrice(price, discount)`:
   - If price > 0 and discount >= 0 → return discounted price (price - discount)
   - If invalid input → throw an error
2) Call the function with valid and invalid inputs
3) Use then/catch to handle the result
*/

async function calculateDiscountedPrice(price, discount) {
    if (price > 0 && discount >= 0) {
        return price - discount;
    } else {
        throw new Error("Invalid price or discount");
    }
}

// Example usage (valid input)
calculateDiscountedPrice(100, 20)
    .then(result => console.log("Discounted Price:", result))
    .catch(err => console.log("Error:", err.message));

// Example usage (invalid input)
calculateDiscountedPrice(-10, 5)
    .then(result => console.log("Discounted Price:", result))
    .catch(err => console.log("Error:", err.message));

// Expected Output:
// Discounted Price: 80
// Error: Invalid price or discount


/* =========================
   ASYNC/AWAIT CHALLENGE 2 – Await with Rejected Promises and Inline Catch
========================= */

/*
Task:
1) Create a function `fetchOrderStatus(orderId)` that returns a Promise:
   - Resolves with "Order Completed" if orderId exists
   - Rejects with "Order Not Found" if orderId does not exist
2) Create an async function `checkOrder()`:
   - Use await to get the result
   - Handle rejection using inline catch
3) Log start, result, and end messages
*/

function fetchOrderStatus(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderId === 123) resolve("Order Completed");
            else reject("Order Not Found");
        }, 2000);
    });
}

async function checkOrder(orderId) {
    console.log("Checking order...");
    let result = await fetchOrderStatus(orderId).catch(err => err);
    console.log(result);
    console.log("Check finished");
}

// Example usage:
checkOrder(123);
checkOrder(999);

// Expected Output (after 2 seconds each):
// Checking order...
// Order Completed
// Check finished
// Checking order...
// Order Not Found
// Check finished



/* =========================
   ASYNC/AWAIT CHALLENGE 3 – Try/Catch/Finally with Multiple Async Calls
========================= */

/*
Task:
1) Create two async functions:
   - fetchUserData() → resolves "User Data Loaded" after 1s
   - fetchUserOrders() → rejects "Failed to load orders" after 1.5s
2) Create an async function main() that:
   - Uses try/catch/finally
   - Awaits both functions sequentially
   - Logs success or error messages
   - Logs a final message in finally
*/

function fetchUserData() {
    return new Promise(res => setTimeout(() => res("User Data Loaded"), 1000));
}

function fetchUserOrders() {
    return new Promise((res, rej) => setTimeout(() => rej("Failed to load orders"), 1500));
}

async function main() {
    try {
        let userData = await fetchUserData();
        console.log(userData);

        let userOrders = await fetchUserOrders();
        console.log(userOrders);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("All async operations finished");
    }
}

// Example usage:
main();

// Expected Output (after ~1.5s):
// User Data Loaded
// Error: Failed to load orders
// All async operations finished
