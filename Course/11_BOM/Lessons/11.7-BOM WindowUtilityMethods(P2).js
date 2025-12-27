/*
====================================================================
TOPIC: BOM (Browser Object Model)
Scroll Practice — Scroll To Top & Scroll Position Tracking
====================================================================

STUDIED TOPICS & AVAILABLE FEATURES
- Detecting scroll position
- Using scrollX / scrollY
- Understanding pageXOffset / pageYOffset
- Creating a "Scroll To Top" button
- Smooth scrolling behavior

SCROLL PROPERTIES
- window.scrollX
- window.scrollY
- window.pageXOffset (alias)
- window.pageYOffset (alias)

SCROLL METHODS
- window.scrollTo()
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
  <title>Scroll To Top Demo</title>
  <style>
    body {
      height: 3000px;
    }
    button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: none;
    }
  </style>
</head>

<body>
  <button id="toTop">Top</button>
</body>
</html>

NOTE:
- HTML is commented because this is a JavaScript-only file.
- Page height is increased to enable scrolling.
====================================================================
*/


/*
====================================================================
SECTION 1: SCROLL POSITION PROPERTIES OVERVIEW
====================================================================
- scrollX and scrollY return current scroll position
- Values are measured in pixels
- Aliases exist for compatibility
====================================================================
*/

/*
BEGINNER EXAMPLE
*/

console.log(window.scrollX);
console.log(window.pageXOffset);
console.log(window.scrollX === window.pageXOffset);

/*
RESULT:
- true
- scrollX is an alias of pageXOffset
*/


console.log(window.scrollY);
console.log(window.pageYOffset);
console.log(window.scrollY === window.pageYOffset);

/*
RESULT:
- true
- scrollY is an alias of pageYOffset
*/


/*
====================================================================
SECTION 2: BEGINNER EXAMPLE — TRACKING SCROLL POSITION
====================================================================
- Logs scroll position while scrolling
====================================================================
*/

// window.onscroll = function () {
//   console.log(`Vertical Scroll: ${window.scrollY}px`);
// };


/*
====================================================================
SECTION 3: PRACTICAL EXAMPLE — SCROLL TO TOP BUTTON
====================================================================
- Button appears after scrolling a certain distance
- Button scrolls smoothly to top when clicked
====================================================================
*/

let topButton = document.getElementById("toTop");


/*
Monitor scroll position
*/

window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});


/*
Handle button click
*/

if (topButton) {
  topButton.onclick = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };
}


/*
====================================================================
SECTION 4: scrollTo() METHOD EXPLANATION
====================================================================
- scrollTo() scrolls to an absolute position
- Supports object-based options
- behavior: "smooth" enables animated scrolling
====================================================================
*/


/*
====================================================================
FINAL BEHAVIOR SUMMARY
====================================================================
- While scrolling down:
  → Button becomes visible after threshold
- Clicking the button:
  → Page scrolls smoothly to top
- scrollX / scrollY accurately track position
====================================================================
*/


/*
====================================================================
FINAL TECHNICAL NOTES
====================================================================
- Smooth scrolling requires modern browsers
- Fixed positioning is ideal for scroll actions
- scroll event can fire frequently; optimize if needed
====================================================================
*/
