/*
========================================================
ARRAY METHODS — SORT & REVERSE
========================================================

Topics Covered:
1) sort() — basic usage
2) reverse() — reversing array order
3) Sorting numbers vs strings
4) Examples with mixed data
5) Notes & best practices
========================================================

--------------------------------------------------------
1) ORIGINAL ARRAY
-------------------------------------------------------- */

let mixedData = [10, "50", 200, "Ali", 3, "100", -5, "Ziad"];

console.log(mixedData);
/*
Result:
[10, "50", 200, "Ali", 3, "100", -5, "Ziad"]


- Array contains **numbers and strings**.
- Indexing starts from 0.
- Original order is preserved until sorting.


  
--------------------------------------------------------
2) SORT METHOD
--------------------------------------------------------

- Syntax: array.sort([compareFunction])
- Purpose: Sorts the elements of an array **in place**.
- By default, **sort converts elements to strings** and sorts **alphabetically**.
- To sort numerically, provide a **compare function**.

Example — Default sort: */

console.log(mixedData.sort());
/*
Result:
[-5, 10, 200, 3, "100", "50", "Ali", "Ziad"]
Explanation:
- Numbers and strings are converted to strings
- Sorted alphabetically (ASCII order)
*/


/*
--------------------------------------------------------
3) NUMERIC SORT (OPTIONAL COMPARE FUNCTION)
--------------------------------------------------------

- For numeric ascending order: */
mixedData.sort((a, b) => a - b);

// For numeric descending order:
mixedData.sort((a, b) => b - a);

//- Using a compare function ensures proper **numeric sorting**.


  
/*
--------------------------------------------------------
4) REVERSE METHOD
--------------------------------------------------------

- Syntax: array.reverse()
- Purpose: Reverses the **order of elements in the array in place**.
- Can be used after sort() or on the original array.

Example — Reverse after sort: */

console.log(mixedData.sort().reverse());
/*
Result:
["Ziad", "Ali", "50", "100", 3, 200, 10, -5]
Explanation:
- Array sorted alphabetically first
- Then reversed to produce descending alphabetical order
*/



/*
--------------------------------------------------------
5) NOTES & BEST PRACTICES
--------------------------------------------------------

1) **sort()**
   - Modifies the **original array**.
   - Default sorting is **lexicographical** (alphabetical), not numeric.
   - Use compare function for proper numeric sorting:
     - Ascending: `(a, b) => a - b`
     - Descending: `(a, b) => b - a`

2) **reverse()**
   - Modifies the array in place.
   - Useful for reversing order after sorting.
   - Can also reverse arrays that were not sorted.

3) **Mixed data caution**
   - Sorting arrays with **numbers and strings together** may give **unexpected order** if no compare function is used.
   - Always define a compare function when **numeric order matters**.

4) **Chaining**
   - sort() and reverse() can be chained:
     ```js
     mixedData.sort((a,b) => a-b).reverse();
     ```

5) **Index awareness**
   - Array indices are preserved relative to new order.
   - First element after sort() is at index 0, last at index length-1.



--------------------------------------------------------
6) SUMMARY
--------------------------------------------------------

- sort() → sorts array **in place**, alphabetically by default.
- reverse() → reverses array **in place**.
- For numeric sorting, always use a compare function.
- Be careful with arrays containing **mixed types** (strings + numbers).
- Both methods modify the **original array**, not a copy.
========================================================
*/
