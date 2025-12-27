/*

====================================================================================================
TOPICS TO STUDY:
1. What is the Fetch API?
2. How fetch returns a representation of the HTTP response
3. Working with Promises in fetch
4. Using then() and catch() with fetch
5. Examples:
   - Example 1: Simple (Local JSON simulation)
   - Example 2: Medium (Mock products API)
   - Example 3: Detailed / Advanced (Filtering links from API)
6. Summary
====================================================================================================




1) WHAT IS THE FETCH API?
------------------------------------------
- The Fetch API is a modern JavaScript interface used to make HTTP requests.
- Unlike `XMLHttpRequest`, it is **Promise-based**, so it integrates seamlessly with `then()` and `catch()`.
- Key features:
  - Returns a **Promise** that resolves to a Response object.
  - Cleaner syntax and better readability.
  - Supports modern async/await syntax.

Example concept:
```javascript */
fetch("https://example.com/api/data")
  .then(response => console.log("Response object:", response))
  .catch(err => console.log("Error:", err));  /*

Explanation: This fetch request returns a Response object, not the JSON directly.


---




2) HOW FETCH RETURNS A REPRESENTATION OF THE HTTP RESPONSE

- When you call fetch(url), it returns a Promise that resolves to a Response object.

The Response object contains:

status → HTTP status code

ok → boolean (true if status is 200-299)

headers → headers of the response

json() → method to parse the body as JSON

text() → method to parse the body as plain text



Example: */

fetch("https://example.com/api/items")
  .then(response => {
    console.log("Status:", response.status);
    console.log("Headers:", response.headers);
    return response.json();
  })
  .then(data => console.log("Parsed JSON:", data))
  .catch(err => console.log(err));





/*
---

3) WORKING WITH PROMISES IN FETCH  

fetch() itself returns a Promise.

To get the data, we must call .json() (or .text(), .blob(), etc.) on the Response object.

.json() also returns a Promise, so you chain another then() to access the actual data.


 Example: */

fetch("https://example.com/api/users")
  .then(response => response.json()) // parse JSON
  .then(users => console.log("Users:", users)) // actual data
  .catch(err => console.log("Error:", err));





/*
---

4) USING THEN() AND CATCH() WITH FETCH

then() → handles the resolved value of a Promise.

catch() → handles errors if the fetch fails.

You can chain multiple then() calls to manipulate data step by step.


Example: */

fetch("https://example.com/api/items")
  .then(response => response.json()) // parse JSON
  .then(items => {
    items.length = 5; // keep only first 5
    return items;
  })
  .then(topItems => console.log("Top 5 items:", topItems))
  .catch(err => console.log("Error:", err));







// 5 EXAMPLES

//----- Example 1: Simple (Local JSON simulation) -----

const getLocalData = () => {
  return new Promise((resolve, reject) => {
    let data = [
      {name: "Alice", age: 25},
      {name: "Bob", age: 30},
      {name: "Charlie", age: 28}
    ];
    if(data.length > 0) resolve(data);
    else reject("No local data found");
  });
};

getLocalData()
  .then(result => console.log("Local data:", result))
  .catch(err => console.log(err));

//Explanation: Simulates fetching local JSON data using a Promise.


//----- Example 2: Medium (Mock products API) -----

fetch("https://example.com/api/products")
  .then(response => response.json())
  .then(products => {
    console.log("All products:", products);
    return products.filter(p => p.category === "electronics");
  })
  .then(electronics => console.log("Electronics only:", electronics))
  .catch(err => console.log("Error fetching products:", err));

// Explanation: Fetches products from a fake API, filters by category "electronics".



// ----- Example 3: Detailed / Advanced (Filtering links from API) -----

fetch("https://example.com/api/links")
  .then(response => response.json())
  .then(allLinks => {
    console.log("All links:", allLinks); // first then: all links
    // Filter only links from "news" section
    return allLinks.filter(link => link.section === "news");
  })
  .then(newsLinks => console.log("News links only:", newsLinks)) // second then: filtered
  .catch(err => console.log("Error fetching links:", err));

// Explanation: Fetches links from an API, first then() logs all links, second then() filters by section.




/*
---

6) SUMMARY

Fetch API → modern interface for HTTP requests

fetch() returns a Promise → resolves to a Response object

Use response.json() to parse JSON (also returns a Promise)

then() → handle resolved value, can chain multiple thens

catch() → handle errors

You can manipulate data step by step with multiple then() calls

Advantages over XHR: cleaner syntax, Promise-based, easier chaining


====================================================================================================

This version:  
- Fully explains **Fetch API, Response object, Promises, then/catch**  
- Uses **original examples** (local data, mock products API, links filtering)  
- Keeps everything **in one organized block**, ready for learning  

*/
