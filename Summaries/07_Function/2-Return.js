/*
====================================================
FUNCTIONS — COMPLETE MASTER FILE
(Return, ASI, Default Params, Rest Params, Advanced Usage)
====================================================

This file is designed to be read top-to-bottom.
Each section builds on the previous one.
====================================================
*/


/* ==================================================
   SECTION 1: Function — return / Interrupting / ASI
   ================================================== */

// Example 1: Basic Function with Return
function calculateTotal(price, tax) {
  let total = price + tax;
  return total;
}

let result = calculateTotal(100, 20);
console.log(result); // 120


// Example 2: return Interrupts Function Execution
function checkUserAccess(role) {
  if (role !== "admin") {
    return "Access Denied";
  }

  console.log("This line runs ONLY for admin");
  return "Access Granted";
}

console.log(checkUserAccess("editor"));
console.log(checkUserAccess("admin"));


// Example 3: return Inside a Loop
function findFirstNegative(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      return numbers[i];
    }
  }
  return "No Negative Numbers Found";
}

console.log(findFirstNegative([5, 10, -3, 7]));
console.log(findFirstNegative([1, 2, 3]));


// Example 4: Automatic Semicolon Insertion (ASI)
function getStatus() {
  return
  "Success";
}

console.log(getStatus()); // undefined (ASI bug)


// Correct Version
function getFixedStatus() {
  return "Success";
}

console.log(getFixedStatus()); // Success



/* ==================================================
   SECTION 2: Function — Default Parameters
   ================================================== */

// Without default parameters
function createUserProfile(username, role) {
  return `User: ${username}, Role: ${role}`;
}

console.log(createUserProfile("dev_admin", "Administrator"));
console.log(createUserProfile());


// Old Method: Manual undefined check
function createUserWithCheck(username, role) {
  if (username === undefined) {
    username = "Guest";
  }
  if (role === undefined) {
    role = "Viewer";
  }
  return `User: ${username}, Role: ${role}`;
}

console.log(createUserWithCheck());
console.log(createUserWithCheck("api_user"));


// Old Method: Logical OR (||)
function createUserWithOr(username, role) {
  username = username || "Guest";
  role = role || "Viewer";
  return `User: ${username}, Role: ${role}`;
}

console.log(createUserWithOr("", ""));
console.log(createUserWithOr("backend_dev"));


// ES6 Default Parameters (Correct Way)
function createUserES6(username = "Guest", role = "Viewer") {
  return `User: ${username}, Role: ${role}`;
}

console.log(createUserES6());
console.log(createUserES6("frontend_dev"));
console.log(createUserES6("sys_admin", "Admin"));


// Mixed defaults example
function deployApplication(
  appName = "MyApp",
  environment = "production",
  version = "1.0.0"
) {
  return `${appName} deployed to ${environment} with version ${version}`;
}

console.log(deployApplication());
console.log(deployApplication("AuthService", "staging"));
console.log(deployApplication("PaymentAPI", "production", "2.3.1"));



/* ==================================================
   SECTION 3: Function — Rest Parameters
   ================================================== */

// Problem without rest parameters
function addThreeNumbers(a, b, c) {
  return a + b + c;
}

console.log(addThreeNumbers(10, 20, 30));


// Using Rest Parameters
function sumAllNumbers(...values) {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  return total;
}

console.log(sumAllNumbers(10, 20));
console.log(sumAllNumbers(10, 20, 30, 40));
console.log(sumAllNumbers(5, 5, 5, 5, 5));


// Rest parameter placement example
function showData(name, age, country, ...rest) {
  console.log(name);
  console.log(age);
  console.log(country);
  console.log(rest);
  console.log(rest[0]);
}

showData("Ali", 25, "Iraq", "Baghdad", "Developer");


// Proof: Rest parameter is an array
function checkType(...items) {
  return Array.isArray(items);
}

console.log(checkType(1, 2, 3));


// Rules
function validExample(a, ...rest) {
  return rest;
}

function correctOrder(x, y, ...items) {
  return items;
}

console.log(correctOrder(1, 2, 3, 4, 5));


// Practical example
function calculateInvoiceTotal(taxRate, ...prices) {
  let subtotal = 0;
  for (let i = 0; i < prices.length; i++) {
    subtotal += prices[i];
  }
  return subtotal + (subtotal * taxRate);
}

console.log(calculateInvoiceTotal(0.1, 100, 200, 50));



/* ==================================================
   SECTION 4: Advanced Practice — All Concepts Together
   ================================================== */

function displayUserProfile(
  username = "Unknown User",
  age = "Unknown Age",
  hourlyRate = 0,
  showSkills = true,
  ...skills
) {

  document.write("<div>");
  document.write(`<h2>User: ${username}</h2>`);
  document.write(`<p>Age: ${age}</p>`);
  document.write(`<p>Hourly Rate: $${hourlyRate}</p>`);

  if (showSkills === true) {
    if (skills.length > 0) {
      document.write(`<p>Skills: ${skills.join(" | ")}</p>`);
    } else {
      document.write("<p>Skills: No skills provided</p>");
    }
  } else {
    document.write("<p>Skills: Hidden</p>");
  }

  document.write("</div>");
}


// Function Call
displayUserProfile(
  "FrontendDeveloper",
  30,
  45,
  false,
  "HTML",
  "CSS",
  "JavaScript"
);


/*
====================================================
END OF FILE — PROFESSIONAL FUNCTION REFERENCE
====================================================
*/
