/*
================================================================================
MAKING REQUESTS VIA AJAX — XMLHttpRequest (ONE SQUARE FILE)
================================================================================

1) MAIN TOPICS COVERED
---------------------
• What Ajax is
• Why Ajax is used
• The XMLHttpRequest object
• Ajax request flow (step-by-step)
• Asynchronous behavior
• HTTP methods used in Ajax
• Request configuration (headers)
• Complete working example
• Key rules and best practices
• Short summary

================================================================================
2) WHAT IS AJAX?
================================================================================

AJAX stands for:
Asynchronous JavaScript And XML

Despite its name, Ajax is NOT limited to XML. Today, it is mostly used
with JSON, but it can also work with XML, HTML, or plain text.

--------------------------------------------------
WHAT AJAX DOES
--------------------------------------------------
Ajax allows a web page to:
• Communicate with a server in the background
• Send HTTP requests without reloading the page
• Receive and process data asynchronously
• Update parts of the page dynamically

--------------------------------------------------
WHY AJAX IS IMPORTANT
--------------------------------------------------
• Faster user experience
• No full-page reloads
• Reduced server load
• Dynamic web applications
• Foundation of modern SPAs (Single Page Applications)

--------------------------------------------------
AJAX COMMUNICATION FLOW (ILLUSTRATION)
--------------------------------------------------

Browser (JavaScript)
        |
        |  XMLHttpRequest
        |  (Async HTTP request)
        v 
      Server
        |
        |  Response (XML / JSON / HTML)
        v
Browser (JS updates UI)


================================================================================
3) THE XMLHttpRequest OBJECT
================================================================================

The XMLHttpRequest object is the original and fundamental API used to
make Ajax requests in browsers.

• Developed by Microsoft
• Later adopted by all major browsers
• Currently standardized by the W3C
• Still supported and widely used

NOTE:
Although the Fetch API is newer and simpler, understanding
XMLHttpRequest is essential for learning Ajax fundamentals.


================================================================================
4) FLOW OF AN AJAX REQUEST (STEP-BY-STEP)
================================================================================

Every Ajax request using XMLHttpRequest follows the SAME pattern.

--------------------------------------------------
STEP 1: CREATE THE REQUEST OBJECT
-------------------------------------------------- */

const request = new XMLHttpRequest();

/* Purpose:
• Creates an HTTP request object
• This object manages the entire request lifecycle

--------------------------------------------------
STEP 2: DEFINE THE RESPONSE HANDLER
-------------------------------------------------- */

request.onload = (event) => {
  console.log('Response loaded');
};

/* Purpose:
• Runs AFTER the server responds successfully
• Used to process the response data
• Ensures asynchronous behavior

IMPORTANT:
• onload is triggered only when the request is complete
• It does NOT block the execution of other JavaScript code

--------------------------------------------------
STEP 3: OPEN THE REQUEST
-------------------------------------------------- */

request.open('GET', 'content/data.xml');

/* Parameters:
1) HTTP method (GET, POST, PUT, DELETE, etc.)
2) URL of the resource
3) Optional: async flag (default = true)

Purpose:
• Prepares the request
• Does NOT send it yet

--------------------------------------------------
STEP 4: CONFIGURE THE REQUEST (OPTIONAL)
-------------------------------------------------- */

request.setRequestHeader('Accept', 'text/html');

/* Purpose:
• Adds HTTP headers
• Must be called AFTER open()
• Must be called BEFORE send()

Common Headers:
• Accept
• Content-Type
• Authorization

--------------------------------------------------
STEP 5: SEND THE REQUEST
-------------------------------------------------- */

request.send();

/* Purpose:
• Sends the HTTP request to the server
• Optionally sends data (for POST, PUT, etc.)
• Starts the actual network communication



================================================================================
5) COMPLETE WORKING EXAMPLE
================================================================================ */

'use strict';

const request = new XMLHttpRequest();   // 1) Create request object

request.onload = () => {                // 2) Define response handler
  console.log('Response loaded');
  console.log(request.responseText);   // Server response
};

request.open(                           // 3) Open request
  'GET',
  'content/data.xml'
);

request.setRequestHeader(               // 4) Configure headers
  'Accept',
  'text/xml'
);

request.send();                         // 5) Send request


/*
================================================================================
6) IMPORTANT RULES & NOTES
================================================================================

• open() MUST be called before send()
• setRequestHeader() MUST be called after open()
• Ajax requests are asynchronous by default
• Server must allow cross-origin requests (CORS)
• Response data can be accessed via:
  - request.responseText (string)
  - request.responseXML (XML document, if applicable)
• Errors must be handled explicitly (status codes)


================================================================================
7) COMMON HTTP METHODS IN AJAX
================================================================================

GET
• Retrieves data
• No request body
• Cached by browsers

POST
• Sends data to server
• Used for forms and uploads

PUT
• Updates existing data

DELETE
• Removes data

================================================================================
8) SHORT SUMMARY
================================================================================

• Ajax allows background communication with servers
• XMLHttpRequest is the foundation of Ajax
• Every Ajax request follows 5 fixed steps
• Requests are asynchronous and non-blocking
• Headers and data can be configured
• Modern apps often use Fetch, but XMLHttpRequest
  remains essential knowledge

================================================================================
END OF FILE
================================================================================ */
