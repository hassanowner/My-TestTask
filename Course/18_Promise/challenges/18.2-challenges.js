/* =========================
   PROMISE CHALLENGE 1 – Using XHR with Promises
========================= */

/*
Task:
- Create a function fetchTasks(url) that returns a Promise using XMLHttpRequest.
- If readyState is 4 and status is 200 → resolve with parsed JSON data.
- Otherwise → reject with an error message.
- Use then() to print the first task.
- Use catch() to handle errors.
*/

const fetchTasks = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject("Failed to fetch tasks");
            }
        };
        xhr.open("GET", url);
        xhr.send();
    });
};

// Example usage:
fetchTasks("https://example.com/api/tasks")
    .then(tasks => console.log("First task:", tasks[0]))
    .catch(err => console.log("Error:", err));

// Expected Output (if URL responds with tasks array):
// First task: {id: 1, title: "Task 1", completed: false}
// If fails:
// Error: Failed to fetch tasks




/* =========================
   PROMISE CHALLENGE 2 – Using Fetch API and Chaining
========================= */

/*
Task:
- Use fetch() to get a mock products API.
- Parse the JSON response.
- Then filter products in category "electronics".
- Then print the names of the first 3 electronics products.
- Handle errors with catch().
*/

fetch("https://example.com/api/products")
    .then(response => response.json())
    .then(products => {
        return products.filter(p => p.category === "electronics");
    })
    .then(electronics => console.log("Top electronics:", electronics.slice(0, 3).map(p => p.name)))
    .catch(err => console.log("Error fetching products:", err));

// Expected Output:
// Top electronics: ["Laptop", "Smartphone", "Tablet"]
// Or if fetch fails:
// Error fetching products: [error message]



/* =========================
   PROMISE CHALLENGE 3 – Promise.all, allSettled, and race
========================= */

/*
Task:
1) Create three Promises:
   - fastTask → resolves "Fast Done" after 1s
   - slowTask → resolves "Slow Done" after 3s
   - failTask → rejects "Failed Task" after 2s
2) Use Promise.all to run all three. Log results or error.
3) Use Promise.allSettled to log status of all three.
4) Use Promise.race to log the first settled promise.
*/

const fastTask = new Promise(res => setTimeout(() => res("Fast Done"), 1000));
const slowTask = new Promise(res => setTimeout(() => res("Slow Done"), 3000));
const failTask = new Promise((res, rej) => setTimeout(() => rej("Failed Task"), 2000));

// Promise.all
Promise.all([fastTask, slowTask, failTask])
    .then(results => console.log("Promise.all results:", results))
    .catch(err => console.log("Promise.all rejected:", err));

// Promise.allSettled
Promise.allSettled([fastTask, slowTask, failTask])
    .then(results => console.log("Promise.allSettled results:", results));

// Promise.race
Promise.race([fastTask, slowTask, failTask])
    .then(result => console.log("Promise.race resolved:", result))
    .catch(err => console.log("Promise.race rejected:", err));

// Expected Output:
// Promise.all rejected: Failed Task
// Promise.allSettled results: [
//   {status: "fulfilled", value: "Fast Done"},
//   {status: "fulfilled", value: "Slow Done"},
//   {status: "rejected", reason: "Failed Task"}
// ]
// Promise.race resolved: Fast Done
