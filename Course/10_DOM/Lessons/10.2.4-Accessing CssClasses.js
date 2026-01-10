/*
====================================================================
ACCESSING CSS CLASSES IN THE DOM
====================================================================

INTRODUCTION
--------------------------------------------------------------------
In this section, we focus on how JavaScript accesses and manipulates
CSS classes of HTML elements using the DOM API. CSS classes are
essential for styling and dynamic visual behavior, so understanding
how to read, add, remove, and manage them efficiently is critical.

The topics will be studied in the following logical and sequential order:

MAIN TOPICS LIST
1) Accessing CSS classes using the className property
2) Accessing and managing CSS classes using the classList property
3) Adding and removing CSS classes with classList methods
4) Toggling and checking CSS classes using toggle() and contains()


====================================================================
1) ACCESSING CSS CLASSES USING className
====================================================================

WHAT IT IS
--------------------------------------------------------------------
className is a built-in property available on every element node in
the DOM. It represents the value of the element’s class attribute as
a single string.

FUNCTION
--------------------------------------------------------------------
Its function is to allow reading or writing all CSS classes assigned
to an element at once.

FEATURES
--------------------------------------------------------------------
- Returns a string
- Multiple class names are separated by spaces
- Reflects the value of the HTML class attribute
- Can overwrite all existing classes if reassigned

HOW IT WORKS
--------------------------------------------------------------------
1) Select an element from the DOM
2) Access its className property
3) Read or assign a string of class names

BASIC CODE STRUCTURE
-------------------------------------------------------------------- */
element.className
element.className = "class1 class2";

// EXAMPLE

const element = document.getElementById('home');

console.log(element.className); 
// "link"

element.className = "link active highlighted";
// All previous classes are replaced

/* IMPORTANT NOTE
--------------------------------------------------------------------
Manipulating individual classes using className requires parsing
the string manually, which often leads to complex and error-prone code.



====================================================================
2) ACCESSING CSS CLASSES USING classList
====================================================================

WHAT IT IS
--------------------------------------------------------------------
classList is a modern DOM API property (introduced in DOM Level 4)
that represents CSS classes as a list-like object rather than a string.

FUNCTION
--------------------------------------------------------------------
Its function is to provide an easy and safe way to manage individual
CSS classes without manually parsing strings.

FEATURES
--------------------------------------------------------------------
- Returns a DOMTokenList
- Treats each CSS class as a separate item
- Prevents duplicate class names
- Cleaner and more readable than className

HOW IT WORKS
--------------------------------------------------------------------
1) Select an element
2) Access its classList property
3) Use built-in methods to manage classes

BASIC CODE STRUCTURE
-------------------------------------------------------------------- */
element.classList

// EXAMPLE

const element = document.getElementById('home');

console.log(element.classList);
// ["link"]


/*
====================================================================
3) ADDING AND REMOVING CSS CLASSES USING classList
====================================================================

WHAT IT IS
--------------------------------------------------------------------
The classList object provides methods such as add() and remove() to
modify CSS classes individually.

FUNCTION
--------------------------------------------------------------------
- add(): adds one or more CSS classes
- remove(): removes one or more CSS classes

FEATURES
--------------------------------------------------------------------
- Does not affect other existing classes
- Prevents duplicates
- Accepts multiple class names
- Much simpler than string manipulation

HOW IT WORKS
--------------------------------------------------------------------
1) Call add() to insert a class
2) Call remove() to delete a class
3) The DOM updates instantly

BASIC CODE STRUCTURE
-------------------------------------------------------------------- */
element.classList.add("className");
element.classList.remove("className");

// EXAMPLE

const element = document.getElementById('home');

element.classList.add('active');
console.log(element.classList);
// ["link", "active"]

element.classList.remove('active');
console.log(element.classList);
// ["link"]


/*
====================================================================
4) TOGGLING AND CHECKING CSS CLASSES
====================================================================

WHAT IT IS
--------------------------------------------------------------------
classList provides toggle() and contains() methods to dynamically
control and check CSS classes.

FUNCTION
--------------------------------------------------------------------
- toggle(): adds or removes a class automatically
- contains(): checks if a class exists

FEATURES
--------------------------------------------------------------------
- toggle() can work with Boolean conditions
- contains() returns true or false
- Ideal for interactive UI behavior
- Commonly used with events

HOW IT WORKS
--------------------------------------------------------------------
1) toggle() checks if a class exists
   - If it exists → remove it
   - If it doesn’t exist → add it
2) contains() checks for class presence

BASIC CODE STRUCTURE
-------------------------------------------------------------------- */
element.classList.toggle("className");
element.classList.contains("className");

// EXAMPLE

const element = document.getElementById('home');

element.classList.toggle('active');
console.log(element.classList);
// ["link", "active"]

element.classList.toggle('active');
console.log(element.classList);
// ["link"]

console.log(element.classList.contains('link'));  
// true

console.log(element.classList.contains('active')); 
// false

// CONDITIONAL TOGGLE EXAMPLE

const i = 5;
const condition = i > 0;

element.classList.toggle('active', condition);
console.log(element.classList);
// ["link", "active"]


/*
====================================================================
SUMMARY
--------------------------------------------------------------------
In this section, we explored how CSS classes can be accessed and
manipulated through the DOM. We started with the older className
property, which treats classes as a string, and then moved to the
modern and more powerful classList API. Using classList, we can
easily add, remove, toggle, and check CSS classes in a clean,
readable, and efficient way, making it the preferred approach in
modern JavaScript development.
====================================================================
*/
