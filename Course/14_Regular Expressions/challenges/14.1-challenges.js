/* =========================================================================
REGEX CHALLENGES — Practical Test Tasks (Advanced Level)
Topics Used ONLY:
- Regex syntax
- Flags (i, g, m)
- match()
- Ranges and character sets
=========================================================================
Each challenge:
1) Starts with a QUESTION (real-world scenario)
2) Then the ANSWER (regex + code)
3) Result shown as a comment
=========================================================================
*/



/* =========================================================================
CHALLENGE 1 — Matching URLs in Text (Links Detection)
============================================================================
QUESTION:
You are given a block of descriptive text that may contain website links.
Your task is to extract ONLY valid HTTP or HTTPS links.

Rules:
- Match links starting with http:// or https://
- Domain name must contain letters
- Stop matching at whitespace
- Use global matching
============================================================================
*/

// GIVEN DATA
let textWithLinks = `
Visit our site at https://example.com for docs.
Backup site: http://test-server.org/api
Invalid link: ftp://oldsite.com
`;

// ANSWER
let urlRegex = /https?:\/\/[a-zA-Z.-]+/g;

let matchedLinks = textWithLinks.match(urlRegex);

console.log(matchedLinks);
// RESULT:
// ["https://example.com", "http://test-server.org"]



/* =========================================================================
CHALLENGE 2 — Extract Programming Languages from Description
============================================================================
QUESTION:
You receive a technical description mentioning programming languages.
Extract ONLY these languages:
JavaScript, Python, Java, C++, PHP

Rules:
- Use OR operator (|)
- Case-insensitive matching
- Return ALL occurrences
============================================================================
*/

// GIVEN DATA
let description = `
This project uses JavaScript for frontend,
Python for data processing,
and Java for backend services.
C++ is optional. php is not required.
`;

// ANSWER
let languageRegex = /(javascript|python|java|c\+\+|php)/ig;

let languagesUsed = description.match(languageRegex);

console.log(languagesUsed);
// RESULT:
// ["JavaScript", "Python", "Java", "C++", "php"]



/* =========================================================================
CHALLENGE 3 — Validating Tool Versions (Numbers + Dots)
============================================================================
QUESTION:
You are scanning logs to find tool versions written like:
v1.2.3 or v10.4 or v2.0.15

Rules:
- Version must start with letter "v"
- Followed by numbers and dots
- Extract only valid versions
============================================================================
*/

// GIVEN DATA
let logText = `
Installed tools:
v1.2.3
v10.4
version2.3
v2.0.15
vX.3
`;

// ANSWER
let versionRegex = /v[0-9.]+/g;

let versions = logText.match(versionRegex);

console.log(versions);
// RESULT:
// ["v1.2.3", "v10.4", "v2.0.15"]



/* =========================================================================
CHALLENGE 4 — Matching Keywords at Line Start (Multiline + Case-Insensitive)
============================================================================
QUESTION:
You are parsing a configuration file.
Extract ONLY lines that START with these keywords:
ERROR, WARNING, INFO

Rules:
- Match ONLY at the beginning of a line
- Ignore case
- Use multiline mode
============================================================================
*/

// GIVEN DATA
let logFile = `
INFO Server started
debug cache initialized
WARNING Low memory
error Disk not found
STATUS OK
`;

// ANSWER
let logLevelRegex = /^(info|warning|error)/gim;

let logLevels = logFile.match(logLevelRegex);

console.log(logLevels);
// RESULT:
// ["INFO", "WARNING", "error"]
