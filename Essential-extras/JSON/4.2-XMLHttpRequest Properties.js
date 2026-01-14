/*
================================================================================
XMLHttpRequest PROPERTIES — FULL ONE-BY-ONE EXPLANATION (ONE SQUARE FILE)
================================================================================

This file explains ALL important properties of the XMLHttpRequest object
one by one.

For EACH property, you will find:
• What the property is
• What it does
• When it is used
• Why it is important
• A simple example (when useful)

================================================================================
EVENT HANDLER PROPERTIES (REQUEST LIFECYCLE)
================================================================================

--------------------------------------------------------------------------------
1) onabort
--------------------------------------------------------------------------------

WHAT IT IS  
An event handler property.

WHAT IT DOES  
• Executes when a request is cancelled using abort()

WHEN IT IS USED  
• When the request is manually stopped

WHY IT IS IMPORTANT  
• Detect request cancellation
• Clean up UI or logic after aborting

EXAMPLE
-------------------------------------------------- */
request.onabort = () => {
  console.log('Request was aborted');
};
/* --------------------------------------------------

--------------------------------------------------------------------------------
2) onerror
--------------------------------------------------------------------------------

WHAT IT IS  
An event handler for request errors.

WHAT IT DOES  
• Fires when a network error occurs
• Does NOT fire for HTTP errors like 404 or 500

WHEN IT IS USED  
• Connection issues
• DNS failures
• Network interruptions

WHY IT IS IMPORTANT  
• Handle network failures gracefully

EXAMPLE
--------------------------------------------------*/
request.onerror = () => {
  console.log('Network error occurred');
};
/*--------------------------------------------------

--------------------------------------------------------------------------------
3) onload
--------------------------------------------------------------------------------

WHAT IT IS  
An event handler for successful request completion.

WHAT IT DOES  
• Fires when the request finishes successfully
• Response data is available

WHEN IT IS USED  
• Reading responseText, response, responseXML

WHY IT IS IMPORTANT  
• Main place to process server responses

EXAMPLE
-------------------------------------------------- */
request.onload = () => {
  console.log(request.responseText);
};
/* --------------------------------------------------

--------------------------------------------------------------------------------
4) onloadend
--------------------------------------------------------------------------------

WHAT IT IS  
An event handler that fires at the very end of a request.

WHAT IT DOES  
• Fires after success OR failure

WHEN IT IS USED  
• Cleanup logic
• Stop loaders or spinners

WHY IT IS IMPORTANT  
• Always runs regardless of outcome

--------------------------------------------------------------------------------
5) onloadstart
--------------------------------------------------------------------------------

WHAT IT IS  
An event handler that fires when the request starts.

WHAT IT DOES  
• Executes right after send() is called

WHEN IT IS USED  
• Show loading indicators

WHY IT IS IMPORTANT  
• Indicates request initiation

--------------------------------------------------------------------------------
6) onprogress
--------------------------------------------------------------------------------

WHAT IT IS  
An event handler for tracking request progress.

WHAT IT DOES  
• Fires periodically while data is loading

WHEN IT IS USED  
• Large downloads
• Streaming data

WHY IT IS IMPORTANT  
• Create progress bars

--------------------------------------------------------------------------------
7) onreadystatechange
--------------------------------------------------------------------------------

WHAT IT IS  
An event handler for state changes.

WHAT IT DOES  
• Fires every time readyState changes

WHEN IT IS USED  
• Older style request handling

WHY IT IS IMPORTANT  
• Allows detailed control over request states

--------------------------------------------------------------------------------
8) ontimeout
--------------------------------------------------------------------------------

WHAT IT IS  
An event handler for timeout events.

WHAT IT DOES  
• Fires when request exceeds timeout duration

WHEN IT IS USED  
• Slow servers
• Unresponsive endpoints

WHY IT IS IMPORTANT  
• Prevents endless waiting

================================================================================
STATE & STATUS PROPERTIES
================================================================================

--------------------------------------------------------------------------------
9) readyState
--------------------------------------------------------------------------------

WHAT IT IS  
A numeric value representing request state.

VALUES  */
• 0 → UNSENT
• 1 → OPENED
• 2 → HEADERS_RECEIVED
• 3 → LOADING
• 4 → DONE

/*WHY IT IS IMPORTANT  
• Track request lifecycle

--------------------------------------------------------------------------------
10) status
--------------------------------------------------------------------------------

WHAT IT IS  
The HTTP status code returned by the server.

EXAMPLES */ 
• 200 → OK
• 404 → Not Found
• 500 → Server Error

/*WHY IT IS IMPORTANT  
• Check request success or failure

--------------------------------------------------------------------------------
11) statusText
--------------------------------------------------------------------------------

WHAT IT IS  
A text message describing the HTTP status.

EXAMPLE  */
• "OK"
• "Not Found"

/*WHY IT IS IMPORTANT  
• Human-readable status info

================================================================================
RESPONSE DATA PROPERTIES
================================================================================

--------------------------------------------------------------------------------
12) response
--------------------------------------------------------------------------------

WHAT IT IS  
The full response body in its final form.

POSSIBLE TYPES  */
• String
• JSON object
• Blob
• ArrayBuffer
• Document
• null

/* WHY IT IS IMPORTANT  
• Unified way to access response data

--------------------------------------------------------------------------------
13) responseText
--------------------------------------------------------------------------------

WHAT IT IS  
Response body as a string.

WHEN IT IS USED  */
• Text-based responses
• HTML
• JSON as text

/*LIMITATION  
• Only works for text responses

--------------------------------------------------------------------------------
14) responseXML
--------------------------------------------------------------------------------

WHAT IT IS  
Response parsed as an XML Document.

WHEN IT IS USED  */
• XML responses

/* LIMITATION  
• Only works if response is valid XML

--------------------------------------------------------------------------------
15) responseType
--------------------------------------------------------------------------------

WHAT IT IS  
Defines the expected type of the response.

POSSIBLE VALUES  */
• "" (default string)
• "text"
• "json"
• "blob"
• "arraybuffer"
• "document"

/* WHY IT IS IMPORTANT  
• Ensures correct response parsing

EXAMPLE
--------------------------------------------------*/
request.responseType = 'json';
/*--------------------------------------------------

================================================================================
CONFIGURATION PROPERTIES
================================================================================

--------------------------------------------------------------------------------
16) timeout
--------------------------------------------------------------------------------

WHAT IT IS  
Defines how long the request may take (milliseconds).

WHAT IT DOES  
• Automatically aborts request after time limit

WHY IT IS IMPORTANT  
• Prevents infinite waiting

EXAMPLE
-------------------------------------------------- */
request.timeout = 5000;
/* --------------------------------------------------

--------------------------------------------------------------------------------
17) upload
--------------------------------------------------------------------------------

WHAT IT IS  
An object used to track upload progress.

WHAT IT DOES  
• Provides upload-specific events

WHEN IT IS USED  
• File uploads
• Large data submissions

WHY IT IS IMPORTANT  
• Track upload progress separately

--------------------------------------------------------------------------------
18) withCredentials
--------------------------------------------------------------------------------

WHAT IT IS  
A Boolean configuration property.

WHAT IT DOES  
• Enables sending cookies and credentials

WHEN IT IS USED  
• Cross-origin requests with authentication

WHY IT IS IMPORTANT  
• Secure authenticated requests

EXAMPLE
-------------------------------------------------- */
request.withCredentials = true;
/* --------------------------------------------------



================================================================================
FINAL SUMMARY
================================================================================

• Properties control request behavior and data access
• Event handlers track lifecycle stages
• Response properties store returned data
• Configuration properties affect timing, credentials, and parsing

Understanding these properties gives you COMPLETE control over
XMLHttpRequest behavior.

================================================================================
END OF FILE
================================================================================ */
