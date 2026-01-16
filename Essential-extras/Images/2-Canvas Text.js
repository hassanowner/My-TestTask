/*
================================================================================
CANVAS TEXT – fillText() AND strokeText()
================================================================================

The Canvas API provides two main methods to draw text:  */

1) fillText()   → Draws filled text using the current fillStyle
2) strokeText() → Draws text outline using the current strokeStyle

Both methods accept at least three parameters:
- text → the string to draw
- x    → horizontal coordinate
- y    → vertical coordinate
- maxWidth (optional) → maximum width of the text
  
/* ================================================================================
OVERVIEW
================================================================================ */

// Text appearance can be customized using context properties:
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

/*
Important properties:
1) font → CSS-like string defining size, weight, font family
   Example: '48px serif', 'bold 30px Arial'

2) textAlign → horizontal alignment of text
   Possible values: 'start', 'end', 'left', 'right', 'center'

3) textBaseline → vertical alignment of text
   Possible values: 'top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'

4) direction → text direction
   Possible values: 'ltr', 'rtl', 'inherit'
*/

/*
================================================================================
EXAMPLE 1: SIMPLE FILLED AND STROKED TEXT
================================================================================ */

function drawTextExample() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  // Set font properties
  context.font = '48px serif';

  // Draw filled text
  context.fillStyle = 'blue';
  context.fillText('Hello World', 10, 50); // x=10, y=50

  // Draw outlined text
  context.strokeStyle = 'red';
  context.lineWidth = 2;                  // Optional: stroke thickness
  context.strokeText('Hello World', 10, 100); // x=10, y=100

  /*
  Result:
  • "Hello World" filled in blue at (10,50)
  • "Hello World" outlined in red at (10,100)
  */
}

/*
================================================================================
EXAMPLE 2: TEXT ALIGNMENT AND BASELINE
================================================================================ */

function drawAlignedText() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  context.font = '30px Arial';
  context.fillStyle = 'green';

  // Draw text aligned to the center
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText('Centered Text', canvas.width / 2, canvas.height / 2);

  /*
  Result:
  • Text "Centered Text" appears in the center of the canvas
  • Horizontal alignment is centered
  • Vertical alignment is middle
  */
}

/*
================================================================================
EXAMPLE 3: TEXT DIRECTION
================================================================================ */

function drawTextDirection() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  context.font = '36px Verdana';
  context.fillStyle = 'purple';

  // Left-to-right text
  context.direction = 'ltr';
  context.fillText('Left to Right', 50, 150);

  // Right-to-left text
  context.direction = 'rtl';
  context.fillText('Right to Left', 450, 200);

  /*
  Result:
  • "Left to Right" drawn normally
  • "Right to Left" drawn from right to left at (450,200)
  */
}

/*
================================================================================
SUMMARY
================================================================================

• Use fillText() for filled text and strokeText() for outlines
• Customize appearance with:
   - font → size, family, weight
   - textAlign → horizontal alignment
   - textBaseline → vertical alignment
   - direction → text direction (ltr/rtl)
• Text coordinates (x, y) specify the starting point according to alignment and baseline
• Combining these properties allows precise positioning and styling of text on canvas

================================================================================
END OF CANVAS TEXT SECTION
================================================================================ */
