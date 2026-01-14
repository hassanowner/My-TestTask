/*
================================================================================
LOADING JSON DATA VIA AJAX & USING IT IN JAVASCRIPT
================================================================================

This section explains how to load JSON data from a server using Ajax,
how browsers process JSON responses, and how JSON data can be used
directly to generate HTML on the client side.

================================================================================
1) WHY JSON IS IDEAL FOR AJAX
================================================================================

JSON is especially well suited for Ajax because:

✓ It is a subset of JavaScript
✓ It maps directly to JavaScript objects
✓ No DOM parsing is required
✓ Faster and simpler than XML
✓ Easy to read and write
✓ Smaller payload size

Because of this, JSON has largely replaced XML in modern web applications.


================================================================================
2) BASIC IDEA OF LOADING JSON VIA AJAX
================================================================================

The process is very similar to loading XML or HTML:

1) Create an XMLHttpRequest object
2) Configure an onload event handler
3) Open the request
4) Configure responseType
5) Set the Accept header
6) Send the request
7) Process the returned JSON data


================================================================================
3) THE responseType = "json" PROPERTY
================================================================================

Modern browsers support: */

request.responseType = 'json';

/* When this is set:
• The browser automatically parses the JSON
• The parsed result becomes a JavaScript object
• The object is accessible via request.response

This eliminates the need to call JSON.parse() manually.


================================================================================
4) BACKWARD COMPATIBILITY (IMPORTANT RULE)
================================================================================

Not all browsers support responseType = 'json'.

Therefore:
• If responseType === 'json' → use request.response
• Otherwise → manually parse request.responseText

This ensures maximum compatibility.


================================================================================
5) LOADING JSON DATA VIA AJAX (BASIC EXAMPLE)
================================================================================ */

'use strict';

let request = new XMLHttpRequest();

request.onload = () => {
  if (request.status === 200) {
    let json;

    if (request.responseType === 'json') {
      // Automatic parsing supported
      json = request.response;
    } else {
      // Manual parsing fallback
      json = JSON.parse(request.responseText);
    }

    console.log(json);
  }
};

request.open(
  'GET',
  'data/content.json',
  true
);

request.responseType = 'json';
request.setRequestHeader('Accept', 'application/json');
request.send();


/*
================================================================================
6) BASIC RULES FOR LOADING JSON VIA AJAX
================================================================================

• Use responseType = 'json' if supported
• Always check request.status === 200
• Use application/json as Accept header
• Fallback to JSON.parse() if necessary
• Access parsed data via request.response


================================================================================
7) STRUCTURE OF THE JSON DATA (EXAMPLE)
================================================================================

The JSON document is equivalent to the earlier XML example: */

{
  "artists": [
    {
      "name": "Kyuss",
      "albums": [
        { "title": "Wretch", "year": 1991 },
        { "title": "Blues for the Red Sun", "year": 1992 }
      ]
    },
    {
      "name": "Ben Harper",
      "albums": [
        { "title": "The Will to Live", "year": 1997 }
      ]
    }
  ]
}

/*
================================================================================
8) GENERATING HTML FROM JSON DATA
================================================================================

Unlike XML:
• No DOM methods are required
• Data access uses dot notation
• Code is simpler and clearer


================================================================================
9) PROCESSING JSON DATA TO BUILD A TABLE
================================================================================

--------------------------------------------------------------------------------
MAIN IDEA
--------------------------------------------------------------------------------

• Loop over artists
• Loop over albums of each artist
• Create one table row per album
• Reuse existing helper functions

--------------------------------------------------------------------------------
DATA ACCESS DIFFERENCE (KEY POINT)
--------------------------------------------------------------------------------

XML: */
artist.getElementsByTagName('album')

JSON:
artist.albums

/*
  ================================================================================
10) TABLE GENERATION LOGIC (CORE LOOP)
================================================================================*/

function processJSON(result) {
  initTable();

  result.artists.forEach(artist => {
    artist.albums.forEach(album => {
      createRow(
        artist.name,
        album.title,
        album.year
      );
    });
  });
}

/*
================================================================================
11) WHY JSON IS EASIER THAN XML HERE
================================================================================

✓ No XML parsing
✓ No DOM traversal
✓ No getElementsByTagName()
✓ Direct property access
✓ Less code
✓ Better readability


================================================================================
12) COMPARISON: JSON VS XML IN AJAX
================================================================================

--------------------------------------------------------------------------------
DATA ACCESS
--------------------------------------------------------------------------------*/
XML   → DOM methods
JSON  → Dot notation

/*--------------------------------------------------------------------------------
PARSING
--------------------------------------------------------------------------------*/
XML   → Browser parses to Document
JSON  → Browser parses to JavaScript object

/*--------------------------------------------------------------------------------
CODE COMPLEXITY
--------------------------------------------------------------------------------*/
XML   → Higher
JSON  → Lower

/*--------------------------------------------------------------------------------
PERFORMANCE
--------------------------------------------------------------------------------*/
XML   → Slower
JSON  → Faster

/*
================================================================================
13) WHEN SHOULD YOU USE JSON?
================================================================================

Use JSON when:
✓ Working with JavaScript-heavy applications
✓ Creating SPAs
✓ Loading structured data
✓ Performance matters
✓ Simplicity is important

================================================================================
FINAL SUMMARY
================================================================================

• JSON is ideal for Ajax-based data exchange
• responseType = 'json' enables automatic parsing
• request.response gives direct access to data
• Fallback with JSON.parse() ensures compatibility
• HTML generation from JSON is simpler than XML
• JSON is the preferred modern solution for Ajax

================================================================================
END OF FILE
================================================================================ */
