/* =========================================================================
CHALLENGE 1 — FUNCTION PARAMETER DESTRUCTURING (NESTED + DEFAULTS)
============================================================================
QUESTION:
You are writing a service function that receives a user object.
- Extract in the function parameters:
  1) fullName → rename to `name`
  2) role from permissions object
  3) theme with default value "Light"
- Do NOT access the object inside the function body.
*/

const userData = {
  fullName: "Hassan Ali",
  permissions: {
    role: "admin",
  },
};

function handleUser(
  {
    fullName: name,
    permissions: { role },
    theme = "Light",
  } = {}
) {
  console.log(name);
  console.log(role);
  console.log(theme);
}

// ANSWER (execution):
handleUser(userData);

/*
RESULT:
"Hassan Ali"
"admin"
"Light"
*/


/* =========================================================================
CHALLENGE 2 — MIXED DESTRUCTURING (OBJECT + ARRAY + RENAMING)
============================================================================
QUESTION:
You receive a dashboard response object.
- Extract in ONE statement:
  1) userName → rename to `name`
  2) last skill from skills array
  3) primary city → rename to `city`
*/

const dashboardResponse = {
  userName: "Lina Ahmed",
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    primary: "Basra",
    secondary: "Baghdad",
  },
};

// ANSWER:
const {
  userName: name,
  skills: [, , lastSkill],
  address: { primary: city },
} = dashboardResponse;

console.log(name);       // RESULT: "Lina Ahmed"
console.log(lastSkill); // RESULT: "JavaScript"
console.log(city);      // RESULT: "Basra"


/* =========================================================================
CHALLENGE 3 — FUNCTION + MIXED DESTRUCTURING (REAL-WORLD STYLE)
============================================================================
QUESTION:
A function receives an order object.
- Destructure directly in parameters:
  1) orderId → rename to `id`
  2) customer name
  3) second item from items array
  4) total price from payment object
- Use destructuring ONLY.
*/

const orderData = {
  orderId: 9021,
  customer: {
    name: "Omar",
  },
  items: ["Laptop", "Mouse", "Keyboard"],
  payment: {
    total: 1450,
    currency: "USD",
  },
};

// ANSWER:
function printOrderDetails({
  orderId: id,
  customer: { name },
  items: [, secondItem],
  payment: { total },
}) {
  console.log(id);
  console.log(name);
  console.log(secondItem);
  console.log(total);
}

printOrderDetails(orderData);

/*
RESULT:
9021
"Omar"
"Mouse"
1450
*/
