/*
========================================================
ACCESSING THE INDIVIDUAL COMPONENTS OF A URL
========================================================

1) TOPICS THAT WILL BE STUDIED
-----------------------------
This topic explains how to access and analyze the different
components of a URL using JavaScript. A URL is made up of
multiple parts that describe how and where a resource is
accessed on the web.

The main areas covered are:
- Structure of a URL
- URL component properties
- Purpose and usage of each URL property

The properties covered are:
href, protocol, host, hostname, port, pathname,
search, hash, username, password, origin

--------------------------------------------------------


2) OVERVIEW: URL COMPONENTS
--------------------------
A URL consists of:
- Protocol (communication method)
- Hostname (domain name)
- Port (server port number)
- Path (resource location)
- Query parameters (data sent to the server)
- Fragment identifier (page section reference)
- Authentication information (username & password)

--------------------------------------------------------


3) FEATURES EXPLANATION
----------------------

• FEATURE 1: href
-----------------
What it does:
Contains the complete URL as a single string.

Function:
Provides full access to the entire address of the web page.

Explanation:
This property is commonly used to read or redirect to a URL.

Example: */
console.log(window.location.href);

// Example output:
https://www.example.com:8080/path/page.html?name=John#info

/* --------------------------------------------------------

• FEATURE 2: protocol
---------------------
What it does:
Returns the protocol of the URL including the colon.

Function:
Indicates how data is transferred between browser and server.

Explanation:
Common protocols include http:, https:, ftp:, and file:.

Example: */
console.log(window.location.protocol);

// Example output:
https:

/* --------------------------------------------------------

• FEATURE 3: host
-----------------
What it does:
Returns the hostname including the port (if specified).

Function:
Identifies the server location including port number.

Explanation:
If a port exists, it is appended to the hostname.

Example: */
console.log(window.location.host);

// Example output:
example.com:8080

/* --------------------------------------------------------

• FEATURE 4: hostname
---------------------
What it does:
Returns only the domain name without the port.

Function:
Identifies the domain of the URL.

Explanation:
Unlike host, this property never includes port information.

Example: */
console.log(window.location.hostname);

// Example output:
example.com

/* --------------------------------------------------------

• FEATURE 5: port
-----------------
What it does:
Returns the port number of the URL.

Function:
Specifies the communication endpoint on the server.

Explanation:
If no port is specified, this property returns an empty string.

Example: */
console.log(window.location.port);

// Example output:
8080

/* --------------------------------------------------------

• FEATURE 6: pathname
---------------------
What it does:
Returns the path part of the URL starting with a slash (/).

Function:
Indicates the location of the resource on the server.

Explanation:
Used to identify specific pages or resources.

Example: */
console.log(window.location.pathname);

// Example output:
/path/page.html

/* --------------------------------------------------------

• FEATURE 7: search
-------------------
What it does:
Returns the query string including the question mark (?).

Function:
Contains parameters sent to the server.

Explanation:
Multiple parameters are separated by an ampersand (&).

Example: */
console.log(window.location.search);

// Example output:
?firstName=John&lastName=Doe

/* --------------------------------------------------------

• FEATURE 8: hash
-----------------
What it does:
Returns the fragment identifier including the # symbol.

Function:
Refers to a specific section of the web page.

Explanation:
If an element with the matching ID exists,
the page automatically scrolls to that element.

Example: */
console.log(window.location.hash);

// Example output:
#services

/* --------------------------------------------------------

• FEATURE 9: username
---------------------
What it does:
Returns the username specified in the URL.

Function:
Used for authentication when credentials are embedded in a URL.

Explanation:
This feature is not supported by all browsers
and is generally discouraged for security reasons.

Example: */
console.log(window.location.username);

// Example output:
john

/* --------------------------------------------------------

• FEATURE 10: password
----------------------
What it does:
Returns the password specified in the URL.

Function:
Used for authentication together with the username.

Explanation:
Like username, this is not supported by all browsers
and should not be used due to security concerns.

Example: */
console.log(window.location.password);

// Example output:
secret

/* --------------------------------------------------------

• FEATURE 11: origin
-------------------
What it does:
Returns the canonical origin of the URL.

Function:
Identifies the security origin used by the browser.

Explanation:
Consists of:
protocol + "://" + hostname + optional port

Example: */
console.log(window.location.origin);

//Example output:
https://example.com:8080

/*
--------------------------------------------------------


4) SUMMARY
---------
href       → complete URL  
protocol   → communication protocol  
host       → domain + port  
hostname   → domain only  
port       → port number  
pathname   → resource path  
search     → query parameters  
hash       → page fragment  
username   → URL username (limited support)  
password   → URL password (limited support)  
origin     → canonical URL origin  

These properties allow full access to and control over
URL analysis and navigation in JavaScript.

========================================================
END OF FILE
======================================================== */
