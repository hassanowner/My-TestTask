/* =========================
   AJAX Challenge 1 – Simple Data Fetch
========================= */
/*
Question:
You have an API endpoint that returns a user object:
'https://jsonplaceholder.typicode.com/users/3'.
Fetch the data using XMLHttpRequest and display the user's name in the console.
*/

let challenge1 = new XMLHttpRequest();
challenge1.open("GET", "https://jsonplaceholder.typicode.com/users/3", true);
challenge1.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let user = JSON.parse(this.responseText);
        console.log(user.name); // Expected result: Clementine Bauch
    }
};
challenge1.send();



/* =========================
   AJAX Challenge 2 – Loop Through Data
========================= */
/*
Question:
Fetch a list of posts from 'https://jsonplaceholder.typicode.com/posts'.
Loop through the first 5 posts and log their titles to the console.
*/

let challenge2 = new XMLHttpRequest();
challenge2.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
challenge2.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200){
        let posts = JSON.parse(this.responseText);
        for(let i = 0; i < 5; i++){
            console.log(posts[i].title); 
            // Expected result: logs the first 5 post titles from JSONPlaceholder
        }
    }
};
challenge2.send();



/* =========================
   AJAX Challenge 3 – Search Function
========================= */
/*
Question:
You have a weather API (use a fake key 'FAKE_KEY') and want to fetch weather data for a city typed by the user.
Use XMLHttpRequest to fetch data for 'London' and log the weather description.
*/

let challenge3 = new XMLHttpRequest();
challenge3.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London&appid=FAKE_KEY", true);
challenge3.onreadystatechange = function() {
    if(this.readyState === 4){
        if(this.status === 200){
            let weather = JSON.parse(this.responseText);
            console.log(weather.weather[0].description); 
            // Expected result: logs the weather description for London (if API key was valid)
        } else {
            console.log("Error: Status", this.status); 
            // Expected result: Error: Status 401 (unauthorized with fake key)
        }
    }
};
challenge3.send();



/* =========================
   AJAX Challenge 4 – Cross-Origin Request (CORS)
========================= */
/*
Question:
Fetch repositories of 'octocat' from GitHub API. Log each repo name.
Make sure to handle the case if CORS prevents access.
*/

let challenge4 = new XMLHttpRequest();
challenge4.open("GET", "https://api.github.com/users/octocat/repos", true);
challenge4.onreadystatechange = function() {
    if(this.readyState === 4){
        if(this.status === 200){
            let repos = JSON.parse(this.responseText);
            repos.forEach(r => console.log(r.name)); 
            // Expected result: list of 'octocat' repo names
        } else {
            console.log("CORS or network error:", this.status); 
        }
    }
};
challenge4.send();



/* =========================
   AJAX Challenge 5 – API Authentication
========================= */
/*
Question:
Access a private GitHub repo API using a personal token (fake token 'FAKE_TOKEN').
Fetch user repos and log their names. Handle errors if token is invalid.
*/

let challenge5 = new XMLHttpRequest();
challenge5.open("GET", "https://api.github.com/user/repos", true);
challenge5.setRequestHeader("Authorization", "token FAKE_TOKEN");
challenge5.onreadystatechange = function() {
    if(this.readyState === 4){
        if(this.status === 200){
            let privateRepos = JSON.parse(this.responseText);
            privateRepos.forEach(r => console.log(r.name)); 
            // Expected result: logs private repo names (if token was valid)
        } else {
            console.log("Authorization failed:", this.status); 
            // Expected result: Authorization failed: 401 (unauthorized with fake token)
        }
    }
};
challenge5.send();
