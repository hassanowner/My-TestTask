/*
================================================================================
CANVAS RECTANGLES – fillRect(), strokeRect(), clearRect()
================================================================================

This section explains how to draw rectangles in the Canvas API.
Rectangles are basic building blocks for graphics, and the
CanvasRenderingContext2D provides three main methods for this:
1) fillRect()   → Draws a filled rectangle
2) strokeRect() → Draws the outline of a rectangle
3) clearRect()  → Clears a rectangular area
================================================================================
OVERVIEW
================================================================================ */

// All three methods share the same four parameters:
// x, y → coordinates of the top-left corner of the rectangle
// width, height → dimensions of the rectangle

/*
METHODS AND THEIR PURPOSE
----------------------------------------
1) fillRect(x, y, width, height)
   • Draws a rectangle filled with the current fillStyle
   • Example: context.fillStyle = 'red'; context.fillRect(10, 10, 80, 80);

2) strokeRect(x, y, width, height)
   • Draws only the rectangle's border with the current strokeStyle
   • Example: context.strokeStyle = 'blue'; context.strokeRect(100, 10, 80, 80);

3) clearRect(x, y, width, height)
   • Clears the specified rectangle area, making it fully transparent
   • Example: context.clearRect(20, 20, 40, 40);
*/


/*
================================================================================
EXAMPLE: DRAWING MULTIPLE RECTANGLES
================================================================================ */

function draw() {
  const canvas = document.getElementById('canvas');

  // Make sure canvas is supported
  if (canvas.getContext) {
    const context = canvas.getContext('2d');

    // -------------------------
    // 1) Filled rectangles
    // -------------------------
    context.fillStyle = 'rgb(200,0,0)';             // Red fill
    context.fillRect(10, 10, 80, 80);               // 1st rectangle

    context.fillStyle = 'rgba(0, 0, 200, 0.5)';     // Semi-transparent blue
    context.fillRect(100, 10, 80, 80);              // 2nd rectangle

    // -------------------------
    // 2) Stroked rectangles
    // -------------------------
    context.strokeStyle = 'rgb(200,0,0)';           // Red border
    context.strokeRect(190, 10, 80, 80);            // 3rd rectangle

    context.strokeStyle = 'rgba(0, 0, 200, 0.5)';   // Semi-transparent blue border
    context.strokeRect(280, 10, 80, 80);            // 4th rectangle

    // -------------------------
    // 3) Combining fillRect and clearRect to create a simple "face"
    // -------------------------
    context.fillStyle = 'rgb(200,0,0)';             // Red background
    context.fillRect(370, 10, 80, 80);              // Head

    // Eyes
    context.clearRect(380, 20, 60, 20);            // Clear eye area
    context.fillRect(390, 25, 10, 10);             // Left eye
    context.fillRect(420, 25, 10, 10);             // Right eye

    // Mouth
    context.clearRect(385, 60, 50, 10);            // Clear mouth area
  }
}

/*
================================================================================
RESULT OF THIS EXAMPLE
================================================================================

1) A solid red rectangle at (10,10)
2) A semi-transparent blue rectangle at (100,10)
3) A red-outlined rectangle at (190,10)
4) A semi-transparent blue-outlined rectangle at (280,10)
5) A simple "face" at (370,10):
   - Red square head
   - Cleared eye area with small black squares as eyes
   - Cleared mouth area

This demonstrates how fillRect(), strokeRect(), and clearRect()
can be combined to create complex drawings from simple rectangles.
================================================================================
*/
