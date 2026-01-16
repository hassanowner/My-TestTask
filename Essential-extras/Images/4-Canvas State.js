/*
================================================================================
CANVAS STATE – save() AND restore()
================================================================================

The CanvasRenderingContext2D object maintains many settings such as:

• fillStyle (fill color)
• strokeStyle (line color)
• font (for text)
• lineWidth
• transformations (translate, rotate, scale)
• clipping paths

Using these settings repeatedly may require saving and restoring
them at different points in your drawing. The context provides:

1) save()    → Saves the current state on a stack
2) restore() → Restores the most recently saved state from the stack

This is particularly useful for:

• Reusing styles without manually resetting them
• Maintaining transformations for different shapes
================================================================================
OVERVIEW
================================================================================ */

// Example: Nested colored squares demonstrating save() and restore()

'use strict';

function drawCanvasStateExample() {
  const ctx = document.getElementById('canvas').getContext('2d');

  // -------------------------
  // 1) Draw initial square
  // -------------------------
  ctx.fillRect(0, 0, 150, 150); // Default black fill
  // Square at (0,0), width=150, height=150, black by default

  // -------------------------
  // 2) Save current state (state 1)
  // -------------------------
  ctx.save();

  // Change fill color and draw smaller square
  ctx.fillStyle = '#00FF00';        // Green
  ctx.fillRect(15, 15, 120, 120);   // Draw green square

  // -------------------------
  // 3) Save current state (state 2)
  // -------------------------
  ctx.save();

  // Change fill color again and draw smaller square
  ctx.fillStyle = '#FF0000';        // Red
  ctx.fillRect(30, 30, 90, 90);     // Draw red square

  // -------------------------
  // 4) Restore previous state (state 2)
  // -------------------------
  ctx.restore();
  ctx.fillRect(45, 45, 60, 60);     // Draw green square again

  // -------------------------
  // 5) Restore previous state (state 1)
  // -------------------------
  ctx.restore();
  ctx.fillRect(60, 60, 30, 30);     // Draw black square again

  /*
  Result:
  • Large black square at (0,0)
  • Medium green square inside black
  • Small red square inside green
  • Smaller green square drawn again after restoring state
  • Tiny black square drawn again after restoring state
  */
}

/*
================================================================================
KEY NOTES
================================================================================

• Each save() call pushes the current state onto a stack
• restore() pops the last saved state from the stack
• All settings are included: fillStyle, strokeStyle, font, lineWidth, transformations, clipping
• save()/restore() are especially useful when applying transformations
  (translate, rotate, scale) to only some shapes without affecting others
• Can be used multiple times for complex, nested drawings

================================================================================
END OF CANVAS STATE SECTION
================================================================================ */
