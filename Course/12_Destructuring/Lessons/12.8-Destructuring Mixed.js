/*
  TOPICS (Teaching Order)
  1) Destructuring Arrays - Basics (extract, defaults, skip)
  2) Destructuring Arrays - Advanced (nested, rest, swap)
  3) Destructuring Objects - Basics (extract, rename, defaults)
  4) Destructuring Objects - Advanced (nested objects, nested rename, rest)
  5) Destructuring Function Parameters (object + defaults)
  6) Mixed Destructuring (arrays inside objects and objects inside arrays)
*/

/* =========================================================================
   1) Destructuring Arrays - Basics
   - Practical scenario: a product list where each product is a simple value
   - Show: extraction, default values, skipping elements
   ========================================================================= */

// A simple product list (strings)
let products = ["Laptop", "Mouse", "Keyboard"];

// Basic extraction: take first two items into variables
let [firstProduct, secondProduct] = products;
// firstProduct -> "Laptop"
// secondProduct -> "Mouse"

// Use default value for an item that might be missing
let [p1 = "Default1", p2 = "Default2", p3 = "Default3", p4 = "Default4"] = products;
// p1 -> "Laptop"  (from array)
// p2 -> "Mouse"   (from array)
// p3 -> "Keyboard" (from array)
// p4 -> "Default4" (default used because products[3] is undefined)

// Skip elements: get only the third product
let [, , onlyThird] = products;
// onlyThird -> "Keyboard"

// Show values (these lines explain expected output)
console.log("Basic - firstProduct:", firstProduct);
console.log("Basic - secondProduct:", secondProduct);
console.log("Defaults - p4 (should be default):", p4);
console.log("Skip - onlyThird:", onlyThird);

/*
  Expected console output for section 1:
  Basic - firstProduct: Laptop
  Basic - secondProduct: Mouse
  Defaults - p4 (should be default): Default4
  Skip - onlyThird: Keyboard
*/






/* =========================================================================
   2) Destructuring Arrays - Advanced
   - Practical scenario: nested categories and using rest + swapping
   ========================================================================= */

// Nested array representing category -> subcategory -> labels
let categories = [
  "Electronics",
  ["Computers", "Accessories", ["Laptops", "Desktops"]],
  "Home Appliances",
  "Books"
];

// Extract nested values: get the main category, the first subcategory, and nested label
let [mainCat, [subCat, , [label1, label2]], , lastCat] = categories;
// mainCat -> "Electronics"
// subCat  -> "Computers"
// label1  -> "Laptops"
// label2  -> "Desktops"
// lastCat -> "Books"

// Use rest operator to collect remaining top-level categories
let [top1, ...restTop] = categories;
// top1 -> "Electronics"
// restTop -> [ ["Computers", "Accessories", ["Laptops","Desktops"]], "Home Appliances", "Books" ]

// Swap two variables (useful in many algorithms)
let a = 5;
let b = 10;
[a, b] = [b, a];
// a -> 10, b -> 5

console.log("Advanced - mainCat:", mainCat);
console.log("Advanced - subCat:", subCat);
console.log("Advanced - nested label1:", label1);
console.log("Advanced - restTop length (should be 3):", restTop.length);
console.log("Swap result a,b:", a, b);

/*
  Expected console output for section 2:
  Advanced - mainCat: Electronics
  Advanced - subCat: Computers
  Advanced - nested label1: Laptops
  Advanced - restTop length (should be 3): 3
  Swap result a,b: 10 5
*/






/* =========================================================================
   3) Destructuring Objects - Basics
   - Practical scenario: user settings for an app
   - Show: direct extraction, renaming, defaults
   ========================================================================= */

const settings = {
  username: "hassan",
  theme: "dark",
  notifications: true,
  language: "en"
};

// Simple extraction
const { username, theme } = settings;
// username -> "hassan"
// theme -> "dark"

// Rename variables during destructuring and add default for a possibly-missing property
const { notifications: notify, language: lang, timezone = "UTC" } = settings;
// notify -> true
// lang -> "en"
// timezone -> "UTC"  (default because settings.timezone is undefined)

console.log("Object - username:", username);
console.log("Object - theme:", theme);
console.log("Object - notify:", notify);
console.log("Object - timezone (default):", timezone);

/*
  Expected console output for section 3:
  Object - username: hassan
  Object - theme: dark
  Object - notify: true
  Object - timezone (default): UTC
*/







/* =========================================================================
   4) Destructuring Objects - Advanced
   - Practical scenario: profile with nested address and a skills object
   - Show: nested destructuring, renaming nested props, object rest
   ========================================================================= */

const profile = {
  name: "Lina",
  age: 28,
  contact: {
    email: "lina@example.com",
    phones: {
      mobile: "0123456789",
      home: "0987654321"
    }
  },
  skills: {
    frontend: ["HTML", "CSS", "React"],
    backend: ["Node", "Express"]
  }
};

// Nested destructuring with renaming
const {
  name: fullName,
  contact: {
    email: contactEmail,
    phones: { mobile: mobileNumber }
  },
  skills: { frontend: frontSkills, backend: backSkills }
} = profile;

// Use object rest to collect remaining top-level properties not destructured
const { name: nme, ...profileRest } = profile;
// nme -> "Lina"
// profileRest -> { age: 28, contact: {...}, skills: {...} }

console.log("Advanced Object - fullName:", fullName);
console.log("Advanced Object - contactEmail:", contactEmail);
console.log("Advanced Object - mobileNumber:", mobileNumber);
console.log("Advanced Object - frontSkills length:", frontSkills.length);
console.log("Object rest keys (should include age):", Object.keys(profileRest));

/*
  Expected console output for section 4:
  Advanced Object - fullName: Lina
  Advanced Object - contactEmail: lina@example.com
  Advanced Object - mobileNumber: 0123456789
  Advanced Object - frontSkills length: 3
  Object rest keys (should include age): [ 'age', 'contact', 'skills' ]
*/






/* =========================================================================
   5) Destructuring Function Parameters
   - Practical scenario: function receives an order object
   - Show: extracting needed values directly in the function parameters
   - Include: renaming properties and destructuring nested objects
   - Goal: make the function cleaner and easier to read
   ========================================================================= */
/*
  Destructuring
  - Destructuring Function Parameters (With Renaming)
*/

const order = {
  orderId: 5401,
  customer: {
    name: "Hassan",
    city: "Baghdad",
  },
  payment: {
    method: "Credit Card",
    amount: 120,
  },
};

printOrder(order);

function printOrder({
  orderId: id,                 // orderId is renamed to id -> 5401
  customer: { name: customerName }, // customer.name is renamed to customerName -> "Hassan"
  payment: { amount: total }   // payment.amount is renamed to total -> 120
}) {
  // Using the destructured values directly
  console.log(`Order ID: ${id}`);
  console.log(`Customer Name: ${customerName}`);
  console.log(`Total Amount: $${total}`);
}


// OR Like This ↓ ↓ ↓ 
const order ={orderId: 5401, customer: {name: "Hassan",city: "Baghdad"}, payment: {method: "Credit Card",amount: 120} };

         printOrder(order);
function printOrder({orderId: id, customer: {name: customerName }, payment: {amount: total} }){
  
  console.log(`Order ID: ${id}`);
  console.log(`Customer Name: ${customerName}`);
  console.log(`Total Amount: $${total}`);
}

/*
Expected Output:
Order ID: 5401
Customer Name: Hassan
Total Amount: $120
*/







/* =========================================================================
   6) Mixed Destructuring (Arrays inside Objects, Objects inside Objects)
   - Practical scenario: an employee object that contains an array and a nested object
   - Show: extracting specific values from both arrays and nested objects
   - Include: renaming variables and selecting only needed elements
   - Goal: access complex data in a clean and readable way
   ========================================================================= */
/*
  Destructuring
  - Destructuring Mixed Content
  - Object + Array + Nested Object
*/

const employee = {
  fullName: "Lina Ahmed",
  experience: 5,
  tools: ["Git", "Docker", "AWS"],
  location: {
    country: "Iraq",
    city: "Basra",
  },
};

// Mixed destructuring
const {
  fullName: name,           // rename fullName -> name
  experience: years,
  tools: [, secondTool],    // get the second tool only
  location: {city: c }
} = employee;

console.log(`Employee Name: ${name}`);
console.log(`Experience: ${years} years`);
console.log(`Main Tool: ${secondTool}`);
console.log(`City: ${c}`);

/*
Expected Output:
Employee Name: Lina Ahmed
Experience: 5 years
Main Tool: Docker
City: Basra
*/


/* =========================================================================
  NOTES & TIPS (short summary)
  - Arrays: use [a, b, ...rest] to extract and collect remaining items.
  - Objects: use { prop, prop2: alias, missing = default } to extract, rename, and set defaults.
  - Nested: you can destructure nested arrays/objects in one expression.
  - Rest for objects: { a, b, ...others } collects the remaining properties.
  - Function params: destructuring directly in parameters gives clear defaults and picks only needed data.
  - Always prefer const for destructuring when you don't intend to reassign the variable.
  ========================================================================= */
