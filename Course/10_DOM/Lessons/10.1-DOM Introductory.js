/*
====================================================
DOM — Complete Introductory Educational Guide
====================================================

What Is The DOM?
----------------
DOM stands for Document Object Model.

The DOM is a PROGRAMMING INTERFACE that represents
an HTML document as a tree of objects.

In simple terms:
- HTML becomes objects
- CSS styles those objects
- JavaScript controls those objects via the DOM

----------------------------------------------------
Why The DOM Is Important
----------------------------------------------------
Using the DOM, JavaScript can:
- Read HTML elements
- Change content and attributes
- Modify styles
- React to user actions (click, input, submit)
- Create or delete elements dynamically

----------------------------------------------------
DOM Tree Concept (Simple)
----------------------------------------------------
document
 ├── html
 │   ├── head
 │   │   └── title
 │   └── body
 │       ├── div
 │       ├── p
 │       └── span
*/

//////////////////////////////////////////////////////
// DOM SELECTORS (WAYS TO FIND ELEMENTS)
//////////////////////////////////////////////////////

/*
----------------------------------------------------
1) Find Element By ID
----------------------------------------------------
- ID must be UNIQUE
- Returns ONE element or null
*/
let myIdElement = document.getElementById("my-div");

console.log(myIdElement);
// Result:
// <div id="my-div">...</div>


/*
----------------------------------------------------
2) Find Elements By Tag Name
----------------------------------------------------
- Returns HTMLCollection
- Indexed like an array
*/
let myTagElements = document.getElementsByTagName("p");

console.log(myTagElements);
// Result:
// HTMLCollection [p, p, p, ...]

console.log(myTagElements[1]);
// Result:
// <p>Second paragraph</p>


/*
----------------------------------------------------
3) Find Elements By Class Name
----------------------------------------------------
- Returns HTMLCollection
- Can contain multiple elements
*/
let myClassElement = document.getElementsByClassName("my-span");

console.log(myClassElement);
// Result:
// HTMLCollection [span, span, ...]

console.log(myClassElement[1]);
// Result:
// <span class="my-span">...</span>


/*
----------------------------------------------------
4) Find Element Using CSS Selector (querySelector)
----------------------------------------------------
- Returns FIRST matching element only
- Uses CSS selector syntax
*/
let myQueryElement = document.querySelector(".my-span");

console.log(myQueryElement);
// Result:
// <span class="my-span">...</span>


/*
----------------------------------------------------
5) Find ALL Matching Elements (querySelectorAll)
----------------------------------------------------
- Returns NodeList
- Supports forEach()
*/
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myQueryAllElement);
// Result:
// NodeList [span, span, ...]

console.log(myQueryAllElement[1]);
// Result:
// <span class="my-span">...</span>


//////////////////////////////////////////////////////
// DOCUMENT COLLECTIONS (BUILT-IN ACCESS)
//////////////////////////////////////////////////////

/*
----------------------------------------------------
document.title
----------------------------------------------------
- Gets or sets the page title
*/
console.log(document.title);
// Result:
// Page Title String


/*
----------------------------------------------------
document.body
----------------------------------------------------
- Represents the <body> element
*/
console.log(document.body);
// Result:
// <body>...</body>


/*
----------------------------------------------------
document.forms
----------------------------------------------------
- Collection of all forms
*/
console.log(document.forms[0]);
// Result:
// <form>...</form>

console.log(document.forms[0].one.value);
// Result:
// Value of input with name="one"


/*
----------------------------------------------------
document.links
----------------------------------------------------
- Collection of all <a> elements with href
*/
console.log(document.links[1].href);
// Result:
// Full URL of second link


//////////////////////////////////////////////////////
// IMPORTANT NOTES
//////////////////////////////////////////////////////

/*
1) getElementById
- Fast
- Single element
- Most commonly used

2) getElementsByTagName / ClassName
- Live HTMLCollection
- Auto-updates when DOM changes

3) querySelector / querySelectorAll
- Uses CSS selectors
- More powerful and flexible
- NodeList is NOT live

4) Always Check Existence
--------------------------------
Element may return null if not found!
Example:
if (myIdElement) {
  // safe to use
}
*/

//////////////////////////////////////////////////////
// REAL-WORLD USAGE EXAMPLE
//////////////////////////////////////////////////////

/*
- Read user input
- Update content
- Change styles
- Handle buttons
- Validate forms
- Build interactive UI
*/

//////////////////////////////////////////////////////
// SUMMARY
//////////////////////////////////////////////////////

/*
- DOM = HTML represented as JavaScript objects
- document is the main entry point
- Select elements using:
   - id
   - tag
   - class
   - CSS selector
- Collections help you navigate page structure
- DOM is the foundation of front-end development
*/
/*
====================================================
End of DOM Introduction
====================================================*/
