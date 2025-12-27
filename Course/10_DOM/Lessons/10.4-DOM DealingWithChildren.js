/*
====================================================================
TOPIC: DOM — Dealing With Children Nodes & Elements
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) HTML Structure Used for Demonstration
2) Selecting Elements from the DOM
3) children
4) childNodes
5) firstChild & lastChild
6) firstElementChild & lastElementChild
====================================================================
*/


/*
====================================================================
1) HTML STRUCTURE (IMPORTANT FOR UNDERSTANDING THE DIFFERENCES)
====================================================================
- This structure contains:
  • Elements
  • Text nodes (spaces & line breaks)
  • Comments

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Children Demo</title>
</head>
<body>

  <div id="container">
    
    <!-- This is a comment node -->

    <h2>Heading One</h2>
    Text Between Elements
    <p>Paragraph One</p>

  </div>

</body>
</html>

NOTE:
- The HTML above is commented because this is a JavaScript-only file.
- Node differences depend heavily on spaces, comments, and line breaks.
====================================================================
*/


/*
====================================================================
2) Selecting the Element
====================================================================
- querySelector is used to select the <div>.
*/

let myElement = document.querySelector("#container");

console.log(myElement);
/*
OUTPUT:
<div id="container">...</div>
*/


/*
====================================================================
3) children
====================================================================
- Returns ONLY HTML elements
- Ignores:
  • Text nodes
  • Comment nodes
- Collection type: HTMLCollection
*/

console.log(myElement.children);
/*
OUTPUT:
HTMLCollection(2) [h2, p]
*/

console.log(myElement.children[0]);
/*
OUTPUT:
<h2>Heading One</h2>
*/


/*
====================================================================
4) childNodes
====================================================================
- Returns EVERYTHING inside the element:
  • Elements
  • Text nodes (spaces & line breaks)
  • Comment nodes
- Collection type: NodeList
*/

console.log(myElement.childNodes);
/*
OUTPUT (order matters):
NodeList [
  text,
  comment,
  text,
  h2,
  text,
  p,
  text
]
*/

console.log(myElement.childNodes[0]);
/*
OUTPUT:
#text
- Represents whitespace before the comment
*/


/*
====================================================================
5) firstChild & lastChild
====================================================================
- Returns the FIRST / LAST node
- The node can be:
  • Text
  • Comment
  • Element
*/

console.log(myElement.firstChild);
/*
OUTPUT:
#text
*/

console.log(myElement.lastChild);
/*
OUTPUT:
#text
*/


/*
====================================================================
6) firstElementChild & lastElementChild
====================================================================
- Returns ONLY elements
- Safest way to access real HTML elements
*/

console.log(myElement.firstElementChild);
/*
OUTPUT:
<h2>Heading One</h2>
*/

console.log(myElement.lastElementChild);
/*
OUTPUT:
<p>Paragraph One</p>
*/


/*
====================================================================
FINAL TECHNICAL SUMMARY
====================================================================
children              → Elements only
childNodes            → All node types
firstChild            → First node (may be text)
firstElementChild     → First HTML element
lastChild             → Last node (may be text)
lastElementChild      → Last HTML element

BEST PRACTICE:
- Use *Element* versions when working with layout & logic
====================================================================
*/
