/*
====================================================
Higher Order Functions — map() Method
====================================================

Covers:
- What Higher Order Functions are
- How map() works
- map() vs for loop
- map() with anonymous, arrow, and named functions
- Professional real-world use cases

Everything is in ONE square file
Valid JavaScript
====================================================
*/


/* ==================================================
1) What Is a Higher Order Function?
================================================== */

/*
A Higher Order Function is a function that:
- Accepts another function as an argument
OR
- Returns a function

map() is a Higher Order Function because:
- It takes a callback function
- That callback runs on each array element
*/


/* ==================================================
2) Problem BEFORE Using map()
================================================== */

let numbers = [1, 2, 3, 4, 5, 6];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12]


/* ==================================================
3) Solving the Same Problem Using map()
================================================== */

let doubledWithMap = numbers.map(function (element) {
  return element * 2;
});

console.log(doubledWithMap); // [2, 4, 6, 8, 10, 12]


/* ==================================================
4) map() Using Arrow Function
================================================== */

let doubledArrow = numbers.map(num => num * 2);
console.log(doubledArrow); // [2, 4, 6, 8, 10, 12]


/* ==================================================
5) map() Using Named Function
================================================== */

function multiplyByTwo(value) {
  return value * 2;
}

let doubledNamed = numbers.map(multiplyByTwo);
console.log(doubledNamed); // [2, 4, 6, 8, 10, 12]


/* ==================================================
6) Understanding map() Parameters
================================================== */

let detailedMap = numbers.map(function (element, index, array) {
  return `Index ${index}: ${element} (From array: ${array})`;
});

console.log(detailedMap);


/* ==================================================
7) Important Notes About map()
================================================== */

/*
- map():
  - Returns a NEW array
  - Does NOT modify the original array
  - Always returns the same length
  - Used for transformation, not filtering
  - Should not be used for side effects
*/


/* ==================================================
8) Real-World & Professional Examples
================================================== */


/* Example 1: Normalize Usernames */

let users = ["Admin", "JOHN_DOE", "Sara99", "Guest"];

let normalizedUsers = users.map(user =>
  user.toLowerCase()
);

console.log(normalizedUsers); // ["admin", "john_doe", "sara99", "guest"]


/* Example 2: Calculate Final Prices (10% Tax) */

let prices = [100, 250, 80, 400];

let finalPrices = prices.map(price =>
  price + price * 0.10
);

console.log(finalPrices); // [110, 275, 88, 440]


/* Example 3: Extract Email Names */

let emails = [
  "support@company.com",
  "admin@service.net",
  "info@website.org"
];

let emailNames = emails.map(email =>
  email.split("@")[0]
);

console.log(emailNames); // ["support", "admin", "info"]


/* Example 4: Convert API String Numbers */

let apiResponse = ["10", "20", "30", "40"];

let numericData = apiResponse.map(value =>
  Number(value)
);

console.log(numericData); // [10, 20, 30, 40]


/* Example 5: Clean User Input */

let inputs = ["  Hassan  ", "  Ali", "Omar   "];

let cleanedInputs = inputs.map(input =>
  input.trim()
);

console.log(cleanedInputs); // ["Hassan", "Ali", "Omar"]


/* ==================================================
Professional Rules Summary
================================================== */

/*
Use map() when:
- You need to TRANSFORM data
- You want a NEW array
- Each element produces a returned value

Do NOT use map() when:
- You only want side effects
- You want to filter values
- You want to stop early

map() is essential for:
- APIs
- UI rendering
- Data normalization
- Business logic
*/


/* ==================================================
End of Lesson
================================================== */
