/*
## Main Topics:

From the provided text, the studied topics are:

1. Accessing the Event Object
2. The Event Object and Its Common Properties
3. Using the Event Object Inside an Event Listener
4. Browser-Independent Access to the Event Object (Old Internet Explorer Case)




1) Detailed Explanation of Each Topic

-Topic 1: Accessing the Event Object

What is it?

When an event (like a click or key press) occurs, the browser creates an event object.
This object contains detailed information about the event.

How it works

When a function is registered as an event handler or listener

The browser automatically passes the event object as a parameter

This parameter is usually named event or e


Basic Structure : */

function handler(event) {
  // access event information here
}
element.addEventListener("click", handler);


// Example 1 

button.addEventListener("click", function(event) {
  console.log(event.type); // "click"
});

// Example 2 

function handleClick(event) {
  console.log("Event triggered at:", event.timeStamp);
}
button.addEventListener("click", handleClick);



/*
-Topic 2: The Event Object and Its Common Properties

What is it?

All events inherit from a base type called Event.
Specific events like MouseEvent and KeyboardEvent extend it.

How it works ?

- Every event object contains shared properties

* These properties describe how the event behaves in the DOM


!! Important Properties

Property	Description :

bubbles	Does the event bubble up the DOM
cancelable	Can the default behavior be prevented
currentTarget	Element handling the event
target	Element that triggered the event
eventPhase	Current phase of event flow
defaultPrevented	Was preventDefault() called
timeStamp	Time event occurred
type	Name of the event
isTrusted	User-triggered or scripted
*/

// Example 1

button.addEventListener("click", function(event) {
  console.log(event.target);
});

// Example 2

button.addEventListener("click", function(event) {
  if (event.bubbles) {
    console.log("This event bubbles");
  }
});



/*
- Topic 3: Using the Event Object Inside an Event Listener

What is it?
- This is the practical usage of the event object inside a real event listener.

How it works ?
- The event listener receives the event object automatically

* You can inspect its properties or control behavior


Basic Structure : */

element.addEventListener("eventName", function(event) {
  // use event here
});

// Example 1

function buttonClicked(event) {
  console.log(event.type);
}
button.addEventListener("click", buttonClicked);

// Example 2 

function buttonClicked(event) {
  console.log(event.currentTarget);
  console.log(event.eventPhase);
}
button.addEventListener("click", buttonClicked);



/*
- Topic 4: Browser-Independent Access (Old Internet Explorer)

What is it?
- Older versions of Internet Explorer:

Do NOT pass the event object as a parameter

Store it in window.event

Use srcElement instead of target


How it works ?
- We use a fallback technique to support all browsers.

Basic Structure : */

var e = ev || window.event;
var target = e.target || e.srcElement;

// Example 1 

function handler(ev) {
  var e = ev || window.event;
  console.log(e.type);
}

// Example 2

function handler(ev) {
  var e = ev || window.event;
  var target = e.target || e.srcElement;
  console.log(target.tagName);
}




/*
====================================================
JavaScript Event Object – Complete Summary
====================================================

Topics Covered:
1. Accessing the Event Object
2. Event Object Properties
3. Using Event Object in Event Listeners
4. Browser-Independent Event Access

----------------------------------------------------
1. Accessing the Event Object
----------------------------------------------------
The browser creates an event object whenever an event
occurs and passes it to the event handler automatically.
*/

function basicHandler(event) {
  console.log(event.type);
}

/*
----------------------------------------------------
2. Event Object Properties
----------------------------------------------------
All events inherit from the Event type and share
common properties such as:
bubbles, cancelable, target, currentTarget,
eventPhase, timeStamp, type, isTrusted
*/

function logEventProperties(event) {
  console.log(event.bubbles);
  console.log(event.cancelable);
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.eventPhase);
  console.log(event.timeStamp);
  console.log(event.type);
  console.log(event.isTrusted);
}

/*
----------------------------------------------------
3. Event Object in Event Listeners
----------------------------------------------------
Event listeners receive the event object automatically.
*/

function buttonClicked(event) {
  console.log("Clicked element:", event.target);
}

document.getElementById("button")
  .addEventListener("click", buttonClicked);

/*
----------------------------------------------------
4. Browser-Independent Event Access (IE Support)
----------------------------------------------------
Older IE versions store the event object in window.event
and use srcElement instead of target.
*/

function universalHandler(ev) {
  var e = ev || window.event;
  var target = e.target || e.srcElement;
  console.log("Target element:", target);
}

/*
====================================================
End of Event Object Summary
====================================================
*/
