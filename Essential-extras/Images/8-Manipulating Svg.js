/*
================================================================================
MANIPULATING SVG ELEMENTS WITH JAVASCRIPT
================================================================================

SVG elements are part of the DOM and can be accessed, modified, or animated
using JavaScript, just like HTML elements. This allows you to change their
behavior, position, or style dynamically and respond to user interactions.

================================================================================
ACCESSING SVG ELEMENTS
================================================================================*/

Use standard DOM methods such as getElementById(), querySelector(), or 
getElementsByTagName() to access individual SVG elements.

// Example:

const svgDocument = document.getElementById('svg');  // Access the <svg> element
const circle = svgDocument.getElementById('circle'); // Access the <circle> inside <svg>

/* ================================================================================
ADDING EVENT LISTENERS
================================================================================

You can attach event listeners to SVG elements to respond to mouse clicks,
hover actions, and other user events. This allows for interactive graphics.
Example: */

'use strict';
function init() {
  const svgDocument = document.getElementById('svg');
  const circle = svgDocument.getElementById('circle');

  // Click event
  circle.addEventListener('click', () => {
    console.log('Circle clicked!');
  });

  // Mouseover event – toggle CSS class "active"
  circle.addEventListener('mouseover', () => {
    circle.classList.toggle('active');
  });

  // Mouseout event – toggle CSS class "active"
  circle.addEventListener('mouseout', () => {
    circle.classList.toggle('active');
  });
}

window.addEventListener('DOMContentLoaded', init);

/*
================================================================================
DYNAMICALLY CHANGING SVG ELEMENTS
================================================================================

You can also dynamically change the attributes of SVG elements, such as 
position, size, or color. For example, moving a circle based on slider input.

Example HTML: */
```
<svg id="svg" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#000" />
  <circle id="circle" cx="100" cy="100" r="80" fill="#3080D0"/>
</svg>

<div>X: <input id="sliderX" type="range" min="1" max="500" value="100" /></div>
<div>Y: <input id="sliderY" type="range" min="1" max="500" value="100" /></div>
```

// Example JavaScript:

'use strict';
function init() {
  const sliderX = document.getElementById('sliderX');
  const sliderY = document.getElementById('sliderY');

  // Update circle position when sliders change
  sliderX.addEventListener('change', (e) => moveCircle(e.target.value, 'x'));
  sliderY.addEventListener('change', (e) => moveCircle(e.target.value, 'y'));
}

function moveCircle(value, direction) {
  const svgDocument = document.getElementById('svg');
  const circle = svgDocument.getElementById('circle');
  
  // Update the cx or cy attribute dynamically
  circle.setAttribute('c' + direction, value);
}

window.addEventListener('DOMContentLoaded', init);

/*
================================================================================
KEY NOTES
================================================================================

• SVG elements behave like DOM nodes – you can read and change attributes
• Event listeners allow interactivity (click, hover, drag, etc.)
• Attributes like `cx`, `cy`, `r`, `fill`, and `stroke` can be modified dynamically
• Combining JavaScript with CSS allows powerful interactive graphics
• Inline SVG is required for JavaScript to directly access elements in the DOM

================================================================================
END OF JAVASCRIPT SVG MANIPULATION SECTION
================================================================================ */
