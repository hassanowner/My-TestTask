/*
========================================================
ACCESSING SCREEN INFORMATION USING THE SCREEN OBJECT
========================================================

The `screen` object in JavaScript provides information about the user's display, including screen size, available space, color depth, and orientation. These properties are useful for optimizing layouts, responsive design, and media display on different devices.

--------------------------------------------------------

• Property: availTop
--------------------
Explanation:
- Returns the number of pixels taken up from the top of the screen
  by fixed screen components such as taskbars or system bars.
- Useful for calculating the usable vertical space for browser content.

Example: */
console.log(screen.availTop); // Output: 0 (if no top bars)
/* Rule:
Use to ensure UI elements are not hidden behind fixed OS components.

--------------------------------------------------------

• Property: availLeft
---------------------
Explanation:
- Returns the number of pixels taken up from the left side
  by fixed screen components.
- Helps position content without being overlapped by system UI.

Example: */
console.log(screen.availLeft); // Output: 0
/* Rule:
Use when positioning floating elements or pop-ups.

--------------------------------------------------------

• Property: availHeight
-----------------------
Explanation:
- Maximum vertical space available for content
  minus fixed components like taskbars.
- Important for full-screen layouts and maximizing usable space.

Example: */
console.log(screen.availHeight); // Output: 1040
/* Rule:
Use when resizing windows or adapting UI dynamically.

--------------------------------------------------------

• Property: availWidth
----------------------
Explanation:
- Maximum horizontal space available for content
  minus fixed components like sidebars.
- Helps in responsive layouts and centering elements.

Example: */
console.log(screen.availWidth); // Output: 1920
/* Rule:
Do not assume full screen width; always check availWidth.

--------------------------------------------------------

• Property: colorDepth
----------------------
Explanation:
- Returns the number of bits used to represent color on the screen.
- Indicates color quality (e.g., 24-bit, 32-bit).
- Useful when optimizing images or graphics for display.

Example: */
console.log(screen.colorDepth); // Output: 24
/* Rule:
Can guide graphic optimization but rarely critical in modern devices.

--------------------------------------------------------

• Property: height
------------------
Explanation:
- Total screen height in pixels, including all display areas.
- Useful for full-screen apps or visual calculations.

Example: */
console.log(screen.height); // Output: 1080
/* Rule:
Height may include areas covered by taskbars; check availHeight for usable space.

--------------------------------------------------------

• Property: orientation
-----------------------
Explanation:
- Returns a `ScreenOrientation` object from the Screen Orientation API.
- Provides information about current screen orientation (portrait/landscape).
- Useful for responsive design and orientation-specific UI adjustments.

Example: */
console.log(screen.orientation.type); // Output: "landscape-primary"
/* Rule:
Always test for support; older browsers may not implement this API.

--------------------------------------------------------

• Property: pixelDepth
----------------------
Explanation:
- Returns the number of bits used for a single pixel on the screen.
- Often similar to `colorDepth`, indicates visual quality of graphics.

Example: */
console.log(screen.pixelDepth); // Output: 24
/* Rule:
Useful for media or graphics apps but typically mirrors colorDepth.

--------------------------------------------------------

• Property: width
-----------------
Explanation:
- Total screen width in pixels.
- Important for layout calculations, window positioning, and scaling.

Example: */
console.log(screen.width); // Output: 1920
/* Rule:
Width may include areas not available for content; check availWidth for safe layout.

--------------------------------------------------------


• SUMMARY
---------
The `screen` object properties:

Property      → Meaning
-------------------------------------------
availTop      → Pixels occupied at top by system bars
availLeft     → Pixels occupied on left by system bars
availHeight   → Max usable vertical space
availWidth    → Max usable horizontal space
colorDepth    → Number of bits used for colors
height        → Total screen height
orientation   → Screen orientation object
pixelDepth    → Number of bits per pixel
width         → Total screen width

Key Benefits:
- Optimize layouts for available screen space
- Adapt content for orientation changes
- Determine screen quality for graphics and media
- Improve user experience across devices

========================================================
END OF FILE
======================================================== */
