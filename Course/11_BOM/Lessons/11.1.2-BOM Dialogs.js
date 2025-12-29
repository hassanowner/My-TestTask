/*
====================================================================
TOPIC: BOM (Browser Object Model)
Browser Dialogs — alert, confirm, prompt (Practical Example)
====================================================================

TABLE OF CONTENTS (ORDER BASED ON CODE)
1) Introduction
2) alert() Example
3) confirm() Example
4) Using confirm() With Logic
5) prompt() Example
6) Final Output Explanation
====================================================================
*/


/*
====================================================================
HTML STRUCTURE (REFERENCE ONLY)
====================================================================

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BOM Dialog Practice</title>
</head>

<body>
  <button id="start">Start Action</button>
</body>
</html>

NOTE:
- This HTML is commented because this is a JavaScript-only file.
====================================================================
*/


/*
===============================================================
1) Introduction
===============================================================
- alert, confirm, and prompt are part of the BOM
- They are methods of the window object
- Used for direct interaction with the user
*/


let startBtn = document.getElementById("start");


/*
===============================================================
2) alert() Example
===============================================================
- Used to display information only
- User must press OK to continue
*/

alert("Welcome To Our Website");

/*
RESULT:
- A popup message appears with an OK button
*/


/*
===============================================================
3) confirm() Example
===============================================================
- Used to ask the user for confirmation
- Returns true or false
*/

if (startBtn) {
  startBtn.onclick = function () {

    let userChoice = confirm("Do You Want To Continue?");

    /*
    ===============================================================
    4) Using confirm() With Logic
    ===============================================================
    */

    if (userChoice) {
      alert("You Chose To Continue");
    } else {
      alert("Action Was Cancelled");
    }

    /*
    RESULT:
    - OK     → Continue message
    - Cancel → Cancel message
    */


    /*
    ===============================================================
    5) prompt() Example
    ===============================================================
    - Used to collect data from the user
    - Returns a string or null
    */

    let userName = prompt(
      "Enter Your Name",
      "Guest"
    );


    /*
    ===============================================================
    6) Final Output Explanation
    ===============================================================
    */

    if (userName !== null && userName !== "") {
      console.log(`Welcome, ${userName}`);
    } else {
      console.log("No Name Provided");
    }

    /*
    RESULT:
    - Input value is printed in the console
    - Cancel or empty input handled safely
    */

  };
}
