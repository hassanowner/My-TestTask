
/* D22_DOMP1 ----> Task 1 & Task 2 
   D22_DOMP2 ----> Task 3 & Task 4
   D22_DOMP3 ----> Task 5 & Task 6     */

/*
  Test Task 1:
  Topics covered:
  - DOM Selectors (getElementById, querySelector, querySelectorAll)
  - Get/Set Content & Attributes (innerHTML, textContent, getAttribute, setAttribute)
  - Check Attributes (hasAttribute, removeAttribute, hasAttributes)
  - Create Elements (createElement, appendChild)
  - Deal With Children (children, firstElementChild, lastElementChild)
*/

<!-- HTML Reference -->
<div id="dashboard">
  <h1 class="title">Product Dashboard</h1>
  <ul class="products">
    <li data-id="1">Laptop</li>
    <li data-id="2">Smartphone</li>
    <li data-id="3">Tablet</li>
  </ul>
  <button id="addProductBtn">Add New Product</button>
</div>


// Select main elements
let dashboard = document.getElementById("dashboard");
let productsList = dashboard.querySelector(".products");
let addBtn = document.getElementById("addProductBtn");
let productItems = productsList.getElementsByTagName("li");

// Log some info
console.log(dashboard);
console.log(productsList.children[1]); // Smartphone

// Check attributes
productItems[0].hasAttribute("data-id") && console.log("Laptop has data-id");

// Update content dynamically
productItems[2].textContent = "Updated Tablet";

// Add new product dynamically
addBtn.onclick = function() {
  let newProduct = document.createElement("li");
  newProduct.textContent = "Smartwatch";
  newProduct.setAttribute("data-id", "4");
  productsList.appendChild(newProduct);
  console.log("New product added:", newProduct.textContent);
}

// Access children
console.log(productsList.firstElementChild.textContent);
console.log(productsList.lastElementChild.textContent);







/*
  Test Task 2:
  Topics covered:
  - DOM Events (onfocus, onblur, onsubmit)
  - Form Validation & Prevent Default
  - Event Simulation (triggering events programmatically)
  - ClassList manipulation (add, remove, toggle)
*/

<!-- HTML Reference -->
<form id="userForm">
  <input type="text" name="username" placeholder="Username" />
  <input type="number" name="age" placeholder="Age" />
  <button type="submit">Submit</button>
</form>

<div id="status" class="hidden">Form not submitted yet.</div>


// Select elements
let form = document.getElementById("userForm");
let usernameInput = form.querySelector("[name='username']");
let ageInput = form.querySelector("[name='age']");
let statusDiv = document.getElementById("status");

// Add focus & blur events
usernameInput.onfocus = function() {
  usernameInput.style.backgroundColor = "#e0f7fa";
};
usernameInput.onblur = function() {
  usernameInput.style.backgroundColor = "";
};

// Form submission validation
form.onsubmit = function(e) {
  let valid = true;

  if(usernameInput.value === "" || usernameInput.value.length > 10) valid = false;
  if(ageInput.value === "") valid = false;

  if(!valid) {
    e.preventDefault();
    statusDiv.textContent = "Please fill out the form correctly.";
    statusDiv.classList.add("error");
    statusDiv.classList.remove("hidden");
  } else {
    statusDiv.textContent = "Form submitted successfully!";
    statusDiv.classList.remove("error");
    statusDiv.classList.remove("hidden");
  }
};

// Event simulation: blur triggers form check
usernameInput.onblur = function() {
  form.dispatchEvent(new Event("submit")); // Simulate submit
};

// Toggle class example
statusDiv.onclick = function() {
  statusDiv.classList.toggle("hidden");
};








/*
  Test Task 3:
  Topics Covered:
  - DOM Events (onclick, onmouseleave)
  - Form Validation & Prevent Default
  - Event Simulation
  - ClassList (toggle)
*/
  <!-- HTML Reference -->
<button id="btn">Click or Hover Me</button>

<form id="simpleForm">
  <input type="text" name="username" placeholder="Username" />
  <button type="submit">Submit</button>
</form>

<div id="status" class="hidden">Status Message</div>


// Elements
let btn = document.getElementById("btn");
let form = document.getElementById("simpleForm");
let input = form.username;
let status = document.getElementById("status");

// Event: Mouse leaves button
btn.onmouseleave = () => console.log("Mouse left button");

// Form validation
form.onsubmit = (e) => {
  if (input.value === "") {
    e.preventDefault();
    status.textContent = "Please enter a username!";
    status.classList.remove("hidden");
    status.classList.add("error");
  }
};

// Event simulation: blur triggers click on button
input.onblur = () => btn.click();

// ClassList toggle on status click
status.onclick = () => status.classList.toggle("hidden");






/*
  Test Task 4:
  Topics Covered:
  - DOM Events (onclick, onblur)
  - Event Simulation
  - ClassList (add, toggle)
*/

<!-- HTML Reference -->
<input type="text" id="itemInput" placeholder="Enter item" />
<button id="addBtn">Add</button>
<ul id="itemList"></ul>


// Elements
let input = document.getElementById("itemInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("itemList");

// Add item to list
addBtn.onclick = () => {
  if (input.value === "") return;
  let li = document.createElement("li");
  li.textContent = input.value;
  li.classList.add("item");
  list.appendChild(li);
  input.value = "";
};

// Simulate click when input loses focus
input.onblur = () => addBtn.click();

// Toggle highlight class on list click
list.onclick = () => list.classList.toggle("highlight");







/*
   Task 5: Dynamic Card Creation
   Topics Covered:
     - CSS Manipulation
     - Deal With Elements
     - DOM Traversing
     - Cloning
     - Event Listener + Clones
*/

<!-- HTML Reference -->
<div id="card-container"></div>

<script>
/*
  1) CSS Manipulation
  - Dynamically style an element
*/
let container = document.getElementById("card-container");
container.style.border = "2px solid black";
container.style.padding = "10px";
container.style.width = "300px";

/*
  2) Deal With Elements
  - Add new card before and after container
*/
let beforeCard = document.createElement("p");
beforeCard.textContent = "Card will appear below:";

let afterCard = document.createElement("p");
afterCard.textContent = "Card created successfully!";

container.before(beforeCard);
container.after(afterCard);

/*
  3) Create & Clone Card
  - Create a new card dynamically
  - Clone it and append inside container
*/
let card = document.createElement("div");
card.textContent = "Original Card";
card.style.backgroundColor = "lightyellow";
card.style.padding = "5px";
card.style.margin = "5px";

container.appendChild(card);

// Clone the card
let clonedCard = card.cloneNode(true);
clonedCard.style.backgroundColor = "lightgreen";
container.appendChild(clonedCard);

/*
  4) Event Listener
  - Click on any card to highlight it
*/
container.addEventListener("click", function(e){
  if(e.target.tagName === "DIV"){
    e.target.style.border = "2px solid red";
    console.log("Card clicked:", e.target.textContent);
  }
});

/*
  5) DOM Traversing
  - Access parent and sibling
*/
console.log("Parent of first card:", card.parentElement);
console.log("Next sibling of first card:", card.nextElementSibling);
</script>







/*
   Task 6: Interactive List
   Topics Covered:
     - CSS Manipulation
     - Deal With Elements
     - DOM Traversing
     - Cloning
     - Event Listener + ClassList
*/

<!-- HTML Reference -->
<ul id="todo-list">
  <li>Task 1</li>
  <li>Task 2</li>
</ul>

<button id="add-task">Add New Task</button>

<script>
/*
  1) CSS Manipulation
  - Style list and button
*/
let list = document.getElementById("todo-list");
list.style.listStyleType = "circle";
list.style.padding = "10px";

let btn = document.getElementById("add-task");
btn.style.marginTop = "10px";

/*
  2) Deal With Elements
  - Append and prepend new tasks dynamically
*/
btn.onclick = function(){
  let newTask = document.createElement("li");
  newTask.textContent = "New Task " + (list.children.length + 1);
  newTask.className = "task-item";

  // Alternate adding at start or end
  if(list.children.length % 2 === 0){
    list.prepend(newTask);
  } else {
    list.append(newTask);
  }
};

/*
  3) DOM Traversing
  - Show next/previous sibling of first task
*/
let firstTask = list.children[0];
console.log("Next sibling of first task:", firstTask.nextElementSibling);
console.log("Parent of first task:", firstTask.parentElement);

/*
  4) Cloning
  - Clone first task and append
*/
let clonedTask = firstTask.cloneNode(true);
list.appendChild(clonedTask);

/*
  5) Event Listener + ClassList
  - Toggle 'completed' class on click
*/
list.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("completed");
    e.target.style.textDecoration = e.target.classList.contains("completed") ? "line-through" : "none";
  }
});
</script>

