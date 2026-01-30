/*
============================================================
AJAX – Complete Conceptual & Practical Guide: Loops, Search, CORS, Authentication
============================================================

AJAX (Asynchronous JavaScript And XML) = Concept for fetching data
without reloading the page. It allows dynamic updates, looping through data,
search, cross-origin requests, and authenticated API access.

------------------------------------------------------------
1) Looping Through Data
------------------------------------------------------------
Concept:
- AJAX can return arrays/lists of data.
- You can loop through each item and display it dynamically.
Analogy:
- Bookstore sends 10 new books → you place each book on a shelf one by one.
Flow:
1. Send request
2. Receive collection
3. Loop through items
4. Display each item

------------------------------------------------------------
2) Search Function
------------------------------------------------------------
Concept:
- Fetch specific data based on user input.
- Provides instant results dynamically.
Analogy:
- Library: Tell librarian what you need → they return only matching books.
- AJAX = librarian delivering instant search results.

------------------------------------------------------------
3) Cross-Origin Requests (CORS)
------------------------------------------------------------
Concept:
- Browsers restrict requests to different domains for security.
- CORS = permission slip allowing cross-domain requests.
Analogy:
- Student borrowing book from another school → needs permission slip.
Key: API servers must allow cross-origin access explicitly.

------------------------------------------------------------
4) API Authentication
------------------------------------------------------------
Concept:
- Ensures only authorized users can access protected data.
- APIs often require token, key, or login.
Analogy:
- Bank vault = API, key = token → only authorized access.
- Public APIs may allow limited access without authentication.

------------------------------------------------------------
5) Conceptual Flow: Loop + Search + CORS + Auth
------------------------------------------------------------
1. Webpage sends AJAX request
2. Server returns data (array/list)
3. Browser loops through each item
4. Displays items dynamically
5. Optional search/filter applied
6. CORS ensures cross-domain requests allowed
7. Auth ensures secure access

Analogy: Librarian checks rules (CORS) → shows library card (Auth) → returns matching books → you display them instantly without leaving the room.

------------------------------------------------------------
6) Practical Examples
------------------------------------------------------------

// 6.1 Simple Fetch
document.getElementById("showName").onclick = function() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");
  xhr.send();
  xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200){
      document.getElementById("name").textContent = JSON.parse(this.responseText).name;
    }
  };
};

// 6.2 Loop Through List
let xhr2 = new XMLHttpRequest();
xhr2.open("GET","https://jsonplaceholder.typicode.com/users");
xhr2.send();
xhr2.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
    let users = JSON.parse(this.responseText);
    let container = document.getElementById("fruits");
    for(let i=0;i<3;i++){
      let div = document.createElement("div");
      div.textContent = users[i].name;
      container.appendChild(div);
    }
  }
};

// 6.3 Search (Weather Example)
document.getElementById("searchCity").oninput = function(){
  let city = this.value; if(!city) return;
  let xhr3 = new XMLHttpRequest();
  xhr3.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
  xhr3.send();
  xhr3.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
      let data = JSON.parse(this.responseText);
      document.getElementById("weather").textContent = `Weather in ${data.name}: ${data.weather[0].description}`;
    }
  };
};

// 6.4 Loop + CORS (GitHub Repos)
let xhr4 = new XMLHttpRequest();
xhr4.open("GET","https://api.github.com/users/elzerowebschool/repos");
xhr4.send();
xhr4.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
    let repos = JSON.parse(this.responseText);
    let container = document.getElementById("repos");
    repos.forEach(repo=>{
      let div=document.createElement("div");
      div.textContent=repo.full_name;
      container.appendChild(div);
    });
  }
};

// 6.5 API Authentication (Private GitHub Repos)
let xhr5 = new XMLHttpRequest();
xhr5.open("GET","https://api.github.com/user/repos");
xhr5.setRequestHeader("Authorization","token YOUR_PERSONAL_ACCESS_TOKEN");
xhr5.send();
xhr5.onreadystatechange = function(){
  if(this.readyState===4 && this.status===200){
    let repos = JSON.parse(this.responseText);
    let container=document.getElementById("privateRepos");
    repos.forEach(repo=>{
      let div=document.createElement("div");
      div.textContent=repo.full_name;
      container.appendChild(div);
    });
  }
};

------------------------------------------------------------
7) Key Takeaways
------------------------------------------------------------
- AJAX = smart assistant for your page: fetches & loops data, searches dynamically, respects CORS, handles Auth, updates without reload.
- readyState = 0–4 stages of request
- status = HTTP server result (200,404, etc.)
- CORS = cross-domain access permission
- API Auth = access control & security
- Looping = display multiple data items dynamically
- Search = fetch filtered data instantly

============================================================
*/
