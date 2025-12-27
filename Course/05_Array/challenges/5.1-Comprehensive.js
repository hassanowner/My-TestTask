/*
========================================================
Array Challenges (Practical)
========================================================
*/

/*
--------------------------------------------------------
Challenge 1
- Remove the first and last element
- Return the remaining elements
--------------------------------------------------------
*/

let names = ["Ali", "Omar", "Hassan", "Salem", "Yousef"];

names.shift();
names.pop();

console.log(names);
/*
Result:
["Omar", "Hassan", "Salem"]
*/





/*
--------------------------------------------------------
Challenge 2
- Check if an element exists in the array
- If not exists, add it to the end
--------------------------------------------------------
*/

let roles = ["Admin", "Editor", "User"];

if (!roles.includes("Guest")) {
  roles.push("Guest");
}

console.log(roles);
/*
Result:
["Admin", "Editor", "User", "Guest"]
*/






/*
--------------------------------------------------------
Challenge 3
- Combine two arrays
- Display them as a single string separated by " - "
--------------------------------------------------------
*/

let frontEnd = ["HTML", "CSS", "JavaScript"];
let backEnd = ["Node", "PHP"];

let fullStack = frontEnd.concat(backEnd);

console.log(fullStack.join(" - "));
/*
Result:
"HTML - CSS - JavaScript - Node - PHP"
*/






/*
--------------------------------------------------------
Challenge 4
- Extract specific elements using slice()
- Do NOT modify the original array
--------------------------------------------------------
*/

let numbers = [10, 20, 30, 40, 50, 60];

let result = numbers.slice(2, 5);

console.log(result);
/*
Result:
[30, 40, 50]
*/

console.log(numbers);
/*
Result:
[10, 20, 30, 40, 50, 60]
*/






/*
--------------------------------------------------------
Challenge 5
- Remove elements using splice()
- Then insert new values in their place
--------------------------------------------------------
*/

let colors = ["Red", "Green", "Blue", "Yellow"];

// Remove "Green" and "Blue", add new colors
colors.splice(1, 2, "Black", "White");

console.log(colors);
/*
Result:
["Red", "Black", "White", "Yellow"]
*/


/*
========================================================
* Notes:
- slice() does NOT change original array
- splice() DOES modify the original array
- includes() is best for checking existence
========================================================
*/
