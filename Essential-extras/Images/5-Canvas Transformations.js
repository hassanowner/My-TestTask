/*
================================================================================
CANVAS TRANSFORMATIONS – SCALE, ROTATE, TRANSLATE
================================================================================

Transformations allow you to change how shapes are drawn on the canvas.
Three main types of transformations are supported:

1) Scaling      → Resize shapes horizontally and/or vertically
2) Rotation     → Rotate shapes around the origin
3) Translation  → Move shapes to a different position

Transformations affect the **current transformation matrix**, which
can be saved and restored using save() and restore().

================================================================================
OVERVIEW
================================================================================ */

// General pattern:
// 1) Save current state: context.save()
// 2) Apply transformation: scale(), rotate(), translate()
// 3) Draw shapes
// 4) Restore state: context.restore()

/*
================================================================================
1. SCALING
================================================================================ */

// scale(sx, sy)
// sx → horizontal scaling factor
// sy → vertical scaling factor
function drawScaledSquares() {
  const ctx = document.getElementById('canvas').getContext('2d');

  // -------------------------
  // Red square scaled 7x
  // -------------------------
  ctx.save();
  ctx.fillStyle = '#FF0000';
  ctx.scale(7, 7);            // Scale 7 times horizontally and vertically
  ctx.fillRect(0, 0, 40, 40); // Draw original square (scaled)
  ctx.restore();

  // -------------------------
  // Green square scaled 6x
  // -------------------------
  ctx.save();
  ctx.fillStyle = '#00FF00';
  ctx.scale(6, 6);
  ctx.fillRect(0, 0, 40, 40);
  ctx.restore();

  // -------------------------
  // Blue square scaled 5x
  // -------------------------
  ctx.save();
  ctx.fillStyle = '#0000FF';
  ctx.scale(5, 5);
  ctx.fillRect(0, 0, 40, 40);
  ctx.restore();

  /*
  Result:
  • Three squares of different sizes due to scaling factors
  */
}

/*
================================================================================
2. ROTATION
================================================================================ */

// rotate(angleInRadians)
// Rotates the canvas around the origin (0,0)
function drawRotatedSquares() {
  const ctx = document.getElementById('canvas').getContext('2d');

  // -------------------------
  // Red square rotated
  // -------------------------
  ctx.save();
  ctx.fillStyle = '#FF0000';
  ctx.rotate(7);              // Rotation in radians
  ctx.fillRect(200, 0, 140, 140);
  ctx.restore();

  // -------------------------
  // Green square rotated
  // -------------------------
  ctx.save();
  ctx.fillStyle = '#00FF00';
  ctx.rotate(7);
  ctx.fillRect(200, -180, 140, 140);
  ctx.restore();

  // -------------------------
  // Blue square rotated
  // -------------------------
  ctx.save();
  ctx.fillStyle = '#0000FF';
  ctx.rotate(7);
  ctx.fillRect(380, -180, 140, 140);
  ctx.restore();

  /*
  Result:
  • Three squares rotated at the same angle
  • Position depends on translation and origin
  */
}

/*
================================================================================
3. TRANSLATION
================================================================================ */

// translate(dx, dy)
// Moves the origin of the canvas by dx horizontally and dy vertically
function drawTranslatedSquares() {
  const ctx = document.getElementById('canvas').getContext('2d');

  // -------------------------
  // Red square translated
  // -------------------------
  ctx.save();
  ctx.fillStyle = '#FF0000';
  ctx.translate(40, 40); // Move origin by (40,40)
  ctx.fillRect(0, 0, 40, 40);
  ctx.restore();

  // -------------------------
  // Green square translated
  // -------------------------
  ctx.save();
  ctx.fillStyle = '#00FF00';
  ctx.translate(100, 40);
  ctx.fillRect(0, 0, 40, 40);
  ctx.restore();

  // -------------------------
  // Blue square translated
  // -------------------------
  ctx.save();
  ctx.fillStyle = '#0000FF';
  ctx.translate(160, 40);
  ctx.fillRect(0, 0, 40, 40);
  ctx.restore();

  /*
  Result:
  • Three squares drawn at different positions due to translation
  */
}

/*
================================================================================
SUMMARY
================================================================================

• Transformations allow you to manipulate how shapes are drawn
• scale(sx, sy) → changes the size of shapes
• rotate(angleInRadians) → rotates shapes around the origin
• translate(dx, dy) → moves shapes to a different position
• Always use save() and restore() to isolate transformations
• Transformations affect the current transformation matrix, which accumulates if not restored

================================================================================
END OF CANVAS TRANSFORMATIONS SECTION
================================================================================ */
