/*
====================================================
DOM — Get / Set Elements Content & Attributes
====================================================

This guide explains how JavaScript:
- Reads element content
- Modifies element content
- Reads attributes
- Updates attributes

Everything here works through the DOM.
====================================================
*/

//////////////////////////////////////////////////////
// 1) SELECT ELEMENT
//////////////////////////////////////////////////////

/*
We first select an element from the DOM using
querySelector (CSS selector syntax).
*/

let myElement = document.querySelector(".js");

console.log(myElement);
// Result:
// <div class="js">...</div>


//////////////////////////////////////////////////////
// 2) READING ELEMENT CONTENT
//////////////////////////////////////////////////////

/*
----------------------------------------------------
innerHTML
----------------------------------------------------
- Reads or writes HTML content
- Understands tags
- Can inject elements
*/
console.log(myElement.innerHTML);
// Example Result:
// Hello <span>JS</span>

/*
----------------------------------------------------
textContent
----------------------------------------------------
- Reads or writes TEXT ONLY
- Ignores HTML tags
- More secure against injection
*/
console.log(myElement.textContent);
// Example Result:
// Hello JS


//////////////////////////////////////////////////////
// 3) UPDATING ELEMENT CONTENT
//////////////////////////////////////////////////////

/*
----------------------------------------------------
Setting innerHTML
----------------------------------------------------
HTML tags are parsed and rendered
*/
myElement.innerHTML = "Text From <span>Main.js</span> File";

// Result on page:
// Text From Main.js (Main.js inside a span)

/*
----------------------------------------------------
Setting textContent
----------------------------------------------------
HTML is treated as plain text
*/
myElement.textContent = "Text From <span>Main.js</span> File";

// Result on page:
// Text From <span>Main.js</span> File (no real span)


//////////////////////////////////////////////////////
// 4) CHANGING ATTRIBUTES DIRECTLY
//////////////////////////////////////////////////////

/*
We can modify attributes by accessing them
directly as object properties.
*/

document.images[0].src = "https://google.com";
// Result:
// image source changed to google.com

document.images[0].alt = "Alternate";
// Result:
// alternate text updated

document.images[0].title = "Picture";
// Result:
// tooltip updated

document.images[0].id = "pic";
// Result:
// image now has id="pic"

document.images[0].className = "img";
// Result:
// image has class="img"


//////////////////////////////////////////////////////
// 5) GET & SET ATTRIBUTES USING METHODS
//////////////////////////////////////////////////////

/*
----------------------------------------------------
getAttribute
----------------------------------------------------
- Reads attribute value as written in HTML
*/
let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
// Result:
// "link"

console.log(myLink.getAttribute("href"));
// Result:
// original href value


/*
----------------------------------------------------
setAttribute
----------------------------------------------------
- Creates or updates attribute
*/
myLink.setAttribute("href", "https://twitter.com");
// Result:
// link now points to twitter.com

myLink.setAttribute("title", "Twitter");
// Result:
// tooltip text set to "Twitter"


//////////////////////////////////////////////////////
// 6) innerHTML vs textContent vs innerText
//////////////////////////////////////////////////////

/*
innerHTML
----------
- Includes HTML
- Can add elements
- Risky if content comes from user input

textContent
-----------
- Pure text
- Safe
- Includes hidden text

innerText
---------
- Respects CSS visibility
- Affected by layout
- Slower
*/

//////////////////////////////////////////////////////
// 7) IMPORTANT BEST PRACTICES
//////////////////////////////////////////////////////

/*
- Use textContent for user input
- Use innerHTML only when needed
- Prefer setAttribute for clarity
- Always make sure element exists before using it
*/

//////////////////////////////////////////////////////
// 8) REAL-WORLD USE CASES
//////////////////////////////////////////////////////

/*
- Update page content dynamically
- Replace text after API response
- Change image sources
- Update links
- Control SEO-related attributes
*/

//////////////////////////////////////////////////////
// SUMMARY
//////////////////////////////////////////////////////

/*
✔ innerHTML → read/write HTML
✔ textContent → read/write text safely
✔ Direct property access → fast attribute changes
✔ getAttribute / setAttribute → precise control
✔ Core skill for interactive web pages
*/
/*
====================================================
End of DOM Content & Attributes Guide
==================================================== */
