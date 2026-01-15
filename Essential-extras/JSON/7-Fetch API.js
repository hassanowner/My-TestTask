/*
================================================================================
NEWER ALTERNATIVE TO XMLHttpRequest: THE FETCH API
================================================================================

This file explains the Fetch API as a modern alternative to the
XMLHttpRequest (XHR) object for making asynchronous HTTP requests
in JavaScript.

================================================================================
OVERVIEW
================================================================================ */

// The Fetch API is a modern web API used to make HTTP requests such as:
• GET
• POST
• PUT
• DELETE

// It is defined in the Fetch Standard:
https://fetch.spec.whatwg.org

Unlike XMLHttpRequest, Fetch:
• Is promise-based
• Has a cleaner syntax
• Works naturally with async / await
• Separates request, response, and data handling clearly

/* ================================================================================
THE fetch() FUNCTION
================================================================================ */

// The Fetch API starts with the global function:

fetch(url, options)

• It is available globally or via the window object
• It returns a Promise
• The Promise resolves to a Response object

// Basic idea:
1) Send request using fetch()
2) Receive Response object
3) Extract response body (JSON, text, etc.)
4) Handle result or errors

/*
================================================================================
PROMISE-BASED WORKFLOW
================================================================================ */

Because fetch() returns a Promise, you use:
• then() → successful response
• catch() → error handling

// General structure:

fetch(url)
  .then(response => { ... })
  .then(data => { ... })
  .catch(error => { ... })

/*
================================================================================
THE RESPONSE OBJECT
================================================================================

The Response object contains metadata about the HTTP response. */

// Common properties:

• status        → HTTP status code (e.g. 200)
• statusText    → HTTP status text (e.g. "OK")
• ok            → true if status is 200–299
• headers       → response headers
• url           → response URL
• redirected    → whether a redirect occurred
• bodyUsed      → whether body was already read
• type          → response type (basic, cors, opaque)

// !! IMPORTANT:
The response body is NOT directly accessible.
It must be read via a method.

/*
================================================================================
READING THE RESPONSE BODY
================================================================================ */

// Fetch supports multiple body formats:

• response.json()       → JSON data
• response.text()       → plain text
• response.blob()       → binary large objects
• response.arrayBuffer()→ binary data
• response.formData()   → form data

// Each method returns a Promise.

/*
================================================================================
FETCH API – GET REQUEST (PROMISE STYLE)
================================================================================ */

'use strict';

function init() {

  fetch('artists.json')
    .then((response) => {

      console.log(response.status);       // 200
      console.log(response.statusText);   // "OK"
      console.log(response.type);         // "basic"
      console.log(response.bodyUsed);     // false
      console.log(response.headers);      // Headers object
      console.log(response.ok);           // true
      console.log(response.redirected);   // false
      console.log(response.url);          // request URL

      // Convert response body to JSON
      return response.json();
    })
    .then((result) => {

      // Evaluate the converted JavaScript object
      const table = initTable();
      const artists = result.artists;

      for (let i = 0; i < artists.length; i++) {
        const artist = artists[i];
        const albums = artist.albums;

        for (let j = 0; j < albums.length; j++) {
          const album = albums[j];

          const row = createRow(
            artist.name,
            album.title,
            album.year
          );

          table.tBodies[0].appendChild(row);
        }
      }

      document
        .getElementById('artists-container')
        .appendChild(table);

    })
    .catch((error) => {
      console.error(error);
    });
}


/*
================================================================================
USING FETCH WITH async / await
================================================================================

Because Fetch is promise-based, it works perfectly with async / await.
This makes the code more readable and closer to synchronous logic.

================================================================================
FETCH API – GET REQUEST (ASYNC / AWAIT)
================================================================================ */

'use strict';

async function init() {
  try {

    // 1) Send request
    const response = await fetch('artists.json');

    console.log(response.status);       // 200
    console.log(response.statusText);   // "OK"
    console.log(response.type);         // "basic"
    console.log(response.bodyUsed);     // false
    console.log(response.headers);      // Headers object
    console.log(response.ok);           // true
    console.log(response.redirected);   // false
    console.log(response.url);          // request URL

    // 2) Convert response to JSON
    const result = await response.json();

    // 3) Evaluate data
    const table = initTable();
    const artists = result.artists;

    for (let i = 0; i < artists.length; i++) {
      const artist = artists[i];
      const albums = artist.albums;

      for (let j = 0; j < albums.length; j++) {
        const album = albums[j];

        const row = createRow(
          artist.name,
          album.title,
          album.year
        );

        table.tBodies[0].appendChild(row);
      }
    }

    document
      .getElementById('artists-container')
      .appendChild(table);

  } catch (error) {
    console.error(error);
  }
}

/*
================================================================================
SENDING DATA WITH FETCH (POST REQUEST)
================================================================================

For requests other than GET, you pass a configuration object
as the second argument to fetch().

You can configure:
• HTTP method
• Headers
• Request body

================================================================================
FETCH API – POST REQUEST EXAMPLE
================================================================================ */

'use strict';

async function init() {
  try {

    const body = {
      firstName: 'John',
      lastName: 'Doe'
    };

    const response = await fetch('register', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    console.log(response);

  } catch (error) {
    console.error(error);
  }
}

document.addEventListener('DOMContentLoaded', init);

/*
================================================================================
KEY DIFFERENCES: FETCH vs XMLHttpRequest
================================================================================ */

FETCH API:
✓ Promise-based
✓ Cleaner syntax
✓ Works with async / await
✓ Modern standard
✓ Better separation of concerns

XMLHttpRequest:
✗ Callback-based
✗ More complex
✗ Older API
✗ Harder to read and maintain

/* ================================================================================
IMPORTANT NOTES
================================================================================ */

• fetch() does NOT reject on HTTP errors (e.g. 404, 500)
  → You must check response.ok manually

• Fetch follows Same-Origin Policy
  → CORS rules still apply

• Fetch does not support progress events natively (yet)


/*
================================================================================
SUMMARY
================================================================================

• Fetch API is the modern replacement for XMLHttpRequest
• It is promise-based and cleaner
• Supports multiple data formats
• Works well with async / await
• Recommended for modern web development

================================================================================
END OF FILE
================================================================================ */
