/*
================================================================================
JSON, API & JSON.parse / JSON.stringify - Complete Overview
================================================================================
*/

/* ======================
1) WHAT IS JSON
====================== */
// JSON = JavaScript Object Notation
// Text-based format for storing/exchanging data
// NOT a programming language, just text
// Inspired by JS object syntax
// Example:
const jsonExample = {
  "name": "Hassan",
  "age": 25,
  "isStudent": true
};

/* ======================
2) JSON FOR SERVER <-> CLIENT
====================== */
// Client requests data, server sends JSON
const serverResponseExample = {
  "id": 10,
  "username": "Ali",
  "balance": 500
};

/* ======================
3) JSON VS JAVASCRIPT OBJECT
====================== */
// JS object allows unquoted keys, functions, undefined
// JSON requires double quotes, no functions, no undefined
// JS object:
const jsObj = { name: "Ali", age: 30 };
// JSON:
const jsonObj = { "name": "Ali", "age": 30 };

/* ======================
4) JSON VS XML
====================== */
// JSON is simpler, shorter, easier to read
// JSON: {"name":"Ali","age":30}
// XML: <user><name>Ali</name><age>30</age></user>

/* ======================
5) JSON FILES
====================== */
// Extension: .json
// Example data.json:
const products = { "products": ["Phone","Laptop","Tablet"] };

/* ======================
6) WHY JSON
====================== */
// Easy to read/write, lightweight, fast, widely supported
// Works with JS, PHP, Python, Java, C#, Mobile apps, Web APIs

/* ======================
7) JSON SYNTAX RULES
====================== */
// Curly braces {} for objects
// Key: value pairs
// Keys must be double-quoted strings
// Comma separates pairs (no trailing comma)
// Square brackets [] for arrays
// Nested objects allowed
// Supported types: string, number, object, array, boolean, null

const sampleJSON = {
  "string": "text",
  "number": 123,
  "object": { "city": "Baghdad", "zip": 10001 },
  "array": [1,2,3],
  "boolean": true,
  "nullValue": null
};

/* ======================
8) API OVERVIEW
====================== */
// API = Application Programming Interface
// Allows communication between client & server using JSON
// Example flow: Client request --> Server response JSON

const apiExample = {
  "id": 1,
  "name": "Repository",
  "stars": 120
};

/* ======================
9) API TESTING TOOLS
====================== */
// A) Browser - open API URL
// B) Postman - GET/POST/PUT/DELETE requests, view JSON
// C) Insomnia - lightweight alternative to Postman
// D) cURL - command-line requests
// Example: curl https://api.github.com/users/octocat

/* ======================
10) GITHUB API EXAMPLES
====================== */
// Users: https://api.github.com/users/octocat
const githubUser = {
  "login":"octocat",
  "id":583231,
  "public_repos":8,
  "followers":9000
};

// Repositories: https://api.github.com/users/octocat/repos
// Provides name, stars, forks, language

/* ======================
11) JSON.parse() & JSON.stringify()
====================== */
// JSON.parse() -> JSON text (string) -> JS object
const serverResponse = '{"email":"user@example.com","points":320,"active":true}';
const userData = JSON.parse(serverResponse);
console.log(userData.email);   // "user@example.com"
console.log(userData.points);  // 320

// Update JS object
userData.points = 400;
userData.active = false;

// JSON.stringify() -> JS object -> JSON text (string)
const updatedResponse = JSON.stringify(userData);
console.log(updatedResponse); // '{"email":"user@example.com","points":400,"active":false}'

/* ======================
12) DATA FLOW SUMMARY
====================== */
// 1) Server sends JSON text
// 2) Client uses JSON.parse()
// 3) JS modifies object
// 4) Client uses JSON.stringify()
// 5) Server receives JSON text

/* ======================
13) COMMON MISTAKES
====================== */
// Access properties before parsing -> error
// Sending JS objects without stringify -> error
// Using functions in JSON -> not allowed

/* ======================
FINAL SUMMARY
====================== */
// JSON: lightweight, text-based, strict syntax
// API: communicates using JSON
// parse() -> receive data, stringify() -> send data
// Essential for web apps, mobile apps, and API integration

//================================================================================
