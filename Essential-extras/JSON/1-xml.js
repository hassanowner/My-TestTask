/*
================================================================================
XML — FULL EXPLANATION
================================================================================

## MAIN TOPICS COVERED
---------------------
• What XML is
• Why XML is used and its benefits
• How XML works (structure & hierarchy)
• XML in client–server communication
• Example of an XML document
• Converting XML strings into XML objects (Parsing)
• DOMParser usage and rules
• Converting XML objects into strings (Serialization)
• XMLSerializer usage and rules
• Comparison and summary table (Parsing vs Serialization)

================================================================================
1) WHAT IS XML?
================================================================================ */

XML (Extensible Markup Language) is a markup language designed to store,
structure, and transport data in a hierarchical and human-readable way.

Unlike HTML (which focuses on presentation), XML focuses purely on data
representation and organization.

/* --------------------------------------------------
HOW XML WORKS
--------------------------------------------------
• Data is wrapped in custom tags.
• Tags describe the meaning of the data.
• Data is structured hierarchically (tree structure).
• There must be ONE root element.
• Every opening tag must have a closing tag.
• Tags are case-sensitive.

--------------------------------------------------
BENEFITS OF XML
--------------------------------------------------
• Platform-independent
• Language-independent
• Human-readable
• Self-descriptive
• Well-structured hierarchical data
• Widely supported by servers and browsers
• Can be validated using XML Schema (XSD) or DTD

--------------------------------------------------
CLIENT–SERVER COMMUNICATION (ILLUSTRATION)
-------------------------------------------------- */

Client (Browser / JS)
        |
        |  AJAX Request
        |  (XML string)
        v
Server (Backend)
        |
        |  XML Response
        v
Client (JS parses XML into DOM)


// SIMPLE XML STRUCTURE EXAMPLE
  
<?xml version="1.0" encoding="UTF-8"?>
<artists>
  <artist name="Kyuss">
    <albums>
      <album>
        <title>Wretch</title>
        <year>1991</year>
      </album>
    </albums>
  </artist>
</artists>

// Explanation:
• <artists> → root element
• <artist> → child element with attribute "name"
• <albums> → groups albums
• <album> → contains album info
• <title> and <year> → leaf nodes


/*
================================================================================
3) CONVERTING STRINGS TO XML OBJECTS (PARSING)
================================================================================

--------------------------------------------------
WHAT IS PARSING?
--------------------------------------------------
Parsing is the process of converting a string that contains XML text
into an XML Document object that JavaScript can work with using DOM
methods.

--------------------------------------------------
WHY PARSING IS IMPORTANT
--------------------------------------------------
• AJAX responses often return XML as text
• JavaScript cannot directly query XML strings
• Parsing allows:
  - querySelector()
  - getAttribute()
  - textContent
• Enables structured data access

--------------------------------------------------
MAIN TOOL USED
--------------------------------------------------
DOMParser

--------------------------------------------------
BASIC RULES FOR PARSING
--------------------------------------------------
• XML must be valid
• One root element only
• Proper opening and closing tags
• Correct MIME type (usually "text/xml")
• Use parseFromString(), NOT parseFormString()

--------------------------------------------------
SYNTAX
-------------------------------------------------- */
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'text/xml');


// PROGRAMMING EXAMPLE

const xmlString = `
<?xml version="1.0" encoding="UTF-8"?>
<artists>
  <artist name="Kyuss">
    <albums>
      <album>
        <title>Wretch</title>
        <year>1991</year>
      </album>
    </albums>
  </artist>
</artists>
`;

const domParser = new DOMParser();
const xmlDOM = domParser.parseFromString(xmlString, 'text/xml');

const artist = xmlDOM.querySelector('artist');

console.log(artist.getAttribute('name'));        // Kyuss
console.log(artist.querySelector('title').textContent); // Wretch
console.log(artist.querySelector('year').textContent);  // 1991

/*
--------------------------------------------------
OTHER WAYS TO PARSE XML
-------------------------------------------------- */
• XMLHttpRequest (responseXML)
• Fetch API (response.text() + DOMParser)
• Server-side parsers (outside JS scope)


/*
================================================================================
4) CONVERTING XML OBJECTS TO STRINGS (SERIALIZATION)
================================================================================

--------------------------------------------------
WHAT IS SERIALIZATION?
--------------------------------------------------
Serialization is the process of converting an XML Document object back
into a string format.

--------------------------------------------------
WHY SERIALIZATION IS IMPORTANT
--------------------------------------------------
• Sending XML back to a server
• Storing XML in files or databases
• Logging or debugging XML data
• Modifying XML and exporting it

--------------------------------------------------
MAIN TOOL USED
--------------------------------------------------
XMLSerializer

--------------------------------------------------
BASIC RULES FOR SERIALIZATION
--------------------------------------------------
• Input must be a valid XML Document object
• serializeToString() returns a string
• Result is pure XML text

--------------------------------------------------
SYNTAX
-------------------------------------------------- */
const serializer = new XMLSerializer();
const xmlString = serializer.serializeToString(xmlDoc);


// PROGRAMMING EXAMPLE

const xmlString = `
<?xml version="1.0" encoding="UTF-8"?>
<artists>
  <artist name="Kyuss">
    <albums>
      <album>
        <title>Wretch</title>
        <year>1991</year>
      </album>
    </albums>
  </artist>
</artists>
`;

const domParser = new DOMParser();
const xmlDOM = domParser.parseFromString(xmlString, 'text/xml');

const serializer = new XMLSerializer();
const serializedXML = serializer.serializeToString(xmlDOM);

console.log(serializedXML);


/*
================================================================================
5) SUMMARY TABLE & COMPARISON
================================================================================

| Aspect                     | Parsing                      | Serialization              |
|----------------------------|------------------------------|----------------------------|
| Purpose                    | String → XML Object         | XML Object → String        |
| Tool Used                  | DOMParser                    | XMLSerializer              |
| Input Type                 | XML String                   | XML Document               |
| Output Type                | XML Document                 | XML String                 |
| Used For                   | Reading XML                  | Sending / Saving XML       |
| DOM Access                 | Yes                          | No                         |
| Common Method              | parseFromString()            | serializeToString()        |
| Typical Use Case           | AJAX response handling.      | AJAX request sending       |

--------------------------------------------------
KEY DIFFERENCE IN ONE SENTENCE
--------------------------------------------------
Parsing lets JavaScript READ XML data, while serialization lets
JavaScript SEND or STORE XML data.

================================================================================
END OF FILE
================================================================================ */
