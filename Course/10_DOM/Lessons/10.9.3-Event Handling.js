/* 
==========================================================
JavaScript Event Handling – Advanced Techniques
==========================================================
This file explains and demonstrates three advanced concepts
in JavaScript event handling:

1. Passing Arguments to Event Listeners
2. Arrow Functions as Event Listeners
3. Removing Event Listeners

All examples use console.log instead of alerts for clarity.
==========================================================
*/


/* =========================================================
1. Passing Arguments to Event Listeners
---------------------------------------------------------
Normally, addEventListener() only accepts a function 
reference. If you want to pass dynamic values to your 
handler, you wrap the function call in an anonymous 
function. This decouples the logic from the DOM element 
and allows reusability.

Features:
- Pass dynamic data to the handler
- Logic functions remain independent
- Flexible for multiple contexts
==========================================================
*/

// Example 1 – Easy: Color validation
function checkColor(color) {
    if(!['red','green','blue'].includes(color)) {
        console.log('Invalid color!');
    } else {
        console.log('Color is valid:', color);
    }
}

function getColorValue() {
    return document.getElementById('colorInput').value;
}

// We pass the dynamic value using an anonymous function
document.getElementById('colorInput').addEventListener('change', function() {
    checkColor(getColorValue());
});

// Example 2 – Moderate: Temperature validation
function checkTemperature(temp) {
    if(temp < 0) console.log('Temperature is below freezing!');
    else if(temp > 100) console.log('Temperature exceeds boiling point!');
    else console.log('Temperature is normal:', temp);
}

document.getElementById('tempInput').addEventListener('blur', function() {
    const value = parseFloat(document.getElementById('tempInput').value);
    checkTemperature(value);
});


/* =========================================================
2. Arrow Functions as Event Listeners
---------------------------------------------------------
Arrow functions offer a concise syntax for defining
event handlers. They also maintain lexical `this`, which 
avoids common context issues in traditional functions.

Features:
- Shorter and cleaner syntax
- Lexical this
- Fully compatible with addEventListener()
==========================================================
*/

// Example 1 – Easy: Name validation
document.getElementById('nameInput').addEventListener('blur', () => {
    const name = document.getElementById('nameInput').value;
    if(name.length < 3) console.log('Name too short!');
    else console.log('Name is valid:', name);
});

// Example 2 – Moderate: Age validation
document.getElementById('ageInput').addEventListener('blur', () => {
    const age = Number(document.getElementById('ageInput').value);
    if(age < 18) console.log('Age must be 18 or older.');
    else console.log('Age is valid:', age);
});


/* =========================================================
3. Removing Event Listeners
---------------------------------------------------------
Sometimes you want to stop listening to an event dynamically,
e.g., toggling validation or enabling/disabling a button.

Key Points:
- You must have a reference to the original function
- Use removeEventListener() to remove it
- Useful for dynamic, interactive behavior
==========================================================
*/

// Example 1 – Easy: Button click toggle
const button = document.getElementById('myButton');

function showClickLog() {
    console.log('Button clicked!');
}

// Add listener initially
button.addEventListener('click', showClickLog);

// Toggle event dynamically via a checkbox
document.getElementById('toggleCheck').addEventListener('change', (e) => {
    if(e.target.checked) {
        button.addEventListener('click', showClickLog);
        console.log('Button click validation enabled.');
    } else {
        button.removeEventListener('click', showClickLog);
        console.log('Button click validation disabled.');
    }
});

// Example 2 – Moderate: Text input validation toggle
const textInput = document.getElementById('textInput');

function validateText() {
    const text = textInput.value;
    if(text === '') console.log('Text cannot be empty!');
    else console.log('Text is valid:', text);
}

// Toggle blur validation via a checkbox
document.getElementById('enableValidation').addEventListener('change', (e) => {
    if(e.target.checked) {
        textInput.addEventListener('blur', validateText);
        console.log('Text input validation enabled.');
    } else {
        textInput.removeEventListener('blur', validateText);
        console.log('Text input validation disabled.');
    }
});


/* =========================================================
Summary:
---------------------------------------------------------
1. Passing Arguments:
   - Wrap function calls in anonymous functions to pass values.

2. Arrow Functions:
   - Provide concise syntax and maintain lexical `this`.

3. Removing Event Listeners:
   - Dynamically enable/disable behavior using removeEventListener
   - Always keep a reference to the original function.
==========================================================
*/

/* End of File */
