/*
==================================================
JSON.parse & JSON.stringify        
==================================================


1) What Is JSON.parse()?
-----------------------
JSON.parse() is used to convert:
JSON TEXT (string) --> JavaScript Object

Why this is needed:
- Servers send data as TEXT
- JavaScript cannot manipulate text as data
- We must convert JSON text into an object

-----------------------------------------------


2) Receiving Data From a Server
-------------------------------
Assume the server sends information about a user
as a JSON string:               */

const serverResponse =
'{"email":"user@example.com","points":320,"active":true}';

Type:
typeof serverResponse // --> "string"
console.log(serverResponse[0]) // "{"  => just a character

/*
Even though it looks like an object,
it is only TEXT(string).

-----------------------------------------------


3) Converting JSON Text to JS Object
------------------------------------
We use JSON.parse():                      */

const userData =
JSON.parse(serverResponse);

/* Result:
{
  email: "user@example.com",
  points: 320,
  active: true
}                            */ 

// Type:
typeof userData // --> "object"
console.log(userData[0]); // user@example.com  
// userData[0] => value of "(key equal 0) = (email)" is = `user@example.com`

// #or you can use :
console.log(userData.points); // 320

/*
Now JavaScript can work with the data.

-----------------------------------------------


4) Updating the JavaScript Object
---------------------------------
After conversion, we can modify the data:        */  

userData.points = 400;
userData.active = false;                    /*

Updated object:
{
  email: "user@example.com",
  points: 400,
  active: false
}

-----------------------------------------------


5) What Is JSON.stringify()?
----------------------------
JSON.stringify() is used to convert:
JavaScript Object --> JSON TEXT (string)

Why?
- Servers accept text only
- Objects cannot be sent directly

-----------------------------------------------


6) Converting JS Object Back to JSON
------------------------------------
Before sending data back to the server:                */

const updatedResponse =
JSON.stringify(userData);

/* Result:
'{"email":"user@example.com","points":400,"active":false}'

Type:
typeof updatedResponse --> "string"

-----------------------------------------------


7) Complete Data Flow (Very Important)
--------------------------------------
1) Server sends JSON text
2) Client uses JSON.parse()
3) JavaScript modifies the data
4) Client uses JSON.stringify()
5) Server receives JSON text

-----------------------------------------------


8) Common Mistakes
------------------
** Trying to access properties before parsing (not allowed)
** Sending objects without stringify (not allowed)
** Using functions inside JSON (not allowed)

-----------------------------------------------

FINAL SUMMARY
-------------
- JSON.parse() is used when RECEIVING data
- JSON.stringify() is used when SENDING data
- APIs communicate using JSON text
- JavaScript works with objects, not raw JSON
- These two methods are essential in real projects

==================================================
*/
