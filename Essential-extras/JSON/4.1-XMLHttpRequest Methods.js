/*
================================================================================
XMLHttpRequest METHODS — FULL ONE-BY-ONE EXPLANATION (ONE SQUARE FILE)
================================================================================

This file explains ALL important methods of the XMLHttpRequest object
one by one.  
For EACH method, you will find:
• What the method is
• What it does
• How it works
• Why it is useful
• Basic rules
• A simple example

================================================================================
1) abort()
================================================================================

WHAT IT IS  
abort() is a method used to immediately cancel an ongoing HTTP request.

WHAT IT DOES  
• Stops the request before it finishes
• Terminates network activity
• The server response is ignored

HOW IT WORKS  
When abort() is called:
• The request state changes to aborted
• No response data is processed
• onload will NOT be called

WHY IT IS USEFUL  
• Cancel requests when the user navigates away
• Stop unnecessary network traffic
• Prevent outdated requests from finishing

BASIC RULES  
• Can only cancel a request that has already been sent
• Does nothing if the request is already completed

EXAMPLE
-------------------------------------------------- */
const request = new XMLHttpRequest();
request.open('GET', 'data.json');
request.send();

// Cancel the request
request.abort();
/* --------------------------------------------------

================================================================================
2) getAllResponseHeaders()
================================================================================

WHAT IT IS  
A method that returns ALL HTTP response headers sent by the server.

WHAT IT DOES  
• Returns response headers as a single string
• Headers are separated by line breaks

HOW IT WORKS  
• Can only be called AFTER the response is received
• Headers include metadata like content type, cache info, etc.

WHY IT IS USEFUL  
• Debugging responses
• Reading server metadata
• Understanding server behavior

BASIC RULES  
• Returns null if request not finished
• Headers are read-only

EXAMPLE
-------------------------------------------------- */
request.onload = () => {
  console.log(request.getAllResponseHeaders());
};
/* --------------------------------------------------

================================================================================
3) getResponseHeader(header)
================================================================================

WHAT IT IS  
A method that retrieves the value of ONE specific response header.

WHAT IT DOES  
• Returns the value of a single HTTP header
• Header name is passed as a parameter

HOW IT WORKS  
• Searches response headers by name
• Returns null if the header does not exist

WHY IT IS USEFUL  
• Check Content-Type
• Read server-side tokens
• Handle caching or authentication

BASIC RULES  
• Header names are case-insensitive
• Only available after response is received

EXAMPLE
-------------------------------------------------- */
request.onload = () => {
  console.log(request.getResponseHeader('Content-Type'));
};
/* --------------------------------------------------

================================================================================
4) open(method, url, async, user, password)
================================================================================

WHAT IT IS  
The method that INITIALIZES an HTTP request.

WHAT IT DOES  
• Defines request type
• Defines request URL
• Defines sync or async behavior
• Optionally defines credentials

HOW IT WORKS  
This method prepares the request but does NOT send it.

PARAMETERS  
1) method   → HTTP method (GET, POST, etc.)
2) url      → Target URL
3) async    → true (async) or false (sync)
4) user     → Username (optional)
5) password → Password (optional)

WHY IT IS USEFUL  
• Required before sending any request
• Defines how and where the request goes

BASIC RULES  
• MUST be called before send()
• Headers must be set AFTER open()

EXAMPLE
-------------------------------------------------- */
request.open('GET', '/data.xml', true);
/* --------------------------------------------------

================================================================================
5) overrideMimeType(mime)
================================================================================

WHAT IT IS  
A method that overrides the MIME type returned by the server.

WHAT IT DOES  
• Forces the browser to interpret the response as a specific type

HOW IT WORKS  
• Changes how responseText or responseXML is parsed
• Does NOT change server behavior, only client interpretation

WHY IT IS USEFUL  
• Fix incorrect server MIME types
• Force text/xml or application/json handling

BASIC RULES  
• Must be called AFTER open()
• Must be called BEFORE send()

EXAMPLE
-------------------------------------------------- */
request.open('GET', 'data.xml');
request.overrideMimeType('text/xml');
request.send();
/* --------------------------------------------------

================================================================================
6) send()
================================================================================

WHAT IT IS  
The method that SENDS the HTTP request to the server.

WHAT IT DOES  
• Starts the actual network request
• Triggers communication with the server

HOW IT WORKS  
• After calling send(), the request is active
• Response is handled asynchronously

WHY IT IS USEFUL  
• Without send(), no request is made
• Final step of request setup

BASIC RULES  
• Must be called AFTER open()
• Headers must already be configured

EXAMPLE
-------------------------------------------------- */
request.open('GET', '/data.json');
request.send();
/* --------------------------------------------------

================================================================================
7) send(data)
================================================================================

WHAT IT IS  
A variation of send() that sends data to the server.

WHAT IT DOES  
• Sends request body data
• Commonly used with POST and PUT

HOW IT WORKS  
• Data is sent as part of the HTTP body
• Can send:
  - FormData
  - JSON
  - Plain text

WHY IT IS USEFUL  
• Sending form data
• Uploading information
• API communication

BASIC RULES  
• GET requests should NOT send data
• Content-Type header should match data format

EXAMPLE
-------------------------------------------------- */
const data = 'name=John&age=30';

request.open('POST', '/submit');
request.setRequestHeader(
  'Content-Type',
  'application/x-www-form-urlencoded'
);
request.send(data);
/*--------------------------------------------------

================================================================================
8) setRequestHeader(header, value)
================================================================================

WHAT IT IS  
A method used to set HTTP request headers.

WHAT IT DOES  
• Adds or modifies request headers
• Sends metadata to the server

HOW IT WORKS  
• Headers are attached to the request
• Sent together with the request

WHY IT IS USEFUL  
• Specify content type
• Authentication
• Custom headers
• Accept response formats

BASIC RULES  
• Must be called AFTER open()
• Must be called BEFORE send()
• Can be called multiple times

EXAMPLE
--------------------------------------------------*/
request.open('GET', '/data.json');
request.setRequestHeader('Accept', 'application/json');
request.send();
/*--------------------------------------------------


================================================================================
FINAL SUMMARY
================================================================================

• XMLHttpRequest methods control the full request lifecycle
• open() prepares the request
• setRequestHeader() configures metadata
• send() starts communication
• abort() cancels requests
• getResponseHeader() reads server metadata
• overrideMimeType() controls response interpretation

Understanding these methods gives you FULL control over Ajax requests.

================================================================================
END OF FILE
================================================================================ */
