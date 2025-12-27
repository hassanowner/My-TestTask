/*
====================================================================
TOPIC: DOM Traversing — Removing Parent Element (Extended Examples)
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) HTML Structure
2) Selecting the Target Element
3) parentElement
4) nextSibling
5) previousSibling
6) nextElementSibling
7) previousElementSibling
8) Example 1: Removing Parent Element (Direct)
9) Example 2: Removing Specific Parent on Button Click
====================================================================
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Traversing Demo</title>
  <style>
    .parent {
      padding: 15px;
      background: lightgray;
      margin: 10px 0;
    }
    .card {
      padding: 10px;
      background: lightcoral;
      margin: 10px 0;
    }
    span, button {
      cursor: pointer;
      padding: 5px;
      background: lightblue;
      margin-right: 5px;
    }
  </style>
</head>
<body>

  <!-- ================================================================
  1) HTML STRUCTURE
  ================================================================= -->

  <div class="parent">
    <span class="one">Span One</span>
    Text Node Here
    <span class="two">Span Two (Click Me)</span>
    <span class="three">Span Three</span>
  </div>

  <div class="card">
    <p>This is a card</p>
    <button class="delete">Delete Card</button>
  </div>


  <script>
    ================================================================
    2) Selecting the Target Element
    ================================================================= */

    let span = document.querySelector(".two");


    /* ================================================================
    3) parentElement
    ================================================================= */

    console.log(span.parentElement);
    // OUTPUT:
    // <div class="parent">...</div>


    /* ================================================================
    4) nextSibling
    ================================================================= */

    console.log(span.nextSibling);
    // OUTPUT:
    // #text


    /* ================================================================
    5) previousSibling
    ================================================================= */

    console.log(span.previousSibling);
    // OUTPUT:
    // #text


    /* ================================================================
    6) nextElementSibling
    ================================================================= */

    console.log(span.nextElementSibling);
    // OUTPUT:
    // <span class="three">Span Three</span>


    /* ================================================================
    7) previousElementSibling
    ================================================================= */

    console.log(span.previousElementSibling);
    // OUTPUT:
    // <span class="one">Span One</span>


    /* ================================================================
    8) Example 1: Removing Parent Element (Direct)
    ================================================================= */

    span.onclick = function () {
      span.parentElement.remove();
    };

    // RESULT:
    // Clicking "Span Two" removes:
    // <div class="parent">...</div>


    /* ================================================================
    9) Example 2: Removing Specific Parent (Real-Life Scenario)
    - Similar to deleting a post or card
    ================================================================= */

    document.querySelector(".delete").onclick = function () {
      this.parentElement.remove();
    };

    // RESULT:
    // Clicking "Delete Card" removes only the card div

  </script>

</body>
</html>
