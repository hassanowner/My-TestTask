/*
========================================================
JavaScript String Methods — Summary (One File)
========================================================

MAIN TOPICS:
1) Accessing Characters
2) String Length & Trimming
3) Case Conversion
4) Method Chaining
5) Searching Within Strings
6) Extracting Parts of Strings
7) Repeating & Splitting Strings
8) String Checking Methods (ES6)
========================================================
*/


/*
========================================================
1) ACCESSING CHARACTERS (Summary)
========================================================

- Strings are zero-indexed (first character starts at index 0).
- Characters can be accessed in two main ways:
  - Using bracket notation []
  - Using charAt()
- charAt() is safer and always returns a character.
- Access includes spaces and all visible or invisible characters.
========================================================
*/


/*
========================================================
2) STRING LENGTH & TRIMMING (Summary)
========================================================

--------------------------------------------------------
length
--------------------------------------------------------
- Returns the total number of characters in a string.
- Counts letters, spaces, and special characters.

--------------------------------------------------------
trim()
--------------------------------------------------------
- Removes whitespace from the beginning and end of a string.
- Does not affect spaces inside the string.
- Commonly used for user input validation.
========================================================
*/


/*
========================================================
3) CASE CONVERSION (Summary)
========================================================

--------------------------------------------------------
toUpperCase()
--------------------------------------------------------
- Converts all characters to uppercase.
- Does not modify the original string.

--------------------------------------------------------
toLowerCase()
--------------------------------------------------------
- Converts all characters to lowercase.
- Useful for case-insensitive comparisons.
========================================================
*/


/*
========================================================
4) METHOD CHAINING (Summary)
========================================================

- Method chaining allows multiple string methods
  to be applied in sequence.
- Each method returns a new string.
- Improves readability and reduces temporary variables.
- Common in formatting and validation logic.
========================================================
*/


/*
========================================================
5) SEARCHING WITHIN STRINGS (Summary)
========================================================

--------------------------------------------------------
indexOf()
--------------------------------------------------------
- Finds the first occurrence of a value.
- Can start searching from a specific index.
- Returns -1 if the value is not found.

--------------------------------------------------------
lastIndexOf()
--------------------------------------------------------
- Finds the last occurrence of a value.
- Searches from the end of the string.
- Returns -1 if not found.
========================================================
*/


/*
========================================================
6) EXTRACTING PARTS OF STRINGS (Summary)
========================================================

--------------------------------------------------------
slice()
--------------------------------------------------------
- Extracts part of a string.
- End index is not included.
- Supports negative indexes (from the end).

--------------------------------------------------------
substring()
--------------------------------------------------------
- Similar to slice but does not support negative indexes.
- Automatically swaps start and end if start > end.
- Negative values are treated as 0.

--------------------------------------------------------
substr()
--------------------------------------------------------
- Extracts characters starting from a position.
- Second parameter defines number of characters.
- Supports negative start values.
- Considered legacy but still widely supported.
========================================================
*/


/*
========================================================
7) REPEATING & SPLITTING STRINGS (Summary)
========================================================

--------------------------------------------------------
repeat() [ES6]
--------------------------------------------------------
- Repeats a string a specified number of times.
- Useful for formatting and placeholders.

--------------------------------------------------------
split()
--------------------------------------------------------
- Splits a string into an array.
- Uses a separator to determine where to split.
- Optional limit controls the number of results.
========================================================
*/


/*
========================================================
8) STRING CHECKING METHODS (ES6) (Summary)
========================================================

--------------------------------------------------------
includes()
--------------------------------------------------------
- Checks if a string contains a specific value.
- Returns true or false.
- Can start searching from a given index.

--------------------------------------------------------
startsWith()
--------------------------------------------------------
- Checks if a string starts with a specific value.
- Optional start index can be provided.

--------------------------------------------------------
endsWith()
--------------------------------------------------------
- Checks if a string ends with a specific value.
- Optional length parameter controls the check range.
========================================================
*/
