/*
====================================================================
TOPIC: DOM classList — Managing CSS Classes
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) HTML Structure
2) Selecting the Element
3) classList Overview
4) length
5) contains()
6) item(index)
7) toggle()
====================================================================
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>classList Demo</title>
  <style>
    #my-div {
      padding: 20px;
      background: lightgray;
    }
    .show {
      background: lightgreen;
      color: darkgreen;
    }
  </style>
</head>
<body>

  <!-- ================================================================
  1) HTML STRUCTURE
  - div has multiple classes for testing
  ================================================================= -->

  <div id="my-div" class="one two osama">
    Click Me
  </div>


  <script>
    ================================================================
    2) Selecting the Element
    ================================================================= */

    let element = document.getElementById("my-div");


    /* ================================================================
    3) classList Overview
    - classList returns a DOMTokenList
    ================================================================= */

    console.log(element.classList);
    // OUTPUT:
    // DOMTokenList(3) ["one", "two", "osama"]

    console.log(typeof element.classList);
    // OUTPUT:
    // object


    /* ================================================================
    4) length
    - Returns number of classes
    ================================================================= */

    console.log(element.classList.length);
    // OUTPUT:
    // 3


    /* ================================================================
    5) contains(className)
    - Checks if class exists
    ================================================================= */

    console.log(element.classList.contains("osama"));
    // OUTPUT:
    // true

    console.log(element.classList.contains("show"));
    // OUTPUT:
    // false


    /* ================================================================
    6) item(index)
    - Returns class by index (or null)
    ================================================================= */

    console.log(element.classList.item(1));
    // OUTPUT:
    // "two"


    /* ================================================================
    7) toggle(className)
    - Adds class if not exists
    - Removes class if exists
    ================================================================= */

    element.onclick = function () {
      element.classList.toggle("show");
    };

    // RESULTS ON CLICK:
    // First click  → "show" is added
    // Second click → "show" is removed

  </script>

</body>
</html>
