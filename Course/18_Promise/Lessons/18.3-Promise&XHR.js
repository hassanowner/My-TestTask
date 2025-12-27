/*

====================================================================================================
TOPICS TO STUDY:
1. What is a Promise?
2. What is XHR (XMLHttpRequest)?
3. How to use Promises with XHR (code explanation)
4. Key methods: resolve, reject, then, catch
5. Examples: 
   - Example 1: Very Simple (local calculation)
   - Example 2: Medium (mock employee API)
   - Example 3: Detailed / Advanced (simultaneous file reads simulation)
6. Summary and Best Practices
====================================================================================================


1) WHAT IS A PROMISE?
- A Promise in JavaScript represents the eventual success or failure of an asynchronous operation.
- States:
  1. Pending → not yet completed
  2. Resolved/Fulfilled → operation succeeded
  3. Rejected → operation failed
- Advantages:
  - Avoids nested callbacks ("Callback Hell")
  - Organizes async operations
  - Supports chaining with then() and catch()

Example concept:
```javascript */

let examplePromise = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("Calculation succeeded") : reject("Calculation failed");
});
examplePromise.then(msg => console.log(msg)).catch(err => console.log(err));  /*




2) WHAT IS XHR (XMLHttpRequest)?

XHR is used to send HTTP requests and fetch/send data asynchronously.

Properties:

readyState → 0-4

status → HTTP status (200 = OK, 404 = Not Found)

responseText → server response


## Steps:

1. Create XHR object

2. Set onload/onreadystatechange handlers

3. Open request

4. Send request

5. Handle success/failure






3) USING PROMISES WITH XHR               */

const getData = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if(this.readyState === 4 && this.status === 200){
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("Data not found"));
      }
    };
    xhr.open("GET", url);
    xhr.send();
  });
};

getData("https://example.com/api/tasks")
  .then(result => console.log("First task:", result[0]))
  .catch(err => console.log(err));
/*

resolve() → when operation succeeds

reject() → when operation fails

then() → handle success and chain

catch() → handle errors




4) EXAMPLES

----- Example 1: Simple (Local Calculation) ----- */

const calculateSum = (numbers) => {
  return new Promise((resolve, reject) => {
    if(numbers.length === 0) reject("No numbers to sum");
    else {
      let sum = numbers.reduce((a,b) => a+b, 0);
      resolve(sum);
    }
  });
};

calculateSum([5, 10, 15])
  .then(result => console.log("Sum:", result))
  .catch(err => console.log(err));

// Explanation: Resolves the sum of an array of numbers locally, rejects if empty array.


//----- Example 2: Medium (Mock Employee API) -----

const fetchEmployees = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if(this.readyState === 4 && this.status === 200){
        resolve(JSON.parse(this.responseText));
      } else reject("Could not fetch employees");
    };
    xhr.open("GET", url);
    xhr.send();
  });
};

fetchEmployees("https://example.com/api/employees")
  .then(employees => {
    console.log("First employee:", employees[0].name);
    return employees.filter(emp => emp.department === "Engineering");
  })
  .then(engineers => console.log("Engineers:", engineers))
  .catch(err => console.log(err));

// Explanation: Fetches a mock list of employees, prints first employee, then filters engineers.



// ----- Example 3: Detailed / Advanced (Simultaneous File Reads Simulation) -----

// Function to fetch links from a given URL (simulated API returning JSON)

const fetchLinks = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText)); // Success: return all links
      } else {
        reject("Could not fetch links");
      }
    };
    xhr.open("GET", url);
    xhr.send();
  });
};

// Example usage
fetchLinks("https://example.com/api/links")
  .then(allLinks => {
    console.log("All links:", allLinks); // First then: all links
    // Filter only links belonging to a specific section, e.g., "news"
    return allLinks.filter(link => link.section === "news");
  })
  .then(newsLinks => {
    console.log("News links only:", newsLinks); // Second then: filtered links
  })
  .catch(err => console.log("Error:", err));
// Explanation: Simulates asynchronous file reads using Promises,
// resolves all files if successful, else goes to catch. Uses Promise.all to wait for all. /*

// !! Note: You can change name `then( )` from one to another,
// everytime you use `then` 

/*

5) SUMMARY

Promise → manage async operations cleanly

XHR → send HTTP requests

then() → handle success, chainable

catch() → handle errors

Promise.all() → combine multiple Promises, wait for all to resolve

Best practices: always handle errors, modular async functions, consider Fetch API for modern projects
====================================================================================================


This version:  
- Replaces **all examples** with **original, realistic programming examples**  
- Keeps everything **in one single box**  
- Includes **concepts, XHR explanation, code explanation, three examples, summary**  
*/
  
