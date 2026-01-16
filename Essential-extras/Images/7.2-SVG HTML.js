/*
================================================================================
INTEGRATING SVG INTO HTML
================================================================================

SVG graphics can be integrated into HTML in several ways, depending on 
whether you want interactive features, JavaScript execution, or just 
static display. Each method has its advantages and limitations.

================================================================================
1) Using the <img> Element
================================================================================

• The simplest way to display an SVG
• Set the SVG file as the src attribute of the <img> element
• Limitations:
  - Links (<a>) inside the SVG do not work
  - JavaScript inside the SVG is ignored

Example: */
```
<!DOCTYPE html>
<html>
<head>
  <title>SVG via IMG</title>
</head>
<body>
  <img src="example.svg" alt="SVG Graphic" width="500" height="500">
</body>
</html>
```
/*
================================================================================
2) Using the <iframe> Element
================================================================================

• Embed an SVG as the content of an <iframe>
• Supports:
  - Links inside the SVG
  - JavaScript execution
• Can provide a fallback image for older browsers

Example: */
```
<!DOCTYPE html>
<html>
<head>
  <title>SVG via IFRAME</title>
</head>
<body>
  <iframe src="example.svg" width="500" height="500" scrolling="no">
    <!-- Fallback for older browsers -->
    <img src="example.png" width="500" height="500" alt="Alternative Image">
  </iframe>
</body>
</html>
```
/*
================================================================================
3) Using the <object> Element
================================================================================

• Embed SVG as a multimedia object
• Supports:
  - Links inside the SVG
  - JavaScript execution
• Can provide fallback content for older browsers

Example: */
```
<!DOCTYPE html>
<html>
<head>
  <title>SVG via OBJECT</title>
</head>
<body>
  <object data="example.svg" width="500" height="500">
    <!-- Fallback content -->
    <img src="example.png" width="500" height="500" alt="Alternative Image">
  </object>
</body>
</html>
```
/*
================================================================================
4) Using SVG as a CSS Background Image
================================================================================

• Use the SVG file as a background for any HTML element
• Defined in CSS using `url()`
• Limitations:
  - Links and JavaScript inside the SVG will not work

Example: */

<!DOCTYPE html>
<html>
<head>
  <title>SVG as Background</title>
</head>
<body>
  <div style="background: url('example.svg'); width: 500px; height: 500px;">
  </div>
</body>
</html>

/*
================================================================================
5) Inline Definition in HTML
================================================================================

• SVG code can be written directly inside the HTML
• Full support for:
  - Links (<a>)
  - JavaScript
  - CSS styling
• Best for interactive graphics

Example: */
```
<!DOCTYPE html>
<html>
<head>
  <title>Inline SVG</title>
</head>
<body>
  <svg id="svg" version="1.1" baseProfile="full" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#000000" />
    <circle id="circle" cx="100" cy="100" r="80" fill="#ffffff" />
  </svg>
</body>
</html>
```
  /*
================================================================================
KEY NOTES
================================================================================

• Choose the integration method based on your needs:
  - Static display → <img> or CSS background
  - Interactive graphics / JavaScript → <iframe>, <object>, or inline SVG
• Inline SVG offers the **most control**, including styling, scripting, and animations
• External SVG files provide cleaner HTML but may have limitations on interaction
• Always provide alt text or fallback images for accessibility and older browsers

================================================================================
END OF SVG INTEGRATION SECTION
================================================================================ */
