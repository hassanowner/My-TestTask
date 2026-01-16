/*
================================================================================
CANVAS GRADIENTS – LINEAR AND RADIAL COLOR GRADIENTS
================================================================================

Gradients allow you to fill shapes with smooth transitions
between two or more colors. The Canvas API supports:

1) Linear Gradients → colors transition along a straight line
2) Radial Gradients → colors transition outward from a circle

================================================================================
OVERVIEW
================================================================================ */

// Gradients are created using the following methods:
// 1) context.createLinearGradient(x0, y0, x1, y1)
// 2) context.createRadialGradient(x0, y0, r0, x1, y1, r1)

// After creating a gradient, use gradient.addColorStop(position, color)
// • position → value between 0.0 (start) and 1.0 (end)
// • color    → CSS color value (e.g., '#FF0000', 'rgba(0,0,255,0)')

/*
================================================================================
1. LINEAR GRADIENTS
================================================================================ */

function drawLinearGradient() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  // Create a linear gradient from (0,0) to (0,150)
  const gradient = context.createLinearGradient(0, 0, 0, 150);

  // Add color stops
  gradient.addColorStop(0, '#FF0000');    // Red at start
  gradient.addColorStop(0.5, '#00FF00');  // Green at middle
  gradient.addColorStop(1, '#0000FF');    // Blue at end

  // Assign gradient as fill style
  context.fillStyle = gradient;

  // Draw rectangle filled with gradient
  context.fillRect(20, 20, 460, 240);

  /*
  Result:
  • Rectangle at (20,20) with width 460 and height 240
  • Color transitions vertically: red → green → blue
  */
}

/*
================================================================================
2. RADIAL GRADIENTS
================================================================================ */

function drawRadialGradient() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  // Create radial gradient
  // circle 1 (centerX, centerY, radius) → starting circle
  // circle 2 (centerX, centerY, radius) → ending circle
  const gradient = context.createRadialGradient(50, 100, 20, 100, 100, 80);

  // Add color stops
  gradient.addColorStop(0, '#FF0000');           // Red at center
  gradient.addColorStop(0.5, '#00FF00');         // Green halfway
  gradient.addColorStop(1, 'rgba(0,0,255,0)');   // Transparent blue at edge

  // Assign gradient as fill style
  context.fillStyle = gradient;

  // Draw rectangle filled with radial gradient
  context.fillRect(10, 10, 200, 200);

  /*
  Result:
  • Rectangle at (10,10) with width 200 and height 200
  • Gradient radiates outward from small red circle to green, ending in transparent blue
  */
}

/*
================================================================================
SUMMARY
================================================================================

• Gradients add depth and visual interest to canvas drawings
• Linear gradients: transition along a straight line (x0,y0 → x1,y1)
• Radial gradients: transition outward from a center circle to an outer circle
• Use createLinearGradient() or createRadialGradient() to create gradients
• Add multiple color stops via addColorStop(position, color)
• Assign gradient to fillStyle (or strokeStyle) before drawing shapes
• Can be combined with rectangles, paths, and text for rich graphics

================================================================================
END OF CANVAS GRADIENTS SECTION
================================================================================ */
