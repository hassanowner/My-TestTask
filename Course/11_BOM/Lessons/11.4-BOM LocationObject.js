/*
====================================================================
TOPIC: BOM (Browser Object Model)
Location Object — Professional & Programmatic Guide
====================================================================

STUDIED TOPICS & AVAILABLE FEATURES
- Understanding the location object
- Reading URL data using properties
- Controlling browser navigation
- Reloading and redirecting pages

LOCATION OBJECT PROPERTIES
- location.href
- location.host
- location.hostname
- location.protocol
- location.hash

LOCATION OBJECT METHODS
- location.reload()
- location.assign()
- location.replace()

====================================================================
GENERAL OVERVIEW
- The Location object provides detailed information about the
  current document URL.
- It also allows controlled navigation and redirection.
- Location operations directly affect browser behavior.

MAIN OBJECTIVES
- Reading URL data programmatically
- Performing safe navigation
- Understanding browser history impact
- Differentiating navigation methods
====================================================================
*/


/*
====================================================================
HTML STRUCTURE (REFERENCE ONLY)
====================================================================

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Location API Demo</title>
</head>

<body>
  <button id="navigate">Navigate</button>
</body>
</html>

NOTE:
- This markup is commented because this is a JavaScript-only file.
====================================================================
*/


/*
====================================================================
SECTION 1: location OBJECT OVERVIEW
====================================================================
- location is part of the Browser Object Model
- It is accessible via window.location
- Global access does not require window prefix
====================================================================
*/

const currentLocation = window.location;
console.log(currentLocation);


/*
====================================================================
SECTION 2: location.href (READING FULL URL)
====================================================================
- Returns the complete URL string
- Includes protocol, hostname, path, query, and fragment
====================================================================
*/

const pageURL = currentLocation.href;
console.log(pageURL);

/*
PROGRAM OUTPUT:
- Logs full URL to the console
*/


/*
====================================================================
SECTION 3: location.href (REDIRECTION)
====================================================================
- Assigning href triggers navigation
- The current document is saved in browser history
====================================================================
*/

// currentLocation.href = "https://example.com";

/*
RESULT:
- Browser navigates to the new resource
- User can return using Back button
*/


/*
====================================================================
SECTION 4: host vs hostname
====================================================================
- host     : domain including port number
- hostname : domain name only
====================================================================
*/

console.log(currentLocation.host);
console.log(currentLocation.hostname);

/*
Example URL:
https://localhost:8080

host     → localhost:8080
hostname → localhost
*/


/*
====================================================================
SECTION 5: protocol IDENTIFICATION
====================================================================
- Identifies communication protocol
- Common values:
  "http:"
  "https:"
  "file:"
====================================================================
*/

const protocolType = currentLocation.protocol;
console.log(protocolType);


/*
====================================================================
SECTION 6: hash (FRAGMENT IDENTIFIER)
====================================================================
- Refers to internal document anchor
- Does not cause full page reload
====================================================================
*/

const fragment = currentLocation.hash;
console.log(fragment);

/*
Example:
URL → https://site.com/#features
hash → "#features"
*/


/*
====================================================================
SECTION 7: reload() METHOD
====================================================================
- Reloads the current document
- Equivalent to manual browser refresh
====================================================================
*/

// currentLocation.reload();

/*
OPTIONAL:
currentLocation.reload(true);
- Bypasses cache when supported
*/


/*
====================================================================
SECTION 8: assign() METHOD
====================================================================
- Navigates to a new URL
- Preserves navigation history
====================================================================
*/

// currentLocation.assign("https://developer.mozilla.org");


/*
====================================================================
SECTION 9: replace() METHOD
====================================================================
- Navigates to a new URL
- Replaces current history entry
- Back navigation is disabled
====================================================================
*/

// currentLocation.replace("https://developer.mozilla.org");


/*
====================================================================
COMPARATIVE BEHAVIOR SUMMARY
====================================================================
Method        | History Entry | Back Button
--------------|---------------|-------------
href          | Yes           | Allowed
assign()      | Yes           | Allowed
replace()     | No            | Blocked
reload()      | Same Page     | Allowed
hash update   | Same Page     | Allowed
====================================================================
*/


/*
====================================================================
FINAL TECHNICAL NOTES
====================================================================
- Avoid uncontrolled redirection in production code
- Prefer hash-based navigation in SPA environments
- Use replace() carefully in authentication flows
- Always test browser history behavior
====================================================================
*/
