/*
================================================================================
JavaScript Modules, Default Export & Default Parameters - Complete Overview
================================================================================
*/

/* ======================
MODULES BASICS
====================== */
// Use export to share variables, functions, classes
// Use import to access exports
// HTML must load with type="module":
// <script type="module" src="main.js"></script>
// Named export: export { a, b, func }
// Default export: export default func
// Aliasing: import { func as myFunc } from './file.js'
// Import all: import * as alias from './file.js'


/* ======================
EXAMPLES - Named Exports
====================== */
// main.js
export let numberValue = 10;
export let arrayValue = [1,2,3,4];
export function greet() { return "Hello from module!"; }

// app.js
import { numberValue, arrayValue, greet as greetFunction } from "./main.js";
console.log(numberValue);        // 10
console.log(arrayValue);         // [1,2,3,4]
console.log(greetFunction());    // "Hello from module!"


/* ======================
EXAMPLES - Default Export
====================== */
// main.js
export default function defaultGreeting() { return "Default Greeting!"; }

// app.js
import defaultGreet from "./main.js";
console.log(defaultGreet());    // "Default Greeting!"


// --- math.js ---
export function add(a,b){ return a+b; }
export function multiply(a,b){ return a*b; }

// main.js
import { add, multiply } from './math.js';
console.log("Addition: 5+3 =", add(5,3));
console.log("Multiplication: 5×3 =", multiply(5,3));


/* ======================
EXAMPLES - Named Export with Alias
====================== */
// module.js
export const score = 100;
const playerName = "John";
export { playerName as name };
export function calculate(x,y){ return x*y; }
export default function greet(){ return "Hello!"; }

// main.js
import { score } from './module.js';
import { name as n } from './module.js';
import { calculate } from './module.js';
import greet from './module.js';
import * as everything from './module.js';

console.log(score, n, calculate(3,4), greet());
console.log("Default via import *:", everything.default());

/* ======================
DEFAULT EXPORT - Number / Function / Class
====================== */
// math.js
export default 10;
import value from "./math.js";
console.log(value); // 10

// greet.js
export default function greet(name){ return `Hello ${name}`; }
import greetUser from "./greet.js";
console.log(greetUser("Hassan")); // Hello Hassan

// User.js
export default class User {
  constructor(name,balance){ this.name=name; this.balance=balance; }
  deposit(amount){ this.balance+=amount; return this.balance; }
}
import Account from "./User.js";
const user1 = new Account("Ali",100);
console.log(user1.deposit(50)); // 150


/* ======================
DEFAULT PARAMETERS
====================== */
function sayHello(name="Guest"){ console.log(`Hello ${name}`); }
sayHello(); sayHello("Hassan"); // Hello Guest / Hello Hassan

function calculatePrice(price, tax=0.1){ return price + price*tax; }
console.log(calculatePrice(100)); console.log(calculatePrice(100,0.2)); // 110 / 120

function createUser(username, role="user", isActive=true){
  return { username, role, isActive };
}
const userA = createUser("Hassan");
const userB = createUser("Admin","administrator",false);
console.log(userA); // { username: "Hassan", role: "user", isActive: true }
console.log(userB); // { username: "Admin", role: "administrator", isActive: false }


/* ======================
SUMMARY
====================== */
// Modules: organize code, avoid global pollution
// Named export: multiple items, must match name or alias
// Default export: single main item, flexible import name
// Import all: access everything as object, default via .default
// Default Parameters: provide safe defaults, cleaner functions
