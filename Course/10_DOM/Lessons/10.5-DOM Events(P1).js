/*
====================================================================
TOPIC: DOM Events — Handling User & Window Events
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) HTML Elements Used for Events
2) Selecting Elements in JavaScript
3) Mouse Events
   - onclick
   - oncontextmenu
   - onmouseenter
   - onmouseleave
4) Window Events
   - onload
   - onscroll
   - onresize
5) Form & Focus Events
   - onfocus
   - onblur
   - onsubmit
====================================================================
*/


/*
====================================================================
1) HTML ELEMENTS USED FOR EVENTS (REFERENCE ONLY)
====================================================================

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Events Demo</title>
  <style>
    body {
      height: 1500px; /* to enable scrolling 
      font-family: Arial;
    }
    button {
      margin: 20px;
      padding: 10px 20px;
    }
  </style>
</head>
<body>

  <button id="btn">Hover Or Click Me</button>

  <form id="myForm">
    <input type="text" placeholder="Focus here">
    <button type="submit">Submit</button>
  </form>

</body>
</html>

NOTE:
- This HTML is commented because this file is JavaScript only.
- It exists only to explain where the events are attached.
====================================================================
*/


/*
====================================================================
2) Selecting Elements In JavaScript
====================================================================
*/

let myBtn = document.getElementById("btn");
let myForm = document.getElementById("myForm");
let myInput = document.querySelector("input");


/*
====================================================================
3) Mouse Events
====================================================================
*/

/*
onclick
- Fires when the element is clicked
*/
if (myBtn) {
  myBtn.onclick = function () {
    console.log("Button Clicked");
  };
}
/*
OUTPUT:
Button Clicked
*/


/*
oncontextmenu
- Fires on right mouse click
*/
if (myBtn) {
  myBtn.oncontextmenu = function () {
    console.log("Right Click Detected");
  };
}
/*
OUTPUT:
Right Click Detected
*/


/*
onmouseenter
- Fires when mouse enters the element
*/
if (myBtn) {
  myBtn.onmouseenter = function () {
    console.log("Mouse Entered Button");
  };
}
/*
OUTPUT:
Mouse Entered Button
*/


/*
onmouseleave
- Fires when mouse leaves the element
*/
if (myBtn) {
  myBtn.onmouseleave = function () {
    console.log("Mouse Left Button");
  };
}
/*
OUTPUT:
Mouse Left Button
*/


/*
====================================================================
4) Window Events
====================================================================
*/

/*
onload
- Fires when the page fully loads
*/
window.onload = function () {
  console.log("Page Loaded");
};
/*
OUTPUT:
Page Loaded
*/


/*
onscroll
- Fires when scrolling the page
*/
window.onscroll = function () {
  console.log("Scrolling Page");
};
/*
OUTPUT:
Repeats while scrolling
*/


/*
onresize
- Fires when resizing the browser window
*/
window.onresize = function () {
  console.log("Window Resized");
};
/*
OUTPUT:
Window Resized
*/


/*
====================================================================
5) Focus & Form Events
====================================================================
*/

/*
onfocus
- Fires when input gains focus
*/
if (myInput) {
  myInput.onfocus = function () {
    console.log("Input Focused");
  };
}
/*
OUTPUT:
Input Focused
*/


/*
onblur
- Fires when input loses focus
*/
if (myInput) {
  myInput.onblur = function () {
    console.log("Input Lost Focus");
  };
}
/*
OUTPUT:
Input Lost Focus
*/


/*
onsubmit
- Fires when the form is submitted
*/
if (myForm) {
  myForm.onsubmit = function (event) {
    event.preventDefault();
    console.log("Form Submitted");
  };
}
/*
OUTPUT:
Form Submitted
*/


/*
====================================================================
FINAL TECHNICAL SUMMARY
====================================================================
Mouse Events:
- onclick
- oncontextmenu
- onmouseenter
- onmouseleave

Window Events:
- onload
- onscroll
- onresize

Form & Focus Events:
- onfocus
- onblur
- onsubmit

BEST PRACTICE:
- Always check element existence before attaching events
- Use preventDefault() on forms when needed
====================================================================
*/
