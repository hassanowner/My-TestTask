/*

============================================================
AJAX – Conceptual Explanation (Educational Guide)
============================================================

Introduction
------------
This explanation focuses on understanding the concept, not on writing code.
The goal is to answer these questions:

- What is this?
- Why does it exist?
- How does it work conceptually?
- What does each term mean?

No programming details, only fundamental ideas with simple analogies.


------------------------------------------------------------
1) AJAX
------------------------------------------------------------

What is AJAX?

AJAX or Asynchronous Javascript And Xml,
AJAX is NOT:
- a programming language
- a library
- a specific piece of code

AJAX IS:
- a concept
- a way of thinking in web development

Core Idea:
AJAX allows a web page to communicate with the server
WITHOUT reloading the entire page.


------------------------------------------------------------
Why Was AJAX Created?
------------------------------------------------------------

Old behavior:
- Any request for data → full page reload
- Slow and bad user experience

Problem:
- Users lose context
- Pages feel heavy and unresponsive

Solution (AJAX):
- Update only a small part of the page
- The user feels no page refresh


------------------------------------------------------------
Simple Analogy
------------------------------------------------------------

Imagine:
- You are watching TV
- You want to change the volume

Without AJAX:
- Turn off the TV
- Turn it on again to change volume

With AJAX:
- Use the remote control
- Only the volume changes




------------------------------------------------------------
2) Asynchronous JavaScript And XML
------------------------------------------------------------

Meaning of the name:

Asynchronous:
- Does not wait
- Works in the background

JavaScript:
- The language that applies the concept

XML:
- Old data format
- Today mostly replaced by JSON


------------------------------------------------------------
What Does "Asynchronous" Mean Here?
------------------------------------------------------------

Concept:
JavaScript does NOT stop and wait for the server.
It continues running while the server prepares the response.


------------------------------------------------------------
Mental Example
------------------------------------------------------------

You order a pizza :
- You do not stand in front of the oven
- You sit and do other things
- When it’s ready, they call you

This is Asynchronous behavior.





------------------------------------------------------------
3) Approach To Use Many Technologies Together
------------------------------------------------------------

AJAX is not a single technology.
It is an approach that combines multiple technologies:

- HTML → Page structure
- CSS → Visual design
- JavaScript → Logic and behavior
- DOM → Page manipulation

All of them work together
to update the page without reloading.


------------------------------------------------------------
Example of Cooperation
------------------------------------------------------------

HTML:
- A "Load" button

CSS:
- Makes the button look good

JavaScript:
- Sends the request

DOM:
- Displays new data

AJAX = this cooperation





------------------------------------------------------------
4) It Uses "XMLHttpRequest" Object
------------------------------------------------------------

What is XMLHttpRequest?

- It is the tool used by AJAX
- It enables communication with the server

Core Idea:
It acts as a messenger between the page and the server.


------------------------------------------------------------
Analogy
------------------------------------------------------------

Page = You  
Server = Restaurant  
XMLHttpRequest = Waiter  

You do not go to the kitchen.
The waiter goes and returns with the order.




------------------------------------------------------------
5) Fetching and Sending Data Without Page Refresh
------------------------------------------------------------

AJAX allows:
- Fetching data from the server
- Sending data to the server

All without refreshing the page.


------------------------------------------------------------
Real-Life Example
------------------------------------------------------------

You type a username during registration.
The website immediately tells you:
"Username already exists."

The page does not reload.
This is AJAX.




------------------------------------------------------------
6) Real-World Examples
------------------------------------------------------------

YouTube Studio:
- Load statistics
- Update numbers dynamically
- No page reload

Google Drive:
- Upload files
- Progress bar appears
- Page stays the same

Upload Article Photo:
- Upload image
- Image appears instantly
- No refresh

Form Username Check:
- Type a name
- Get instant feedback



------------------------------------------------------------
7) Testing new XMLHttpRequest()
------------------------------------------------------------

Meaning:
- Creating the messenger only
- No request is sent
- No response is received


------------------------------------------------------------
Analogy
------------------------------------------------------------

It is like saying:
"I prepared the phone, but I haven’t made the call yet."




------------------------------------------------------------
8) Request and Response
------------------------------------------------------------

Request:
- What you ask from the server
- Get data
- Or store data

Response:
- What the server sends back
- Data
- Or an error message


------------------------------------------------------------
Simple Example
------------------------------------------------------------

Request:
"Does this username exist?"

Response:
"Yes" or "No"




------------------------------------------------------------
9) Status Code
------------------------------------------------------------

What is it?

- A number that tells the result of the request


------------------------------------------------------------
Core Idea
------------------------------------------------------------

Instead of explaining with words,
the server responds with standardized numbers
understood globally.


------------------------------------------------------------
Examples
------------------------------------------------------------

200 → Success  
404 → Not Found  
500 → Server Error  


------------------------------------------------------------
Analogy
------------------------------------------------------------

Traffic lights :
- Green → Go
- Red → Stop




------------------------------------------------------------
10) Creating XMLHttpRequest
------------------------------------------------------------

Meaning:
"Create a communication tool with the server."

*/

let request = new XMLHttpRequest();
console.log(request)
  
/*
Shows:
- Connection state
- Response data
- Request status

Used to understand what is happening internally.


------------------------------------------------------------
Mental Summary (Most Important)
------------------------------------------------------------

AJAX = Concept  
Purpose = Better user experience  
No page refresh  
XMLHttpRequest = Tool  
Request = Question  
Response = Answer  
Status Code = Result
============================================================ */
