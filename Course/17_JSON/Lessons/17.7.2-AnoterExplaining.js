/*

Complete Structured Guide: AJAX ReadyState & Status

──────────────────────────────
1) READY STATE – REQUEST STATE
──────────────────────────────

Definition:  
`readyState` is a numeric value that indicates the current stage of an AJAX request, from initialization to completion.

Stages of readyState:

| readyState | Stage Name                        | Description |
|------------|----------------------------------|-------------|
| 0          | Request Not Initialized           | The request object is created but no connection has been made. |
| 1          | Server Connection Established     | The connection to the server has been opened. |
| 2          | Request Received                  | The server has received the request. |
| 3          | Processing Request                | The server is currently processing the request. |
| 4          | Request Finished & Response Ready | The request is complete, and the response is available. |

Life Analogy:  
Think of cleaning a house step by step:
- Step 0: Not started yet  
- Step 1: Gather cleaning tools  
- Step 2: Started cleaning  
- Step 3: Organizing things  
- Step 4: House is clean and ready (Completed)





──────────────────────────────
2) STATUS – SERVER RESPONSE STATUS
──────────────────────────────

Definition:  
`status` is a numeric code returned by the server to indicate the outcome of the request—whether it succeeded or failed.

Common Status Codes:

| Code | Status Description       | Explanation |
|------|--------------------------|-------------|
| 200  | OK / Successful Response | Request succeeded, data returned. |
| 201  | Created                  | New resource successfully created. |
| 400  | Bad Request              | The request is malformed. |
| 403  | Forbidden                | Access denied. |
| 404  | Not Found                | Requested resource not found. |
| 500  | Server Error             | Server encountered an internal error. |




/* ================================================================
   3) STEP-BY-STEP AJAX IMPLEMENTATION – WEATHER EXAMPLE
   ================================================================ */

let weatherRequest = new XMLHttpRequest();

// Step 1 – Create Request
// Creates a request object named weatherRequest
// readyState = 0 (Not initialized)

weatherRequest.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY");

// Step 2 – Open Connection
// Opens a connection to the OpenWeatherMap API server
// readyState = 1
// "GET" retrieves weather data for London

weatherRequest.send();

// Step 3 – Send Request
// Sends the request
// readyState = 2 (Request received by server)

weatherRequest.onreadystatechange = function () {
    // Step 4 – Track State Changes
    // Executes every time readyState changes

    // Step 5 – Handle Response
    if (this.readyState === 4 && this.status === 200) {
        console.log("Weather Data Received Successfully");
        console.log(JSON.parse(this.responseText));
    }

    // Condition Explanation:
    // 1. readyState === 4 → request finished
    // 2. status === 200 → response successful
    // Action: Parse and log the weather data
};



/*
────────────────────────────── 4) PRACTICAL EXAMPLE – ORDERING PIZZA ────────────────────────────── */

let pizzaOrder = new XMLHttpRequest();  // readyState = 0

pizzaOrder.open("GET", "PizzaRestaurant");  // readyState = 1

pizzaOrder.send();  // readyState = 2

pizzaOrder.onOrderChange = function() {
    if (this.readyState === 3) {
        console.log("Chef is preparing the pizza...");
    }
    
    if (this.readyState === 4 && this.status === 200) {
        console.log("Pizza delivered successfully");
        console.log(this.response);
    }
    
    if (this.readyState === 4 && this.status === 404) {
        console.log("Restaurant is closed today");
    }
};


/*
────────────────────────────── 5) INSPECTING THE REQUEST OBJECT ──────────────────────────────
*/
console.log(myRequest);

// Example Output:
XMLHttpRequest {
  readyState: 0,       // 0, 1, 2, 3, or 4 depending on stage
  status: 0,           // 0, 200, 404, etc.
  statusText: "",      // Server status text
  responseText: "",    // Response data (if received)
  // ... other properties
}

// Note: Initially, readyState = 0



/*
────────────────────────────── 6) FULL PROCESS SUMMARY ──────────────────────────────

Step	Action	readyState	Status

1	Create request object	0	0
2	Open connection (.open())	1	0
3	Send request (.send())	2	0
4	Server processing	3	0
5	Response ready	4	200


Golden Condition for Success: */

if (readyState === 4 && status === 200) {
    // Safe to use response data
}
/*
Key Differences:

readyState → tracks the stage of your request (0–4)

status → tracks the server response code (200, 404, etc.)


Understanding this structured flow is essential to mastering AJAX and asynchronous JavaScript. */

