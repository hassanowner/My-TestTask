/*
====================================================================
FILE: window-utilities-practice.js
TOPIC: BOM — Window Utility & Scroll Control
====================================================================
CONTAINS:
1) Page Control Utility
2) Smart Scroll Manager
3) Focus & Scroll Tracker
====================================================================
*/


/* ================================================================
EXAMPLE 1: Page Control Utility
(window.stop, window.print, function, object)
================================================================ */

/*
IDEA:
- Central utility object
- Controls page loading and printing
*/

const pageUtility = {
  stopLoading() {
    window.stop();
    console.log("Page loading stopped");
  },

  printPage() {
    window.print();
  }
};

/*
USAGE (manual):
pageUtility.stopLoading();
pageUtility.printPage();
*/

/*
✔ Uses window.stop()
✔ Uses window.print()
✔ Object-based utilities
*/


/* ================================================================
EXAMPLE 2: Smart Scroll Manager
(scrollTo, scrollBy, array, function)
================================================================ */

/*
IDEA:
- Predefined scroll positions
- Absolute & relative scrolling
*/

const scrollPoints = [0, 500, 1200, 2000];

function scrollToPoint(index) {
  if (!scrollPoints[index]) {
    console.error("Invalid scroll index");
    return;
  }

  window.scrollTo({
    top: scrollPoints[index],
    behavior: "smooth"
  });
}

function scrollStepDown() {
  window.scrollBy({
    top: 300,
    behavior: "smooth"
  });
}

/*
USAGE:
scrollToPoint(2); // Absolute scroll
scrollStepDown(); // Relative scroll
*/

/*
✔ Uses scrollTo()
✔ Uses scrollBy()
✔ Uses array as scroll map
*/


/* ================================================================
EXAMPLE 3: Focus & Scroll Tracker
(window.focus, scrollY, function, object)
================================================================ */

/*
IDEA:
- Track scroll position
- Auto focus window after inactivity
*/

const scrollTracker = {
  lastScroll: 0,

  track() {
    window.addEventListener("scroll", () => {
      this.lastScroll = window.scrollY;
      console.log(`Current Scroll: ${this.lastScroll}px`);
    });
  },

  refocus(delay = 3000) {
    setTimeout(() => {
      window.focus();
      console.log("Window focused");
    }, delay);
  }
};

/*
USAGE:
scrollTracker.track();
scrollTracker.refocus(5000);
*/

/*
✔ Uses window.focus()
✔ Uses scrollY
✔ Combines event + timeout
*/


/* ================================================================
FINAL CONSOLIDATED SUMMARY
====================================================================
✔ window.stop()        → Control loading
✔ window.print()       → Print dialog
✔ window.focus()       → Bring window to front
✔ scrollTo()           → Absolute scroll
✔ scrollBy()           → Relative scroll
✔ scrollY              → Scroll tracking
✔ array + object + function
====================================================================

LEVEL ACHIEVED:
✔ Strong BOM understanding
✔ Clean separation of concerns
✔ Ready for real-world browser logic
====================================================================
*/
