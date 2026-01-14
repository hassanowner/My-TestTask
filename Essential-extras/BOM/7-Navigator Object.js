/*
========================================================
EXPLORING THE NAVIGATOR OBJECT IN JAVASCRIPT
========================================================

The `navigator` object provides information about the browser, the operating system, and other capabilities of the client environment. Many properties exist, some reliable, some obsolete, and some meant for modern APIs. Below is a detailed explanation of the key properties.

--------------------------------------------------------

• Property: appCodeName
----------------------
Explanation:
- Returns the internal codename of the current browser.
- Historically intended to identify the browser engine.
- Not reliable in practice; most browsers return "Mozilla".
- Useful mostly for legacy scripts that check browser engine.

Example: */
console.log(navigator.appCodeName); // Output: "Mozilla"

/* Rule:
Do not rely on this value for browser detection; it’s mainly for legacy compatibility.

--------------------------------------------------------

• Property: appName
------------------
Explanation:
- Returns the official name of the browser.
- Not reliable; all modern browsers return "Netscape".
- Historically used for browser detection.

Example: */
console.log(navigator.appName); // Output: "Netscape"

/* Rule:
Avoid using this property for feature detection; prefer capability checks.

--------------------------------------------------------

• Property: appVersion
---------------------
Explanation:
- Returns the browser version as a string.
- Not reliable; formats differ between browsers.
- Used historically for compatibility checks.

Example: */
console.log(navigator.appVersion); // Output: "5.0 (Windows)"

/* Rule:
Do not use for feature detection; use `navigator.userAgent` or modern APIs.

--------------------------------------------------------

• Property: battery
------------------
Explanation:
- Provides a reference to a `BatteryManager` object.
- Allows access to battery information, including level and charging status.
- Useful for optimizing web applications based on battery state.

Example: */
navigator.battery.then(battery => {
  console.log(battery.level);
});

/* Rule:
Only use in browsers that support the Battery Status API.

--------------------------------------------------------

• Property: cookieEnabled
-------------------------
Explanation:
- Returns `true` if cookies are enabled in the browser, `false` otherwise.
- Useful for determining whether to store session data or use alternative storage.

Example: */
if (navigator.cookieEnabled) {
  console.log("Cookies are enabled");
} else {
  console.log("Cookies are disabled");
}

/* Rule:
Always check before attempting to set cookies.

--------------------------------------------------------

• Property: geolocation
----------------------
Explanation:
- Returns a `Geolocation` object providing access to location APIs.
- Can be used to get the user’s current location (with permission).
- Useful for maps, location-based services, or personalization.

Example: */
navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude, position.coords.longitude);
});

/* Rule:
Always ask for user permission; may not work if blocked by browser or privacy settings.

--------------------------------------------------------

• Property: language
-------------------
Explanation:
- Returns the user's preferred language as a string.
- Typically reflects the browser interface language.

Example: */
console.log(navigator.language); // Output: "en-US"

/* Rule:
Use for localization or setting content language; may return null if unknown.

--------------------------------------------------------

• Property: languages
--------------------
Explanation:
- Returns an array of preferred languages, most preferred first.
- Useful for multi-language content selection.

Example: */
console.log(navigator.languages); // Output: ["en-US", "fr-FR"]

/* Rule:
Check the first element for primary language preference.

--------------------------------------------------------

• Property: mimeTypes
--------------------
Explanation:
- Returns a list of MIME types supported by the browser.
- Useful for checking support for specific media types.

Example: */
console.log(navigator.mimeTypes['application/pdf']); 

/* Rule:
Use to detect media support; may vary across browsers.

--------------------------------------------------------

• Property: onLine
-----------------
Explanation:
- Boolean indicating whether the browser has network connectivity.
- Useful for offline detection in web applications.

Example: */
if (navigator.onLine) {
  console.log("Connected to the internet");
} else {
  console.log("Offline mode");
}

/* Rule:
Always verify connectivity before making network requests.

--------------------------------------------------------

• Property: platform
-------------------
Explanation:
- Returns information about the operating system platform.
- Often used for displaying OS-specific information.
- Not reliable for critical decisions.

Example: */
console.log(navigator.platform); // Output: "Win32"

/* Rule:
Do not rely on this for feature detection; use capability checks instead.

--------------------------------------------------------

• Property: plugins
------------------
Explanation:
- Returns a list of installed browser plugins.
- Useful for determining support for special media or tools.
- Mostly obsolete in modern browsers.

Example: */
console.log(navigator.plugins.length); 

/* Rule:
Use cautiously; plugin support is limited in modern browsers.

--------------------------------------------------------

• Property: product
------------------
Explanation:
- Returns the browser engine product name.
- Always returns "Gecko" for backward compatibility.

Example: */
console.log(navigator.product); // Output: "Gecko"

/* Rule:
Not reliable for browser detection; mainly historical.

--------------------------------------------------------

• Property: productSub
---------------------
Explanation:
- Returns a sublabel of the browser product, e.g., "20030107".
- Historical, not commonly used today.

Example: */
console.log(navigator.productSub); // Output: "20030107"

/* Rule:
Do not rely on this for modern development.

--------------------------------------------------------

• Property: serviceWorker
------------------------
Explanation:
- Returns a `ServiceWorkerContainer` object.
- Provides access to Service Worker registration and control.
- Useful for building offline-capable or background-processing web apps.

Example: */
navigator.serviceWorker.register('/sw.js').then(() => {
  console.log("Service Worker registered");
});

/* Rule:
Only supported in secure contexts (HTTPS) and modern browsers.

--------------------------------------------------------

• Property: userAgent
--------------------
Explanation:
- Returns a string identifying the browser and version.
- Can be used for diagnostics but not reliable for feature detection.

Example: */
console.log(navigator.userAgent);

/* Rule:
Avoid using for browser detection; prefer feature detection.

--------------------------------------------------------

• Property: vendor
-----------------
Explanation:
- Returns the browser vendor name (e.g., "Google Inc.").
- May be empty in some browsers.

Example: */
console.log(navigator.vendor);

/* Rule:
Use only for informational purposes, not for logic decisions.

--------------------------------------------------------

• Property: vendorSub
--------------------
Explanation:
- Intended for additional vendor information.
- Always returns an empty string in practice.

Example: */
console.log(navigator.vendorSub); // Output: ""

/* Rule:
Do not rely on this property.

--------------------------------------------------------


• SUMMARY
---------
The `navigator` object exposes a wide range of browser-related information.  
- Use properties like `language`, `onLine`, `cookieEnabled`, `geolocation`, `serviceWorker` for modern web development.  
- Avoid deprecated or unreliable properties (`appName`, `appCodeName`, `appVersion`, `product`, `platform`) for feature detection.  
- Always favor capability detection over browser or platform detection for robust and future-proof applications.

========================================================
END OF FILE
======================================================== */
