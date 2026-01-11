/*
==========================================================
JavaScript Form Validation & Event Handling Guide
==========================================================

This file covers five main approaches:

1. HTML Event Handlers (Inline)
2. Native HTML5 Validation
3. Client-Side vs Server-Side Validation
4. blur Event Validation
5. click Event Validation (Button-Based)

All examples use console.log for feedback instead of alerts.
==========================================================
*/


/* =========================================================
1. HTML Event Handlers (Inline)
----------------------------------------------------------
- What it is: JavaScript directly in HTML attributes (onblur, onclick)
- Purpose: Quick, inline validation or simple interaction
- Pros: Easy to implement
- Cons: Hard to maintain, mixes HTML and JS
==========================================================
*/

// Example 1: Name validation
function validateName(event) {
  const name = event.target.value; // event.target references input
  const errorDiv = document.getElementById('nameError');

  if (name.length < 2) {
    errorDiv.textContent = "Name too short";
    console.log("Name too short");
  } else {
    errorDiv.textContent = "";
    console.log("Name valid:", name);
  }
}

// Example 2: Button click counter
let count = 0;
function incrementCounter() {
  count++;
  document.getElementById('counter').textContent = count;
  console.log("Button clicked, count:", count);
}


/* =========================================================
2. Native HTML5 Validation
----------------------------------------------------------
- What it is: Built-in browser validation via HTML attributes
- Purpose: Quick validation without JS
- Pros: Fast, no JS needed
- Cons: Limited rules, inconsistent behavior across browsers
==========================================================
*/

// Example 1: Required + pattern validation
// HTML reference:
// <input type="text" required pattern="[A-Za-z]{3,}" title="Minimum 3 letters">

// Example 2: Number range validation
// HTML reference:
// <input type="number" min="18" max="120" required>


/* =========================================================
3. Client-Side vs Server-Side Validation
----------------------------------------------------------
- Client-side: Validates in browser (HTML5/JS)
- Server-side: Validates on server (PHP/Node/Python)
- Rule: Always validate on server, client-side is for UX
==========================================================
*/

// Client-side example
function validateEmail(email) {
  return email.includes('@') && email.includes('.');
}

// Server-side concept (pseudo-code)
// app.post('/register', (req, res) => {
//   if(!validEmail(req.body.email)) {
//     return res.status(400).send('Invalid email');
//   }
// });


/* =========================================================
4. blur Event Validation
----------------------------------------------------------
- What it is: Triggered when user leaves input
- Purpose: Immediate feedback
- Pros: Real-time guidance
- Cons: Can annoy users if too sensitive
==========================================================
*/

// Example 1: Email validation on blur
function validateEmailField() {
  const email = document.getElementById('email').value;
  const error = document.getElementById('emailError');

  if (!email.includes('@')) {
    error.textContent = "Invalid email address";
    console.log("Invalid email:", email);
  } else {
    error.textContent = "";
    console.log("Email valid:", email);
  }
}

// Example 2: Password strength
function checkPassword() {
  const password = document.getElementById('password').value;
  const hint = document.getElementById('passwordHint');

  if (password.length < 6) {
    hint.textContent = "Too short (min 6 characters)";
    console.log("Password too short");
  } else {
    hint.textContent = "";
    console.log("Password length OK");
  }
}


/* =========================================================
5. click Event Validation (Button-Based)
----------------------------------------------------------
- What it is: Triggered when user clicks a button
- Purpose: User-controlled final validation
==========================================================
*/

// Example 1: Form validation
function validateForm() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const errors = document.getElementById('formErrors');
  let errorMessages = [];

  if (!username) errorMessages.push("Username required");
  if (!email.includes('@')) errorMessages.push("Valid email required");

  if (errorMessages.length > 0) {
    errors.textContent = errorMessages.join(', ');
    console.log("Form errors:", errorMessages.join(', '));
  } else {
    errors.textContent = "";
    console.log("Form valid, ready to submit");
    // Submit form or process data
  }
}

// Example 2: Multiple field validation
function checkEligibility() {
  const age = parseInt(document.getElementById('age').value);
  const country = document.getElementById('country').value;
  const result = document.getElementById('result');

  if (age >= 18 && country.toLowerCase() === "usa") {
    result.textContent = "Eligible!";
    console.log("Eligible");
  } else {
    result.textContent = "Not eligible";
    console.log("Not eligible");
  }
}


/* =========================================================
Best Practice Combination
----------------------------------------------------------
- Use native HTML5 validation for basic rules
- Use blur events for real-time feedback
- Use click events for final validation
- Always validate again on server
==========================================================
*/

function checkEmail() {
  const email = document.getElementById('userEmail').value;
  if (!email.includes('@')) {
    console.log("Check email format");
    showError("Check email format");
  } else {
    console.log("Email looks OK");
  }
}

function submitForm() {
  const email = document.getElementById('userEmail').value;
  const feedback = document.getElementById('feedback');

  if (!validateEmail(email)) {
    feedback.textContent = "Please enter valid email";
    console.log("Invalid email on submit");
    return false;
  }

  feedback.textContent = "Processing...";
  console.log("All validations passed, sending to server...");
}


/* =========================================================
Key Takeaways:
1. Start with HTML5 validation for basic rules
2. Use blur events for real-time guidance
3. Use click events for final validation
4. Always validate on server; client-side is for UX only
5. Choose the approach based on user experience
==========================================================
*/
