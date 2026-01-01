/*
========================================================
ARRAY METHODS — SLICE vs SPLICE
========================================================

Topics Covered:
1) slice() — copying/extracting array elements
2) splice() — modifying array content
3) Differences between slice and splice
4) Examples with detailed explanation
5) Notes and best practices
========================================================

--------------------------------------------------------
1) ORIGINAL ARRAY
-------------------------------------------------------- */

let students = ["Hassan", "Omar", "Sara", "Lina", "Yousef", "Noor"];

console.log(students);
/*
Result:
["Hassan", "Omar", "Sara", "Lina", "Yousef", "Noor"]




--------------------------------------------------------
3) SLICE METHOD
--------------------------------------------------------

- Syntax: array.slice(startIndex, endIndex)
- Purpose: Returns a **new array** containing selected elements.
- Original array is **not modified**.
- Parameters:
  - startIndex (inclusive, optional, default = 0)
  - endIndex (exclusive, optional, default = array.length)
- Supports **negative indexes** (counting from the end)

Examples: */

// Full copy
let copyAll = students.slice();
console.log(copyAll);
// ["Hassan", "Omar", "Sara", "Lina", "Yousef", "Noor"]

// Elements starting from index 2
let fromIndexTwo = students.slice(2);
console.log(fromIndexTwo);
// ["Sara", "Lina", "Yousef", "Noor"]

// Elements from index 1 up to 4 (4 not included)
let middlePart = students.slice(1, 4);
console.log(middlePart);
// ["Omar", "Sara", "Lina"]

// Last two elements using negative index
let lastTwo = students.slice(-2);
console.log(lastTwo);
// ["Yousef", "Noor"]

// Start positive, end negative
let combined = students.slice(1, -1);
console.log(combined);
// ["Omar", "Sara", "Lina", "Yousef"]

// Original array remains unchanged
console.log(students);
// ["Hassan", "Omar", "Sara", "Lina", "Yousef", "Noor"]



/*
--------------------------------------------------------
3) SPLICE METHOD
--------------------------------------------------------

- Syntax: array.splice(startIndex, deleteCount, item1, item2, ...)
- Purpose: **Modify the original array**:
  - Remove elements
  - Add new elements
  - Replace elements
- Returns an array containing **removed elements**

Examples: */

// Remove 2 elements starting from index 1 and add new ones
let removed = students.splice(1, 2, "Khaled", "Maha");

console.log(students);
// ["Hassan", "Khaled", "Maha", "Lina", "Yousef", "Noor"]

console.log(removed);
// ["Omar", "Sara"]
// removed elements are returned by splice()



/*
--------------------------------------------------------
4) KEY DIFFERENCES
--------------------------------------------------------

| Feature           | slice()                     | splice()                      |
|-------------------|-----------------------------|-------------------------------|
| Modifies original | No                          | Yes                           |
| Returns new array | Yes                         | Yes (removed elements)        |
| Parameters        | start, end (exclusive)      | start, deleteCount, items...  |
| Use case          | Extract/copy parts          | Remove, replace, insert       |
| Supports negative indexes |  Yes                | Yes (for start index)         |


  
--------------------------------------------------------
5) NOTES & BEST PRACTICES
--------------------------------------------------------

1) Use **slice()** when you need a **copy or subset** of an array without affecting the original.
2) Use **splice()** to **modify the array in place**: remove, replace, or add elements.
3) Remember that **splice returns the removed elements**.
4) Negative indexes in slice() are useful to reference elements from the end.
5) Always be careful with splice() to avoid **unintentionally removing elements**.


  
--------------------------------------------------------
6) SUMMARY
--------------------------------------------------------

- slice() → non-destructive → returns a new array
- splice() → destructive → modifies original array → returns removed elements
- Both are useful for **managing arrays**, but choose based on whether you want to **modify original array** or not.

========================================================
*/
