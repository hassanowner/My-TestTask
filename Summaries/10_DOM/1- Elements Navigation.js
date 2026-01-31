/*****************************************************************************************
 DOM SELECTION & TRAVERSAL
******************************************************************************************

This file explains:
- What each DOM property/method does
- What it returns
- How many elements/nodes it returns
- Example usage


*****************************************************************************************
1) getElementById()
******************************************************************************************
Rule: */
document.getElementById("id")

/* What it does:
- Selects an element by its UNIQUE id

Returns:
- Single ELEMENT

Count:
- 1 element only

Example:
*/
const elById = document.getElementById("title");


/*****************************************************************************************
2) getElementsByClassName()
******************************************************************************************
Rule: */
document.getElementsByClassName("className")

/* What it does:
- Selects elements by class name

Returns:
- HTMLCollection (LIVE)

Count:
- Multiple elements

Example:
*/
const elByClass = document.getElementsByClassName("item");


/*****************************************************************************************
3) getElementsByTagName()
******************************************************************************************
Rule: */
document.getElementsByTagName("tag")

/* What it does:
- Selects elements by tag name

Returns:
- HTMLCollection

Count:
- Multiple elements

Example:
*/
const elByTag = document.getElementsByTagName("div");


/*****************************************************************************************
4) getElementsByName()
******************************************************************************************
Rule: */
document.getElementsByName("name")

/* What it does:
- Selects elements by name attribute

Returns:
- NodeList

Count:
- Multiple elements

Example:
*/
const elByName = document.getElementsByName("gender");


/*****************************************************************************************
5) querySelector()
******************************************************************************************
Rule: */
document.querySelector("CSS selector")

/* What it does:
- Returns the FIRST element that matches the selector

Returns:
- Single ELEMENT

Count:
- 1 element

Example:
*/
const firstBox = document.querySelector(".box");


/*****************************************************************************************
6) querySelectorAll()
******************************************************************************************
Rule: */
document.querySelectorAll("CSS selector")

/* What it does:
- Selects ALL matching elements

Returns:
- NodeList

Count:
- Multiple elements

Example:
*/
const allBoxes = document.querySelectorAll(".box");


/*****************************************************************************************
7) parentElement
******************************************************************************************
What it does:
- Returns the parent ELEMENT only

Returns:
- Single ELEMENT

Example:
*/
const parentEl = firstBox.parentElement;


/*****************************************************************************************
8) parentNode
******************************************************************************************
What it does:
- Returns the parent NODE (element, document, text)

Returns:
- Single NODE

Example:
*/
const parentNode = firstBox.parentNode;


/*****************************************************************************************
9) previousElementSibling
******************************************************************************************
What it does:
- Returns previous sibling ELEMENT

Returns:
- Single ELEMENT

Example:
*/
const prevEl = firstBox.previousElementSibling;


/*****************************************************************************************
10) previousSibling
******************************************************************************************
What it does:
- Returns previous sibling NODE (text, comment, element)

Returns:
- Single NODE

Example:
*/
const prevNode = firstBox.previousSibling;


/*****************************************************************************************
11) nextElementSibling
******************************************************************************************
What it does:
- Returns next sibling ELEMENT

Returns:
- Single ELEMENT

Example:
*/
const nextEl = firstBox.nextElementSibling;


/*****************************************************************************************
12) nextSibling
******************************************************************************************
What it does:
- Returns next sibling NODE

Returns:
- Single NODE

Example:
*/
const nextNode = firstBox.nextSibling;


/*****************************************************************************************
13) firstElementChild
******************************************************************************************
What it does:
- Returns first CHILD ELEMENT

Returns:
- Single ELEMENT

Example:
*/
const firstChildEl = parentEl.firstElementChild;


/*****************************************************************************************
14) firstChild
******************************************************************************************
What it does:
- Returns first CHILD NODE

Returns:
- Single NODE

Example:
*/
const firstChildNode = parentEl.firstChild;


/*****************************************************************************************
15) lastElementChild
******************************************************************************************
What it does:
- Returns last CHILD ELEMENT

Returns:
- Single ELEMENT

Example:
*/
const lastChildEl = parentEl.lastElementChild;


/*****************************************************************************************
16) lastChild
******************************************************************************************
What it does:
- Returns last CHILD NODE

Returns:
- Single NODE

Example:
*/
const lastChildNode = parentEl.lastChild;


/*****************************************************************************************
17) children
******************************************************************************************
What it does:
- Returns ALL child ELEMENTS only

Returns:
- HTMLCollection

Count:
- Multiple elements

Example:
*/
const childrenEls = parentEl.children;


/*****************************************************************************************
18) childNodes
******************************************************************************************
What it does:
- Returns ALL child NODES (elements, text, comments)

Returns:
- NodeList

Count:
- Multiple nodes

Example:
*/
const childNodesList = parentEl.childNodes;

/*****************************************************************************************
 END OF FILE
******************************************************************************************/
