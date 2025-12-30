/*
========================================================
Array Methods [Adding And Removing]
========================================================
Covered Topics:
- unshift() Add Element To The First
- push()    Add Element To The End
- shift()   Remove First Element From Array
- pop()     Remove Last Element From Array
========================================================
*/

let employees = ["Ali", "Omar", "Hassan", "Salem"];


// ======================================================
// Original Array
// ======================================================

console.log(employees);
/*
Result:
["Ali", "Omar", "Hassan", "Salem"]
*/


// ======================================================
// unshift()
// - Adds elements to the beginning
// ======================================================

employees.unshift("Manager", "Supervisor");
console.log(employees);

/*
Result:
["Manager", "Supervisor", "Ali", "Omar", "Hassan", "Salem"]
*/


// ======================================================
// push()
// - Adds elements to the end
// ======================================================

employees.push("Intern", "Consultant");
console.log(employees);

/*
Result:
["Manager", "Supervisor", "Ali", "Omar", "Hassan", "Salem", "Intern", "Consultant"]
*/


// ======================================================
// shift()
// - Removes first element
// ======================================================

let firstEmployee = employees.shift();
console.log(employees);

/*
Result:
["Supervisor", "Ali", "Omar", "Hassan", "Salem", "Intern", "Consultant"]
*/

console.log(`First Employee Removed: ${firstEmployee}`);

/*
Result:
"First Employee Removed: Manager"
*/


// ======================================================
// pop()
// - Removes last element
// ======================================================

let lastEmployee = employees.pop();
console.log(employees);

/*
Result:
["Supervisor", "Ali", "Omar", "Hassan", "Salem", "Intern"]
*/

console.log(`Last Employee Removed: ${lastEmployee}`);

/*
Result:
"Last Employee Removed: Consultant"
*/
