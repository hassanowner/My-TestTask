/*

Complete Explanation of resolve / reject and .then() in JavaScript Promises
============================================================================

This is a clear and structured explanation of your Promise example, focusing on:
- Naming resolve / reject
- What values they can receive
- Applying the same concept to .then()

---------------------------------------------------------------------------
1) resolve & reject (Names Are Changeable)
---------------------------------------------------------------------------

In this code:   */

const simplePromise = new Promise((resolve, reject) => {
    let connected = true;
    if (connected) {
        resolve("Connected!");
    } else {
        reject("Failed to connect!");
    }
});
/*

IMPORTANT NOTE:
- resolve and reject are just function names
- You can rename them to ANY valid identifier
- BUT their POSITION (order) can NEVER change

Golden Rule:

First parameter  → Success (Fulfilled)
Second parameter → Failure (Rejected)

Example with different names: */

const simplePromise = new Promise((success, failure) => {
    let connected = true;
    if (connected) {
        success("Connected!"); 
        // Promise state--> Fulfilled -> [name =success, value= "Connected!"]
    } else {
        failure("Failed to connect!");
        // Promise state--> Rejected -> [name =failure, value= "Failed to connect!"]
    }
});
/*
Or even: */

const simplePromise = new Promise((ok, error) => {
    let connected = true;
    ok("Connected!");
});
/*
The NAME does not matter   
The POSITION (order) defines the meaning 




---------------------------------------------------------------------------
2) What happens when resolve() or reject() is called?
---------------------------------------------------------------------------

When resolve(value) is called:
- The Promise state becomes FULFILLED
- The value is sent to the success handler
- Any reject() after this is ignored

When reject(reason) is called:
- The Promise state becomes REJECTED
- The reason is sent to the error handler
- Any resolve() after this is ignored

IMPORTANT:

Only the FIRST call counts.
All subsequent resolve/reject calls are ignored.




---------------------------------------------------------------------------
3) What values can be passed into resolve() or reject()?
---------------------------------------------------------------------------

You can pass ANY JavaScript value.

Examples for resolve(): */

resolve("text");
resolve(100);
resolve(true);
resolve({ name: "Ali", age: 25 });
resolve([1, 2, 3]);
resolve(null);
resolve(undefined);
resolve(() => console.log("Function"));
resolve(Promise.resolve("Another Promise"));

// Examples for reject():

reject("error message");
reject(new Error("Something went wrong"));
reject(404);
reject({ code: 500, message: "Server Error" });
reject(null);

/*

Best Practice:

- Always pass an Error object to reject():
- reject(new Error("Connection failed"));




---------------------------------------------------------------------------
4) .then() follows the SAME rule (Names are changeable)
---------------------------------------------------------------------------

Your code: */

simplePromise.then(
    value => console.log("Success:", value),
    error => console.log("Failure:", error)
);

/* Rules:

- First parameter in .then() → handles SUCCESS
- Second parameter in .then() → handles FAILURE

You can rename the parameters freely: */

simplePromise.then(
    successValue => console.log(successValue),
    failureReason => console.log(failureReason)
);

// OR:

simplePromise.then(
    data => console.log("OK:", data),
    err => console.log("ERROR:", err)
);

/*
Mapping rule:

resolve(value) → first function in .then()
reject(reason) → second function in .then() or .catch()




---------------------------------------------------------------------------
5) Mental Model (Very Important)
---------------------------------------------------------------------------

resolve(value)  → then(successCallback)
reject(reason)  → then(_, errorCallback) OR catch(errorCallback)

Whatever you pass into resolve()
will be received by the success callback.

Whatever you pass into reject()
will be received by the error callback.



---------------------------------------------------------------------------
6) Short Final Summary
---------------------------------------------------------------------------

- resolve and reject names do NOT matter
- Order (position) ALWAYS matters
- Any JavaScript value can be passed
- Only the first resolve or reject is executed
- .then() follows the same positional rule exactly

============================================================================ */
