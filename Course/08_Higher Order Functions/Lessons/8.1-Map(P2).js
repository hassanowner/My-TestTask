/*
====================================================
map() — Real-World & Professional Examples
====================================================
Practical use cases from real programming scenarios:
- Data normalization
- Price calculations
- User input sanitization
====================================================
*/


// ==================================================
// Example 1: Normalize Usernames (all lowercase)
// ==================================================

let users = ["Admin", "JOHN_DOE", "Sara99", "Guest"];

let normalizedUsers = users.map(username =>
  username.toLowerCase()
);

console.log(normalizedUsers);
/*
Result:
["admin", "john_doe", "sara99", "guest"]
*/

/*
Why this is professional:
- Used before saving usernames to databases
- Prevents case-sensitive bugs
- Common in authentication systems
*/


// ==================================================
// Example 2: Calculate Final Prices (Add Tax 10%)
// ==================================================

let prices = [100, 250, 80, 400];

let finalPrices = prices.map(price =>
  price + price * 0.10
);

console.log(finalPrices);
/*
Result:
[110, 275, 88, 440]
*/

/*
Why this is professional:
- Used in e-commerce systems
- map() transforms raw prices to final prices
- Keeps original data untouched
*/


// ==================================================
// Example 3: Extract Clean Email Names
// ==================================================

let emails = [
  "support@company.com",
  "admin@service.net",
  "info@website.org"
];

let emailNames = emails.map(email =>
  email.split("@")[0]
);

console.log(emailNames);
/*
Result:
["support", "admin", "info"]
*/

/*
Why this is professional:
- Used when displaying user-friendly names
- Common in dashboards & admin panels
*/


// ==================================================
// Example 4: Convert API String Numbers to Integers
// ==================================================

let apiResponse = ["10", "20", "30", "40"];

let numericData = apiResponse.map(value =>
  Number(value)
);

console.log(numericData);
/*
Result:
[10, 20, 30, 40]
*/

/*
Why this is professional:
- APIs often return numbers as strings
- map() ensures correct data types
- Prevents calculation bugs
*/


// ==================================================
// Example 5: Trim and Clean User Input
// ==================================================

let inputs = ["  Hassan  ", "  Ali", "Omar   "];

let cleanedInputs = inputs.map(input =>
  input.trim()
);

console.log(cleanedInputs);
/*
Result:
["Hassan", "Ali", "Omar"]
*/

/*
Why this is professional:
- Input sanitization before processing
- Common in forms & backend validation
*/


// ==================================================
// Key Takeaways (Professional Rules)
// ==================================================

/*
✔ map() is for transforming data
✔ Original array remains unchanged
✔ Perfect for:
  - API data normalization
  - Business calculations
  - Input cleanup
  - UI preparation

If your logic RETURNS a value → map() is your tool
*/


// ==================================================
// Summary
// ==================================================

/*
These examples reflect REAL usage in:
- Backend systems
- Frontend apps
- Databases
- APIs
- E-commerce platforms

Mastering map() = writing clean & scalable JavaScript
====================================================
End of Professional Lesson
====================================================
*/
