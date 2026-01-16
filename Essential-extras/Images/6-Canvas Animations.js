/*
================================================================================
CANVAS ANIMATIONS – USING requestAnimationFrame()
================================================================================

The Canvas API allows not only static drawings, but also animations.
Animations are created by redrawing the canvas repeatedly at short
intervals, updating the positions, rotations, or other properties of
shapes on each frame.

================================================================================
OVERVIEW
================================================================================

// General steps to create an animation:

1) Clear the drawing area (usually with clearRect())
2) Optionally save the current canvas state (save())
3) Draw shapes with updated positions, colors, or transformations
4) Optionally restore the saved state (restore())
5) Repeat steps 1–4 for each frame

// For consistent and efficient frame updates, use:
window.requestAnimationFrame(function)

// requestAnimationFrame is preferred over setInterval() because:
• It synchronizes with screen refresh rate
• It pauses when the tab is inactive (better performance)
• It provides a timestamp for smooth animations

================================================================================
EXAMPLE: ROTATING RECTANGLES
================================================================================ */

'use strict';

function drawAnimation() {
  const canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    // Start the animation
    window.requestAnimationFrame(redraw);
  }
}

function redraw() {
  const ctx = document.getElementById('canvas').getContext('2d');

  // -------------------------
  // 1) Clear drawing area
  // -------------------------
  ctx.clearRect(0, 0, 500, 300);

  // -------------------------
  // 2) Compute rotation angle
  // -------------------------
  const time = new Date();
  const angle =
    ((2 * Math.PI) / 6) * time.getSeconds() + // seconds part
    ((2 * Math.PI) / 6000) * time.getMilliseconds(); // milliseconds part

  // -------------------------
  // 3) Draw red rectangle
  // -------------------------
  ctx.fillStyle = '#FF0000';
  ctx.save();                  // Save current state
  ctx.translate(150, 150);     // Move origin to rotation center
  ctx.rotate(angle);            // Rotate
  ctx.translate(0, 25);         // Offset rectangle
  ctx.fillRect(5, 5, 20, 20);  // Draw rectangle
  ctx.restore();                // Restore state

  // -------------------------
  // 4) Draw green rectangle
  // -------------------------
  ctx.fillStyle = '#00FF00';
  ctx.save();
  ctx.translate(150, 150);
  ctx.rotate(angle);
  ctx.translate(0, 50);
  ctx.fillRect(5, 5, 20, 20);
  ctx.restore();

  // -------------------------
  // 5) Draw blue rectangle
  // -------------------------
  ctx.fillStyle = '#0000FF';
  ctx.save();
  ctx.translate(150, 150);
  ctx.rotate(angle);
  ctx.translate(0, 75);
  ctx.fillRect(5, 5, 20, 20);
  ctx.restore();

  // -------------------------
  // 6) Request next frame
  // -------------------------
  window.requestAnimationFrame(redraw);

  /*
  Result:
  • Three rectangles rotate continuously around the point (150,150)
  • Rotation is smooth and synchronized with screen refresh
  */
}

// Initialize animation when DOM content is loaded
window.addEventListener('DOMContentLoaded', drawAnimation);

/*
================================================================================
KEY NOTES
================================================================================

• Always clear the canvas at the start of each frame
• Save and restore the canvas state when applying transformations
• Use translate() to set the rotation or scaling center
• Use requestAnimationFrame() for smooth and efficient animation loops
• Animation loop continues until explicitly stopped

================================================================================
END OF CANVAS ANIMATIONS SECTION
================================================================================ */
