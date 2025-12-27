/*

============================================================
AJAX Ready State and Status Codes – Conceptual Guide
============================================================

Introduction
------------
This guide explains the concepts of AJAX request states (readyState)
and HTTP status codes (status), focusing on understanding how they work
conceptually in web development.

No programming instructions, only fundamental ideas with analogies.


------------------------------------------------------------
1) Ready State – Status of the Request
------------------------------------------------------------

The readyState property shows the current **stage of the request**.
It goes through multiple stages from creation to response.

States:

[0] Request Not Initialized
- The request has been created but not yet opened.

[1] Server Connection Established
- A connection to the server has been established.

[2] Request Received
- The server has received the request.

[3] Processing Request
- The server is working on the request.

[4] Request Finished and Response Ready
- The server has finished processing and the response is ready to use.

------------------------------------------------------------
Analogy for Ready State
------------------------------------------------------------

Imagine you order a package online:

[0] You decided to buy but haven’t submitted the order.  
[1] The store confirms your order is received.  
[2] The warehouse receives your order.  
[3] The package is being prepared and packed.  
[4] The delivery is ready, and you can pick it up.

This is exactly how readyState tracks a request lifecycle.





------------------------------------------------------------
2) Status – HTTP Response Code
------------------------------------------------------------

Status is a number that tells you **what happened with the request**.

Key Codes:

[200] Response is Successful
- Everything went fine
- Data is returned as expected

[404] Not Found
- The requested resource does not exist on the server


------------------------------------------------------------
Analogy for Status Codes
------------------------------------------------------------

Think of it like a restaurant:

200 → Your meal is served perfectly   
404 → The dish you ordered is not on the menu 

Status codes are universal signals to understand the outcome quickly.


------------------------------------------------------------
3) How Ready State and Status Work Together
------------------------------------------------------------

- readyState shows **the progress of the request**
- status shows **the result after completion**

Combined conceptually:
- When readyState = 4 (finished) AND status = 200 (success), you know the request was completed successfully and data is ready.

------------------------------------------------------------
Analogy Combined
------------------------------------------------------------

Order a pizza :

- readyState tracks each step: ordered, received, cooking, ready
- status tells you the outcome: delivered successfully (200) or not available (404)





------------------------------------------------------------
4) Practical Mental Model
------------------------------------------------------------

Imagine a messenger (XMLHttpRequest):

- You tell the messenger to get a package from the server.
- readyState tracks where the messenger is:
  - Has he left? Reached warehouse? Picking up item? Returning?
- status tells you the result when the messenger comes back:
  - Successful? Couldn’t find the package?

This helps web developers **understand the process without guessing**.




------------------------------------------------------------
5) Summary
------------------------------------------------------------

- readyState = stage/progress of the request (0 → 4)  
- status = result of the request (200, 404, etc.)  
- Together they ensure:
  - Request is complete
  - Response is usable
- Analogy: ordering and receiving a package or meal

============================================================
*/



// ============================
// Example: Ready State with JSONPlaceholder
// ============================

let req = new XMLHttpRequest(); 
console.log(req.readyState); // 0 - Request not initialized

req.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true); 
console.log(req.readyState); // 1 - Server connection established

req.onload = function() {
  if (req.readyState === 4) {
    console.log("Response ready:", req.responseText); // 4 - Request finished, response ready
  }
};
req.send();


// ============================
// Example: Status Handling
// ============================

req.onload = function() {
  if (req.status === 200) {
    console.log("Success! Data:", req.responseText);
  } else if (req.status === 404) {
    console.log("Page not found");
  } else {
    console.log("Other status:", req.status);
  }
};


// ============================
// Example: Ready State and Status Together
// ============================

req.onreadystatechange = function() {
  if (req.readyState === 4) {
    if (req.status === 200) {
      console.log("Request succeeded:", req.responseText);
    } else {
      console.log("Error occurred:", req.status);
    }
  }
};
req.send();


// ============================
// Practical Mental Model Example
// ============================

let messenger = new XMLHttpRequest();
messenger.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
messenger.onreadystatechange = function() {
  console.log("Stage:", messenger.readyState, "Status:", messenger.status);
};
messenger.send();


// ============================
// Summary Example
// ============================

let request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    console.log("Successfully completed:", request.responseText);
  }
};
request.send();
