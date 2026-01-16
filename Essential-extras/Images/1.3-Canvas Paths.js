/*
================================================================================
CANVAS PATHS – DRAWING LINES, CURVES, AND ARCS
================================================================================

In the Canvas API, a path is a series of connected points.
Paths can be straight lines, curves, or arcs, and are drawn
using methods on the CanvasRenderingContext2D.

================================================================================
OVERVIEW
================================================================================ */

// Key steps for drawing paths:
1) Start a new path → context.beginPath()
2) Move the "pen" to the starting point → context.moveTo(x, y)
3) Draw lines or curves → lineTo(), quadraticCurveTo(), bezierCurveTo(), arc(), arcTo()
4) Optionally close the path → context.closePath()
5) Render the path → context.stroke() or context.fill()

/*
================================================================================
1. DRAWING STRAIGHT LINES
================================================================================ */

function drawStraightLines() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  // Start a new path
  context.beginPath();

  // Move pen to starting point
  context.moveTo(50, 200);

  // Draw straight line to new point
  context.lineTo(400, 50);

  // Render the path
  context.stroke(); // Black by default

  /*
  Result:
  • A single straight black line from (50,200) to (400,50)
  */
}

/*
Drawing multiple connected lines:
*/
function drawMultipleLines() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(50, 200);    // Start point
  context.lineTo(400, 50);    // Line 1
  context.lineTo(400, 200);   // Line 2
  context.stroke();

  /*
  Result:
  • Two connected straight lines forming a V shape
  */
}


/*
================================================================================
2. CLOSING PATHS
================================================================================ */

// Automatically connect last point to starting point
function drawClosedPath() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  context.beginPath();
  context.moveTo(50, 200);
  context.lineTo(400, 50);
  context.lineTo(400, 200);
  context.closePath(); // Automatically draw line to starting point
  context.stroke();

  /*
  Result:
  • Triangle formed by three straight lines
  */
}

/*
================================================================================
3. DRAWING QUADRATIC CURVES
================================================================================ */

// Quadratic curves use one control point to define the curvature
function drawQuadraticCurve() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  const path = new Path2D();
  path.moveTo(25, 100);               // Start point
  path.quadraticCurveTo(25, 25, 100, 25); // (controlX, controlY, endX, endY)
  context.stroke(path);

  /*
  Result:
  • Smooth curve starting at (25,100), bending toward control point (25,25), ending at (100,25)
  */
}

/*
================================================================================
4. DRAWING BEZIER CURVES
================================================================================ */

// Bezier curves use two control points for flexible curves
function drawBezierCurve() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  const path = new Path2D();
  path.moveTo(25, 100);                  // Start point
  path.bezierCurveTo(100, 100, 25, 100, 100, 25); // (cp1x, cp1y, cp2x, cp2y, endX, endY)
  context.stroke(path);

  /*
  Result:
  • Complex smooth curve influenced by two control points
  */
}

/*
================================================================================
5. DRAWING ARCS AND CIRCLES
================================================================================ */

// Arc using arcTo() – connects two lines with a curved arc
function drawArcTo() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  const path = new Path2D();
  path.moveTo(25, 200);         // Start point
  path.arcTo(25, 200, 25, 200, 90); // (x1, y1, x2, y2, radius)
  path.lineTo(200, 25);
  context.stroke();

  /*
  Result:
  • Arc connecting two points along with a straight line to (200,25)
  */
}

// Arc using arc() – draws part of a circle
function drawArc() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  const path = new Path2D();
  path.moveTo(25, 200);                    // Optional start point
  path.arc(100, 50, 25, 25, false);        // (centerX, centerY, radius, startAngle, endAngle, clockwise)
  context.stroke();

  /*
  Result:
  • Circular arc centered at (100,50) with radius 25
  */
}


/*
================================================================================
SUMMARY
================================================================================

• Paths are sequences of points connected by lines or curves
• Straight lines → moveTo() + lineTo()
• Paths can be closed automatically using closePath()
• Curves → quadraticCurveTo() (1 control point) or bezierCurveTo() (2 control points)
• Arcs → arcTo() (connects points with arc) or arc() (draws circular arc)
• Use stroke() to draw the path outline or fill() to fill the area
• Paths allow building complex shapes, drawings, and designs in the Canvas

================================================================================
END OF FILE
================================================================================ */
