/*
====================================================================
TOPIC: DOM Events — Form Validation & preventDefault()
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) HTML Structure for Validation
2) Selecting Form Inputs
3) Form Submit Event
4) Input Validation Logic
5) preventDefault() Usage
6) Link Click Event & Event Object
====================================================================
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Form Validation Practice</title>
  <style>
    body {
      font-family: Arial;
      padding: 20px;
    }
    input {
      display: block;
      margin: 10px 0;
    }
  </style>
</head>
<body>

  <!-- ================================================================
  1) HTML STRUCTURE
  - Simple form with username & age inputs
  - A link to demonstrate preventDefault on links
  ================================================================= -->

  <form>
    <input type="text" name="username" placeholder="Username (max 10 chars)">
    <input type="number" name="age" placeholder="Age">
    <button type="submit">Submit</button>
  </form>

  <a href="https://google.com">Go To Google</a>



  <script>
     ================================================================
    2) Selecting Form Inputs
    - Attribute selectors are used here
    ================================================================= */

    let userInput = document.querySelector("[name='username']");
    let ageInput = document.querySelector("[name='age']");


    /* ================================================================
    3) Form Submit Event
    - onsubmit fires when the user submits the form
    - event object (e) controls default browser behavior
    ================================================================= */

    document.forms[0].onsubmit = function (e) {

      // Validation flags
      let userValid = false;
      let ageValid = false;


      /* ================================================================
      4) Input Validation Logic
      ================================================================= */

      // Username must NOT be empty AND length <= 10
      if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
      }

      // Age must NOT be empty
      if (ageInput.value !== "") {
        ageValid = true;
      }


      /* ================================================================
      5) preventDefault()
      - If validation fails, stop form submission
      ================================================================= */

      if (userValid === false || ageValid === false) {
        e.preventDefault();
      }

      // RESULT:
      // ** Invalid data → form NOT submitted
      // - Valid data → form submits normally
    };


    /* ================================================================
    6) Link Click Event & Event Object
    - preventDefault stops navigation
    ================================================================= */

    document.links[0].onclick = function (event) {
      console.log(event);
      // OUTPUT:
      // PointerEvent / MouseEvent object with details

      event.preventDefault();
      // RESULT:
      // Link will NOT open Google
    };

  </script>

</body>
</html>
