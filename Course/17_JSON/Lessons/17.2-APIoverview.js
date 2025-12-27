/*
==================================================
JSON & API OVERVIEW
==================================================

1) API Overview
---------------
API stands for Application Programming Interface.

An API is a way for programs to communicate with
each other and exchange data, usually using JSON.

Think of API like a waiter:
- You (Client) ask for something
- Kitchen (Server) prepares it
- Waiter (API) brings it back in JSON format

-----------------------------------------------

How API Works:
--------------
1) Client sends a request
2) Server processes the request
3) Server sends a JSON response

Example API Response:
{
  "id": 1,
  "name": "Repository",
  "stars": 120
}

-----------------------------------------------


2) API & JSON Relationship
--------------------------
Most modern APIs:
- SEND data as JSON
- RECEIVE data as JSON

Why JSON?
- Lightweight
- Easy to parse
- Fast over the network

-----------------------------------------------


3) Tools To Test API
--------------------
You can test APIs without writing code using tools.

Common API testing tools:

A) Browser
-----------
You can open an API URL directly in your browser.

Example:
https://api.github.com/users/octocat

-----------------------------------------------

B) Postman
----------
A popular tool to:
- Send GET / POST / PUT / DELETE requests
- View JSON responses
- Test headers and authentication

-----------------------------------------------

C) Insomnia
-----------
Similar to Postman, simple and fast API testing.

-----------------------------------------------

D) cURL
-------
Command-line tool to test APIs.

Example:
curl https://api.github.com/users/octocat

*Note : A ,B ,C and D will explain it, But this is just an overview of what you will be learning. 
-----------------------------------------------



4) Preview GitHub API
---------------------
GitHub provides a public REST API that returns JSON.

Example Endpoint:
https://api.github.com/users/octocat

Sample Response:
{
  "login": "octocat",
  "id": 583231,
  "public_repos": 8,
  "followers": 9000
}

-----------------------------------------------

Preview Repository API:
-----------------------
https://api.github.com/users/octocat/repos

Returns:
- Repository name
- Stars
- Forks
- Language

-----------------------------------------------

Why GitHub API Is Useful:
-------------------------
- Practice working with real JSON data
- Learn how APIs structure responses
- Used in real applications

-----------------------------------------------

FINAL SUMMARY
-------------
- API allows systems to communicate
- JSON is the main data format used by APIs
- Tools like Postman help test APIs
- GitHub API is a great real-world example

==================================================
*/
