/*
================================================================================
LOADING HTML DATA VIA AJAX (XMLHttpRequest)
================================================================================

This section explains how HTML content can be loaded from a server
asynchronously using Ajax and the XMLHttpRequest object.

We will explain:
• What “loading HTML via Ajax” means
• How responseText works
• Why headers matter
• Two different approaches:
  1) Loading HTML as plain text
  2) Loading HTML as a parsed Document
• When to use each approach

================================================================================
WHAT DOES "LOADING HTML VIA AJAX" MEAN?
================================================================================

Loading HTML via Ajax means:
• Requesting an HTML file from the server
• WITHOUT reloading the entire web page
• Injecting or processing the HTML dynamically using JavaScript

This is commonly used for:
• Page fragments (partials, snippets)
• Dynamic content loading
• Single Page Applications (SPA behavior)

================================================================================
BASIC IDEA
================================================================================

1) Create an XMLHttpRequest object
2) Send a GET request to an HTML file
3) Wait for the response to load
4) Read the returned HTML from the response
5) Use the HTML inside the page


================================================================================
METHOD 1: LOADING HTML AS A STRING (responseText)
================================================================================

--------------------------------------------------------------------------------
WHAT responseText IS
--------------------------------------------------------------------------------

• responseText contains the body of the HTTP response
• It is a STRING
• Headers are NOT included
• HTML is NOT parsed automatically

This method gives you raw HTML text.

--------------------------------------------------------------------------------
WHY USE responseText?
--------------------------------------------------------------------------------

• Simple and fast
• Good when you want to:
  - Insert HTML into the DOM using innerHTML
  - Process HTML manually
  - Keep full control

--------------------------------------------------------------------------------
IMPORTANT HEADER: Accept: text/html
--------------------------------------------------------------------------------

Setting this header tells the server:
"I only accept HTML responses."

This improves:
• Content negotiation
• Correct server behavior
• Data safety

--------------------------------------------------------------------------------
EXAMPLE: LOAD HTML AS STRING
-------------------------------------------------------------------------------- */

'use strict';

const request = new XMLHttpRequest();

// Event handler when request completes
request.onload = () => {
  if (request.status === 200) {
    const html = request.responseText;
    console.log(html); // HTML as a string
  }
};

// Configure request
request.open(
  'GET',
  'content/snippet.html'
);

// Response type as string (default)
request.responseType = '';

// Accept only HTML
request.setRequestHeader('Accept', 'text/html');

// Send request
request.send();

/*--------------------------------------------------------------------------------
BASIC RULE FOR responseText
--------------------------------------------------------------------------------

• responseType must be "" or "text"
• Data is returned as a STRING
• You must manually parse or insert it


================================================================================
METHOD 2: LOADING HTML AS A PARSED DOCUMENT (responseXML)
================================================================================

--------------------------------------------------------------------------------
WHAT responseXML IS
--------------------------------------------------------------------------------

• responseXML returns a Document object
• HTML is parsed automatically by the browser
• You can use DOM methods on it

This behaves like a normal HTML document.

--------------------------------------------------------------------------------
WHY USE responseXML?
--------------------------------------------------------------------------------

• Direct DOM access
• No manual parsing
• Safer for structured manipulation

--------------------------------------------------------------------------------
IMPORTANT SETTING: responseType = 'document'
--------------------------------------------------------------------------------

This tells the browser:
"Parse the response into a Document object."

Without this:
• responseXML may be null
• Parsing is unreliable

--------------------------------------------------------------------------------
EXAMPLE: LOAD HTML AS DOCUMENT
-------------------------------------------------------------------------------- */

const request = new XMLHttpRequest();

request.onload = () => {
  if (request.status === 200) {
    const html = request.responseXML.body.innerHTML;
    console.log(html); // Parsed HTML content
  }
};

request.open(
  'GET',
  'content/snippet.html'
);

// Parse response as Document
request.responseType = 'document';

// Accept only HTML
request.setRequestHeader('Accept', 'text/html');

request.send();

/* --------------------------------------------------------------------------------
BASIC RULE FOR responseXML
--------------------------------------------------------------------------------

• responseType MUST be "document"
• Server must return valid HTML
• Access content via DOM properties

================================================================================
COMPARISON: responseText vs responseXML
================================================================================

responseText:
• Type: String
• Manual parsing
• Simple and flexible
• Best for quick insertion

responseXML:
• Type: Document
• Automatically parsed
• DOM manipulation ready
• Best for structured access

================================================================================
COMMON USE CASES
================================================================================

• Load navigation menus
• Load page sections dynamically
• Update content without page reload
• Build SPA-like behavior
• Improve performance and UX

================================================================================
IMPORTANT NOTES
================================================================================

• Always check request.status === 200
• Ajax respects Same-Origin Policy
• Use Fetch API for modern projects (simpler)
• XMLHttpRequest still important for learning and legacy code

================================================================================
FINAL SUMMARY
================================================================================

Loading HTML via Ajax allows:
• Dynamic content loading
• Better performance
• No full page refresh

You can load HTML:
• As plain text → responseText
• As parsed DOM → responseXML

Choose the method based on how you need to work with the HTML.

================================================================================
END OF FILE
================================================================================ */
