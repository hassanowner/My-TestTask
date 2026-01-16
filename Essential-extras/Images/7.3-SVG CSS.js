/*
================================================================================
STYLING SVG ELEMENTS WITH CSS
================================================================================

SVG elements can be styled using CSS, similar to HTML elements. 
However, the available CSS properties are specific to SVG graphics. 
This allows you to control colors, strokes, text, and interactivity.

================================================================================
COMMON CSS PROPERTIES FOR SVG
================================================================================ */

Property         | Description
-----------------|------------------------------------------------
fill             | Filling color of the shape
fill-opacity     | Opacity of the fill color
stroke           | Frame (outline) color of the shape
stroke-opacity   | Opacity of the stroke
stroke-width     | Width of the stroke
font-family      | Font family for text elements
font-size        | Font size for text elements
font-style       | Font style (italic, normal) for text
cursor           | Mouse pointer when hovering over the element
/*
================================================================================
BASIC EXAMPLE
================================================================================ */
``` 
<style>
/* Style for rectangle */
rect {
  stroke-width: 4;
  fill: #FFFFFF;
  stroke: #3080D0;
}

/* Style for circle element */
#circle {
  fill: #3080D0;
  fill-opacity: 0.5;
  stroke: #3080D0;
  stroke-width: 4;
}

/* Hover effect for circle */
#circle:hover {
  cursor: pointer;
}

/* Active state for circle */
#circle.active {
  fill: #000000;
}

/* Style for text */
text {
  fill: #FFFFFF;
  font-family: sans-serif;
  font-size: 24px;
}
</style>
  
<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="200" height="100" />
  <circle id="circle" cx="300" cy="100" r="50" />
  <text x="100" y="200">Hello SVG</text>
</svg>
```
/*
================================================================================
KEY NOTES
================================================================================

• CSS can style SVG shapes, paths, text, and groups (<g>)  
• Use IDs (#id) or classes (.class) to target specific elements  
• Inline styles are also possible via the `style` attribute  
• Hover effects, cursor changes, and active states can be applied  
• Styling works both for inline SVG and SVG loaded via <object> or <iframe>  
• Not all HTML CSS properties work; only those supported by SVG specifications  

================================================================================
END OF SVG STYLING SECTION
================================================================================ */
