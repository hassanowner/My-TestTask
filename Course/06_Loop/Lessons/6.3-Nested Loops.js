/*
====================================================
Nested Loops — Explained Step By Step
====================================================
*/

// Array that contains department names
let departments = ["IT", "HR", "Finance"];
// departments[0] => "IT"
// departments[1] => "HR"
// departments[2] => "Finance"

// Array of arrays
// Each inner array represents employees of one department
let employees = [
  ["Ali", "Sara", "Omar"],    // Employees of IT
  ["Mona", "Hassan"],         // Employees of HR
  ["Khaled", "Noor", "Yara"]  // Employees of Finance
];

// -------------------------------------------------
// OUTER LOOP
// Goes through each department
// -------------------------------------------------
for (let i = 0; i < departments.length; i++) {

  // Print department name
  console.log(`Department: ${departments[i]}`);
  /*
    Output (first iteration):
    Department: IT
  */

  // -----------------------------------------------
  // INNER LOOP
  // Goes through employees of the current department
  // employees[i] means: employees of the current department
  // -----------------------------------------------
  for (let j = 0; j < employees[i].length; j++) {

    console.log(`- Employee: ${employees[i][j]}`);
    /*
      Outputs for IT department:
      - Employee: Ali
      - Employee: Sara
      - Employee: Omar
    */
  }

  // Separator after finishing one department
  console.log("---------------");
  /*
    Output:
    ---------------
  */
}

/*
====================================================
FINAL OUTPUT (ALL TOGETHER)
====================================================

Department: IT
- Employee: Ali
- Employee: Sara
- Employee: Omar
---------------
Department: HR
- Employee: Mona
- Employee: Hassan
---------------
Department: Finance
- Employee: Khaled
- Employee: Noor
- Employee: Yara
---------------
*/

/*
IMPORTANT NOTES:
1) Outer loop decides which department we are in.
2) Inner loop lists employees of that department.
3) Nested loops are used when data is structured inside other data.
*/
