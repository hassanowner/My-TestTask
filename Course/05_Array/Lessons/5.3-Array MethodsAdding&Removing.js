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



========================================================
Array Methods [Adding and Removing] - Text Summary
========================================================

Summary:

1. Original Array:
   ["Ali", "Omar", "Hassan", "Salem"]

2. unshift():
   - Adds elements to the beginning of the array.
   - Example: Adding "Manager" and "Supervisor" moves them to the start.

3. push():
   - Adds elements to the end of the array.
   - Example: Adding "Intern" and "Consultant" places them at the end.

4. shift():
   - Removes the first element of the array.
   - Example: "Manager" is removed, other elements shift left.

5. pop():
   - Removes the last element of the array.
   - Example: "Consultant" is removed, other elements stay in place.



==========================
|  Array Methods Demo   |
==========================

Initial Array (Original):
+-------+-------+-------+-------+
| Ali   | Omar  | Hassan| Salem |
+-------+-------+-------+-------+
  [0]     [1]     [2]     [3]

----------------------------------------------------------
After unshift("Manager", "Supervisor"):
+---------+-----------+-------+-------+-------+-------+
| Manager | Supervisor| Ali   | Omar  | Hassan| Salem |
+---------+-----------+-------+-------+-------+-------+
   [0]       [1]       [2]     [3]     [4]     [5]
----------------------------------------------------------
After push("Intern", "Consultant"):
+---------+-----------+-------+-------+-------+-------+--------+-----------+
| Manager | Supervisor| Ali   | Omar  | Hassan| Salem | Intern | Consultant|
+---------+-----------+-------+-------+-------+-------+--------+-----------+
   [0]       [1]       [2]     [3]     [4]     [5]     [6]        [7]
----------------------------------------------------------
After shift():
+-----------+-------+-------+-------+-------+--------+-----------+
| Supervisor| Ali   | Omar  | Hassan| Salem | Intern | Consultant|
+-----------+-------+-------+-------+-------+--------+-----------+
    [0]       [1]     [2]     [3]     [4]      [5]        [6]
Removed First: Manager
----------------------------------------------------------
After pop():
+-----------+-------+-------+-------+-------+--------+
| Supervisor| Ali   | Omar  | Hassan| Salem | Intern |
+-----------+-------+-------+-------+-------+--------+
    [0]       [1]     [2]     [3]     [4]      [5]
Removed Last: Consultant
*/
