/*
====================================================
Combining forEach with filter & reduce
3 Practical Professional Examples
====================================================
*/


// ==================================================
// Example 1: filter + forEach
// Scenario: Display only active users
// ==================================================

let users = [
  "ACTIVE_Admin",
  "INACTIVE_Guest",
  "ACTIVE_Editor",
  "INACTIVE_Test",
  "ACTIVE_User"
];

// Step 1: Filter only active users
let activeUsers = users.filter(function (user) {
  return user.startsWith("ACTIVE");
});

// Step 2: Perform action on filtered result
activeUsers.forEach(function (user, index) {
  console.log(`[${index + 1}] ${user}`);
});

/*
Output:
[1] ACTIVE_Admin
[2] ACTIVE_Editor
[3] ACTIVE_User
*/


// ==================================================
// Example 2: reduce + forEach
// Scenario: Calculate total sales, then print report
// ==================================================

let dailySales = [120, 300, 250, 100];

// Step 1: Reduce to get total sales
let totalSales = dailySales.reduce(function (acc, current) {
  return acc + current;
}, 0);

// Step 2: Use forEach to print detailed breakdown
dailySales.forEach(function (sale, index) {
  console.log(`Day ${index + 1} Sale: $${sale}`);
});

console.log(`Total Sales: $${totalSales}`);

/*
Output:
Day 1 Sale: $120
Day 2 Sale: $300
Day 3 Sale: $250
Day 4 Sale: $100
Total Sales: $770
*/


// ==================================================
// Example 3: filter + reduce + forEach together
// Scenario: Process performance metrics
// ==================================================

let performanceScores = [95, 60, 88, 45, 77, 30, 90];

// Step 1: Filter passing scores (>= 70)
let passedScores = performanceScores.filter(function (score) {
  return score >= 70;
});

// Step 2: Reduce to calculate average
let totalScore = passedScores.reduce(function (acc, score) {
  return acc + score;
}, 0);

let averageScore = totalScore / passedScores.length;

// Step 3: Display final results using forEach
passedScores.forEach(function (score, index) {
  console.log(`Passed Student ${index + 1}: ${score}`);
});

console.log(`Average Passing Score: ${averageScore}`);

/*
Output:
Passed Student 1: 95
Passed Student 2: 88
Passed Student 3: 77
Passed Student 4: 90
Average Passing Score: 87.5
*/


// ==================================================
// Key Learning Summary
// ==================================================

/*
filter  => selects specific data
reduce  => combines data into one value
forEach => performs actions (logging, UI updates)

Best Practice:
filter → reduce → forEach
Data selection → calculation → execution
*/


// ==================================================
// End of Combined Examples
// ====================================================
