/*
========================================================
LOOP ON SEQUENCES — FILTERING DATA USING FOR LOOP
========================================================

This example demonstrates how to:
- Loop through an array (sequence of values)
- Check the data type of each element
- Extract specific elements based on a condition
- Store the result in a new array

--------------------------------------------------------
Scenario:
We have an array that contains mixed data types:
- Numbers
- Strings

Goal:
Create a new array that contains ONLY the string values.
========================================================
*/


/*
========================================================
ORIGINAL ARRAY (MIXED DATA TYPES)
========================================================
*/

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];


/*
========================================================
NEW ARRAY TO STORE FILTERED RESULTS
========================================================

- This array starts empty
- It will store ONLY string values
*/

let onlyNames = [];


/*
========================================================
FOR LOOP EXPLANATION
========================================================

1) let i = 0
   - Start from the first index of the array

2) i < myFriends.length
   - Continue looping until the end of the array

3) i++
   - Move to the next index after each iteration
*/

for (let i = 0; i < myFriends.length; i++) {

  /*
  ------------------------------------------------------
  TYPE CHECK
  ------------------------------------------------------
  - typeof checks the data type of the current element
  - "string" means text values only
  */

  if (typeof myFriends[i] === "string") {

    /*
    ----------------------------------------------------
    PUSH METHOD
    ----------------------------------------------------
    - Add the string value to the onlyNames array
    */

    onlyNames.push(myFriends[i]);

  }
}


/*
========================================================
FINAL RESULT
========================================================
*/

console.log(onlyNames);

/*
Output:
["Osama", "Ahmed", "Sayed", "Ali"]
*/


/*
========================================================
IMPORTANT NOTES
========================================================
- The for loop allows full control over array traversal
- typeof helps distinguish between different data types
- Filtering data is a very common real-world task
- Using a separate array keeps original data unchanged
========================================================
*/
