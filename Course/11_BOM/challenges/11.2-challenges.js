/*
=========================================================
EXAMPLE 1: Smart Navigation Manager
=========================================================
*/

const routes = {
  home: "index.html",
  docs: "https://developer.example.org",
  github: "https://github.com"
};

function navigateTo(routeName, replace = false) {
  if (!routes[routeName]) {
    console.error("Route Not Found");
    return;
  }

  if (replace) {
    location.replace(routes[routeName]);
  } else {
    location.assign(routes[routeName]);
  }
}

/*
USAGE:
navigateTo("docs");        // Can go back
navigateTo("github", true); // Cannot go back
*/

/*
✔ Uses location.assign & replace
✔ Uses object for routing
✔ Uses function abstraction
*/


/*
=========================================================
EXAMPLE 2: Controlled Popup System
=========================================================
*/

const popupLinks = [
  "https://example.com",
  "https://developer.example.org",
  "https://openai.com"
];

let activePopup = null;

function openPopup(index) {
  if (!popupLinks[index]) {
    alert("Invalid Popup Index");
    return;
  }

  activePopup = window.open(
    popupLinks[index],
    "_blank",
    "width=500,height=350,left=200,top=150,resizable=yes"
  );
}

function closePopup() {
  if (activePopup && !activePopup.closed) {
    activePopup.close();
    console.log("Popup Closed");
  }
}

/*
USAGE:
openPopup(1);
closePopup();
*/

/*
✔ Uses window.open & window.close
✔ Uses array indexing
✔ Uses functions for control
*/


/*
=========================================================
EXAMPLE 3: History Controller with Rules
=========================================================
*/

const historyController = {
  back() {
    history.back();
    console.log("Moved Back");
  },

  forward() {
    history.forward();
    console.log("Moved Forward");
  },

  jump(steps) {
    if (typeof steps !== "number") {
      console.error("Steps must be a number");
      return;
    }
    history.go(steps);
    console.log(`Jumped ${steps} steps`);
  },

  size() {
    return history.length;
  }
};

/*
USAGE:
historyController.back();
historyController.jump(-2);
console.log(historyController.size());
*/

/*
✔ Uses history API
✔ Object-oriented control
✔ Safe navigation logic
*/
