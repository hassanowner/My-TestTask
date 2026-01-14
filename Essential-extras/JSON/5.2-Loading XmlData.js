/*
================================================================================
LOADING XML DATA VIA AJAX & GENERATING HTML ON THE CLIENT SIDE
================================================================================

This section explains why and how XML data is loaded via Ajax and then
converted into HTML dynamically on the client side instead of sending
ready-made HTML from the server.

================================================================================
1) WHY NOT LOAD HTML DIRECTLY FROM THE SERVER?
================================================================================

In many real-world applications, loading HTML from the server is NOT the
best solution.

Example problem:
• You want to display database records (artists, users, products)
• Data changes frequently
• HTML structure stays mostly the same

If the server:
• Generates HTML
• Sends it to the client
• Client only displays it

Then:
✗ Data and presentation are tightly coupled
✗ Harder to maintain
✗ Less flexible
✗ More server workload


================================================================================
2) BETTER APPROACH: DATA + CLIENT-SIDE HTML GENERATION
================================================================================

A better solution is:
• Server sends RAW DATA (XML or JSON)
• Client generates HTML dynamically

Advantages:
✓ Clean separation of concerns
✓ Reusable data
✓ Better performance
✓ More flexibility
✓ Easier UI updates

This follows the principle:

SERVER  →  DATA ONLY  
CLIENT  →  PRESENTATION (HTML)


================================================================================
3) WHY USE XML FOR THIS?
================================================================================

XML is suitable because:
• Hierarchical structure
• Self-describing tags
• Easy to parse
• Works well with DOM APIs

Example: */
Artists → Albums → Titles → Years


/*
================================================================================
4) LOADING XML DATA VIA AJAX
================================================================================

--------------------------------------------------------------------------------
HOW THE BROWSER HANDLES XML
--------------------------------------------------------------------------------

• Server sends XML with MIME type:
  - text/xml OR application/xml
• Browser automatically recognizes it as XML
• XML is parsed into a Document object

You can reinforce this behavior by:
• Setting responseType = 'document'
• Setting Accept header to text/xml

--------------------------------------------------------------------------------
BASIC STEPS
--------------------------------------------------------------------------------

1) Create XMLHttpRequest
2) Configure onload handler
3) Open request
4) Set responseType
5) Set Accept header
6) Send request

--------------------------------------------------------------------------------
BASIC XML AJAX EXAMPLE
-------------------------------------------------------------------------------- */

'use strict';

const request = new XMLHttpRequest();

request.onload = () => {
  if (request.status === 200) {
    const xml = request.responseXML;
    console.log(xml); // XML as Document object
  }
};

request.open(
  'GET',
  'content/data.xml'
);

request.responseType = 'document';
request.setRequestHeader('Accept', 'text/xml');

request.send(null);

/*--------------------------------------------------------------------------------
BASIC RULES FOR LOADING XML
--------------------------------------------------------------------------------

• responseType MUST be "document"
• Server must return valid XML
• Accept header should be text/xml or application/xml
• Access data via responseXML


================================================================================
5) USING XML DOM METHODS ON THE RESPONSE
================================================================================

Because responseXML is a Document:
• You can use DOM methods:
  - getElementsByTagName()
  - querySelector()
  - querySelectorAll()
  - getAttribute()
  - textContent

This is the key advantage of XML.

================================================================================
6) USAGE EXAMPLE: GENERATING AN HTML TABLE FROM XML
================================================================================

--------------------------------------------------------------------------------
GOAL
--------------------------------------------------------------------------------

• Load artists.xml via Ajax
• Read artist and album data
• Generate an HTML table dynamically

--------------------------------------------------------------------------------
DATA STRUCTURE (SIMPLIFIED)
-------------------------------------------------------------------------------- */

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

/*--------------------------------------------------------------------------------
STEP 1: LOAD XML
-------------------------------------------------------------------------------- */

const request = new XMLHttpRequest();

request.onload = () => {
  if (request.status === 200) {
    const xml = request.responseXML;
    generateTable(xml);
  }
};

request.open('GET', 'artists.xml');
request.responseType = 'document';
request.setRequestHeader('Accept', 'text/xml');
request.send();

/*--------------------------------------------------------------------------------
STEP 2: PROCESS XML AND BUILD TABLE
--------------------------------------------------------------------------------*/

function generateTable(xml) {
  const artists = xml.getElementsByTagName('artist');
  const table = document.createElement('table');

  for (let artist of artists) {
    const artistName = artist.getAttribute('name');
    const albums = artist.getElementsByTagName('album');

    for (let album of albums) {
      const title = album.getElementsByTagName('title')[0].textContent;
      const year = album.getElementsByTagName('year')[0].textContent;

      table.appendChild(
        createRow(artistName, title, year)
      );
    }
  }

  document.body.appendChild(table);
}

/*--------------------------------------------------------------------------------
STEP 3: CREATE TABLE ROW
--------------------------------------------------------------------------------*/

function createRow(artist, title, year) {
  const row = document.createElement('tr');

  const artistCell = document.createElement('td');
  artistCell.textContent = artist;

  const titleCell = document.createElement('td');
  titleCell.textContent = title;

  const yearCell = document.createElement('td');
  yearCell.textContent = year;

  row.appendChild(artistCell);
  row.appendChild(titleCell);
  row.appendChild(yearCell);

  return row;
}

/*
================================================================================
7) WHAT IS HAPPENING INTERNALLY?
================================================================================

1) XML is downloaded via Ajax
2) Browser parses XML automatically
3) XML becomes a DOM tree
4) JavaScript traverses the tree
5) HTML elements are created dynamically
6) Data is displayed in the browser

  
================================================================================
8) WHY THIS APPROACH IS IMPORTANT
================================================================================

✓ Data can be reused (tables, lists, charts)
✓ HTML logic stays on client
✓ Server only delivers data
✓ Cleaner architecture
✓ Easier maintenance
✓ Foundation for modern SPAs

  
================================================================================
FINAL SUMMARY
================================================================================

• Loading HTML from server is often inefficient
• Better approach: load XML data
• XML is parsed into a Document object
• DOM methods allow easy data access
• HTML is generated dynamically on client
• This ensures clean separation between:
  - DATA (XML)
  - PRESENTATION (HTML)

================================================================================
END OF FILE
================================================================================ */
