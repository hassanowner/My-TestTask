/*
============================================================
JAVASCRIPT PROMISES – COMPLETE GUIDE
============================================================

1) WHAT IS A PROMISE?
---------------------
- Represents a value available now or in the future.
- Handles async operations: API calls, timers, file reads.
- States:
  1. Pending → not yet completed
  2. Fulfilled (Resolved) → success
  3. Rejected → failure
- Prevents callback hell, supports chaining.

Example:
let p = new Promise((resolve, reject) => {
  let ok = true;
  ok ? resolve("Success") : reject("Failed");
});
p.then(msg => console.log(msg)).catch(err => console.log(err));

------------------------------------------------------------
2) PROMISE CREATION & HANDLING
-------------------------------
- Executor function runs immediately.
- resolve(value) → triggers .then()
- reject(reason) → triggers .catch()
- Only first resolve/reject counts.

Methods:
- then(onFulfilled, onRejected) → handle success & optional failure
- catch(onRejected) → handle failure
- finally(callback) → always executes

Chaining:
promise
  .then(result => process(result))
  .then(nextResult => process(nextResult))
  .catch(err => handle(err))
  .finally(() => console.log("Done"));

------------------------------------------------------------
3) PROMISE EXAMPLES
-------------------
Example 1: Simple
new Promise((resolve, reject) => resolve([1,2,3]))
  .then(arr => console.log(arr));

Example 2: Two-step
new Promise((resolve, reject) => resolve([1,2,3,4]))
  .then(items => items.slice(0,3))
  .then(selected => console.log(selected));

Example 3: Full chain
new Promise((resolve, reject) => resolve([1,2,3,4]))
  .then(items => items.slice(0,3))
  .then(items => items.slice(0,1))
  .then(final => console.log(final))
  .catch(err => console.log(err))
  .finally(() => console.log("Operation Completed"));

------------------------------------------------------------
4) XHR + PROMISE
-----------------
- XHR is old way to fetch HTTP data.
- Promises wrap async XHR requests.

Example:
const getData = url =>
  new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if(this.readyState === 4 && this.status === 200) resolve(JSON.parse(this.responseText));
      else reject("Data not found");
    };
    xhr.open("GET", url);
    xhr.send();
  });
getData("https://example.com/api/tasks")
  .then(result => console.log(result))
  .catch(err => console.log(err));

------------------------------------------------------------
5) FETCH API + PROMISE
----------------------
- Modern replacement for XHR, fully Promise-based.
- fetch(url) → Promise resolving to Response object.
- Use response.json() → returns another Promise with parsed data.

Example:
fetch("https://example.com/api/items")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

Example with chaining:
fetch("https://example.com/api/items")
  .then(res => res.json())
  .then(items => items.filter(i => i.category==="electronics"))
  .then(filtered => console.log(filtered))
  .catch(err => console.log(err));

------------------------------------------------------------
6) PROMISE.ALL / ALLSETTLED / RACE
----------------------------------

1) Promise.all([p1,p2,...])
- Waits for all promises to resolve.
- Rejects immediately if any promise rejects.
- Order of results = order of array.

Example:
Promise.all([p1, p2, p3])
  .then(results => console.log(results))
  .catch(err => console.log(err));

2) Promise.allSettled([p1,p2,...])
- Waits for all to finish, regardless of resolve/reject.
- Returns array of {status:"fulfilled", value} or {status:"rejected", reason}.

Example:
Promise.allSettled([p1,p2,p3])
  .then(results => console.log(results));

3) Promise.race([p1,p2,...])
- Resolves or rejects as soon as the first promise settles.
- Only first outcome is considered.

Example:
Promise.race([fast, slow, fail])
  .then(res => console.log("First finished:", res))
  .catch(err => console.log("First rejected:", err));

------------------------------------------------------------
7) BEST PRACTICES
-----------------
- Use descriptive parameter names in then/catch.
- Always return values for chaining.
- Catch errors centrally.
- Use finally for cleanup/logging.
- Prefer Fetch API over XHR in modern projects.

------------------------------------------------------------
8) SUMMARY TABLE
----------------
| Method           | Executes when                       |
|------------------|------------------------------------|
| then()            | Promise resolved                    |
| catch()           | Promise rejected                    |
| finally()         | Always, after then/catch            |
| Promise.all()     | All resolved, else rejects first    |
| Promise.allSettled() | All finished, results array       |
| Promise.race()    | First settled promise only          |

------------------------------------------------------------
Mental Model:
---------------
Promise
 ├─ resolve → then → then → ... → finally
 ├─ reject  → catch → finally
 └─ finally → always executes

============================================================
*/
