/*
====================================================
DOM — Check Elements Attributes (Complete Guide)
====================================================

This lesson explains how to:
- Inspect element attributes
- Check if an attribute exists
- Check if an element has any attributes
- Remove attributes dynamically

All examples are practical and based on real DOM usage.
====================================================
*/


//////////////////////////////////////////////////////
// 1) VIEW ALL ATTRIBUTES OF AN ELEMENT
//////////////////////////////////////////////////////

/*
Element.attributes
------------------
- Returns a NamedNodeMap (array-like object)
- Contains ALL attributes of the element
*/

console.log(document.getElementsByTagName("p")[0].attributes);
// Result (example):
// NamedNodeMap { class="text", data-src="value", id="para1", ... }


//////////////////////////////////////////////////////
// 2) SELECT TARGET ELEMENT
//////////////////////////////////////////////////////

let myP = document.getElementsByTagName("p")[0];

console.log(myP);
// Result:
// <p data-src="something">...</p>


//////////////////////////////////////////////////////
// 3) CHECK IF A SPECIFIC ATTRIBUTE EXISTS
//////////////////////////////////////////////////////

/*
hasAttribute(attributeName)
----------------------------
- Returns true if attribute exists
- Returns false if attribute does not exist
*/

if (myP.hasAttribute("data-src")) {

  ////////////////////////////////////////////////////
  // 4) CHECK ATTRIBUTE VALUE
  ////////////////////////////////////////////////////

  /*
  If attribute exists, we can read its value
  using getAttribute
  */

  if (myP.getAttribute("data-src") === "") {

    /*
    If attribute exists BUT value is empty
    remove it completely from the element
    */
    myP.removeAttribute("data-src");

  } else {

    /*
    If attribute exists and has a value
    update it with a new value
    */
    myP.setAttribute("data-src", "New Value");
  }

} else {

  /*
  If attribute does NOT exist at all
  */
  console.log("Not Found");
}


//////////////////////////////////////////////////////
// 5) CHECK IF ELEMENT HAS ANY ATTRIBUTES
//////////////////////////////////////////////////////

/*
hasAttributes()
---------------
- Checks if the element has at least ONE attribute
- Does not care about attribute name
*/

if (myP.hasAttributes()) {
  console.log("Has Attributes");
}
// Result:
// "Has Attributes" (if at least one attribute exists)


//////////////////////////////////////////////////////
// 6) CHECK ATTRIBUTES FOR ANOTHER ELEMENT
//////////////////////////////////////////////////////

let myDiv = document.getElementsByTagName("div")[0];

if (myDiv.hasAttributes()) {
  console.log("Has Attributes");
} else {
  console.log("Div Has No Attributes");
}

// Result examples:
// "Has Attributes"
// OR
// "Div Has No Attributes"


//////////////////////////////////////////////////////
// 7) IMPORTANT NOTES & BEHAVIOR
//////////////////////////////////////////////////////

/*
✔ attributes → shows ALL attributes as a collection
✔ hasAttribute("name") → checks specific attribute
✔ hasAttributes() → checks if any attribute exists
✔ removeAttribute("name") → removes attribute completely
✔ setAttribute("name", "value") → creates or updates attribute
*/


//////////////////////////////////////////////////////
// 8) REAL-WORLD USE CASES
//////////////////////////////////////////////////////

/*
- Validate data-* attributes before using them
- Clean empty attributes from elements
- Toggle behavior based on attribute existence
- Optimize DOM before sending content to server
*/


//////////////////////////////////////////////////////
// SUMMARY
//////////////////////////////////////////////////////

/*
✔ attributes → inspect all attributes
✔ hasAttribute → check specific attribute
✔ hasAttributes → check if element has any attributes
✔ getAttribute → read attribute value
✔ setAttribute → update or create attribute
✔ removeAttribute → delete attribute safely
*/
/*
====================================================
End of DOM Attributes Checking Guide
====================================================*/
