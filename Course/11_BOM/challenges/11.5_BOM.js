<!-- =========================================================
   TASK 1 – Welcome + Name Prompt + Countdown
   Idea:
   - Show welcome alert
   - Ask user for name
   - Display greeting
   - Show countdown from 10 → 0
   - When it reaches 0 show a final message
========================================================= -->

<!DOCTYPE html>
<html lang="en">
<body style="font-family: Arial; padding: 20px;">

<script>
// Welcome message
alert("Welcome to our page!");

// Ask for user's name
let name = prompt("What is your name?");
if (!name) name = "Guest";

// Inject HTML + countdown number
document.body.innerHTML = `
  <h2>Hello, ${name}!</h2>
  <p>The message will appear when countdown reaches zero.</p>
  <h1 id="counter">10</h1>
  <p id="msg"></p>
`;

let count = 10;

// Countdown logic
let timer = setInterval(() => {
  count--;
  document.getElementById("counter").innerText = count;

  if (count === 0) {
    clearInterval(timer);
    document.getElementById("msg").innerText = "Time is up, thank you!";
  }
}, 1000);
</script>

</body>
</html>

<!-- RESULT:
   - Page shows: "Hello, {name}"
   - Countdown starts from 10 and decreases every second
   - When it reaches 0 → shows: "Time is up, thank you!"
-->




  
  

  

<!-- =========================================================
   TASK 2 – Window & Browser Controls Playground
   Idea:
   - Practice window object commands
   - Change URL, open window, close window
   - Use scroll, print, stop, back, forward
========================================================= -->

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Browser Playground</title>
<style>
  body { font-family: sans-serif; padding: 20px; }
  button { margin: 5px; padding: 10px 15px; cursor: pointer; }
  #spacer { height: 1500px; background: #f0f0f0; margin-top: 20px; }
</style>
</head>
<body>

<h2>Browser Playground</h2>

<button onclick="goToGoogle()">Change URL</button>
<button onclick="openWin()">Open Window</button>
<button onclick="closeWin()">Close Window</button>
<button onclick="history.back()">Back</button>
<button onclick="history.forward()">Forward</button>
<button onclick="window.print()">Print</button>
<button onclick="window.stop()">Stop Loading</button>
<button onclick="window.scrollTo({top: 0, behavior:'smooth'})">Scroll Top</button>
<button onclick="window.scrollTo({top: 9999, behavior:'smooth'})">Scroll Bottom</button>

<div id="spacer"></div>

<script>
let popup;

// Change website URL
function goToGoogle() {
  location.href = "https://google.com";
}

// Open popup window
function openWin() {
  popup = window.open("", "", "width=300,height=200");
  popup.document.write("<h3>Hello Popup!</h3>");
}

// Close popup
function closeWin() {
  if (popup) popup.close();
}
</script>

</body>
</html>

<!-- RESULT:
   - Buttons control URL, popup windows, scroll, stop, print, navigation
   - Shows large page area to allow scrolling
-->




  


  

<!-- =========================================================
   TASK 3 – Local Storage User Preferences
   Idea:
   - Save username & theme
   - Restore them on page load
   - Allow removing name or clearing all storage
========================================================= -->

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>User Preferences</title>
<style>
  body { font-family: sans-serif; transition: 0.3s; }
</style>
</head>
<body>

<h2>User Preferences</h2>

<label>User Name: </label>
<input id="username" type="text"><br><br>

<label>Theme: </label>
<select id="theme">
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select><br><br>

<button onclick="removeName()">Delete Name Only</button>
<button onclick="resetAll()">Reset All</button>

<script>
// Apply saved settings
document.body.style.background =
  localStorage.getItem("theme") === "dark" ? "#222" : "#fff";

// Restore values
username.value = localStorage.getItem("username");
theme.value = localStorage.getItem("theme");

// Save username
username.oninput = () => {
  localStorage.setItem("username", username.value);
};

// Save theme
theme.onchange = () => {
  localStorage.setItem("theme", theme.value);
  document.body.style.background =
    theme.value === "dark" ? "#222" : "#fff";
};

// Remove username only
function removeName() {
  localStorage.removeItem("username");
  username.value = "";
}

// Clear all localStorage
function resetAll() {
  localStorage.clear();
  location.reload();
}
</script>

</body>
</html>

<!-- RESULT:
   - Stores username & theme permanently
   - Restores them even after refresh
   - Buttons allow deleting name or clearing everything
-->







  


<!-- =========================================================
   TASK 4 – Session Storage Form Auto-Save
   Idea:
   - Save form inputs temporarily (per tab)
   - Restore them when refreshing page
   - Clear storage on submit
========================================================= -->

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Session Form Restore</title>
<style>
  body { font-family: sans-serif; padding: 20px; }
  input, textarea { width: 250px; margin: 5px 0; }
</style>
</head>
<body>

<h2>Contact Form (Auto-Save per Tab)</h2>

<input id="name" placeholder="Name"><br>
<input id="email" placeholder="Email"><br>
<textarea id="msg" rows="4" placeholder="Message"></textarea><br>

<button onclick="submitForm()">Submit</button>

<script>
// Restore previous session data
name.value  = sessionStorage.getItem("name")  || "";
email.value = sessionStorage.getItem("email") || "";
msg.value   = sessionStorage.getItem("msg")   || "";

// Save on input
[name, email, msg].forEach(el => {
  el.oninput = () => {
    sessionStorage.setItem(el.id, el.value);
  };
});

// Submit clears session
function submitForm() {
  alert("Form Submitted!");
  sessionStorage.clear();
  name.value = email.value = msg.value = "";
}
</script>

</body>
</html>

<!-- RESULT:
   - Inputs auto-save per tab
   - Refresh keeps data
   - Submit clears saved data
-->
