
// ## HTML File ## //
/*
<!DOCTYPE html>
<html>
<head>
  <title>AJAX Examples</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    div { margin: 5px 0; padding: 5px; border: 1px solid #ccc; }
    input { padding: 5px; margin-bottom: 10px; }
    button { padding: 5px 10px; margin-bottom: 10px; }
  </style>
</head>
<body>

<h2>Example 1 – Simple Data Fetch</h2>
<button id="showName">Show Name</button>
<p id="name"></p>

<h2>Example 2 – Loop Through List of Items</h2>
<div id="fruits"></div>

<h2>Example 3 – Search Function (Weather)</h2>
<input type="text" id="searchCity" placeholder="Type city name">
<div id="weather"></div>

<h2>Example 4 – Loop With Cross-Origin Request (GitHub Repos)</h2>
<div id="repos"></div>

<h2>Example 5 – API Authentication (Private GitHub Repos)</h2>
<div id="privateRepos"></div>

<script>
*/
    
/* =========================
   Example 1 – Simple Data Fetch
========================= */
document.getElementById("showName").onclick = function() { 
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");
  xhr.send();

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let data = JSON.parse(this.responseText);
      document.getElementById("name").textContent = data.name;
    }
  };
};



/* =========================
   Example 2 – Loop Through List of Items
========================= */
let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr2.send();

xhr2.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    let users = JSON.parse(this.responseText);
    let container = document.getElementById("fruits");
    for (let i = 0; i < 3; i++) {
      let div = document.createElement("div");
      div.textContent = users[i].name;
      container.appendChild(div);
    }
  }
};


    
/* =========================
   Example 3 – Search Function (Medium)
========================= */
document.getElementById("searchCity").oninput = function() {
  let city = this.value;
  if (!city) return;

  let xhr3 = new XMLHttpRequest();
  xhr3.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
  xhr3.send();

  xhr3.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let data = JSON.parse(this.responseText);
      document.getElementById("weather").textContent =
        `Weather in ${data.name}: ${data.weather[0].description}`;
    }
  };
};


    
/* =========================
   Example 4 – Loop With Cross-Origin Request
========================= */
let xhr4 = new XMLHttpRequest();
xhr4.open("GET", "https://api.github.com/users/elzerowebschool/repos");
xhr4.send();

xhr4.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    let repos = JSON.parse(this.responseText);
    let container = document.getElementById("repos");
    repos.forEach(repo => {
      let div = document.createElement("div");
      div.textContent = repo.full_name;
      container.appendChild(div);
    });
  }
};



/* =========================
   Example 5 – API Authentication
========================= */
let xhr5 = new XMLHttpRequest();
xhr5.open("GET", "https://api.github.com/user/repos");
xhr5.setRequestHeader("Authorization", "token YOUR_PERSONAL_ACCESS_TOKEN");
xhr5.send();

xhr5.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    let repos = JSON.parse(this.responseText);
    let container = document.getElementById("privateRepos");
    repos.forEach(repo => {
      let div = document.createElement("div");
      div.textContent = repo.full_name;
      container.appendChild(div);
    });
  }
};
</script>

</body>
</html>
