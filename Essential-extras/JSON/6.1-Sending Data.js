/*
================================================================================
SENDING DATA TO THE SERVER VIA AJAX
================================================================================

This file explains how data is sent from the client to the server using
Ajax. It covers two main approaches:

1) Sending structured data (usually JSON)
2) Submitting form data using the FormData object

Both approaches rely on the XMLHttpRequest object and the POST method.

================================================================================
MAIN TOPICS COVERED
================================================================================

1) Sending JSON data to the server via Ajax
2) Using POST instead of GET
3) Setting the correct Content-Type header
4) Sending raw JavaScript objects as JSON
5) Submitting form data using FormData
6) Manually building FormData
7) Automatically binding FormData to a form
8) Differences between JSON and FormData

================================================================================
PART 1: SENDING JSON DATA VIA AJAX
================================================================================

--------------------------------------------------------------------------------
WHAT DOES IT MEAN TO SEND DATA VIA AJAX?
--------------------------------------------------------------------------------

Sending data via Ajax means:
• Data is sent to the server without reloading the page
• Communication happens asynchronously
• The server processes the data (e.g., saving to a database)
• The client continues running smoothly

This is commonly used for:
✓ Creating records
✓ Updating data
✓ User registration
✓ Submitting content

--------------------------------------------------------------------------------
WHY POST IS USED
-------------------------------------------------------------------------------- */

• GET → retrieves data
• POST → sends data

/* POST is preferred because:
✓ No URL length limits
✓ Data is not visible in the URL
✓ More secure for sensitive information
✓ Designed for data submission

--------------------------------------------------------------------------------
WHY JSON IS COMMONLY USED
--------------------------------------------------------------------------------

JSON is ideal because:
✓ Easy to create in JavaScript
✓ Lightweight
✓ Human-readable
✓ Easy to parse on the server
✓ Language-independent

================================================================================
CREATING THE DATA OBJECT
================================================================================ */

// Before sending data, it is created as a JavaScript object:

const newArtist = {
  "name": "Deltron 3030",
  "albums": [
    {
      "title": "Deltron 3030",
      "year": 2000
    },
    {
      "title": "Event 2",
      "year": 2013
    }
  ]
};

/* This object represents structured data to be processed on the server.

================================================================================
SENDING JSON DATA VIA AJAX (EXPLANATION)
================================================================================

Key steps:

1) Create XMLHttpRequest
2) Open request with POST
3) Set Content-Type header
4) Send data using send()

--------------------------------------------------------------------------------
IMPORTANT RULE
--------------------------------------------------------------------------------

When sending JSON:
• Always set Content-Type to application/json
• The server relies on this header to parse the data correctly

================================================================================
JSON SENDING EXAMPLE
================================================================================ */

'use strict';

const request = new XMLHttpRequest();

request.onload = () => {
  if (request.status === 200) {
    console.log('Data successfully sent.');
  }
};

request.open('POST', 'artists/create');
request.setRequestHeader('Content-Type', 'application/json');

// In practice, stringify is usually required:
request.send(JSON.stringify(newArtist));
/*
================================================================================
WHAT HAPPENS ON THE SERVER
================================================================================

• The server receives the JSON payload
• Reads the Content-Type header
• Parses the JSON
• Processes the data (e.g., save artist to database)
• Sends a response back



================================================================================
PART 2: SUBMITTING FORMS VIA AJAX
================================================================================

--------------------------------------------------------------------------------
WHY SUBMIT FORMS VIA AJAX?
--------------------------------------------------------------------------------

Traditional form submission:
• Reloads the page
• Breaks user experience

Ajax form submission:
✓ No page reload
✓ Faster feedback
✓ Better UX
✓ Dynamic validation and responses

--------------------------------------------------------------------------------
THE FormData OBJECT
--------------------------------------------------------------------------------

FormData is a special object that:
• Stores key–value pairs
• Represents form fields
• Automatically handles encoding
• Can send files and binary data
• Works directly with XMLHttpRequest

================================================================================
MANUALLY CREATING FormData
================================================================================

You can build FormData step by step:

--------------------------------------------------------------------------------
HOW IT WORKS
--------------------------------------------------------------------------------

1) Create FormData instance
2) Add fields using append()
3) Send it via POST

================================================================================
MANUAL FormData EXAMPLE
================================================================================ */

'use strict';

function init() {
  const formData = new FormData();

  formData.append('username', 'john.doe');
  formData.append('email', 'john.doe@javascripthandbuch.de');
  formData.append('url', 'javascripthandbuch.de');
  formData.append('age', 44);

  const request = new XMLHttpRequest();
  request.open('POST', 'register', true);
  request.send(formData);
}

document.addEventListener('DOMContentLoaded', init);
/*
--------------------------------------------------------------------------------
IMPORTANT NOTES
--------------------------------------------------------------------------------

• No need to set Content-Type manually
• Browser sets multipart/form-data automatically
• Suitable for mixed data types

================================================================================
AUTOMATIC FORM BINDING WITH FormData
================================================================================

--------------------------------------------------------------------------------
WHAT DOES THIS MEAN?
--------------------------------------------------------------------------------

Instead of manually appending fields:
• Bind FormData directly to a form
• All input fields are collected automatically
• Cleaner and safer code

================================================================================
AUTOMATIC FormData EXAMPLE
================================================================================ */

'use strict';

function init() {
  const form = document.getElementById('register');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload

    const formData = new FormData(form);
    const request = new XMLHttpRequest();

    request.open('POST', 'register', true);
    request.send(formData);
  });
}

document.addEventListener('DOMContentLoaded', init);

/*
--------------------------------------------------------------------------------
BENEFITS
--------------------------------------------------------------------------------

✓ No manual field handling
✓ Automatically includes all form inputs
✓ Easier maintenance
✓ Ideal for real forms

================================================================================
JSON VS FormData (COMPARISON TABLE)
================================================================================ */

FORMAT        | JSON                         | FormData
------------- | ---------------------------- | ----------------------------
Best for      | Structured data / APIs       | Forms & file uploads
Encoding      | application/json             | multipart/form-data
Manual setup  | Yes                          | Optional
File support  | No                           | Yes
Ease of use   | Simple for objects            | Simple for forms
Server parsing| JSON parser required         | Form parser required

/*
================================================================================
WHEN TO USE WHICH
================================================================================

Use JSON when:
✓ Sending structured application data
✓ Working with REST APIs
✓ No file uploads are needed

Use FormData when:
✓ Submitting forms
✓ Uploading files
✓ Handling user input fields

================================================================================
FINAL SUMMARY
================================================================================

• POST is used to send data via Ajax
• JSON is ideal for structured data
• Content-Type header is crucial for JSON
• FormData simplifies form submission
• FormData can be built manually or automatically
• Ajax-based submission improves user experience
• Both methods are essential in modern web apps

================================================================================
END OF FILE
================================================================================ */
