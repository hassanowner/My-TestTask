/*
====================================================================
TOPIC: DOM Events — focus, blur, click (Detailed Explanation)
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) HTML Structure
2) Selecting Elements
3) focus Event
4) blur Event
5) click Event
6) Event Flow Summary
====================================================================


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Focus Blur Click Demo</title>
  <style>
    body {
      font-family: Arial;
      padding: 20px;
    }
    input, button {
      display: block;
      margin: 15px 0;
      padding: 8px;
    }
  </style>
</head>
<body>

  <!-- ================================================================
  1) HTML STRUCTURE
  - Input to demonstrate focus & blur
  - Button to demonstrate click
  ================================================================= 

  <input id="nameInput" type="text" placeholder="Enter your name">
  <button id="saveBtn">Save</button>


  <script>
      ================================================================
       2) Selecting Element           
      ================================================================= */

    let nameInput = document.getElementById("nameInput");
    let saveBtn = document.getElementById("saveBtn");


    /* ================================================================
    3) focus Event
    - Focus fires when the element becomes active
    - The cursor appears inside the input
    ================================================================= */

    nameInput.onfocus = function () {
      console.log("Input Focused");
      nameInput.style.border = "2px solid green";
    };

    // WHEN IT HAPPENS:
    // ✔ User clicks inside input
    // ✔ User tabs into input
    // ✔ JavaScript uses element.focus()

    // OUTPUT:
    // Input Focused


    /* ================================================================
    4) blur Event
    - Blur fires when the element loses focus
    ================================================================= */

    nameInput.onblur = function () {
      console.log("Input Lost Focus");
      nameInput.style.border = "2px solid red";
    };

    // WHEN IT HAPPENS:
    // ✔ User clicks outside input
    // ✔ User clicks the button
    // ✔ Focus moves to another element

    // OUTPUT:
    // Input Lost Focus


    /* ================================================================
    5) click Event
    - Click fires when the user presses and releases the mouse
    - Also triggered by keyboard (Enter / Space)
    ================================================================= */

    saveBtn.onclick = function () {
      console.log("Button Clicked");

      // Programmatic focus example
      nameInput.focus();
    };

    // OUTPUT:
    // Button Clicked
    // Input Focused (because focus() is called)


    /* ================================================================
    6) EVENT FLOW SUMMARY
    ================================================================= */

    /*
      1) User clicks inside input
         → focus event fires

      2) User clicks button
         → blur event fires on input
         → click event fires on button

      3) Button forces focus back to input
         → focus event fires again
    */
  </script>

</body>
</html>
