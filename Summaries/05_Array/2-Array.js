/*
========================================================
JAVASCRIPT ARRAYS — ADVANCED METHODS FULL GUIDE
========================================================

Topics Covered:
1) Searching Arrays (indexOf, lastIndexOf, includes)
2) Sorting & Reversing Arrays (sort, reverse)
3) Slicing & Splicing Arrays (slice, splice)
4) Joining Arrays (concat, join)
========================================================
*/


/*
========================================================
1) SEARCHING ARRAYS
========================================================
*/

let users = ["Ali", "Omar", "Hassan", "Salem", "Ali"];
console.log(users);

// indexOf() → first occurrence from left to right
console.log(users.indexOf("Ali"));        // 0
console.log(users.indexOf("Ali", 2));     // 4

// lastIndexOf() → last occurrence from right to left
console.log(users.lastIndexOf("Ali"));        // 4
console.log(users.lastIndexOf("Ali", -2));   // 0

// includes() → checks if element exists (true / false)
console.log(users.includes("Ali"));       // true
console.log(users.includes("Ali", 2));    // true

// Searching for missing element
console.log(users.indexOf("Khaled"));      // -1
console.log(users.lastIndexOf("Khaled"));  // -1
if(users.lastIndexOf("Khaled") === -1){
    console.log("User Not Found");
}


/*
========================================================
2) SORTING & REVERSING ARRAYS
========================================================
*/

let mixedData = [10, "50", 200, "Ali", 3, "100", -5, "Ziad"];
console.log(mixedData);

// Default sort → lexicographical (alphabetical)
console.log(mixedData.sort());
// [-5, 10, 200, 3, "100", "50", "Ali", "Ziad"]

// Numeric sort (ascending)
mixedData.sort((a, b) => a - b);

// Numeric sort (descending)
mixedData.sort((a, b) => b - a);

// Reverse array
console.log(mixedData.sort().reverse());
// ["Ziad","Ali","50","100",3,200,10,-5]

/*
Notes:
- sort() modifies the original array
- Default sort converts elements to strings
- For numeric sorting, always provide a compare function
- reverse() modifies array in place
- Chain sort + reverse if needed
*/


/*
========================================================
3) SLICE VS SPLICE
========================================================
*/

let students = ["Hassan", "Omar", "Sara", "Lina", "Yousef", "Noor"];
console.log(students);

// SLICE → returns new array, non-destructive
console.log(students.slice());       // full copy
console.log(students.slice(2));      // from index 2
console.log(students.slice(1,4));    // from 1 to 4 (exclusive)
console.log(students.slice(-2));     // last two elements
console.log(students.slice(1,-1));   // 1 to second last
console.log(students);               // original remains unchanged

// SPLICE → modifies original array
let removed = students.splice(1, 2, "Khaled", "Maha");
console.log(students);   // ["Hassan", "Khaled", "Maha", "Lina", "Yousef", "Noor"]
console.log(removed);    // ["Omar", "Sara"] → removed elements

/*
Key Differences:
| Feature           | slice() | splice() |
|-------------------|---------|----------|
| Modifies original | No      | Yes      |
| Returns           | New array | Removed elements |
| Use case          | Copy / subset | Remove / replace / add |
| Negative index    | Yes     | Start index only |
*/


/*
========================================================
4) JOINING ARRAYS (concat & join)
========================================================
*/

let friends1 = ["Alice", "Bob", "Charlie"];
let friends2 = ["Diana", "Eve"];

// CONCAT → merge arrays into new array
let allFriends = friends1.concat(friends2, "Frank");
console.log(allFriends); // ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"]

// JOIN → convert array to string
console.log(allFriends.join());         // "Alice,Bob,Charlie,Diana,Eve,Frank"
console.log(allFriends.join(" "));      // "Alice Bob Charlie Diana Eve Frank"
console.log(allFriends.join(" | "));    // "Alice | Bob | Charlie | Diana | Eve | Frank"

// Another example
let webLang = ["HTML","CSS","JavaScript"];
let otherLang = ["Python","Java"];
let allLang = webLang.concat(otherLang,"C++");
console.log(allLang.join(" - ").toUpperCase());
// "HTML - CSS - JAVASCRIPT - PYTHON - JAVA - C++"

/*
Notes:
- concat() → returns a new array, original arrays remain unchanged
- join() → converts array to string, separator optional
- Use together to merge & format data
*/
