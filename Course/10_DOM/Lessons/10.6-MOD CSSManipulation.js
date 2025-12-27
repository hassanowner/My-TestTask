/*
====================================================================
TOPIC: DOM CSS Manipulation
style, cssText, setProperty(), removeProperty()
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) HTML & CSS Structure
2) Selecting the Element
3) style Property (Inline Styles)
4) cssText
5) removeProperty()
6) setProperty()
7) Manipulating Stylesheets via document.styleSheets
====================================================================


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM CSS Demo</title>

  
  ================================================================
  1) STYLESHEET USED FOR DEMONSTRATION
  ================================================================
  

  <style>
    #my-div {
      line-height: 2;
      background-color: lightgray;
    }
  </style>
</head>

<body>

  
  ================================================================
  HTML ELEMENT
  ================================================================


  <div id="my-div">
    Style Me With JavaScript
  </div>

 
  <script> */
    /*
    ================================================================
    2) Selecting the Element
    ================================================================
    */

    let element = document.getElementById("my-div");


    /*
    ================================================================
    3) style Property (Inline Styles)
    - Applies styles directly as inline CSS
    ================================================================
    */

    element.style.color = "red";
    element.style.fontWeight = "bold";

    /*
    RESULT (inline styles applied):
    - color: red;
    - font-weight: bold;
    */


    /*
    ================================================================
    4) cssText
    - Overwrites ALL existing inline styles
    - Accepts a complete CSS declaration string
    ================================================================
    */

    element.style.cssText =
      "font-weight: bold; color: green; opacity: 0.9";

    /*
    RESULT:
    - font-weight: bold;
    - color: green;
    - opacity: 0.9;
    */


    /*
    ================================================================
    5) removeProperty(propertyName)
    - Removes a specific inline CSS property
    ================================================================
    */

    element.style.removeProperty("color");

    /*
    RESULT:
    - The color property is removed
    - Text color reverts to default
    */


    /*
    ================================================================
    6) setProperty(propertyName, value, priority)
    - Adds or updates a CSS property
    - Supports priority such as "important"
    ================================================================
    */

    element.style.setProperty(
      "font-size",
      "40px",
      "important"
    );

    /*
    RESULT:
    - font-size: 40px !important;
    */


    /*
    ================================================================
    7) Manipulating Stylesheet Rules (Not Inline)
    - Works with rules defined in <style> or external files
    ================================================================
    */

    document.styleSheets[0].rules[0].style
      .removeProperty("line-height");

    /*
    RESULT:
    - line-height removed from stylesheet rule
    */

    document.styleSheets[0].rules[0].style
      .setProperty("background-color", "red", "important");

    /*
    RESULT:
    - background-color: red !important;
    */

  </script>

</body>
</html>
