/* =============================================================
AJAX – Complete Conceptual & Practical Guide
============================================================

AJAX = Asynchronous JavaScript And XML, is **not a language or library**, but a **concept** that allows web pages to communicate with the server without reloading the entire page.  
Old behavior: full page reload → slow, clunky UX.  
AJAX solves this by updating only parts of a page, giving users a seamless experience.  

Analogy: TV volume change  
- Without AJAX: Turn off TV → turn it on to change volume  
- With AJAX: Use remote → only volume changes  

Asynchronous = works in background; JavaScript continues running while server prepares a response.  
Analogy: Ordering pizza → you do other things while oven cooks; they call you when ready.  

AJAX combines multiple technologies:  
- HTML → structure (e.g., a "Load" button)  
- CSS → style (button looks nice)  
- JavaScript → logic (send request)  
- DOM → update page (display response)  
AJAX = cooperation of all  

**XMLHttpRequest** = tool/messenger between page and server  
Analogy: Page = you, Server = restaurant, XMLHttpRequest = waiter  

AJAX can fetch data or send data **without page refresh**.  
Example: username availability check → instant feedback, no reload  

**readyState – stage of request:**  
0 → Not initialized (request object created)  
1 → Server connection established (open called)  
2 → Request received by server  
3 → Processing request  
4 → Request finished & response ready  

Analogy: Ordering a package online  
- 0: Decided to buy, not submitted  
- 1: Store confirms order  
- 2: Warehouse receives order  
- 3: Package being prepared  
- 4: Ready for pickup  

**status – server response code:**  
200 → Success  
201 → Created  
400 → Bad Request  
403 → Forbidden  
404 → Not Found  
500 → Server Error  

Analogy: Restaurant order  
- 200 → meal served  
- 404 → dish not on menu  

**Combined Concept:**  
readyState = tracks progress, status = result  
- Golden condition: readyState === 4 && status === 200 → response ready & successful  

Practical examples:

// Create & send request
let request = new XMLHttpRequest(); // readyState = 0
request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true); // readyState = 1
request.send(); // readyState = 2

request.onreadystatechange = function() {
    console.log("Stage:", this.readyState, "Status:", this.status);
    if(this.readyState === 4){
        if(this.status === 200){
            let data = JSON.parse(this.responseText);
            console.log("Data received:", data);
        } else if(this.status === 404){
            console.log("Resource not found");
        } else {
            console.log("Error:", this.status);
        }
    }
};

// Advanced Example: GitHub user data
let githubReq = new XMLHttpRequest();
githubReq.open('GET', 'https://api.github.com/users/octocat', true);
githubReq.onreadystatechange = function() {
    if(this.readyState === 4){
        if(this.status === 200){
            let user = JSON.parse(this.responseText);
            console.log("Username:", user.login, "| Followers:", user.followers);
        } else {
            console.log("Error fetching GitHub user:", this.status);
        }
    }
};
githubReq.send();

// Example: JSONPlaceholder posts
let postsReq = new XMLHttpRequest();
postsReq.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
postsReq.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let posts = JSON.parse(this.responseText);
        console.log("First post title:", posts[0].title);
        console.log("Total posts:", posts.length);
    }
};
postsReq.send();

// Example: Cryptocurrency prices
let cryptoReq = new XMLHttpRequest();
cryptoReq.open('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=3', true);
cryptoReq.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let coins = JSON.parse(this.responseText);
        coins.forEach(c => console.log(`${c.name} ($${c.current_price})`));
    }
};
cryptoReq.send();

// Example: Request with timeout & error handling
let userReq = new XMLHttpRequest();
userReq.timeout = 5000; // 5 seconds
userReq.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
userReq.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let user = JSON.parse(this.responseText);
        console.log("User Name:", user.name);
    }
};
userReq.ontimeout = () => console.log("Request timed out!");
userReq.onerror = () => console.log("Network error!");
userReq.send();

// Example: Fetch country data
let countryReq = new XMLHttpRequest();
countryReq.open('GET', 'https://restcountries.com/v3.1/name/egypt', true);
countryReq.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        let egypt = JSON.parse(this.responseText)[0];
        console.log("Egypt Capital:", egypt.capital[0], "| Population:", egypt.population);
    }
};
countryReq.send();

/* Summary:  
AJAX = concept for async page updates  
XMLHttpRequest = messenger  
readyState = 0–4 stages of request  
status = server result (200, 404, etc.)  
Golden Rule: readyState === 4 && status === 200 → safe to use response  
Examples show: APIs, JSON data, error handling, timeouts  
============================================================ */
