/* =========================================================
EXAMPLE 1 — window.location + Object (Navigation Logic)
========================================================= */

let pages = {
  home: "index.html",
  about: "about.html",
  contact: "contact.html"
};

let go = confirm("Do you want to go to another page?");

if (go) {
  let choice = prompt("Where? (home / about / contact)", "home");

  if (pages[choice]) {
    window.location.href = pages[choice];
  } else {
    alert("Page Not Found");
  }
}

/*
✔ Uses BOM: window.location
✔ Uses object instead of many ifs
*/


/* =========================================================
EXAMPLE 2 — window.open() + Array Control
========================================================= */

let sites = [
  "https://google.com",
  "https://github.com",
  "https://openai.com"
];

let index = prompt("Choose site index (0 - 2)", "0");

if (sites[index]) {
  window.open(sites[index], "_blank", "width=600,height=400");
} else {
  alert("Invalid Choice");
}

/*
✔ window.open
✔ Array index logic
*/


/* =========================================================
EXAMPLE 3 — Auto Logout Using setTimeout (Real Scenario)
========================================================= */

let user = {
  name: "Hassan",
  loggedIn: true
};

let logoutTimer = setTimeout(function () {
  user.loggedIn = false;
  alert("You have been logged out due to inactivity");
}, 6000);

if (confirm("Stay logged in?")) {
  clearTimeout(logoutTimer);
  alert("Session Extended");
}

/*
✔ setTimeout
✔ clearTimeout
✔ Object state control
*/


/* =========================================================
EXAMPLE 4 — setInterval + Progress Simulation
========================================================= */

let progress = 0;

let loader = setInterval(function () {
  progress += 20;
  console.log(`Loading: ${progress}%`);

  if (progress === 100) {
    clearInterval(loader);
    alert("Loading Complete");
  }
}, 1000);

/*
✔ setInterval
✔ clearInterval
✔ Real loading simulation
*/


/* =========================================================
EXAMPLE 5 — Window Size Watcher (Resize Logic)
========================================================= */

window.onresize = function () {
  let width = window.innerWidth;

  if (width < 600) {
    console.log("Mobile View");
  } else if (width < 992) {
    console.log("Tablet View");
  } else {
    console.log("Desktop View");
  }
};

/*
✔ window.innerWidth
✔ window.onresize
✔ if / else logic
*/


/* =========================================================
FINAL BOM SKILLS YOU USED
=========================================================

✔ window
✔ location
✔ open
✔ alert / confirm / prompt
✔ setTimeout / clearTimeout
✔ setInterval / clearInterval
✔ resize event
✔ arrays & objects for logic

========================================================= */
