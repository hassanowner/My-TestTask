/*
====================================================================
FILE: storage-practice.js
TOPIC: BOM — Local Storage & Session Storage
====================================================================
CONTAINS:
1) User Preferences Manager (Local Storage)
2) Session Counter System (Session Storage)
3) Storage Inspector Utility (Both)
====================================================================
*/


/* ================================================================
EXAMPLE 1: User Preferences Manager
(Local Storage + object + function)
================================================================ */

/*
IDEA:
- Store UI preferences permanently
- Restore them automatically
*/

const preferences = {
  key: "user-preferences",

  save(settings) {
    localStorage.setItem(this.key, JSON.stringify(settings));
    console.log("Preferences saved");
  },

  load() {
    return JSON.parse(localStorage.getItem(this.key)) || {
      theme: "light",
      fontSize: "16px"
    };
  },

  apply() {
    const data = this.load();
    document.body.style.backgroundColor =
      data.theme === "dark" ? "#2c3e50" : "#ffffff";
    document.body.style.fontSize = data.fontSize;
  }
};

/*
USAGE:
preferences.save({ theme: "dark", fontSize: "18px" });
preferences.apply();
*/

/*
✔ Uses localStorage
✔ Uses JSON + object pattern
*/


/* ================================================================
EXAMPLE 2: Session Counter System
(Session Storage + function)
================================================================ */

/*
IDEA:
- Count page visits per tab
- Reset automatically when tab closes
*/

function sessionCounter() {
  let count = sessionStorage.getItem("visits");

  count = count ? Number(count) + 1 : 1;

  sessionStorage.setItem("visits", count);
  console.log(`Session Visits: ${count}`);
}

/*
USAGE:
sessionCounter();
*/

/*
✔ Uses sessionStorage
✔ Demonstrates tab-limited state
*/


/* ================================================================
EXAMPLE 3: Storage Inspector Utility
(Array + Local & Session Storage)
================================================================ */

/*
IDEA:
- Inspect stored keys dynamically
- Works for both storages
*/

function inspectStorage(storage) {
  let keys = [];

  for (let i = 0; i < storage.length; i++) {
    keys.push(storage.key(i));
  }

  console.log("Stored Keys:", keys);
}

/*
USAGE:
inspectStorage(localStorage);
inspectStorage(sessionStorage);
*/

/*
✔ Uses array to collect keys
✔ Generic utility function
*/


/* ================================================================
FINAL CONSOLIDATED SUMMARY
====================================================================
✔ localStorage        → Permanent data
✔ sessionStorage      → Temporary (tab-based) data
✔ JSON.stringify      → Object storage
✔ JSON.parse          → Data restoration
✔ array               → Key collection
✔ function + object   → Clean architecture
====================================================================

LEVEL ACHIEVED:
✔ Real-world storage patterns
✔ Clean separation of concerns
✔ Production-ready mindset
====================================================================
*/
