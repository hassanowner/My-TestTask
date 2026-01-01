/*
========================================================
ARRAY METHODS — LENGTH PROPERTY (FULL GUIDE)
========================================================

Topics Covered:
1) Array basics and indexing
2) The length property
3) Using length to control array size
4) Examples with detailed explanation
5) Key notes and best practices
========================================================

--------------------------------------------------------
1) ARRAY BASICS
--------------------------------------------------------

- Arrays are **ordered collections of values**.
- Each element has a **numeric index starting from 0**.
- Example: */

let teamUsers = ["Ali", "Omar", "Hassan", "Salman"];

/* Visualization:

teamUsers
  ├── [0] → "Ali"
  ├── [1] → "Omar"
  ├── [2] → "Hassan"
  └── [3] → "Salman"

- Indexes always start from 0.
- Access elements using square brackets: teamUsers[0] → "Ali"



--------------------------------------------------------
2) LENGTH PROPERTY
--------------------------------------------------------

- The **length property** returns the number of elements in the array.
- Syntax: arrayName.length
- Example: */

console.log(teamUsers.length); 
// Output: 4

/* - length counts **top-level elements only** (nested arrays not counted inside top-level length).



--------------------------------------------------------
3) USING LENGTH TO CONTROL ARRAY SIZE
--------------------------------------------------------

- Setting a new value for length can **truncate or expand the array**.
- Reducing length removes elements from the **end** of the array.
- Increasing length adds **empty slots** (undefined) at the end.

Example: Reduce size */
teamUsers.length = 2;

console.log(teamUsers);
/*
Result:
["Ali", "Omar"]
Explanation:
- Original array had 4 elements.
- Reducing length to 2 removes "Hassan" and "Salman" automatically.
*/

// Example: Increase size
teamUsers.length = 5;

console.log(teamUsers);
/*
Result:
["Ali", "Omar", <3 empty items>]
Explanation:
- Array now has 5 slots.
- New slots are empty (undefined by default).
*/

/*
--------------------------------------------------------
4) NOTES & BEST PRACTICES
--------------------------------------------------------

1) Indexing always starts from 0.
2) length is **dynamic**, always reflects current array size.
3) Modifying length directly:
   - Can remove elements (truncating array).
   - Can add empty slots if increased.
4) Use length carefully when truncating to avoid accidental data loss.
5) length is a **read/write property**, not a method (no parentheses needed).



--------------------------------------------------------
5) SUMMARY
--------------------------------------------------------

- length gives **current number of elements** in array.
- Changing length can **shrink or expand** the array.
- Always remember indexes start from 0.
- Useful for **loops, truncating arrays, or adding empty slots**.
========================================================
*/
