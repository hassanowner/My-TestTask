/*
====================================================================
BOM (Browser Object Model) — Window Utilities, Scrolling & Storage
PROFESSIONAL & PROGRAMMATIC GUIDE
====================================================================

This file contains:
1) Window Utility Methods: stop(), print(), focus(), scroll*
2) Scroll Position Tracking & Scroll To Top
3) Local Storage: Persistent Client-Side Storage
4) Session Storage: Temporary Client-Side Storage
====================================================================
*/

/* ==================================================================
SECTION 1 — WINDOW UTILITY METHODS
================================================================== */

/* stop(): Halts page loading */
// window.stop(); // Stops remaining resource loading

/* print(): Opens print dialog */
let printBtn = document.getElementById("printPage");
if (printBtn) {
  printBtn.onclick = function () {
    window.print();
  };
}

/* focus(): Brings window to foreground */
// let secondaryWindow = window.open("https://example.com", "_blank", "width=400,height=300");
// setTimeout(() => secondaryWindow.focus(), 3000);

/* scrollTo(): Absolute scrolling */
window.scrollTo(0, 500); // jumps
// window.scrollTo({top: 800, left: 0, behavior: "smooth"}); // smooth scroll

/* scroll(): Alias for scrollTo */
// window.scroll({top: 300, behavior: "smooth"});

/* scrollBy(): Relative scrolling */
let downBtn = document.getElementById("scrollDown");
if (downBtn) {
  downBtn.onclick = function () {
    window.scrollBy({top: 250, left: 0, behavior: "smooth"});
  };
}

/* TECHNICAL SUMMARY */
console.log({
  scrollTo: "Absolute jump",
  scroll: "Absolute (alias)",
  scrollBy: "Relative"
});


/* ==================================================================
SECTION 2 — SCROLL TO TOP & POSITION TRACKING
================================================================== */

/* Scroll position properties */
console.log(window.scrollX, window.pageXOffset, window.scrollX === window.pageXOffset);
console.log(window.scrollY, window.pageYOffset, window.scrollY === window.pageYOffset);

/* Practical "Scroll to Top" button */
let topButton = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  topButton.style.display = window.scrollY >= 500 ? "block" : "none";
});

if (topButton) {
  topButton.onclick = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  };
}

/* NOTES:
- scrollX / scrollY track horizontal/vertical positions
- scroll event fires frequently; throttle if needed
- Smooth scrolling requires modern browsers
*/


/* ==================================================================
SECTION 3 — LOCAL STORAGE (Persistent)
================================================================== */

console.log(typeof window.localStorage);

/* Basic operations */
localStorage.setItem("themeColor", "#1e90ff");
localStorage.setItem("textSize", "18px");

console.log(localStorage.getItem("themeColor"));
console.log(localStorage.getItem("textSize"));

console.log(localStorage.key(0)); // "themeColor"
console.log(localStorage.key(1)); // "textSize"

/* Practical example: UI background preference */
const DEFAULT_COLOR = "#ffffff";
const SAVED_COLOR_KEY = "uiBackground";

document.body.style.backgroundColor = localStorage.getItem(SAVED_COLOR_KEY) || DEFAULT_COLOR;

let saveButton = document.getElementById("save");
if (saveButton) {
  saveButton.onclick = () => {
    localStorage.setItem(SAVED_COLOR_KEY, "#2ecc71");
    document.body.style.backgroundColor = "#2ecc71";
  };
}

let removeButton = document.getElementById("remove");
if (removeButton) {
  removeButton.onclick = () => {
    localStorage.removeItem(SAVED_COLOR_KEY);
    document.body.style.backgroundColor = DEFAULT_COLOR;
  };
}

/* Notes:
- Only stores strings
- Objects require JSON.stringify / JSON.parse
*/


/* ==================================================================
SECTION 4 — SESSION STORAGE (Temporary)
================================================================== */

console.log(typeof window.sessionStorage);

/* Basic operations */
sessionStorage.setItem("language", "en");
console.log(sessionStorage.getItem("language"));
console.log(sessionStorage.key(0));

/* Practical example: temporary form input */
let nameField = document.querySelector(".username");

if (sessionStorage.getItem("temp-name")) {
  nameField.value = sessionStorage.getItem("temp-name");
}

nameField.onblur = function () {
  sessionStorage.setItem("temp-name", this.value);
};

/* Notes:
- Lifespan limited to browser tab
- Duplicate tab copies session
- New tab starts fresh session
- API identical to localStorage
- Objects require JSON conversion
*/


/* ==================================================================
FINAL TECHNICAL SUMMARY
================================================================== */

/*
WINDOW METHODS:
- stop(): Halt loading
- print(): Browser print dialog
- focus(): Bring window to foreground
- scrollTo()/scroll()/scrollBy(): Absolute/relative scrolling

SCROLL TRACKING:
- scrollX / pageXOffset → horizontal position
- scrollY / pageYOffset → vertical position
- Scroll-to-top button improves UX

LOCAL STORAGE:
- Persistent, survives reloads & restarts
- Max ~5MB
- Use for preferences/settings
- Keys must be namespaced

SESSION STORAGE:
- Temporary, per tab
- Cleared on tab close
- Use for drafts, temporary forms
- Same-origin policy applies
*/
