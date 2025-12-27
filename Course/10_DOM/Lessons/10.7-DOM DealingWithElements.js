/*
====================================================================
TOPIC: DOM — Dealing With Elements Position & Removal
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) HTML Structure
2) Selecting & Creating Elements
3) before()
4) after()
5) append()
6) prepend()
7) remove()
====================================================================
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Elements Position Demo</title>
  <style>
    #my-div {
      padding: 15px;
      background: lightblue;
      margin: 10px 0;
    }
    p {
      background: lightyellow;
      padding: 10px;
    }
  </style>
</head>
<body>

  <!-- ================================================================
  1) HTML STRUCTURE
  ================================================================= -->

  <p>Paragraph Before</p>

  <div id="my-div">
    Main Div Content
  </div>

  <p>Paragraph After</p>


  <script>
    ================================================================
    2) Selecting & Creating Elements
    ================================================================= */

    let element = document.getElementById("my-div");
    let createdP = document.createElement("p");

    createdP.textContent = "Created Paragraph";


    /* ================================================================
    3) before()
    - Inserts content BEFORE the element
    - Accepts Element or String
    ================================================================= */

    element.before(createdP);
    
    // RESULT IN HTML:
    // <p>Created Paragraph</p>
    // <div id="my-div">...</div>


    /* ================================================================
    4) after()
    - Inserts content AFTER the element
    ================================================================= */

    element.after("Text Inserted After Div");

    // RESULT IN HTML:
    // <div id="my-div">...</div>
    // Text Inserted After Div


    /* ================================================================
    5) append()
    - Inserts content at the END of the element
    ================================================================= */

    element.append(" - Appended Text");

    // RESULT:
    // <div id="my-div">
    //   Main Div Content - Appended Text
    // </div>


    /* ================================================================
    6) prepend()
    - Inserts content at the START of the element
    ================================================================= */

    element.prepend("Prepended Text - ");

    // RESULT:
    // <div id="my-div">
    //   Prepended Text - Main Div Content - Appended Text
    // </div>


    /* ================================================================
    7) remove()
    - Completely removes the element from the DOM
    ================================================================= */

    // element.remove();

    // RESULT:
    // <div id="my-div"> is removed from the page

  </script>

</body>
</html>

/*
before()    // Outside & before element
after()     // Outside & after element
append()    // Inside & at the end
prepend()   // Inside & at the beginning
remove()    // Delete element completely
*/
