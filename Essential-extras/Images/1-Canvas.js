/*
================================================================================
HTML5 CANVAS API – DRAWING 2D GRAPHICS
================================================================================

This file explains the Canvas API, the <canvas> element, rendering contexts,
and basic drawing in JavaScript.

================================================================================
OVERVIEW
================================================================================ */

// The Canvas API allows you to draw graphics (shapes, text, images, etc.)
// dynamically in a browser using JavaScript.

// Key points:
• <canvas> element defines a drawing area in HTML
• getContext() provides a rendering context for drawing
• 2D context is used for 2D graphics
• 3D contexts (WebGL / WebGL2) are used for 3D graphics
• Works together with CSS for styling

/*
================================================================================
1. THE DRAWING AREA: THE <canvas> ELEMENT
================================================================================ */

// The <canvas> element is a container for graphics.
// You define width and height via attributes (defaults: 300x150px).
// Using an id allows easy access via JavaScript.

const canvasHTML = `
<canvas id="canvas" width="500" height="300"></canvas>
`;

/*
Benefits:
• Provides a dedicated space for graphics
• Works with JS to create dynamic content
• Can be styled using CSS
• Supports interactive graphics and animations
*/

/*
Basic HTML Example: */
```
<!DOCTYPE html>
<html>
<head>
  <title>Canvas Example</title>
  <style>
    canvas { border: 1px solid black; }
  </style>
</head>
<body>
  <canvas id="canvas" width="500" height="300"></canvas>
  <script src="main.js"></script>
</body>
</html>
```
// Result: A 500x300px blank canvas with a black border appears


/*
================================================================================
2. STYLING THE CANVAS
================================================================================ */

// Canvas is styled like any other HTML element.
const canvasStyle = `
canvas {
  border: 1px solid black;
  background-color: #f0f0f0; /* optional light gray background */
}
`;

/*
Benefits:
• Makes canvas visually distinct
• Can set borders, background, size
*/


/*
================================================================================
3. RENDERING CONTEXT
================================================================================ */

// To draw on a canvas, you need a rendering context.
const canvasElement = document.getElementById('canvas');
const ctx = canvasElement.getContext('2d'); // 2D rendering context

/*
Types of rendering contexts:
• '2d' → 2D graphics
• 'webgl' → 3D graphics (WebGL 1)
• 'webgl2' → 3D graphics (WebGL 2)
*/

/*
Benefits:
• Provides methods to draw shapes, text, images
• Allows control over styles, colors, transformations
*/

// Basic Example: Drawing a rectangle
ctx.fillStyle = 'skyblue';          // Fill color
ctx.fillRect(50, 50, 200, 100);     // Draw filled rectangle
ctx.strokeStyle = 'black';          // Border color
ctx.strokeRect(50, 50, 200, 100);   // Draw rectangle border

/*
Result:
• A light blue rectangle appears at (50,50) with width 200px, height 100px
• It has a black border
*/

// Example: Drawing a circle
ctx.beginPath();
ctx.arc(350, 150, 50, 0, 2 * Math.PI); // x=350, y=150, radius=50
ctx.fillStyle = 'orange';
ctx.fill();    // Fill circle
ctx.stroke();  // Border

/*
Result:
• An orange circle appears at (350,150) with radius 50px
• It has a black border
*/



/*
================================================================================
4. DRAWING TEXT
================================================================================ */
ctx.font = '20px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Hello Canvas!', 180, 280);

/*
Result:
• The text "Hello Canvas!" appears at coordinates (180,280)
*/


/*
================================================================================
5. DRAWING LINES
================================================================================ */
ctx.beginPath();
ctx.moveTo(50, 200);  // Start point
ctx.lineTo(450, 200); // End point
ctx.strokeStyle = 'red';
ctx.lineWidth = 2;
ctx.stroke();

/*
Result:
• A red horizontal line appears from (50,200) to (450,200)
*/


/*
================================================================================
6. SUMMARY
================================================================================

• <canvas> element defines the drawing area
• CSS can style the canvas visually
• getContext('2d') gives a 2D rendering context
• Use fillRect(), strokeRect(), arc(), fillText(), moveTo()/lineTo() to draw shapes, text, and lines
• Canvas API enables dynamic graphics, interactive content, and animations in the browser
• Works best with JavaScript for responsive, programmatically generated visuals

================================================================================
END OF FILE
================================================================================ */
