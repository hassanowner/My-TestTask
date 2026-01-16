/*
================================================================================
SVG (SCALABLE VECTOR GRAPHICS)
================================================================================

SVG is an XML-based markup language for describing **two-dimensional vector graphics**. 
Unlike Canvas, which is pixel-based, SVG graphics are **vector-based**, 
so they can scale without losing quality.

================================================================================
OVERVIEW
================================================================================

• SVG elements describe shapes, lines, text, and more
• Can be created manually in code or exported from vector software 
  like Adobe Illustrator, Inkscape, or Figma
• Integrates directly into HTML using the <svg> tag
• Supports styling with CSS and animations with SMIL or JavaScript

================================================================================
COMMON SVG ELEMENTS
================================================================================*/

1) <rect> – rectangle
   Attributes: x, y, width, height, rx (rounded corner horizontal radius), ry (rounded corner vertical radius)
   Example: <rect x="10" y="10" width="100" height="50" rx="10" ry="10" fill="red"/>

2) <circle> – circle
   Attributes: cx (center x), cy (center y), r (radius)
   Example: <circle cx="100" cy="100" r="50" fill="blue"/>

3) <ellipse> – ellipse
   Attributes: cx, cy, rx (radius x-axis), ry (radius y-axis)
   Example: <ellipse cx="150" cy="80" rx="100" ry="50" fill="green"/>

4) <line> – straight line
   Attributes: x1, y1, x2, y2, stroke, stroke-width
   Example: <line x1="0" y1="0" x2="200" y2="200" stroke="black" stroke-width="2"/>

5) <polyline> – connected series of lines
   Attributes: points="x1,y1 x2,y2 x3,y3 ..."
   Example: <polyline points="0,0 50,50 100,0" fill="none" stroke="orange"/>

6) <polygon> – closed shape with multiple points
   Attributes: points="x1,y1 x2,y2 x3,y3 ..."
   Example: <polygon points="50,0 100,100 0,100" fill="purple"/>

7) <path> – complex shapes defined with path commands (M, L, C, etc.)
   Example: <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="blue" fill="transparent"/>

8) <text> – display text
   Attributes: x, y, font-family, font-size, fill
   Example: <text x="50" y="50" font-family="Arial" font-size="24" fill="white">Hello SVG</text>

9) <g> – group of SVG elements (for styling or transformations)
   Example: <g fill="red"><rect ... /><circle ... /></g>

10) <a> – hyperlink
11) <image> – embed external images (attributes: x, y, width, height)
12) <linearGradient> – linear color gradients
13) <radialGradient> – radial color gradients

/*
================================================================================
BASIC EXAMPLE
================================================================================*/

<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <!-- Black background -->
  <rect width="100%" height="100%" fill="#000000" />
  
  <!-- White circle -->
  <circle id="circle" cx="100" cy="100" r="80" fill="#ffffff" />
</svg>

Result:
• A black square canvas of 200x200 pixels
• A white circle centered at (100,100) with radius 80

  /*
================================================================================
KEY NOTES
================================================================================

• SVG graphics are resolution-independent (perfect for responsive designs)
• Can be styled using CSS (fill, stroke, stroke-width, opacity)
• Supports animations using:
  - CSS animations
  - JavaScript (manipulating DOM elements)
  - SMIL (deprecated in some browsers)
• Can be embedded inline in HTML or referenced via <img>, <object>, <iframe>, or CSS background
• Ideal for icons, logos, charts, and interactive graphics

================================================================================
END OF SVG SECTION
================================================================================ */
