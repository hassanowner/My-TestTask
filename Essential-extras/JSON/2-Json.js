/*
================================================================================
JSON FORMAT — FULL EXPLANATION (ONE SQUARE FILE)
================================================================================

1) MAIN TOPICS COVERED
---------------------
• What JSON is
• Why JSON replaced XML in many cases
• Structure of JSON
• JSON vs JavaScript Object Literal Notation
• Differences between JSON and JavaScript objects
• Validating JSON
• Converting JavaScript objects to JSON (stringify)
• Converting JSON strings to JavaScript objects (parse)
• Summary table and comparisons


================================================================================
2) WHAT IS JSON?
================================================================================ */

JSON (JavaScript Object Notation) is a lightweight data-interchange
format used to store and exchange data between applications, especially
between a client (browser) and a server.

JSON is pronounced like the name “Jason”.
/*
--------------------------------------------------
WHY JSON IS SO POPULAR
-------------------------------------------------- */
• Lightweight and compact
• Easy to read and write
• Easy to parse by machines
• Native support in JavaScript
• Less verbose than XML
• Faster processing compared to XML
• Widely supported by APIs and servers

/* --------------------------------------------------
HOW JSON WORKS
-------------------------------------------------- */
• Data is represented as key–value pairs
• Objects are wrapped in curly braces {}
• Arrays are wrapped in square brackets []
• Keys must be strings enclosed in double quotes
• Values can be:
  - String
  - Number
  - Boolean
  - Array
  - Object
  - null

/*
--------------------------------------------------
CLIENT–SERVER COMMUNICATION (ILLUSTRATION)
-------------------------------------------------- */

Client (Browser / JS)
        |
        |  JSON Request
        |  (string)
        v
Server (Backend)
        |
        |  JSON Response
        v
Client (JS parses JSON into object)



/*
================================================================================
3) STRUCTURE OF JSON
================================================================================

--------------------------------------------------
BASIC JSON STRUCTURE
-------------------------------------------------- */

{
  "key": "value",
  "number": 10,
  "boolean": true,
  "array": [],
  "object": {},
  "empty": null
}

/* --------------------------------------------------
EXAMPLE JSON (EQUIVALENT TO XML EXAMPLE)
-------------------------------------------------- */

{
  "artists": [
    {
      "name": "Kyuss",
      "albums": []
    },
    {
      "name": "Ben Harper",
      "albums": []
    }
  ]
}

/*
--------------------------------------------------
ACCESSING JSON DATA IN JAVASCRIPT
-------------------------------------------------- */

const object = {
  "artists": [
    { "name": "Kyuss", "albums": [] },
    { "name": "Ben Harper", "albums": [] }
  ]
};

console.log(object.artists);             // Array
console.log(object.artists.length);      // 2
console.log(object.artists[0].name);     // "Kyuss"
console.log(object.artists[1].name);     // "Ben Harper"



/*
================================================================================
4) JSON IS A SUBSET OF OBJECT LITERAL NOTATION
================================================================================

JSON is a strict subset of JavaScript object literal notation.

This means:
• Every valid JSON is valid JavaScript
• NOT every JavaScript object is valid JSON

--------------------------------------------------
KEY DIFFERENCES
--------------------------------------------------*/

JSON:
• Keys MUST be in double quotes
• Only allowed value types:
  - string
  - number
  - boolean
  - array
  - object
  - null
• No functions
• No comments
• No undefined
• No trailing commas

JavaScript Objects:
• Keys can be unquoted
• Single or double quotes allowed
• Functions allowed
• RegExp allowed
• Any object instances allowed

/* --------------------------------------------------
INVALID JSON EXAMPLES
-------------------------------------------------- */

{
  name: "Kyuss"          // keys not in quotes
}

{
  "play": function(){}  // functions not allowed
}


/*
================================================================================
5) VALIDATING JSON
================================================================================

JSON must be perfectly formatted to work correctly.

--------------------------------------------------
HOW TO VALIDATE JSON
--------------------------------------------------
• JSONLint (jsonlint.com)
• IDE / Code editor validation
• Browser developer tools
• Server-side validation



================================================================================
6) CONVERTING OBJECTS TO JSON (JSON.stringify)
================================================================================

--------------------------------------------------
WHAT IS STRINGIFYING?
--------------------------------------------------
Stringifying converts a JavaScript object into a JSON-formatted string.

--------------------------------------------------
WHY STRINGIFY IS IMPORTANT
--------------------------------------------------
• Sending data to servers
• Storing data (localStorage, databases)
• Logging or exporting data
• Network communication (AJAX / Fetch)

--------------------------------------------------
BASIC RULES
--------------------------------------------------
• Input must be a JavaScript object
• Output is always a string
• Functions are ignored
• Undefined values are ignored
• Circular references cause errors

--------------------------------------------------
SYNTAX
-------------------------------------------------- */
JSON.stringify(object, replacer, space)

/*
--------------------------------------------------
PARAMETERS
-------------------------------------------------- */
1) object   → JavaScript object to convert
2) replacer → function or null
3) space    → indentation (number or string)
/*
--------------------------------------------------
PROGRAMMING EXAMPLE
-------------------------------------------------- */

const object = {
  artists: [
    { name: "Kyuss", albums: [] },
    { name: "Ben Harper", albums: [] }
  ]
};

const jsonString = JSON.stringify(
  object,
  (key, value) => {
    return value;
  },
  2
);

console.log(jsonString);


/*
================================================================================
7) CONVERTING JSON STRINGS TO OBJECTS (JSON.parse)
================================================================================

--------------------------------------------------
WHAT IS PARSING JSON?
--------------------------------------------------
Parsing converts a JSON-formatted string into a JavaScript object.

--------------------------------------------------
WHY PARSING IS IMPORTANT
--------------------------------------------------
• Reading server responses
• Accessing JSON data
• Manipulating received data
• Converting text into usable objects

--------------------------------------------------
BASIC RULES
--------------------------------------------------
• Input must be valid JSON string
• Output is a JavaScript object
• Invalid JSON causes errors
• Use try–catch when parsing external data

--------------------------------------------------
SYNTAX
-------------------------------------------------- */
JSON.parse(string, reviver)
/*
--------------------------------------------------
PROGRAMMING EXAMPLE
-------------------------------------------------- */

const jsonString = `{
  "artists": [
    { "name": "Kyuss", "albums": [] },
    { "name": "Ben Harper", "albums": [] }
  ]
}`;

const objectParsed = JSON.parse(
  jsonString,
  (key, value) => {
    return value;
  }
);

console.log(objectParsed.artists);
console.log(objectParsed.artists.length);      // 2
console.log(objectParsed.artists[0].name);     // "Kyuss"
console.log(objectParsed.artists[1].name);     // "Ben Harper"


/*
================================================================================
8) SUMMARY TABLE & COMPARISON
================================================================================ */

| Aspect               | JSON.stringify()           | JSON.parse()              |
|----------------------|----------------------------|---------------------------|
| Purpose              | Object → JSON string      | JSON string → Object      |
| Input Type           | JavaScript object          | JSON string               |
| Output Type          | String                     | JavaScript object         |
| Used For             | Sending / Saving data      | Reading / Using data      |
| Optional Function    | Replacer                   | Reviver                   |
| Indentation Support  | Yes                        | No                        |
| Common Errors        | Circular references        | Invalid JSON syntax       |
/*
--------------------------------------------------
JSON VS XML (SHORT COMPARISON)
--------------------------------------------------

| Feature       | JSON           | XML             |
|---------------|----------------|-----------------|
| Readability   | Very high      | Medium          |
| Size          | Smaller        | Larger          |
| Parsing Speed | Faster         | Slower          |
| Verbosity     | Low            | High            |
| JS Integration| Native         | Requires parser |

================================================================================
END OF FILE
================================================================================ */
