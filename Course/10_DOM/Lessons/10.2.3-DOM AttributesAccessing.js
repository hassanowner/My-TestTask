/*
====================================================================
DOM ATTRIBUTES — ACCESSING, MODIFYING, CREATING & REMOVING
====================================================================

INTRODUCTION
--------------------------------------------------------------------
In this section, we study how JavaScript interacts with HTML element
attributes using the DOM (Document Object Model). Attributes define
important properties of elements such as id, class, href, and target.

The topics will be studied in the following logical sequence:

MAIN TOPICS LIST
1) Accessing Attributes using getAttribute()
2) Changing or Adding Attributes using setAttribute()
3) Creating Attribute Nodes using createAttribute() and setAttributeNode()
4) Removing Attributes using removeAttribute()

Each topic will be explained by:
- What it is
- What its function is
- Its main features
- How it works
- The basic structure of the code


====================================================================
1) ACCESSING ATTRIBUTES USING getAttribute()
====================================================================

WHAT IT IS
--------------------------------------------------------------------
The getAttribute() method is a DOM method used to retrieve the value
of a specific attribute from an HTML element.

FUNCTION
--------------------------------------------------------------------
Its function is to read and return the current value of an attribute
exactly as it appears in the HTML markup.

FEATURES
--------------------------------------------------------------------
- Returns the attribute value as a string
- Returns null if the attribute does not exist
- Works with any valid HTML attribute
- Reflects the original attribute value, not computed values

HOW IT WORKS
--------------------------------------------------------------------
1) Select the element from the DOM
2) Call getAttribute() on that element
3) Pass the attribute name as a string

BASIC CODE STRUCTURE
-------------------------------------------------------------------- */
const element = document.getElementById('home');

element.getAttribute('attributeName');

// EXAMPLE
// --------------------------------------------------------------------
const element = document.getElementById('home');

console.log(element.getAttribute('id'));    // home
console.log(element.getAttribute('class')); // link
console.log(element.getAttribute('href'));  // index.html

/* NOTE:
Direct properties such as element.id may give the same result,
but getAttribute() accesses the attribute node itself.



====================================================================
2) CHANGING OR ADDING ATTRIBUTES USING setAttribute()
====================================================================

WHAT IT IS
--------------------------------------------------------------------
The setAttribute() method is used to change the value of an existing
attribute or add a new attribute to an element.

FUNCTION
--------------------------------------------------------------------
Its function is to modify an element’s attributes dynamically at
runtime.

FEATURES
--------------------------------------------------------------------
- Accepts two parameters: name and value
- Overwrites existing attribute values
- Creates the attribute if it does not exist
- Works on all standard and custom attributes

HOW IT WORKS
--------------------------------------------------------------------
1) Select the element
2) Call setAttribute()
3) Provide attribute name and new value

BASIC CODE STRUCTURE
-------------------------------------------------------------------- */
element.setAttribute('attributeName', 'value');

// EXAMPLE
// --------------------------------------------------------------------
const element = document.getElementById('home');

element.setAttribute('class', 'link active');
element.setAttribute('href', 'newlink.html');
element.setAttribute('target', '_blank');

console.log(element.getAttribute('class'));  // link active
console.log(element.getAttribute('href'));   // newlink.html
console.log(element.getAttribute('target')); // _blank

/* NOTE:
Attributes can also be changed using properties: */
element.className, element.href, element.target



// Another Example:

element.setAttribute(attributeName, attributeValue);

// Example Implementation
const element = document.getElementById('home');

// Modifying existing attributes
element.setAttribute('class', 'link active');  // Updates class attribute
element.setAttribute('href', 'newlink.html');  // Updates href attribute

// Adding new attributes
element.setAttribute('target', '_blank');      // Adds target attribute
element.setAttribute('data-active', 'true');   // Adds custom data attribute

// Verification
console.log(element.getAttribute('class'));    // 'link active'
console.log(element.getAttribute('href'));     // 'newlink.html'
console.log(element.getAttribute('target'));   // '_blank'
console.log(element.getAttribute('data-active')); // 'true'

// Alternative property-based approach
element.className = 'link active highlighted';  // Updates via DOM property
element.href = 'anotherLink.html';              // Updates via DOM property
element.target = '_self';                       // Updates via DOM property

//Important Considerations

// While setAttribute() is universal, some attributes have corresponding DOM properties that may be more efficient or appropriate for certain use cases.
// For example, element.className or element.classList for classes, and element.style for CSS styles.



/*
====================================================================
3) CREATING ATTRIBUTE NODES USING createAttribute()
   AND setAttributeNode()
====================================================================

WHAT IT IS
--------------------------------------------------------------------
createAttribute() is a DOM method that creates a standalone attribute
node, which can later be attached to an element using setAttributeNode().

FUNCTION
--------------------------------------------------------------------
Its function is to allow low-level manipulation of attribute nodes
instead of using shortcut methods like setAttribute().

FEATURES
--------------------------------------------------------------------
- Creates an attribute node, not attached automatically
- Attribute value must be set manually
- Must be added using setAttributeNode()
- Useful for understanding DOM internals

HOW IT WORKS
--------------------------------------------------------------------
1) Create the attribute node
2) Assign a value to the attribute
3) Attach it to the element

BASIC CODE STRUCTURE
-------------------------------------------------------------------- */
const attr = document.createAttribute('attributeName');
attr.value = 'value';
element.setAttributeNode(attr);

// EXAMPLE
// --------------------------------------------------------------------
const element = document.getElementById('home');

const attribute = document.createAttribute('target');
attribute.value = '_blank';

element.setAttributeNode(attribute);

console.log(element.getAttribute('target')); // _blank



// Another Example:

const attributeNode = document.createAttribute(attributeName);
attributeNode.value = attributeValue;
element.setAttributeNode(attributeNode);

// Example Implementation
const element = document.getElementById('home');

// Create a new attribute node
const targetAttribute = document.createAttribute('target');

// Set the attribute value
targetAttribute.value = '_blank';

// Attach the attribute node to the element
element.setAttributeNode(targetAttribute);

// Verification
console.log(element.getAttribute('target'));  // '_blank'

// The attribute node can be manipulated before attachment
const dataAttribute = document.createAttribute('data-custom');
dataAttribute.value = 'customValue';
// Additional manipulation could occur here
element.setAttributeNode(dataAttribute);



/*
====================================================================
4) REMOVING ATTRIBUTES USING removeAttribute()
====================================================================

WHAT IT IS
--------------------------------------------------------------------
removeAttribute() is a DOM method used to completely remove an
attribute from an element.

FUNCTION
--------------------------------------------------------------------
Its function is to delete an attribute so that it no longer exists
on the element.

FEATURES
--------------------------------------------------------------------
- Removes the attribute entirely
- Attribute value becomes null afterward
- Does not affect other attributes
- Safe to call even if attribute does not exist

HOW IT WORKS
--------------------------------------------------------------------
1) Select the element
2) Call removeAttribute()
3) Provide the attribute name

BASIC CODE STRUCTURE
-------------------------------------------------------------------- */
element.removeAttribute('attributeName');

// EXAMPLE
// --------------------------------------------------------------------
const element = document.getElementById('home');

element.removeAttribute('class');
element.removeAttribute('href');

console.log(element.getAttribute('class')); // null
console.log(element.getAttribute('href'));  // null



// Another Example:
element.removeAttribute(attributeName);

// Example Implementation
const element = document.getElementById('home');

// Remove specific attributes
element.removeAttribute('class');  // Removes class attribute entirely
element.removeAttribute('href');   // Removes href attribute entirely

// Verification - returns null for removed attributes
console.log(element.getAttribute('class'));  // null
console.log(element.getAttribute('href'));   // null

// The element still exists, just without those attributes
console.log(element.id);  // 'home' (id wasn't removed)

// Practical use case - toggling an attribute
if (element.hasAttribute('disabled')) {
    element.removeAttribute('disabled');
} else {
    element.setAttribute('disabled', 'true');
}


/*
====================================================================
SUMMARY
--------------------------------------------------------------------
In this section, we learned how to fully control HTML attributes using
the DOM. We covered reading attributes with getAttribute(), modifying
or adding them with setAttribute(), creating attribute nodes manually
with createAttribute() and setAttributeNode(), and finally removing
attributes using removeAttribute().

Together, these methods provide complete control over element
attributes and are essential for dynamic and interactive web pages.
====================================================================
*/
