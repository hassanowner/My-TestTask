/*
================================================================================
LOADING DATA FROM OTHER DOMAINS (CROSS-ORIGIN REQUESTS)
================================================================================

This file explains why cross-origin Ajax requests are restricted and
presents the three main techniques that allow loading data from
foreign domains despite these restrictions.

IMPORTANT:
This is a theoretical explanation. No concrete server-side
implementations are shown.

================================================================================
MAIN TOPICS COVERED
================================================================================

1) What cross-origin requests are
2) Why browsers block cross-origin Ajax requests
3) The Same-Origin Policy
4) Using a proxy server
5) Using CORS (Cross-Origin Resource Sharing)
6) Browser support and limitations of CORS
7) Using JSONP (JSON with Padding)
8) Comparison of the three techniques
9) Security considerations

================================================================================
WHAT IS A CROSS-ORIGIN REQUEST?
================================================================================ */

A cross-origin request occurs when:
• JavaScript loaded from one domain
• Tries to request data from a different domain

// Example:
• JavaScript loaded from: https://example.com
• Ajax request sent to: https://api.otherdomain.com

This request is cross-origin because:
• Domain is different
• Protocol, domain, or port differs

/* ================================================================================
THE SAME-ORIGIN POLICY (SOP)
================================================================================ */

The Same-Origin Policy is a browser security rule that states:

JavaScript can only access data from the same origin
(protocol + domain + port) from which it was loaded.

/* --------------------------------------------------------------------------------
WHY DOES THIS RULE EXIST?
-------------------------------------------------------------------------------- */

// The main goal is security:

✓ Prevent malicious scripts
✓ Protect user data
✓ Prevent session hijacking
✓ Prevent unauthorized data access

// Without SOP:
• Any website could read private data from other sites
• Cookies, sessions, and personal data would be exposed

/* ================================================================================
WHY AJAX IS RESTRICTED
================================================================================ */

// Ajax requests are restricted because:
• They can read server responses
• This makes them dangerous if unrestricted

// Browsers therefore block:
• Ajax requests to foreign domains
• Unless explicit permission is granted

/*
================================================================================
HOW CAN DATA STILL BE LOADED FROM OTHER DOMAINS?
================================================================================ */

// Despite these restrictions, three techniques exist:

1) Proxy servers
2) CORS (Cross-Origin Resource Sharing)
3) JSONP (JSON with Padding)

// Each solves the problem in a different way.

/*
================================================================================
METHOD 1: USING A PROXY SERVER
================================================================================

--------------------------------------------------------------------------------
WHAT IS A PROXY?
--------------------------------------------------------------------------------

A proxy is a server-side component that:
• Belongs to your own domain
• Forwards requests to external domains
• Returns the response to the client

--------------------------------------------------------------------------------
HOW IT WORKS (CONCEPT)
--------------------------------------------------------------------------------

1) Browser sends Ajax request to your server (same origin)
2) Your server (proxy) sends request to foreign server
3) Foreign server responds to your server
4) Your server forwards the response to the browser

--------------------------------------------------------------------------------
WHY THIS WORKS
--------------------------------------------------------------------------------

• Same-Origin Policy applies only in the browser
• Server-to-server requests have no such restriction

--------------------------------------------------------------------------------
ADVANTAGES
--------------------------------------------------------------------------------

✓ Works with any browser
✓ Full control over requests
✓ Can modify or filter responses
✓ No CORS dependency

--------------------------------------------------------------------------------
DISADVANTAGES
--------------------------------------------------------------------------------

✗ Requires server-side code
✗ Increased server load
✗ Can become a security risk if misused




================================================================================
METHOD 2: CORS (CROSS-ORIGIN RESOURCE SHARING)
================================================================================

--------------------------------------------------------------------------------
WHAT IS CORS?
--------------------------------------------------------------------------------

CORS is an official web standard that allows servers
to explicitly permit cross-origin requests.

The server decides who may access its resources.

--------------------------------------------------------------------------------
HOW CORS WORKS (SIMPLIFIED)
--------------------------------------------------------------------------------

1) Browser sends a request with an Origin header
2) Server checks the Origin
3) Server responds with Access-Control-Allow-Origin
4) Browser allows or blocks the request based on response

--------------------------------------------------------------------------------
THE PREFLIGHT REQUEST
--------------------------------------------------------------------------------

For certain requests, browsers send a "preflight" request:

• HTTP method: OPTIONS
• Sent automatically by the browser
• Checks permissions before the real request

Headers involved:
• Origin
• Access-Control-Request-Method

--------------------------------------------------------------------------------
SERVER RESPONSE
--------------------------------------------------------------------------------

Server must respond with:
• Access-Control-Allow-Origin
• Optionally allowed methods and headers

If the origin is allowed:
✓ Actual request is sent
If not:
✗ Browser blocks the request

--------------------------------------------------------------------------------
ADVANTAGES
--------------------------------------------------------------------------------

✓ Standardized and secure
✓ No proxy required
✓ Server-controlled access
✓ Widely supported in modern browsers

--------------------------------------------------------------------------------
DISADVANTAGES
--------------------------------------------------------------------------------

✗ Requires server configuration
✗ Older browsers may not support it
✗ Cannot bypass server restrictions




================================================================================
METHOD 3: JSONP (JSON WITH PADDING)
================================================================================

--------------------------------------------------------------------------------
WHAT IS JSONP?
--------------------------------------------------------------------------------

JSONP exploits the fact that:
• <script> tags can load JavaScript from any domain
• Script loading is NOT restricted by SOP

--------------------------------------------------------------------------------
HOW JSONP WORKS
--------------------------------------------------------------------------------

1) Client defines a global callback function
2) Client loads a script from another domain
3) That script calls the callback function with data
4) Data becomes available inside the function

--------------------------------------------------------------------------------
IMPORTANT CHARACTERISTIC
--------------------------------------------------------------------------------

JSONP:
• Is NOT Ajax
• Uses <script> tags
• Only works with GET requests

--------------------------------------------------------------------------------
ADVANTAGES
--------------------------------------------------------------------------------

✓ Works in very old browsers
✓ No CORS support required
✓ Simple concept

--------------------------------------------------------------------------------
DISADVANTAGES
--------------------------------------------------------------------------------

✗ GET requests only
✗ Security risks (executes foreign JavaScript)
✗ No error handling
✗ Obsolete in modern applications



================================================================================
COMPARISON TABLE
================================================================================ */

METHOD     | SERVER REQUIRED | SECURITY | MODERN USE | LIMITATIONS
---------- | ---------------- | -------- | ---------- | ----------------------------
Proxy      | Yes              | Medium   | Common     | Server overhead
CORS       | Yes              | High     | Preferred  | Needs server support
JSONP      | No               | Low      | Rare       | GET only, unsafe

/*
================================================================================
WHICH METHOD SHOULD BE USED?
================================================================================

Use CORS when:
✓ You control the server
✓ Modern browsers are targeted
✓ Security is important

Use a Proxy when:
✓ You cannot control the foreign server
✓ You need full flexibility
✓ You need to modify responses

Avoid JSONP unless:
✓ Supporting very old browsers
✓ No other option exists

================================================================================
SECURITY SUMMARY
================================================================================

• Same-Origin Policy protects users
• CORS is the modern, secure solution
• Proxies bypass browser limits safely when controlled
• JSONP is outdated and risky

================================================================================
END OF FILE
================================================================================ */
