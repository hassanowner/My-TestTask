/*
====================================================================
TOPIC: DOM Cloning — cloneNode(deep)
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) HTML Structure
2) Selecting Elements
3) cloneNode(deep) Explained
4) Updating the Cloned Element
5) Appending the Clone to the DOM
====================================================================


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Cloning Demo</title>

  <style>
    p {
      background: lightyellow;
      padding: 10px;
      margin: 5px 0;
    }
  </style>
</head>

<body>

  
  ================================================================
  1) HTML STRUCTURE
  - Original paragraph with id and child elements
  ================================================================
  

  <div>
    <p id="my-paragraph">
      Original Paragraph <span>(with child span)</span>
    </p>
  </div>


  <script>
    
    ================================================================
    2) Selecting Elements
    ================================================================
    */

    let myP = document
      .querySelector("p")
      .cloneNode(true); // DEEP CLONE (includes children)

    let myDiv = document.querySelector("div");


    /*
    ================================================================
    3) cloneNode(deep) Explained
    ================================================================
    */

    /*
      cloneNode(true)  → Deep Clone
      - Clones the element itself
      - Clones all text nodes
      - Clones all child elements (e.g. <span>)

      cloneNode(false) → Shallow Clone
      - Clones the element only
      - Does NOT clone child nodes
    */


    /*
    ================================================================
    4) Updating the Cloned Element
    - Element IDs must be unique in the DOM
    ================================================================
    */

    myP.id = `${myP.id}-clone`;

    /*
    RESULT:
    - Original ID : my-paragraph
    - Cloned ID  : my-paragraph-clone
    */


    /*
    ================================================================
    5) Appending the Clone to the DOM
    ================================================================
    */

    myDiv.appendChild(myP);

    /*
    FINAL HTML STRUCTURE:

    <div>
      <p id="my-paragraph">...</p>
      <p id="my-paragraph-clone">...</p>
    </div>
    */

  </script>

</body>
</html>
