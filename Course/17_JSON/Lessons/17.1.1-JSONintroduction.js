/*
==================================================
                    JSON
==================================================

1) What Is JSON?
----------------
JSON stands for JavaScript Object Notation,
It is a TEXT-BASED data format used to store and
exchange data between systems.

Important:
- JSON is NOT a programming language
- JSON is just plain text
- Inspired by JavaScript object syntax

Example:
{
  "name": "Hassan",
  "age": 25,
  "isStudent": true
}


-----------------------------------------------

2) Format For Sharing Data Between Server And Client
----------------------------------------------------
JSON is mainly used to transfer data between:
- Server (Backend)
- Client (Browser / Mobile App)

How it works:
Client ---> Request data
Server ---> Sends JSON response

Example response from server:
{
  "id": 10,
  "username": "Ali",
  "balance": 500
}


-----------------------------------------------

3) JSON Derived From JavaScript
-------------------------------
JSON syntax is derived from JavaScript objects,
but JSON is stricter.

JavaScript Object:
{
  name: "Ali",
  age: 30
}

JSON:
{
  "name": "Ali",
  "age": 30
}

Key differences:
- JSON requires double quotes ""
- No functions allowed
- No undefined values

-----------------------------------------------


4) Alternative To XML
---------------------
Before JSON, XML was commonly used to exchange data.
JSON replaced XML in many cases because it is simpler.

XML example:
<user>
  <name>Ali</name>
  <age>30</age>
</user>

JSON version:
{
  "name": "Ali",
  "age": 30
}

JSON is shorter, cleaner, and easier to read.


-----------------------------------------------

5) File Extension Is .json
--------------------------
JSON files are saved with:
.json

Example:
data.json

Inside data.json:
{
  "products": ["Phone", "Laptop", "Tablet"]
}


-----------------------------------------------

6) Why JSON?
------------
Reasons JSON is popular:

- Easy to read and write
- Lightweight (small size)
- Fast to parse
- Supported by almost all languages

-----------------------------------------------


7) Used By Most Programming Languages And Frameworks
----------------------------------------------------
JSON works with:
- JavaScript
- PHP
- Python
- Java
- C#
- Mobile frameworks
- Web APIs


-----------------------------------------------


8) Convert JSON <-> JavaScript Object
-------------------------------------
JSON to JS Object:

- You will later be able to switch naturally between Js and Json 


-----------------------------------------------


9) JSON vs XML
==============
JSON:
- Text based
- Lightweight
- No tags
- Short syntax
- Supports arrays
- Does NOT support comments

XML:
- Markup language
- Heavier
- Uses tags
- Longer syntax
- No native arrays
- Supports comments

JSON Array Example:
{
  "numbers": [1, 2, 3, 4]
}

-----------------------------------------------

FINAL SUMMARY
-------------
JSON is a simple, lightweight, text-based format
used to exchange data between systems efficiently.
It is readable, fast, and widely supported, which
is why it replaced XML in most modern applications.

==================================================
*/
