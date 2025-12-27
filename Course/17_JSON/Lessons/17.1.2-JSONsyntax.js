/*
==================================================
## JSON SYNTAX ##
==================================================


1) Data Added Inside Curly Braces { }
----------------------------------
All JSON data must be inside curly braces.
Curly braces represent a JSON OBJECT.

Example:
{
  "name": "Hassan",
  "age": 25
}

-----------------------------------------------


2) Data Added With Key : Value
------------------------------
JSON stores data as KEY : VALUE pairs.

- Key = name of the data
- Value = actual data

Example:
{
  "country": "Iraq",
  "population": 40000000
}

-----------------------------------------------


3) Key Should Be String Wrapped In Double Quotes
------------------------------------------------
In JSON:
- Keys MUST be strings
- Keys MUST use DOUBLE quotes ""

// Invalid: 
{
  name: "Ali"
}

// Valid:
{
  "name": "Ali"
}

-----------------------------------------------


4) Data Separated By Comma
--------------------------
Each key-value pair must be separated by a comma,
except the last one.

Example:
{
  "id": 1,
  "title": "Book",
  "price": 15
}

// Trailing comma is NOT allowed:
{
  "id": 1,
  "title": "Book",
}

-----------------------------------------------


5) Square Brackets [] For Arrays
--------------------------------
Arrays in JSON use square brackets [].
Arrays store multiple values in order.

Example:
{
  "colors": ["red", "green", "blue"]
}

Array of objects:
{
  "users": [
    { "id": 1, "name": "Ali" },
    { "id": 2, "name": "Hassan" }
  ]
}

-----------------------------------------------


6) Curly Braces {} For Objects
------------------------------
Objects are collections of key-value pairs.
Objects can be nested inside other objects.

Example:
{
  "user": {
    "name": "Omar",
    "email": "omar@gmail.com"
  }
}

-----------------------------------------------


7) Available Data Types
=======================

7.1) String
------------
Text data, must be inside double quotes.

Example:
{
  "username": "Ahmed"
}

-----------------------------------------------

7.2) Number
------------
Can be integer or decimal.
No quotes allowed.

Example:
{
  "age": 30,
  "salary": 750.50
}

-----------------------------------------------

7.3) Object
------------
An object inside another object.

Example:
{
  "address": {
    "city": "Baghdad",
    "zip": 10001
  }
}

-----------------------------------------------

7.4) Array
----------
A list of values.

Example:
{
  "scores": [90, 85, 88]
}

-----------------------------------------------

7.5) Boolean Values
-------------------
Only two values:
- true
- false

Example:
{
  "isOnline": true,
  "isAdmin": false
}

-----------------------------------------------

7.6) null
---------
Represents empty or unknown value.

Example:
{
  "middleName": null
}

-----------------------------------------------

FINAL SUMMARY
-------------
- JSON has strict syntax rules
- Uses {} for objects and [] for arrays
- Keys must be strings in double quotes
- Supports limited but powerful data types
- Commonly used in APIs and data storage

==================================================
*/
