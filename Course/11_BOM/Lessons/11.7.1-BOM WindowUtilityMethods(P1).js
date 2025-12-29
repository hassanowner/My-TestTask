/*
====================================================================
TOPIC: BOM (Browser Object Model)
Window Utility Methods — stop(), print(), focus(), scroll*
====================================================================

STUDIED TOPICS & AVAILABLE FEATURES
- Controlling page loading
- Printing browser content
- Managing window focus
- Scrolling the document programmatically

WINDOW METHODS COVERED
- window.stop()
- window.print()
- window.focus()
- window.scrollTo()
- window.scroll()
- window.scrollBy()
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
  <title>Window Utility Demo</title>
</head>

<body style="height: 3000px;">
  <button id="printPage">Print</button>
  <button id="goTop">Scroll To Top</button>
  <button id="scrollDown">Scroll Down</button>
</body>
</html>

NOTE:
- HTML is commented because this is a JavaScript-only file.
- Page height is increased to demonstrate scrolling.
====================================================================
*/


/*
====================================================================
SECTION 1: window.stop()
====================================================================
- Stops the loading of the current document
- Useful when loading external resources
- Similar to pressing the browser stop button
====================================================================
*/

/*
BEGINNER EXAMPLE
*/

// window.stop();

/*
RESULT:
- Page stops loading remaining resources
*/


/*
====================================================================
SECTION 2: window.print()
====================================================================
- Opens the browser print dialog
- Allows printing the current document
====================================================================
*/

/*
PRACTICAL EXAMPLE
*/

let printBtn = document.getElementById("printPage");

if (printBtn) {
  printBtn.onclick = function () {
    window.print();
  };
}

/*
RESULT:
- Print dialog opens when button is clicked
*/


/*
====================================================================
SECTION 3: window.focus()
====================================================================
- Brings the current window to the foreground
- Useful when working with multiple windows
====================================================================
*/

/*
ADVANCED EXAMPLE
*/

let secondaryWindow = null;

// secondaryWindow = window.open("https://example.com", "_blank", "width=400,height=300");

// setTimeout(function () {
//   if (secondaryWindow) {
//     secondaryWindow.focus();
//   }
// }, 3000);

/*
RESULT:
- The opened window moves to the front after delay
*/


/*
====================================================================
SECTION 4: window.scrollTo()
====================================================================
- Scrolls to an absolute position
- Coordinates are relative to the document
====================================================================
*/

/*
BEGINNER EXAMPLE
*/

// window.scrollTo(0, 500);

/*
ADVANCED EXAMPLE (WITH OPTIONS)
*/

// window.scrollTo({
//   top: 800,
//   left: 0,
//   behavior: "smooth"
// });

/*
RESULT:
- Page scrolls smoothly to the target position
*/


/*
====================================================================
SECTION 5: window.scroll()
====================================================================
- Alias of scrollTo()
- Same behavior and usage
====================================================================
*/

/*
EXAMPLE
*/

// window.scroll({
//   top: 300,
//   behavior: "smooth"
// });


/*
====================================================================
SECTION 6: window.scrollBy()
====================================================================
- Scrolls RELATIVE to the current position
- Useful for incremental scrolling
====================================================================
*/

/*
PRACTICAL BUTTON EXAMPLE
*/

let downBtn = document.getElementById("scrollDown");

if (downBtn) {
  downBtn.onclick = function () {
    window.scrollBy({
      top: 250,
      left: 0,
      behavior: "smooth"
    });
  };
}

/*
RESULT:
- Each click scrolls the page down incrementally
*/


/*
====================================================================
TECHNICAL COMPARISON SUMMARY
====================================================================
Method        | Scroll Type       | Behavior
--------------|------------------|----------------
scrollTo()    | Absolute          | Jumps to point
scroll()      | Absolute          | Same as scrollTo
scrollBy()    | Relative          | Moves by amount
====================================================================
*/


/*
====================================================================
FINAL TECHNICAL NOTES
====================================================================
- scroll behavior may vary by browser
- smooth scrolling requires modern browsers
- focus() may be restricted by browser policies
- stop() should be used cautiously
====================================================================
*/
