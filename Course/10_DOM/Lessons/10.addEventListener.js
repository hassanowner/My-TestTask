/*
====================================================================
TOPIC: DOM addEventListener — Multiple Events, Errors, Bubbling & Delegation
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) HTML Structure
2) onclick vs addEventListener
3) Attaching Multiple Events
4) Common Errors
5) Cloning Elements With Events Problem
6) Event Delegation (Bubbling)
7) Capture vs Bubbling (Concept)
====================================================================


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>addEventListener Demo</title>
  <style>
    p {
      background: lightyellow;
      padding: 10px;
      cursor: pointer;
    }
    .clone {
      background: lightblue;
    }
  </style>
</head>
<body>

   ================================================================
  1) HTML STRUCTURE
  ================================================================= */

  <p>Click Me To Clone</p>


  <script>
    /* ================================================================
    2) onclick vs addEventListener
    ================================================================= */

    let myP = document.querySelector("p");

    /*
      ** onclick can hold ONLY ONE function
      ** addEventListener allows MULTIPLE functions
    */

    // myP.onclick = one;
    // myP.onclick = two; // overrides the first one

    function one() {
      console.log("Message From Function One");
    }

    function two() {
      console.log("Message From Function Two");
    }


    /* ================================================================
    3) addEventListener — Multiple Events
    ================================================================= */

    // myP.addEventListener("click", one);
    // myP.addEventListener("click", two);

    // OUTPUT ON CLICK:
    // Message From Function One
    // Message From Function Two


    /* ================================================================
    4) Common Errors
    ================================================================= */

    // window.onload = "Osama"; // *** ERROR: must be a function

    // myP.addEventListener("click", "String");
    // *** ERROR: second argument must be a function


    /* ================================================================
    5) Cloning Elements — Event Problem
    ================================================================= */

    myP.onclick = function () {
      let newP = myP.cloneNode(true);
      newP.className = "clone";
      document.body.appendChild(newP);
    };

    /*
      PROBLEM:
      - cloneNode() does NOT copy event listeners
      - Selecting ".clone" before it exists causes ERROR
    */

    // let cloned = document.querySelector(".clone"); // null
    // cloned.onclick = function () {};               // error


    /* ================================================================
    6) Event Delegation (BUBBLING)
    - Solution for dynamically created elements
    ================================================================= */

    document.addEventListener("click", function (e) {

      if (e.target.className === "clone") {
        console.log("I am cloned");
      }

    });

    // RESULT:
    // Clicking any cloned paragraph prints:
    // "I am cloned"


    /* ================================================================
    7) Capture vs Bubbling (CONCEPT)
    ================================================================= */

    /*
      Bubbling (default):
      Event flows from target → parent → document

      Capture:
      Event flows from document → parent → target

      addEventListener(type, handler, true) → Capture
      addEventListener(type, handler, false) → Bubbling
    */
  </script>

</body>
</html>

/*
onclick                 // One event only
addEventListener        // Multiple events 
cloneNode()             // Does NOT clone events
Event Delegation        // Best for dynamic elements 
e.target                // Actual clicked element
*/
