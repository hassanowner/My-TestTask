
// ** Advanced Example Of Ajax Code ** //

// ============================
// Example 1: Fetch GitHub User Data
// ============================

let githubReq = new XMLHttpRequest();

// Step 1: Create a new XMLHttpRequest object
// - This object allows you to send HTTP requests to a server
// - Initial readyState is 0 (UNSENT)

githubReq.open('GET', 'https://api.github.com/users/octocat', true);

// Step 2: Open a GET request to the GitHub API for user 'octocat'
// - readyState becomes 1 (OPENED)
// - true means the request is asynchronous

githubReq.onreadystatechange = function() {
    // This function runs every time the readyState changes
    if(this.readyState === 4) {
        // Step 3: readyState 4 means request is finished and response is ready
        if(this.status === 200){
            // Step 4: status 200 means server responded successfully
            let user = JSON.parse(this.responseText);
            // Step 5: Parse JSON response into a JavaScript object
            console.log("Username:", user.login, "| Followers:", user.followers);
            // Step 6: Access and display specific properties of the user
        } else {
            // Step 7: Handle errors (e.g., user not found or server error)
            console.log("Error:", this.status);
        }
    }
};

githubReq.send();
// Step 8: Send the request to the server
// - readyState becomes 2 (HEADERS_RECEIVED), then 3 (LOADING), finally 4 (DONE)
// - Server processes the request and returns JSON data

// ---------------------------
// Notes:
// 1. readyState tracks the stage: 0 → 1 → 2 → 3 → 4
// 2. status shows the HTTP result: 200 = OK, 404 = Not Found, etc.
// 3. JSON.parse converts server response text to usable JS object
// 4. All operations are asynchronous, so code continues running while waiting for server
// ---------------------------




// ============================
// Example 2: Fetch Posts from JSONPlaceholder
// ============================

let postsReq = new XMLHttpRequest();

// Open GET request to fetch posts from JSONPlaceholder
postsReq.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

postsReq.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200){
        let posts = JSON.parse(this.responseText);
        console.log("First post title:", posts[0].title);
        console.log("Total posts:", posts.length);
    }
};

postsReq.send();

// ---------------------------
// Explanation:
// 1. postsReq is an XMLHttpRequest object to fetch data
// 2. readyState changes from 0 → 4 during the request
// 3. status 200 confirms data is successfully received
// 4. responseText contains JSON array of posts
// 5. JSON.parse converts string to JS array
// 6. We can access any post like posts[0].title or posts[2].body
// 7. Demonstrates handling lists of data from API
// ---------------------------




// ============================
// Example 3: Fetch Cryptocurrency Prices
// ============================

let cryptoReq = new XMLHttpRequest();
cryptoReq.open('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=3', true);

cryptoReq.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200){
        let coins = JSON.parse(this.responseText);
        coins.forEach(c => console.log(`${c.name} ($${c.current_price})`));
    }
};

cryptoReq.send();

// ---------------------------
// Explanation:
// 1. cryptoReq fetches top 3 cryptocurrencies from CoinGecko API
// 2. readyState 4 indicates response is ready
// 3. status 200 indicates successful HTTP request
// 4. responseText is a JSON array of coin objects
// 5. JSON.parse converts string to array
// 6. forEach loops through array and prints coin name and current price
// 7. Demonstrates handling real-time financial data
// ---------------------------




// ============================
// Example 4: Fetch User with Timeout
// ============================

let userReq = new XMLHttpRequest();
userReq.timeout = 5000; // Set timeout to 5 seconds

userReq.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);

userReq.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200){
        let user = JSON.parse(this.responseText);
        console.log("User Name:", user.name);
    }
};

userReq.ontimeout = () => console.log("Request timed out!");
userReq.onerror = () => console.log("Network error!");

userReq.send();

// ---------------------------
// Explanation:
// 1. Sets a maximum time to wait for response (timeout)
// 2. If server does not respond in 5 seconds, ontimout is triggered
// 3. onerror triggers if network fails
// 4. Normal readyState/status handling is also present
// 5. Demonstrates error handling and timeout in AJAX
// ---------------------------




// ============================
// Example 5: Fetch Country Data
// ============================

let countryReq = new XMLHttpRequest();
countryReq.open('GET', 'https://restcountries.com/v3.1/name/egypt', true);

countryReq.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200){
        let egypt = JSON.parse(this.responseText)[0];
        console.log("Egypt Capital:", egypt.capital[0], "| Population:", egypt.population);
    }
};

countryReq.send();

// ---------------------------
// Explanation:
// 1. Fetches country data from REST Countries API
// 2. readyState 4 = request finished, status 200 = OK
// 3. responseText contains JSON array with country information
// 4. Access first element with [0] since API returns array
// 5. Demonstrates parsing and extracting specific data fields
// ---------------------------




// ============================
// Example 6: ReadyState & Status Monitoring
// ============================

let monitorReq = new XMLHttpRequest();
monitorReq.open('GET', 'https://jsonplaceholder.typicode.com/comments?postId=1', true);

monitorReq.onreadystatechange = function() {
    console.log(`State: ${this.readyState}, Status: ${this.status}`);
    if(this.readyState === 4 && this.status === 200){
        let comments = JSON.parse(this.responseText);
        console.log("Comments count:", comments.length);
    }
};

monitorReq.send();

// ---------------------------
// Explanation:
// 1. monitorReq demonstrates monitoring readyState and status during request
// 2. Logs every readyState change to console for learning purposes
// 3. Once readyState = 4 and status = 200, parses JSON and prints info
// 4. Good example to understand request lifecycle
// ---------------------------
